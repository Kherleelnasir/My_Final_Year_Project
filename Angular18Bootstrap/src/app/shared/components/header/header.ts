import { Component } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  title = 'Operations Dashboard';
  subtitle = '';

  constructor(private headerService: HeaderService) {
    this.headerService.title$.subscribe((t) => (this.title = t));
    this.headerService.subtitle$.subscribe((s) => (this.subtitle = s));
  }
}
