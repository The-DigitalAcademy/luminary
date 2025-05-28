import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = signal('');

  constructor(private router: Router, private userService: UserService) {}

  currentUser = {
    email: '',
    password: '',
  };

  onSubmit() {
    if (
      !this.currentUser.email.includes('@') ||
      !this.currentUser.email.includes('.')
    ) {
      alert('Please enter a valid email');
      return;
    }
    if (!this.currentUser.password) {
      alert('Please enter a password');
      return;
    }
    if (this.currentUser.password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }
    this.userService.checkEmail(this.currentUser.email).subscribe({
      next: (users) => {
        if (users && users.length > 0) {
          const user = users.find((u) => u.email === this.currentUser.email);
          if (user && user.password === this.currentUser.password) {
            alert(`Login successful, welcome ${user.name}`);
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.router.navigate(['/home']);
            this.currentUser.email = '';
            this.currentUser.password = '';
          } else {
            alert(
              'Your email or password is incorrect or you have not registered'
            );
          }
        }
      },
    });
  }
}
