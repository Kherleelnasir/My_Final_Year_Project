import { Component } from '@angular/core';
import { AdminLayout } from '../../../layouts/admin-layout/admin-layout';

@Component({
  selector: 'app-officers',
  standalone: true,
  imports: [AdminLayout],
  templateUrl: './officer.html',
  styleUrl: './officer.css'
})
export class Officers {

  searchText = '';

  officers = [
    {
      id: 'OFF-001',
      name: 'Ibrahim Musa',
      email: 'ibrahim.musa@crime.gov.ng',
      phone: '08012345678',
      department: 'Investigation',
      assignedCases: 12,
      status: 'Active'
    },
    {
      id: 'OFF-002',
      name: 'Ahmed Umar',
      email: 'ahmed.umar@crime.gov.ng',
      phone: '08023456789',
      department: 'Criminal Investigation',
      assignedCases: 8,
      status: 'Active'
    },
    {
      id: 'OFF-003',
      name: 'Musa Abdullahi',
      email: 'musa.abdullahi@crime.gov.ng',
      phone: '08034567890',
      department: 'Cybercrime',
      assignedCases: 6,
      status: 'Active'
    },
    {
      id: 'OFF-004',
      name: 'Sani Ibrahim',
      email: 'sani.ibrahim@crime.gov.ng',
      phone: '08045678901',
      department: 'Investigation',
      assignedCases: 0,
      status: 'Inactive'
    },
    {
      id: 'OFF-005',
      name: 'Abdullahi Ali',
      email: 'abdullahi.ali@crime.gov.ng',
      phone: '08056789012',
      department: 'Patrol',
      assignedCases: 10,
      status: 'Active'
    }
  ];

  get filteredOfficers() {

    const search = this.searchText.toLowerCase().trim();

    if (!search) {
      return this.officers;
    }

    return this.officers.filter(officer =>
      officer.name.toLowerCase().includes(search) ||
      officer.email.toLowerCase().includes(search) ||
      officer.id.toLowerCase().includes(search) ||
      officer.department.toLowerCase().includes(search)
    );
  }

  addOfficer(): void {
    console.log('Add officer');
  }

  viewOfficer(officer: any): void {
    console.log('Viewing officer:', officer);
  }

  changeStatus(officer: any): void {

    officer.status =
      officer.status === 'Active'
        ? 'Inactive'
        : 'Active';

  }

}