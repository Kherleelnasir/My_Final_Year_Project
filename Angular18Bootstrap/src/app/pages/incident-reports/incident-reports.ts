import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DashboardLayout } from '../../layouts/dashboard-layout/dashboard-layout';
import { HeaderService } from '../../shared/services/header.service';

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
  selector: 'app-incident-reports',
  imports: [DashboardLayout, CommonModule, RouterLink],
  templateUrl: './incident-reports.html',
  styleUrl: './incident-reports.css',
})
export class IncidentReports implements OnInit, OnDestroy {
  public showFilters = false;
  public currentPage = 1;
  public pageSize = 5;
  public pageSizes = [5, 10, 15];

  public records: IncidentRecord[] = [
    { caseId: 'case133', type: 'Vehicle Theft', location: 'Fanteka, Kaduna', dateTime: '12th January, 2026', officer: 'Detective Khalil', severity: 'High', status: 'Resolved' },
    { caseId: 'case211', type: 'Vandalism', location: 'Babban Giji Qtrs, Kano', dateTime: '23rd March, 2026', officer: 'Agent Ibrahim', severity: 'Medium', status: 'Active' },
    { caseId: 'case152', type: 'Robbery', location: 'Gida Dubu, Duste, Jigawa', dateTime: '26th June, 2026', officer: 'Officer Khalil', severity: 'Critical', status: 'Under Investigation' },
    { caseId: 'case134', type: 'Burglary', location: 'Garki, Abuja', dateTime: '05th February, 2026', officer: 'Sergeant Musa', severity: 'High', status: 'Active' },
    { caseId: 'case215', type: 'Fraud', location: 'Wuse, Abuja', dateTime: '18th April, 2026', officer: 'Detective Amina', severity: 'Medium', status: 'Resolved' },
    { caseId: 'case226', type: 'Arson', location: 'Kubwa, Abuja', dateTime: '07th May, 2026', officer: 'Inspector Bello', severity: 'Critical', status: 'Under Investigation' },
    { caseId: 'case237', type: 'Assault', location: 'Apo, Abuja', dateTime: '14th June, 2026', officer: 'Officer Chukwu', severity: 'High', status: 'Active' },
    { caseId: 'case248', type: 'Theft', location: 'Zaria, Kaduna', dateTime: '21st July, 2026', officer: 'Agent Sani', severity: 'Medium', status: 'Active' },
    { caseId: 'case259', type: 'Cybercrime', location: 'Kaduna City', dateTime: '29th August, 2026', officer: 'Detective Yusuf', severity: 'Low', status: 'Resolved' },
    { caseId: 'case260', type: 'Bribery', location: 'Barnawa, Kaduna', dateTime: '10th September, 2026', officer: 'Inspector Grace', severity: 'Medium', status: 'Active' }
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

  constructor(private headerService: HeaderService) {}

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  printReport() {
    window.print();
  }

  exportPdf() {
    window.print();
  }

  selectPage(page: number) {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
  }

  setPageSize(size: number) {
    this.pageSize = size;
    this.currentPage = Math.min(this.currentPage, this.totalPages) || 1;
  }

  previousPage() {
    this.selectPage(this.currentPage - 1);
  }

  nextPage() {
    this.selectPage(this.currentPage + 1);
  }

  ngOnInit() {
    this.headerService.setTitle('Incident Reports');
    this.headerService.setSubtitle(`${this.totalRecords} records found`);
  }

  ngOnDestroy() {
    this.headerService.clear();
  }
}
