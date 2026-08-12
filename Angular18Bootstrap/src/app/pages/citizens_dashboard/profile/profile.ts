import { Component } from '@angular/core';
import { CitizenDashboardLayout } from '../../../layouts/dashboard-layout/citizen-dashboard-layout';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CitizenDashboardLayout],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {}
