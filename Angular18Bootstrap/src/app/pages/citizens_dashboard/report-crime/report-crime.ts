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
}

@Component({
  selector: 'app-report-crime',
  standalone: true,
  imports: [CitizenDashboardLayout, CommonModule, RouterLink],
  templateUrl: './report-crime.html',
  styleUrl: './report-crime.css',
})
export class ReportCrime implements OnInit {
  public showFilters = false;
  public currentPage = 1;
  public pageSize = 5;
  public pageSizes = [5, 10, 15];

  public records: IncidentRecord[] = [
    { caseId: 'CR-101', type: 'Theft', location: 'Dutse', dateTime: '30 Jun 2026', officer: 'Officer Musa', severity: 'High', status: 'Active' },
    { caseId: 'CR-102', type: 'Assault', location: 'Kano', dateTime: '29 Jun 2026', officer: 'Inspector Amina', severity: 'Medium', status: 'Pending' },
    { caseId: 'CR-103', type: 'Vehicle Theft', location: 'Abuja', dateTime: '28 Jun 2026', officer: 'Detective Idris', severity: 'High', status: 'Resolved' },
    { caseId: 'CR-104', type: 'Vandalism', location: 'Dutse', dateTime: '27 Jun 2026', officer: 'Sergeant Bello', severity: 'Low', status: 'Pending' },
    { caseId: 'CR-105', type: 'Fraud', location: 'Kaduna', dateTime: '26 Jun 2026', officer: 'Agent Sani', severity: 'Medium', status: 'Active' },
    { caseId: 'CR-106', type: 'Burglary', location: 'Abuja', dateTime: '25 Jun 2026', officer: 'Detective Aisha', severity: 'High', status: 'Resolved' },
    { caseId: 'CR-107', type: 'Cybercrime', location: 'Kano', dateTime: '24 Jun 2026', officer: 'Inspector Chukwu', severity: 'Medium', status: 'Active' },
    { caseId: 'CR-108', type: 'Arson', location: 'Zaria', dateTime: '23 Jun 2026', officer: 'Officer Nneka', severity: 'Critical', status: 'Under Investigation' }
  ];

  get totalRecords() {
    return this.records.length;
  }

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

