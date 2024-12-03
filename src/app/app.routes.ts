import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
    children: [
      {
        path: 'summary',
        loadComponent: () =>
          import('./home/summary/summary.component').then(
            (m) => m.SummaryComponent
          ),
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./home/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'new-task',
        loadComponent: () =>
          import('./home/generate-task/generate-task.component').then(
            (m) => m.GenerateTaskComponent
          ),
      },
      {
        path: 'contacts',
        loadComponent: () =>
          import('./home/contacts/contacts.component').then(
            (m) => m.ContactsComponent
          ),
      },
    ],
  },
];
