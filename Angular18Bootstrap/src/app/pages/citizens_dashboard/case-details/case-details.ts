import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CitizenDashboardLayout } from '../../../layouts/dashboard-layout/citizen-dashboard-layout';

@Component({
  selector: 'app-case-details',
  standalone: true,
  imports: [CommonModule, CitizenDashboardLayout],
  templateUrl: './case-details.html',
  styleUrl: './case-details.css'
})
export class CaseDetails implements OnInit {

  activeTab: string = 'timeline';
  public caseId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.caseId = this.route.snapshot.paramMap.get('caseId');
  }

  setTab(tab: string) {
    this.activeTab = tab;
  }

}