import { Component } from '@angular/core';
import { CitizenDashboardLayout } from '../../../layouts/dashboard-layout/citizen-dashboard-layout';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CitizenDashboardLayout],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}