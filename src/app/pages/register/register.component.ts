import { UserService } from './../../services/user.service';
import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';
import { error } from 'console';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './register.component.html',
  styles: ``
})
export class RegisterComponent {
  name = '';
  surname = '';
  email = '';
  password = '';
  confirmPassword = '';
  errorMessage = signal('');

  constructor(private router: Router,
    private userService: UserService) {}
  
  
  onSubmit() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage.set('Passwords do not match.');
      return;
    }

    this.userService.checkEmail(this.email).subscribe((users) => {
      if (users.length > 0) {
        this.errorMessage.set('Email already exists.');
        return;
      }else{
        const newUser = {
          name: this.name,
          surname: this.surname,
          email: this.email,
          password: this.password
        };
        this.userService.register(newUser).subscribe({
          next: () => {this.router.navigate(['/login']);
            this.errorMessage.set('User registered successfully.');
          },
          error:(error) => {
          this.errorMessage.set('Error registering user.'); 
          console.log(error);
        }
      });
    }
  });
}
navigateToLogin() {
  this.router.navigate(['/login']);
}
}
