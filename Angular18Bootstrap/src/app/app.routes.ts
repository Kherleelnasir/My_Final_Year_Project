import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { IncidentReports } from './pages/incident-reports/incident-reports';
import { IncidentDetails } from './pages/incident-details/incident-details';
import { NewReport } from './pages/new-report/new-report';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: Dashboard
  },

  {
    path: 'web',
    component: Dashboard
  },
  
  {
    path: 'home',
    component: Home
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'signup',
    component: Signup
  },
  {
    path: 'incident-reports',
    component: IncidentReports
  },
  {
    path: 'incident-details/:caseId',
    component: IncidentDetails
  },
  {
    path: 'new-report',
    component: NewReport
  }
];