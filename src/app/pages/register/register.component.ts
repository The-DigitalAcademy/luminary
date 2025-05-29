import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ButtonComponent],
  template: `
    <div class="bg-slate-50 h-[30rem] w-[25rem] flex flex-col mx-auto mt-[12rem] rounded-lg shadow-md">

      <app-button label="X" class="justify-self-end text-lg font-bold text-center ml-84 mt-[1rem] "  (onClick)="closeRegister()" />
      <div class="flex flex-col items-center">
         <h1 class="text-2xl font-bold text-center text-slate-800 mb-8">
          Register
         </h1>
         <form class="flex flex-col gap-3">
            <input type="text" placeholder="First Name" class="w-full px-2 py-1 border text-center border-gray-300 rounded-md focus:outline-none" />
            <input type="text" placeholder="Last Name" class="w-full px-2 py-1 border text-center border-gray-300 rounded-md focus:outline-none" />
            <input type="email" placeholder="Email" class="w-full px-2 py-1 border text-center border-gray-300 rounded-md focus:outline-none" />
            <input type="password" placeholder="Password" class="w-full px-2 py-1 border text-center border-gray-300 rounded-md focus:outline-none" />
            <input type="password" placeholder="Confirm Password" class="w-full px-2 py-1 border text-center border-gray-300 rounded-md focus:outline-none" />

            <app-button type="submit" label="Register" class=" bg-slate-300 text-center font-bold py-1 px-2 rounded-lg" />
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

  closeRegister(){
    this.router.navigate(['/'])
  }
 }
