import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminLayout } from '../../../layouts/admin-layout/admin-layout';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [AdminLayout, FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})

export class Users {

  searchText = '';

  users = [
    {
      id: 'USR-001',
      name: 'Ibrahim Nasir',
      email: 'ibrahim@example.com',
      phone: '08012345678',
      dateJoined: '10 Jun 2026',
      status: 'Active'
    },
    {
      id: 'USR-002',
      name: 'Ahmad Musa',
      email: 'ahmad@example.com',
      phone: '08023456789',
      dateJoined: '12 Jun 2026',
      status: 'Active'
    },
    {
      id: 'USR-003',
      name: 'Aisha Bello',
      email: 'aisha@example.com',
      phone: '08034567890',
      dateJoined: '15 Jun 2026',
      status: 'Inactive'
    },
    {
      id: 'USR-004',
      name: 'Umar Abdullahi',
      email: 'umar@example.com',
      phone: '08045678901',
      dateJoined: '18 Jun 2026',
      status: 'Active'
    },
    {
      id: 'USR-005',
      name: 'Fatima Sani',
      email: 'fatima@example.com',
      phone: '08056789012',
      dateJoined: '20 Jun 2026',
      status: 'Active'
    }
  ];

  get filteredUsers() {
    const search = this.searchText.toLowerCase().trim();

    if (!search) {
      return this.users;
    }

    return this.users.filter(user =>
      user.name.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search) ||
      user.id.toLowerCase().includes(search)
    );
  }

  viewUser(user: any): void {
    console.log('Viewing user:', user);
  }

  changeStatus(user: any): void {
    user.status =
      user.status === 'Active'
        ? 'Inactive'
        : 'Active';
  }

}