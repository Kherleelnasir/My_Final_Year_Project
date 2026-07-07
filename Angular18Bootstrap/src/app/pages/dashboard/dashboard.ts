import { Component } from '@angular/core';
import { DashboardLayout } from '../../layouts/dashboard-layout/dashboard-layout';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardLayout],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
