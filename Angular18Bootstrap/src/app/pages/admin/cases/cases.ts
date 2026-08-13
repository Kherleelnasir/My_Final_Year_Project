import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminLayout } from '../../../layouts/admin-layout/admin-layout';

@Component({
  selector: 'app-cases',
  standalone: true,
  imports: [AdminLayout, FormsModule],
  templateUrl: './cases.html',
  styleUrl: './cases.css'
})
export class Cases {

  searchText = '';
  selectedStatus = 'All';
  selectedOfficer = 'All';

  cases = [
    {
      id: 'CR-001',
      crimeType: 'Theft',
      location: 'Dutse',
      date: '30 Jun 2026',
      status: 'Active',
      officer: 'Ibrahim Musa'
    },
    {
      id: 'CR-002',
      crimeType: 'Assault',
      location: 'Kano',
      date: '29 Jun 2026',
      status: 'Pending',
      officer: 'Ahmed Umar'
    },
    {
      id: 'CR-003',
      crimeType: 'Vehicle Theft',
      location: 'Abuja',
      date: '28 Jun 2026',
      status: 'Resolved',
      officer: 'Musa Abdullahi'
    },
    {
      id: 'CR-004',
      crimeType: 'Robbery',
      location: 'Dutse',
      date: '27 Jun 2026',
      status: 'Active',
      officer: 'Not Assigned'
    },
    {
      id: 'CR-005',
      crimeType: 'Burglary',
      location: 'Kano',
      date: '26 Jun 2026',
      status: 'Pending',
      officer: 'Sani Ibrahim'
    },
    {
      id: 'CR-006',
      crimeType: 'Cybercrime',
      location: 'Abuja',
      date: '25 Jun 2026',
      status: 'Active',
      officer: 'Abdullahi Ali'
    }
  ];

  officers = [
    'Ibrahim Musa',
    'Ahmed Umar',
    'Musa Abdullahi',
    'Sani Ibrahim',
    'Abdullahi Ali',
    'Not Assigned'
  ];

  get filteredCases() {

    const search = this.searchText.toLowerCase().trim();

    return this.cases.filter(caseItem => {

      const matchesSearch =
        !search ||
        caseItem.id.toLowerCase().includes(search) ||
        caseItem.crimeType.toLowerCase().includes(search) ||
        caseItem.location.toLowerCase().includes(search) ||
        caseItem.officer.toLowerCase().includes(search);

      const matchesStatus =
        this.selectedStatus === 'All' ||
        caseItem.status === this.selectedStatus;

      const matchesOfficer =
        this.selectedOfficer === 'All' ||
        caseItem.officer === this.selectedOfficer;

      return matchesSearch && matchesStatus && matchesOfficer;
    });
  }

  viewCase(caseItem: any): void {
    console.log('Viewing case:', caseItem);
  }

  assignOfficer(caseItem: any): void {
    console.log('Assign officer to:', caseItem.id);
  }

  reassignOfficer(caseItem: any): void {
    console.log('Reassign officer for:', caseItem.id);
  }

}