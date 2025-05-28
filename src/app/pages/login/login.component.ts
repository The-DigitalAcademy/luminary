import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from "../../components/button/button.component";
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
email = '';
  password = '';
  errorMessage = signal('');

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  onSubmit() {
    this.userService.checkEmail(this.email).subscribe(users => {
      const user = users[0];
      
      if (!user) {
        this.errorMessage.set('Email not found');
      } else if (user.password !== this.password) {
        this.errorMessage.set('Incorrect password');
      } else {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.router.navigate(['/home']);
      }
    });
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }


}
