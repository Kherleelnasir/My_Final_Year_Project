import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  private readonly firebaseService = inject(FirebaseService);
  private readonly router = inject(Router);

  public firstName = '';
  public lastName = '';
  public email = '';
  public phone = '';
  public gender = '';
  public dateOfBirth = '';
  public state = '';
  public lga = '';
  public address = '';
  public terms = false;
  public password = '';
  public confirmPassword = '';
  public errorMessage = '';

  public async signUp(): Promise<void> {
    this.errorMessage = '';

    if (!this.email || !this.password || !this.confirmPassword) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    try {
      await this.firebaseService.signUp(this.email, this.password);
      await this.router.navigate(['/login']);
    } catch (error: unknown) {
      this.errorMessage = error instanceof Error ? error.message : 'Sign up failed.';
    }
  }
}
