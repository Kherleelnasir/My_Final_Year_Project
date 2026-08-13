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





import { Users } from './pages/admin/user/user';
import { Officers } from './pages/admin/officer/officer';
import { CrimeTypes } from './pages/admin/crime-type/crime-type';
import { Cases } from './pages/admin/cases/cases';
import { Reports } from './pages/admin/reports/reports';
import { Logs } from './pages/admin/logs/logs';


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
    path: 'admin-dashboard',
    component: Dashboard
  },


  // Admin Users
   {
     path: 'admin/user',
     component: Users
   },


  // Admin Officer
  {
    path: 'admin/officer',
    component: Officers
  },


  // Admin Crime Types
  {
    path: 'admin/crime-type',
    component: CrimeTypes
  },

  // Admin Cases
  {
    path: 'admin/cases',
    component: Cases
  },


    // Admin Reports

   {
    path: 'admin/reports',
    component: Reports
  },


  {
    path: 'admin/logs',
    component: Logs
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

