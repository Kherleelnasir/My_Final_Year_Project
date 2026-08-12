import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private readonly firebaseService = inject(FirebaseService);
  private readonly router = inject(Router);

  public email = '';
  public password = '';
  public errorMessage = '';

  public async login(): Promise<void> {
    this.errorMessage = '';

    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter your email and password.';
      return;
    }

    try {
      await this.firebaseService.signIn(this.email, this.password);
      await this.router.navigate(['/dashboard']);
    } catch (error: unknown) {
      this.errorMessage = error instanceof Error ? error.message : 'Login failed.';
    }
  }
}
