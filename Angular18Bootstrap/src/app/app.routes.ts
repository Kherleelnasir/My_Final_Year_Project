import { Routes } from '@angular/router';

import { Dashboard } from './pages/dashboard/dashboard';
import { IncidentReports } from './pages/incident-reports/incident-reports';
import { IncidentDetails } from './pages/incident-details/incident-details';
import { NewReport } from './pages/new-report/new-report';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';

import { Dashboard as CitizensDashboard }
  from './pages/citizens_dashboard/dashboard/dashboard';
import { MyReport } from './pages/citizens_dashboard/my-report/my-report';
import { Profile } from './pages/citizens_dashboard/profile/profile';
import { CaseDetails as CitizenCaseDetails } from './pages/citizens_dashboard/case-details/case-details';


export const routes: Routes = [

  // Default page
  {
    path: '',
    redirectTo: 'citizens-dashboard',
    pathMatch: 'full'
  },


  // Citizen Dashboard
  {
    path: 'citizens-dashboard',
    component: CitizensDashboard
  },


  // Officer/Admin Dashboard
  {
    path: 'dashboard',
    component: Dashboard
  },


  {
    path: 'web',
    component: Dashboard
  },


  // Home
  {
    path: 'home',
    component: Home
  },


  // Login
  {
    path: 'login',
    component: Login
  },


  // Signup
  {
    path: 'signup',
    component: Signup
  },


  // Incident Reports
  {
    path: 'incident-reports',
    component: IncidentReports
  },


  // Incident Details
  {
    path: 'incident-details/:caseId',
    component: IncidentDetails
  },

  // Citizen-specific case details route
  {
    path: 'citizen-case/:caseId',
    component: CitizenCaseDetails
  },


  // New Report
  {
    path: 'new-report',
    component: NewReport
  },

  // Citizen My Reports
  {
    path: 'my-report',
    component: MyReport
  },

  // Citizen Profile
  {
    path: 'profile',
    component: Profile
  }

];