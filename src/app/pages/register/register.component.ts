import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from './user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ButtonComponent, FormsModule, CommonModule],
  template: `
    <div class="bg-slate-50 h-[36rem] w-[25rem] flex flex-col mx-auto mt-[12rem] rounded-lg shadow-md">

      <app-button label="X" class="justify-self-end text-lg font-bold text-center ml-84 mt-[1rem] "  (click)="closeRegister()" />
      <div class="flex flex-col items-center">
         <h1 class="text-2xl font-bold text-center text-slate-800 mb-8">
          Register
         </h1>
         <form class="flex flex-col gap-3" (ngSubmit)="onSubmit()">
            <input type="text" placeholder="First Name" name="firstName" [(ngModel)]="user.firstName" class="w-full px-2 py-1 border text-center border-gray-300 rounded-md focus:outline-none" />
            <input type="text" placeholder="Last Name" name="lastName" [(ngModel)]="user.lastName" class="w-full px-2 py-1 border text-center border-gray-300 rounded-md focus:outline-none" />
            <input type="text" placeholder="username" name="username" [(ngModel)]="user.username" class="w-full px-2 py-1 border text-center border-gray-300 rounded-md focus:outline-none" />
            <input type="email" placeholder="Email" name="email" [(ngModel)]="user.email" class="w-full px-2 py-1 border text-center border-gray-300 rounded-md focus:outline-none" />
            <input type="password" placeholder="Password" name="password" [(ngModel)]="user.password" class="w-full px-2 py-1 border text-center border-gray-300 rounded-md focus:outline-none" />
            <input type="password" placeholder="Confirm Password" name="confirmPassword" [(ngModel)]="confirmPassword" class="w-full px-2 py-1 border text-center border-gray-300 rounded-md focus:outline-none" />

            <app-button type="submit" label="Register" class=" text-center  py-2 px-1 rounded-lg" />
         </form>
         <br>
         <p>Already have an account? <a href="/login" class="text-slate-500 hover:underline">Login</a></p>

      </div>

    </div>

  `,
  styles: ``,
})
export class RegisterComponent {
  router = inject(Router);
  userService = inject(UserService);

  user: User = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  };
  confirmPassword = '';

  onSubmit() {
    if(!this.user.firstName || !this.user.lastName || !this.user.email || !this.user.password || !this.confirmPassword){
      alert('Please fill all the fields');
    }else if(this.userService.checkEmail(this.user.email)){
      alert('User email already exists');
          this.user.firstName = '';
          this.user.lastName = '';
          this.user.username = '';
          this.user.email = '';
          this.user.password = '';
          this.confirmPassword = '';
    }else if(this.user.password !== this.confirmPassword){
      alert('Passwords do not match');
    }else if(this.user.password.length < 6){
      alert('Password must be at least 6 characters long');
    }else{
      this.userService.register(this.user).subscribe(user => {
        if(user){
          alert('User registered successfully');
          this.router.navigate(['/home']);
          this.user.firstName = '';
          this.user.lastName = '';
          this.user.username = '';
          this.user.email = '';
          this.user.password = '';
          this.confirmPassword = ''
        }
      });
    }
    console.log(this.user);
  }
  closeRegister(){
    this.router.navigate(['/'])
  }
 }
