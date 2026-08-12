import { Component } from '@angular/core';
import { Header } from '../../shared/components/header/header';
import { CitizenSidebar } from '../../shared/components/citizen-sidebar/citizen-sidebar';

@Component({
  selector: 'app-citizen-dashboard-layout',
  standalone: true,
  imports: [Header, CitizenSidebar],
  templateUrl: './citizen-dashboard-layout.html',
  styleUrl: './dashboard-layout.css',
})
export class CitizenDashboardLayout {}
