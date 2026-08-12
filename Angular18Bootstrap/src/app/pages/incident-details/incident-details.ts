import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DashboardLayout } from '../../layouts/dashboard-layout/dashboard-layout';
import { HeaderService } from '../../shared/services/header.service';

interface IncidentDetailRecord {
  caseId: string;
  type: string;
  location: string;
  reporter: string;
  dateTime: string;
  submitted: string;
  priority: string;
  description: string;
  progress: number;
}

@Component({
  selector: 'app-incident-details',
  imports: [DashboardLayout, CommonModule],
  templateUrl: './incident-details.html',
  styleUrl: './incident-details.css',
})
export class IncidentDetails implements OnInit, OnDestroy {
  public incident: IncidentDetailRecord | null = null;

  private readonly incidentData: IncidentDetailRecord[] = [
    {
      caseId: 'case133',
      type: 'Vehicle Theft',
      location: 'Fanteka, Kaduna',
      reporter: 'James Whitfield',
      dateTime: '2026-01-12 09:14',
      submitted: '2026-01-12',
      priority: 'High',
      description: 'Vehicle stolen from a parking lot. Suspect fled on foot heading north.',
      progress: 75,
    },
    {
      caseId: 'case211',
      type: 'Vandalism',
      location: 'Babban Giji Qtrs, Kano',
      reporter: 'Aisha Yusuf',
      dateTime: '2026-03-23 14:20',
      submitted: '2026-03-23',
      priority: 'Medium',
      description: 'Government property damaged during a protest. CCTV footage is being reviewed.',
      progress: 45,
    },
    {
      caseId: 'case152',
      type: 'Robbery',
      location: 'Gida Dubu, Duste, Jigawa',
      reporter: 'Bello Musa',
      dateTime: '2026-06-26 22:05',
      submitted: '2026-06-26',
      priority: 'Critical',
      description: 'Armed robbery at a local market. Witness statements are still being collected.',
      progress: 60,
    },
    {
      caseId: 'case134',
      type: 'Burglary',
      location: 'Garki, Abuja',
      reporter: 'Grace Okafor',
      dateTime: '2026-02-05 07:30',
      submitted: '2026-02-05',
      priority: 'High',
      description: 'Residential break-in. Back door forced. Electronics and jewelry stolen.',
      progress: 25,
    },
    {
      caseId: 'case215',
      type: 'Fraud',
      location: 'Wuse, Abuja',
      reporter: 'Musa Ibrahim',
      dateTime: '2026-04-18 11:40',
      submitted: '2026-04-18',
      priority: 'Medium',
      description: 'Online fraud case involving forged transfer receipts.',
      progress: 90,
    },
    {
      caseId: 'case226',
      type: 'Arson',
      location: 'Kubwa, Abuja',
      reporter: 'Ifeoma Nwosu',
      dateTime: '2026-05-07 19:15',
      submitted: '2026-05-07',
      priority: 'Critical',
      description: 'Warehouse fire suspected to be deliberate. Investigation ongoing.',
      progress: 55,
    },
    {
      caseId: 'case237',
      type: 'Assault',
      location: 'Apo, Abuja',
      reporter: 'Danladi Sani',
      dateTime: '2026-06-14 18:10',
      submitted: '2026-06-14',
      priority: 'High',
      description: 'Physical assault reported after a neighborhood dispute.',
      progress: 40,
    },
    {
      caseId: 'case248',
      type: 'Theft',
      location: 'Zaria, Kaduna',
      reporter: 'Halima Yusuf',
      dateTime: '2026-07-21 16:00',
      submitted: '2026-07-21',
      priority: 'Medium',
      description: 'Missing property reported from a market stall.',
      progress: 35,
    },
    {
      caseId: 'case259',
      type: 'Cybercrime',
      location: 'Kaduna City',
      reporter: 'Tunde Adebayo',
      dateTime: '2026-08-29 10:30',
      submitted: '2026-08-29',
      priority: 'Low',
      description: 'Account takeover complaint with suspicious transaction logs.',
      progress: 80,
    },
    {
      caseId: 'case260',
      type: 'Bribery',
      location: 'Barnawa, Kaduna',
      reporter: 'Ruth Ali',
      dateTime: '2026-09-10 08:45',
      submitted: '2026-09-10',
      priority: 'Medium',
      description: 'Petty bribery complaint under internal review.',
      progress: 30,
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private headerService: HeaderService,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const caseId = params.get('caseId');
      this.incident = this.incidentData.find(item => item.caseId === caseId) ?? null;

      this.headerService.setTitle(this.incident?.type ?? 'Incident Details');
      this.headerService.setSubtitle(this.incident?.caseId ?? 'Unknown case');
    });
  }

  ngOnDestroy() {
    this.headerService.clear();
  }
}
