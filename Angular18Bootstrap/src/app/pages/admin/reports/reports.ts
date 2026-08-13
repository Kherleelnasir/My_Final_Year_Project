import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminLayout } from '../../../layouts/admin-layout/admin-layout';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [AdminLayout, FormsModule],
  templateUrl: './reports.html',
  styleUrl: './reports.css'
})
export class Reports {

  searchText = '';
  selectedStatus = 'All';
  selectedType = 'All';

  reports = [
    {
      id: 'RP-001',
      caseId: 'CR-001',
      crimeType: 'Theft',
      reporter: 'Ibrahim Yusuf',
      location: 'Dutse',
      date: '30 Jun 2026',
      status: 'Verified',
      anonymous: false
    },
    {
      id: 'RP-002',
      caseId: 'CR-002',
      crimeType: 'Assault',
      reporter: 'Anonymous',
      location: 'Kano',
      date: '29 Jun 2026',
      status: 'Pending',
      anonymous: true
    },
    {
      id: 'RP-003',
      caseId: 'CR-003',
      crimeType: 'Vehicle Theft',
      reporter: 'Abdullahi Musa',
      location: 'Abuja',
      date: '28 Jun 2026',
      status: 'Verified',
      anonymous: false
    },
    {
      id: 'RP-004',
      caseId: 'CR-004',
      crimeType: 'Robbery',
      reporter: 'Anonymous',
      location: 'Dutse',
      date: '27 Jun 2026',
      status: 'Pending',
      anonymous: true
    },
    {
      id: 'RP-005',
      caseId: 'CR-005',
      crimeType: 'Burglary',
      reporter: 'Sani Ahmed',
      location: 'Kano',
      date: '26 Jun 2026',
      status: 'Rejected',
      anonymous: false
    },
    {
      id: 'RP-006',
      caseId: 'CR-006',
      crimeType: 'Cybercrime',
      reporter: 'Anonymous',
      location: 'Abuja',
      date: '25 Jun 2026',
      status: 'Verified',
      anonymous: true
    }
  ];

  get filteredReports() {

    const search = this.searchText.toLowerCase().trim();

    return this.reports.filter(report => {

      const matchesSearch =
        !search ||
        report.id.toLowerCase().includes(search) ||
        report.caseId.toLowerCase().includes(search) ||
        report.crimeType.toLowerCase().includes(search) ||
        report.location.toLowerCase().includes(search) ||
        report.reporter.toLowerCase().includes(search);

      const matchesStatus =
        this.selectedStatus === 'All' ||
        report.status === this.selectedStatus;

      const matchesType =
        this.selectedType === 'All' ||
        report.crimeType === this.selectedType;

      return matchesSearch && matchesStatus && matchesType;
    });
  }

  viewReport(report: any): void {
    console.log('Viewing report:', report);
  }

  verifyReport(report: any): void {
    report.status = 'Verified';
  }

  rejectReport(report: any): void {
    report.status = 'Rejected';
  }

}