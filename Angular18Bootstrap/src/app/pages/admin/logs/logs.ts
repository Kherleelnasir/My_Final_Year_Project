import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminLayout } from '../../../layouts/admin-layout/admin-layout';

@Component({
  selector: 'app-logs',
  standalone: true,
  imports: [AdminLayout, FormsModule],
  templateUrl: './logs.html',
  styleUrl: './logs.css'
})
export class Logs {

  searchText = '';
  selectedActivity = 'All';

  logs = [
    {
      id: 'LOG-001',
      user: 'Admin',
      role: 'Administrator',
      activity: 'Login',
      description: 'Administrator logged into the system',
      date: '30 Jun 2026',
      time: '09:42 AM'
    },
    {
      id: 'LOG-002',
      user: 'Admin',
      role: 'Administrator',
      activity: 'Case Update',
      description: 'Updated status of case CR-001 to Active',
      date: '30 Jun 2026',
      time: '10:15 AM'
    },
    {
      id: 'LOG-003',
      user: 'Admin',
      role: 'Administrator',
      activity: 'Officer Assignment',
      description: 'Assigned case CR-002 to Ahmed Umar',
      date: '30 Jun 2026',
      time: '10:32 AM'
    },
    {
      id: 'LOG-004',
      user: 'Admin',
      role: 'Administrator',
      activity: 'Report Update',
      description: 'Verified report RP-001',
      date: '30 Jun 2026',
      time: '11:05 AM'
    },
    {
      id: 'LOG-005',
      user: 'Admin',
      role: 'Administrator',
      activity: 'Crime Type',
      description: 'Added new crime type Cybercrime',
      date: '30 Jun 2026',
      time: '11:40 AM'
    },
    {
      id: 'LOG-006',
      user: 'Admin',
      role: 'Administrator',
      activity: 'Login',
      description: 'Administrator logged out of the system',
      date: '30 Jun 2026',
      time: '04:20 PM'
    }
  ];

  get filteredLogs() {

    const search = this.searchText.toLowerCase().trim();

    return this.logs.filter(log => {

      const matchesSearch =
        !search ||
        log.id.toLowerCase().includes(search) ||
        log.user.toLowerCase().includes(search) ||
        log.activity.toLowerCase().includes(search) ||
        log.description.toLowerCase().includes(search);

      const matchesActivity =
        this.selectedActivity === 'All' ||
        log.activity === this.selectedActivity;

      return matchesSearch && matchesActivity;
    });
  }

}