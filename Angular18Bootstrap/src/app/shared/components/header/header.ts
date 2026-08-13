import { Component } from '@angular/core';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { NgIf } from '@angular/common';
import { filter } from 'rxjs';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  title = 'Operations Dashboard';
  subtitle = '';
  showReportActions = false;

  constructor(private headerService: HeaderService, private router: Router) {
    this.headerService.title$.subscribe((t) => (this.title = t));
    this.headerService.subtitle$.subscribe((s) => (this.subtitle = s));

    this.updateShowActions(this.router.url);
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      this.updateShowActions((event as NavigationEnd).urlAfterRedirects);
    });
  }

  private updateShowActions(url: string) {
    this.showReportActions = /^\/incident-reports($|\/)/.test(url);
  }

  printReport() {
    window.print();
  }

  exportPdf() {
    window.print();
  }
}
