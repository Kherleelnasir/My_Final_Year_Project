import { Component } from '@angular/core';
import { DashboardLayout } from '../../../layouts/dashboard-layout/dashboard-layout';

@Component({
  selector: 'app-case-details',
  imports: [DashboardLayout],
  templateUrl: './case-details.html',
  styleUrl: './case-details.css',
})
export class CaseDetails {

  activeTab: string = 'timeline';

  selectTab(tab: string): void {
    this.activeTab = tab;
  }

}