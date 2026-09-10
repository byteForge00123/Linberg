<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Lead;
use App\Models\Opportunity;
use App\Models\TaskItem;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BusinessApiController extends Controller
{
    public function dashboard(): JsonResponse
    {
        return response()->json([
            'stats' => [
                ['title' => 'Total Customers', 'value' => '1,284', 'change' => '+12.5%', 'tone' => 'positive', 'icon' => 'Users'],
                ['title' => 'Active Leads', 'value' => '238', 'change' => '+8.2%', 'tone' => 'neutral', 'icon' => 'FileText'],
                ['title' => 'Open Opportunities', 'value' => '67', 'change' => '+5.8%', 'tone' => 'positive', 'icon' => 'Briefcase'],
                ['title' => 'Pending Tasks', 'value' => '34', 'change' => '-3.1%', 'tone' => 'warning', 'icon' => 'CheckSquare'],
            ],
            'revenue' => [
                ['label' => 'Jan', 'value' => 18000],
                ['label' => 'Feb', 'value' => 22000],
                ['label' => 'Mar', 'value' => 26100],
                ['label' => 'Apr', 'value' => 24500],
                ['label' => 'May', 'value' => 30000],
                ['label' => 'Jun', 'value' => 39000],
            ],
            'pipeline' => [
                ['stage' => 'New', 'value' => 18, 'percentage' => 24],
                ['stage' => 'Qualified', 'value' => 14, 'percentage' => 32],
                ['stage' => 'Proposal', 'value' => 12, 'percentage' => 46],
                ['stage' => 'Negotiation', 'value' => 10, 'percentage' => 58],
                ['stage' => 'Won', 'value' => 8, 'percentage' => 75],
                ['stage' => 'Lost', 'value' => 4, 'percentage' => 20],
            ],
            'activities' => [
                [
                    'type' => 'Meeting',
                    'subject' => 'Quarterly planning',
                    'description' => 'Reviewed pipeline opportunities and delivery constraints.',
                    'date' => '2025-09-08',
                    'customer' => 'Northstar Labs',
                    'teamMember' => 'Alicia Martin',
                ],
                [
                    'type' => 'Call',
                    'subject' => 'Follow-up call',
                    'description' => 'Discussed the implementation roadmap with Harbor HQ.',
                    'date' => '2025-09-09',
                    'customer' => 'Harbor HQ',
                    'teamMember' => 'Derek Cole',
                ],
                [
                    'type' => 'Email',
                    'subject' => 'Renewal summary',
                    'description' => 'Sent the final renewal summary and onboarding next steps.',
                    'date' => '2025-09-10',
                    'customer' => 'AltoPeak AI',
                    'teamMember' => 'Maya Jordan',
                ],
            ],
            'leads' => Lead::latest('created_at')->limit(3)->get(),
            'tasks' => TaskItem::latest('due_date')->limit(3)->get(),
        ]);
    }

    public function customers(): JsonResponse
    {
        return response()->json(Customer::orderBy('created_at', 'desc')->get());
    }

    public function leads(): JsonResponse
    {
        return response()->json(Lead::orderBy('created_at', 'desc')->get());
    }

    public function opportunities(): JsonResponse
    {
        return response()->json(Opportunity::orderBy('expected_close_date', 'asc')->get());
    }

    public function tasks(): JsonResponse
    {
        return response()->json(TaskItem::orderBy('due_date', 'asc')->get());
    }

    public function search(Request $request): JsonResponse
    {
        $term = trim((string) $request->query('q', ''));

        if ($term === '') {
            return response()->json([]);
        }

        $results = collect();

        foreach ([
            ['type' => 'Customer', 'items' => Customer::where('first_name', 'like', "%{$term}%")
                ->orWhere('last_name', 'like', "%{$term}%")
                ->orWhere('company', 'like', "%{$term}%")
                ->get(), 'label' => fn ($item) => sprintf('%s %s', $item->first_name, $item->last_name), 'sub' => fn ($item) => $item->company],
            ['type' => 'Lead', 'items' => Lead::where('name', 'like', "%{$term}%")->orWhere('company', 'like', "%{$term}%")->get(), 'label' => fn ($item) => $item->name, 'sub' => fn ($item) => $item->company],
            ['type' => 'Opportunity', 'items' => Opportunity::where('title', 'like', "%{$term}%")->orWhere('company', 'like', "%{$term}%")->get(), 'label' => fn ($item) => $item->title, 'sub' => fn ($item) => $item->company],
            ['type' => 'Task', 'items' => TaskItem::where('title', 'like', "%{$term}%")->orWhere('related_customer', 'like', "%{$term}%")->get(), 'label' => fn ($item) => $item->title, 'sub' => fn ($item) => $item->related_customer],
        ] as $group) {
            foreach ($group['items'] as $item) {
                $results->push([
                    'type' => $group['type'],
                    'label' => $group['label']($item),
                    'sublabel' => $group['sub']($item),
                ]);
            }
        }

        return response()->json($results->take(6)->values());
    }
}
