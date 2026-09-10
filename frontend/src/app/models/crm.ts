export type StatusTone = 'positive' | 'neutral' | 'warning' | 'danger';

export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  address: string;
  status: 'Active' | 'Inactive' | 'Prospect';
  source: string;
  assignedTo: string;
  createdDate: string;
}

export interface Company {
  id: number;
  name: string;
  industry: string;
  website: string;
  email: string;
  phone: string;
  address: string;
  status: 'Active' | 'Inactive';
  assignedTo: string;
}

export interface Lead {
  id: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  source: string;
  status: 'New' | 'Contacted' | 'Qualified' | 'Unqualified' | 'Converted';
  assignedTo: string;
  createdDate: string;
}

export interface Opportunity {
  id: number;
  title: string;
  customer: string;
  company: string;
  value: number;
  stage: 'New' | 'Qualified' | 'Proposal' | 'Negotiation' | 'Won' | 'Lost';
  probability: number;
  expectedCloseDate: string;
  assignedTo: string;
  notes: string;
}

export interface TaskItem {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  priority: 'Low' | 'Medium' | 'High' | 'Urgent';
  status: 'Pending' | 'In Progress' | 'Completed' | 'Cancelled';
  assignedTo: string;
  relatedCustomer: string;
  relatedOpportunity: string;
}

export interface ActivityItem {
  id: number;
  type: 'Call' | 'Email' | 'Meeting' | 'Note' | 'Follow-up';
  subject: string;
  description: string;
  date: string;
  customer: string;
  teamMember: string;
}

export interface Appointment {
  id: number;
  title: string;
  customer: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  assignedTo: string;
  notes: string;
  status: 'Scheduled' | 'Completed' | 'Cancelled';
}

export interface NoteItem {
  id: number;
  title: string;
  content: string;
  author: string;
  createdDate: string;
  updatedDate: string;
  relatedType: 'Customer' | 'Company' | 'Opportunity';
  relatedName: string;
}

export interface DashboardStat {
  title: string;
  value: string;
  change: string;
  tone: StatusTone;
  icon: string;
}

export interface DashboardSummary {
  stats: DashboardStat[];
  revenue: { label: string; value: number }[];
  pipeline: { stage: string; value: number; percentage: number }[];
  activities: ActivityItem[];
  leads: Lead[];
  tasks: TaskItem[];
}

export interface SearchResult {
  type: string;
  label: string;
  sublabel: string;
}
