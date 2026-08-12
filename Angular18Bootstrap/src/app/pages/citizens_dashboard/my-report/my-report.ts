import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CitizenDashboardLayout } from '../../../layouts/dashboard-layout/citizen-dashboard-layout';

interface IncidentRecord {
  caseId: string;
  type: string;
  location: string;
  dateTime: string;
  officer: string;
  severity: string;
  status: string;
  lastUpdated?: string;
  progress?: number;
}

@Component({
  selector: 'app-my-report',
  standalone: true,
  imports: [CitizenDashboardLayout, CommonModule, RouterLink],
  templateUrl: './my-report.html',
  styleUrl: './my-report.css',
})
export class MyReport implements OnInit {
  public showFilters = false;
  public currentPage = 1;
  public pageSize = 5;
  public pageSizes = [5, 10, 15];

  public records: IncidentRecord[] = [
    { caseId: 'case133', type: 'Vehicle Theft', location: 'Fanteka, Kaduna', dateTime: '2026-01-12', officer: 'Detective Khalil', severity: 'High', status: 'Resolved', lastUpdated: '2026-01-15', progress: 75 },
    { caseId: 'case211', type: 'Vandalism', location: 'Babban Giji Qtrs, Kano', dateTime: '2026-03-23', officer: 'Agent Ibrahim', severity: 'Medium', status: 'Active', lastUpdated: '2026-03-25', progress: 45 },
    { caseId: 'case152', type: 'Robbery', location: 'Gida Dubu, Duste, Jigawa', dateTime: '2026-06-26', officer: 'Officer Khalil', severity: 'Critical', status: 'Under Investigation', lastUpdated: '2026-06-28', progress: 60 },
    { caseId: 'case134', type: 'Burglary', location: 'Garki, Abuja', dateTime: '2026-02-05', officer: 'Sergeant Musa', severity: 'High', status: 'Active', lastUpdated: '2026-02-07', progress: 25 },
    { caseId: 'case215', type: 'Fraud', location: 'Wuse, Abuja', dateTime: '2026-04-18', officer: 'Detective Amina', severity: 'Medium', status: 'Resolved', lastUpdated: '2026-04-20', progress: 90 },
    { caseId: 'case226', type: 'Arson', location: 'Kubwa, Abuja', dateTime: '2026-05-07', officer: 'Inspector Bello', severity: 'Critical', status: 'Under Investigation', lastUpdated: '2026-05-09', progress: 55 },
    { caseId: 'case237', type: 'Assault', location: 'Apo, Abuja', dateTime: '2026-06-14', officer: 'Officer Chukwu', severity: 'High', status: 'Active', lastUpdated: '2026-06-16', progress: 40 },
    { caseId: 'case248', type: 'Theft', location: 'Zaria, Kaduna', dateTime: '2026-07-21', officer: 'Agent Sani', severity: 'Medium', status: 'Active', lastUpdated: '2026-07-23', progress: 35 }
  ];

  get totalPages() {
    return Math.ceil(this.records.length / this.pageSize);
  }

  get pagedRecords() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.records.slice(start, start + this.pageSize);
  }

  get pages() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  setPageSize(size: number) {
    this.pageSize = Number(size) || 5;
    this.currentPage = Math.min(this.currentPage, this.totalPages) || 1;
  }

  selectPage(page: number) {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
  }

  previousPage() {
    this.selectPage(this.currentPage - 1);
  }

  nextPage() {
    this.selectPage(this.currentPage + 1);
  }

  ngOnInit() {}
}

