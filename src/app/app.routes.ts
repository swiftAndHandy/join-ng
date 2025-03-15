import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./landing-page/landing-page.component').then(
        (m) => m.LandingPageComponent
      ),
    children: [
      {
        path: 'sign-up',
        loadComponent: () =>
          import('./landing-page/sign-up/sign-up.component').then(
            (m) => m.SignUpComponent
          ),
      },
      {
        path: 'privacy',
        loadComponent: () =>
          import('./shared/legal/privacy-policy/privacy-policy.component').then(
            (m) => m.PrivacyPolicyComponent
          ),
      },
      {
        path: 'legal-notice',
        loadComponent: () =>
          import('./shared/legal/legal-notice/legal-notice.component').then(
            (m) => m.LegalNoticeComponent
          ),
      },
    ],
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
          import('./home/task/create-task/create-task.component').then(
            (m) => m.CreateTaskComponent
          ),
      },
      {
        path: 'contacts',
        loadComponent: () =>
          import('./home/contacts/contacts.component').then(
            (m) => m.ContactsComponent
          ),
      },
      {
        path: 'privacy',
        loadComponent: () =>
          import('./shared/legal/privacy-policy/privacy-policy.component').then(
            (m) => m.PrivacyPolicyComponent
          ),
      },
      {
        path: 'legal-notice',
        loadComponent: () =>
          import('./shared/legal/legal-notice/legal-notice.component').then(
            (m) => m.LegalNoticeComponent
          ),
      },
    ],
  },
];
