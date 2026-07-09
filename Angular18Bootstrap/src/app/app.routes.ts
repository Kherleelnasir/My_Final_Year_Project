import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { IncidentReports } from './pages/incident-reports/incident-reports';

export const routes: Routes = [
  {
    path: '',
    component: Dashboard
  },
  {
    path: 'incident-reports',
    component: IncidentReports
  }
];