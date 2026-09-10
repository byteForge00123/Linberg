import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AppShellComponent } from './layout/app-shell.component';

export const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'customers',
        loadComponent: () => import('./features/feature-page/feature-page.component').then((m) => m.FeaturePageComponent),
        data: { pageTitle: 'Customers', pageDescription: 'Track customer relationships and account health.' },
      },
      {
        path: 'companies',
        loadComponent: () => import('./features/feature-page/feature-page.component').then((m) => m.FeaturePageComponent),
        data: { pageTitle: 'Companies', pageDescription: 'Manage your portfolio of active companies and partners.' },
      },
      {
        path: 'leads',
        loadComponent: () => import('./features/feature-page/feature-page.component').then((m) => m.FeaturePageComponent),
        data: { pageTitle: 'Leads', pageDescription: 'Monitor the pipeline from first contact through qualification.' },
      },
      {
        path: 'opportunities',
        loadComponent: () => import('./features/feature-page/feature-page.component').then((m) => m.FeaturePageComponent),
        data: { pageTitle: 'Opportunities', pageDescription: 'Review win probability, expected close dates, and deal value.' },
      },
      {
        path: 'tasks',
        loadComponent: () => import('./features/feature-page/feature-page.component').then((m) => m.FeaturePageComponent),
        data: { pageTitle: 'Tasks', pageDescription: 'Coordinate execution across teams and account priorities.' },
      },
      {
        path: 'activities',
        loadComponent: () => import('./features/feature-page/feature-page.component').then((m) => m.FeaturePageComponent),
        data: { pageTitle: 'Activities', pageDescription: 'Review recent meetings, calls, and customer interactions.' },
      },
      {
        path: 'appointments',
        loadComponent: () => import('./features/feature-page/feature-page.component').then((m) => m.FeaturePageComponent),
        data: { pageTitle: 'Appointments', pageDescription: 'Manage upcoming meetings and internal scheduling.' },
      },
      {
        path: 'notes',
        loadComponent: () => import('./features/feature-page/feature-page.component').then((m) => m.FeaturePageComponent),
        data: { pageTitle: 'Notes', pageDescription: 'Capture customer context and internal discussion notes.' },
      },
      {
        path: 'reports',
        loadComponent: () => import('./features/feature-page/feature-page.component').then((m) => m.FeaturePageComponent),
        data: { pageTitle: 'Reports', pageDescription: 'Track pipeline performance, revenue, and operational KPIs.' },
      },
      {
        path: 'settings',
        loadComponent: () => import('./features/feature-page/feature-page.component').then((m) => m.FeaturePageComponent),
        data: { pageTitle: 'Settings', pageDescription: 'Manage workspace preferences, access, and automation rules.' },
      },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];
