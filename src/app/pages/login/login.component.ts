import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ButtonComponent, FormsModule, CommonModule],
  template: `
    <div class="bg-slate-50 h-[25rem] w-[25rem] flex flex-col mx-auto mt-[12rem] rounded-lg shadow-md">

      <app-button label="X" class="justify-self-end text-lg font-bold text-center ml-84 mt-[1rem] "  (click)="closeLogin()" />
      <div class="flex flex-col items-center">
         <h1 class="text-2xl font-bold text-center text-slate-800 mb-8">
          Login
         </h1>
         <form class="flex flex-col gap-3" (ngSubmit)="onSubmit()">
            <input type="text" placeholder="Email" name="email" [(ngModel)]="currentUser.email" class="w-full px-2 py-1 border text-center border-gray-300 rounded-md focus:outline-none" />
            <input type="password" placeholder="Password" name="password" [(ngModel)]="currentUser.password" class="w-full px-2 py-1 border text-center border-gray-300 rounded-md focus:outline-none" />
            <app-button type="submit" label="Login" class="text-center font-bold py-1 px-2 rounded-lg" />
         </form>
         <br>
         <p>Don't have an account? <a href="/register" class="text-slate-500 hover:underline">Register</a></p>

      </div>

    </div>

  `,
  styles: ``,
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
            alert(`Login successful, welcome ${user.firstName}`);
            console.log(this.currentUser);
            this.userService.login(user);
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
  closeLogin(){
    this.router.navigate(['/'])
  }
 }
