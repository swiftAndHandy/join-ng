import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./landing-page/landing-page.component').then(
        (m) => m.LandingPageComponent
      ),
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
          import('./home/task/generate-task/generate-task.component').then(
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
