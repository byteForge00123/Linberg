import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import {
  ActivityItem,
  Appointment,
  Company,
  Customer,
  DashboardSummary,
  Lead,
  NoteItem,
  Opportunity,
  SearchResult,
  TaskItem,
} from '../models/crm';

@Injectable({ providedIn: 'root' })
export class CrmDataService {
  private customers: Customer[] = [
    {
      id: 1,
      firstName: 'Nina',
      lastName: 'Bennett',
      email: 'nina@northstarlabs.io',
      phone: '+1 (415) 230-4789',
      company: 'Northstar Labs',
      position: 'Operations Director',
      address: '245 Market St, San Francisco, CA',
      status: 'Active',
      source: 'Website',
      assignedTo: 'Alicia Martin',
      createdDate: '2024-09-12',
    },
    {
      id: 2,
      firstName: 'Omar',
      lastName: 'Rahman',
      email: 'omar@harborhq.co',
      phone: '+1 (612) 515-2245',
      company: 'Harbor HQ',
      position: 'VP of Growth',
      address: '182 Lakeview Ave, Minneapolis, MN',
      status: 'Prospect',
      source: 'Referral',
      assignedTo: 'Derek Cole',
      createdDate: '2025-02-06',
    },
    {
      id: 3,
      firstName: 'Leah',
      lastName: 'Simmons',
      email: 'leah@altopeak.ai',
      phone: '+1 (302) 554-9910',
      company: 'AltoPeak AI',
      position: 'Chief Product Officer',
      address: '88 Pine Rd, Wilmington, DE',
      status: 'Active',
      source: 'Outbound',
      assignedTo: 'Maya Jordan',
      createdDate: '2024-11-08',
    },
  ];

  private companies: Company[] = [
    {
      id: 1,
      name: 'Northstar Labs',
      industry: 'Technology',
      website: 'https://northstarlabs.io',
      email: 'hello@northstarlabs.io',
      phone: '+1 (415) 230-4700',
      address: '245 Market St, San Francisco, CA',
      status: 'Active',
      assignedTo: 'Alicia Martin',
    },
    {
      id: 2,
      name: 'Harbor HQ',
      industry: 'Logistics',
      website: 'https://harborhq.co',
      email: 'team@harborhq.co',
      phone: '+1 (612) 515-2200',
      address: '182 Lakeview Ave, Minneapolis, MN',
      status: 'Active',
      assignedTo: 'Derek Cole',
    },
    {
      id: 3,
      name: 'AltoPeak AI',
      industry: 'SaaS',
      website: 'https://altopeak.ai',
      email: 'contact@altopeak.ai',
      phone: '+1 (302) 554-9900',
      address: '88 Pine Rd, Wilmington, DE',
      status: 'Inactive',
      assignedTo: 'Maya Jordan',
    },
  ];

  private leads: Lead[] = [
    {
      id: 1,
      name: 'Elena Ford',
      company: 'Summit Analytics',
      email: 'elena@summitanalytics.com',
      phone: '+1 (206) 849-1138',
      source: 'LinkedIn',
      status: 'Qualified',
      assignedTo: 'Alicia Martin',
      createdDate: '2025-07-05',
    },
    {
      id: 2,
      name: 'Jasper Lee',
      company: 'BlueCurrent',
      email: 'jasper@bluecurrent.io',
      phone: '+1 (617) 774-5561',
      source: 'Website',
      status: 'Contacted',
      assignedTo: 'Derek Cole',
      createdDate: '2025-07-18',
    },
    {
      id: 3,
      name: 'Mila Ortiz',
      company: 'Beacon Works',
      email: 'mila@beaconworks.co',
      phone: '+1 (512) 668-9001',
      source: 'Referral',
      status: 'New',
      assignedTo: 'Maya Jordan',
      createdDate: '2025-08-02',
    },
  ];

  private opportunities: Opportunity[] = [
    {
      id: 1,
      title: 'Northstar Expansion',
      customer: 'Nina Bennett',
      company: 'Northstar Labs',
      value: 28000,
      stage: 'Negotiation',
      probability: 68,
      expectedCloseDate: '2025-09-22',
      assignedTo: 'Alicia Martin',
      notes: 'Enterprise rollout under review across 5 regions.',
    },
    {
      id: 2,
      title: 'Harbor Automation Pilot',
      customer: 'Omar Rahman',
      company: 'Harbor HQ',
      value: 52000,
      stage: 'Proposal',
      probability: 56,
      expectedCloseDate: '2025-10-03',
      assignedTo: 'Derek Cole',
      notes: 'Stakeholders request a phased implementation solution.',
    },
    {
      id: 3,
      title: 'AI Ops Renewal',
      customer: 'Leah Simmons',
      company: 'AltoPeak AI',
      value: 42000,
      stage: 'Won',
      probability: 100,
      expectedCloseDate: '2025-08-12',
      assignedTo: 'Maya Jordan',
      notes: 'Contract signed with training package included.',
    },
  ];

  private tasks: TaskItem[] = [
    {
      id: 1,
      title: 'Client onboarding checklist',
      description: 'Complete final onboarding steps for Northstar Labs.',
      dueDate: '2025-09-15',
      priority: 'High',
      status: 'In Progress',
      assignedTo: 'Alicia Martin',
      relatedCustomer: 'Nina Bennett',
      relatedOpportunity: 'Northstar Expansion',
    },
    {
      id: 2,
      title: 'Quarterly proposal review',
      description: 'Finalize the client proposal pack and pricing.',
      dueDate: '2025-09-16',
      priority: 'Urgent',
      status: 'Pending',
      assignedTo: 'Derek Cole',
      relatedCustomer: 'Omar Rahman',
      relatedOpportunity: 'Harbor Automation Pilot',
    },
    {
      id: 3,
      title: 'Renewal follow-up',
      description: 'Share the summary and training scheduling details.',
      dueDate: '2025-09-20',
      priority: 'Medium',
      status: 'Completed',
      assignedTo: 'Maya Jordan',
      relatedCustomer: 'Leah Simmons',
      relatedOpportunity: 'AI Ops Renewal',
    },
  ];

  private activities: ActivityItem[] = [
    {
      id: 1,
      type: 'Meeting',
      subject: 'Quarterly planning',
      description: 'Reviewed pipeline opportunities and delivery constraints.',
      date: '2025-09-08',
      customer: 'Northstar Labs',
      teamMember: 'Alicia Martin',
    },
    {
      id: 2,
      type: 'Call',
      subject: 'Follow-up call',
      description: 'Discussed the implementation roadmap with Harbor HQ.',
      date: '2025-09-09',
      customer: 'Harbor HQ',
      teamMember: 'Derek Cole',
    },
    {
      id: 3,
      type: 'Email',
      subject: 'Renewal summary',
      description: 'Sent the final renewal summary and onboarding next steps.',
      date: '2025-09-10',
      customer: 'AltoPeak AI',
      teamMember: 'Maya Jordan',
    },
  ];

  private appointments: Appointment[] = [
    {
      id: 1,
      title: 'Customer strategy session',
      customer: 'Northstar Labs',
      date: '2025-09-14',
      startTime: '09:30',
      endTime: '10:30',
      location: 'Zoom',
      assignedTo: 'Alicia Martin',
      notes: 'Focus on roadmap alignment and rollout milestones.',
      status: 'Scheduled',
    },
    {
      id: 2,
      title: 'Ops review',
      customer: 'Harbor HQ',
      date: '2025-09-16',
      startTime: '14:00',
      endTime: '15:00',
      location: 'Minneapolis HQ',
      assignedTo: 'Derek Cole',
      notes: 'Confirm change-control checklist.',
      status: 'Scheduled',
    },
  ];

  private notes: NoteItem[] = [
    {
      id: 1,
      title: 'Northstar implementation recommendations',
      content: 'Prioritize the analytics layer and automate reporting distribution for the first release.',
      author: 'Alicia Martin',
      createdDate: '2025-09-08',
      updatedDate: '2025-09-09',
      relatedType: 'Customer',
      relatedName: 'Nina Bennett',
    },
    {
      id: 2,
      title: 'Harbor pilot scope',
      content: 'Include the automation checkpoints and timeline milestones in the final proposal.',
      author: 'Derek Cole',
      createdDate: '2025-09-07',
      updatedDate: '2025-09-07',
      relatedType: 'Opportunity',
      relatedName: 'Harbor Automation Pilot',
    },
  ];

  getDashboardSummary(): Observable<DashboardSummary> {
    const payload: DashboardSummary = {
      stats: [
        { title: 'Total Customers', value: '1,284', change: '+12.5%', tone: 'positive', icon: 'Users' },
        { title: 'Active Leads', value: '238', change: '+8.2%', tone: 'neutral', icon: 'FileText' },
        { title: 'Open Opportunities', value: '67', change: '+5.8%', tone: 'positive', icon: 'Briefcase' },
        { title: 'Pending Tasks', value: '34', change: '-3.1%', tone: 'warning', icon: 'CheckSquare' },
      ],
      revenue: [
        { label: 'Jan', value: 18000 },
        { label: 'Feb', value: 22000 },
        { label: 'Mar', value: 26100 },
        { label: 'Apr', value: 24500 },
        { label: 'May', value: 30000 },
        { label: 'Jun', value: 39000 },
      ],
      pipeline: [
        { stage: 'New', value: 18, percentage: 24 },
        { stage: 'Qualified', value: 14, percentage: 32 },
        { stage: 'Proposal', value: 12, percentage: 46 },
        { stage: 'Negotiation', value: 10, percentage: 58 },
        { stage: 'Won', value: 8, percentage: 75 },
        { stage: 'Lost', value: 4, percentage: 20 },
      ],
      activities: this.activities,
      leads: this.leads,
      tasks: this.tasks,
    };

    return of(payload).pipe(delay(250));
  }

  getCustomers(): Observable<Customer[]> {
    return of(this.customers).pipe(delay(200));
  }

  getCompanies(): Observable<Company[]> {
    return of(this.companies).pipe(delay(200));
  }

  getLeads(): Observable<Lead[]> {
    return of(this.leads).pipe(delay(200));
  }

  getOpportunities(): Observable<Opportunity[]> {
    return of(this.opportunities).pipe(delay(200));
  }

  getTasks(): Observable<TaskItem[]> {
    return of(this.tasks).pipe(delay(200));
  }

  getActivities(): Observable<ActivityItem[]> {
    return of(this.activities).pipe(delay(200));
  }

  getAppointments(): Observable<Appointment[]> {
    return of(this.appointments).pipe(delay(200));
  }

  getNotes(): Observable<NoteItem[]> {
    return of(this.notes).pipe(delay(200));
  }

  searchAll(term: string): Observable<SearchResult[]> {
    const normalized = term.trim().toLowerCase();
    if (!normalized) {
      return of([]);
    }

    const results: SearchResult[] = [
      ...this.customers.filter((item) => `${item.firstName} ${item.lastName} ${item.company}`.toLowerCase().includes(normalized)).map((item) => ({
        type: 'Customer',
        label: `${item.firstName} ${item.lastName}`,
        sublabel: item.company,
      })),
      ...this.companies.filter((item) => `${item.name} ${item.industry}`.toLowerCase().includes(normalized)).map((item) => ({
        type: 'Company',
        label: item.name,
        sublabel: item.industry,
      })),
      ...this.leads.filter((item) => `${item.name} ${item.company}`.toLowerCase().includes(normalized)).map((item) => ({
        type: 'Lead',
        label: item.name,
        sublabel: item.company,
      })),
      ...this.opportunities.filter((item) => `${item.title} ${item.company}`.toLowerCase().includes(normalized)).map((item) => ({
        type: 'Opportunity',
        label: item.title,
        sublabel: item.company,
      })),
      ...this.tasks.filter((item) => `${item.title} ${item.relatedCustomer}`.toLowerCase().includes(normalized)).map((item) => ({
        type: 'Task',
        label: item.title,
        sublabel: item.relatedCustomer,
      })),
    ];

    return of(results.slice(0, 6)).pipe(delay(150));
  }
}
