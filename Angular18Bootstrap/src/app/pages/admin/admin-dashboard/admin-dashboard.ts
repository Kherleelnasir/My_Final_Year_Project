import { Component } from '@angular/core';
import { AdminLayout } from '../../../layouts/admin-layout/admin-layout';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [AdminLayout],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css'
})
export class AdminDashboard {

  // your dashboard code...
}