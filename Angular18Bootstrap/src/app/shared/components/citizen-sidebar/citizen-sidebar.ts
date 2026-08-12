import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-citizen-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './citizen-sidebar.html',
  styleUrl: './citizen-sidebar.css',
})
export class CitizenSidebar {}
