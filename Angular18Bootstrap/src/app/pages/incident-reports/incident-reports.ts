import { Component, OnInit, OnDestroy } from '@angular/core';
import { DashboardLayout } from '../../layouts/dashboard-layout/dashboard-layout';
import { HeaderService } from '../../shared/services/header.service';

@Component({
  selector: 'app-incident-reports',
  imports: [DashboardLayout],
  templateUrl: './incident-reports.html',
  styleUrl: './incident-reports.css',
})
export class IncidentReports implements OnInit, OnDestroy {
  private recordCount = 10; // replace with real data when available

  constructor(private headerService: HeaderService) {}

  ngOnInit() {
    this.headerService.setTitle('Incident Reports');
    this.headerService.setSubtitle(`${this.recordCount} records found`);
  }

  ngOnDestroy() {
    this.headerService.clear();
  }
}
