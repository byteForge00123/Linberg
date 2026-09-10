<?php

namespace Database\Seeders;

use App\Models\Customer;
use App\Models\Lead;
use App\Models\Opportunity;
use App\Models\TaskItem;
use Illuminate\Database\Seeder;

class BusinessSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Customer::insert([
            [
                'first_name' => 'Nina',
                'last_name' => 'Bennett',
                'email' => 'nina@northstarlabs.io',
                'phone' => '+1 (415) 230-4789',
                'company' => 'Northstar Labs',
                'position' => 'Operations Director',
                'address' => '245 Market St, San Francisco, CA',
                'status' => 'Active',
                'source' => 'Website',
                'assigned_to' => 'Alicia Martin',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'first_name' => 'Omar',
                'last_name' => 'Rahman',
                'email' => 'omar@harborhq.co',
                'phone' => '+1 (612) 515-2245',
                'company' => 'Harbor HQ',
                'position' => 'VP of Growth',
                'address' => '182 Lakeview Ave, Minneapolis, MN',
                'status' => 'Prospect',
                'source' => 'Referral',
                'assigned_to' => 'Derek Cole',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'first_name' => 'Leah',
                'last_name' => 'Simmons',
                'email' => 'leah@altopeak.ai',
                'phone' => '+1 (302) 554-9910',
                'company' => 'AltoPeak AI',
                'position' => 'Chief Product Officer',
                'address' => '88 Pine Rd, Wilmington, DE',
                'status' => 'Active',
                'source' => 'Outbound',
                'assigned_to' => 'Maya Jordan',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);

        Lead::insert([
            [
                'name' => 'Elena Ford',
                'company' => 'Summit Analytics',
                'email' => 'elena@summitanalytics.com',
                'phone' => '+1 (206) 849-1138',
                'source' => 'LinkedIn',
                'status' => 'Qualified',
                'assigned_to' => 'Alicia Martin',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Jasper Lee',
                'company' => 'BlueCurrent',
                'email' => 'jasper@bluecurrent.io',
                'phone' => '+1 (617) 774-5561',
                'source' => 'Website',
                'status' => 'Contacted',
                'assigned_to' => 'Derek Cole',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Mila Ortiz',
                'company' => 'Beacon Works',
                'email' => 'mila@beaconworks.co',
                'phone' => '+1 (512) 668-9001',
                'source' => 'Referral',
                'status' => 'New',
                'assigned_to' => 'Maya Jordan',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);

        Opportunity::insert([
            [
                'title' => 'Northstar Expansion',
                'customer_name' => 'Nina Bennett',
                'company' => 'Northstar Labs',
                'value' => 28000,
                'stage' => 'Negotiation',
                'probability' => 68,
                'expected_close_date' => '2025-09-22',
                'assigned_to' => 'Alicia Martin',
                'notes' => 'Enterprise rollout under review across 5 regions.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Harbor Automation Pilot',
                'customer_name' => 'Omar Rahman',
                'company' => 'Harbor HQ',
                'value' => 52000,
                'stage' => 'Proposal',
                'probability' => 56,
                'expected_close_date' => '2025-10-03',
                'assigned_to' => 'Derek Cole',
                'notes' => 'Stakeholders request a phased implementation solution.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'AI Ops Renewal',
                'customer_name' => 'Leah Simmons',
                'company' => 'AltoPeak AI',
                'value' => 42000,
                'stage' => 'Won',
                'probability' => 100,
                'expected_close_date' => '2025-08-12',
                'assigned_to' => 'Maya Jordan',
                'notes' => 'Contract signed with training package included.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);

        TaskItem::insert([
            [
                'title' => 'Client onboarding checklist',
                'description' => 'Complete final onboarding steps for Northstar Labs.',
                'due_date' => '2025-09-15',
                'priority' => 'High',
                'status' => 'In Progress',
                'assigned_to' => 'Alicia Martin',
                'related_customer' => 'Nina Bennett',
                'related_opportunity' => 'Northstar Expansion',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Quarterly proposal review',
                'description' => 'Finalize the client proposal pack and pricing.',
                'due_date' => '2025-09-16',
                'priority' => 'Urgent',
                'status' => 'Pending',
                'assigned_to' => 'Derek Cole',
                'related_customer' => 'Omar Rahman',
                'related_opportunity' => 'Harbor Automation Pilot',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Renewal follow-up',
                'description' => 'Share the summary and training scheduling details.',
                'due_date' => '2025-09-20',
                'priority' => 'Medium',
                'status' => 'Completed',
                'assigned_to' => 'Maya Jordan',
                'related_customer' => 'Leah Simmons',
                'related_opportunity' => 'AI Ops Renewal',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
