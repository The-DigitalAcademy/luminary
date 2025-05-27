import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from "../../components/button/button.component";



@Component({
  selector: 'app-login',
  standalone: true,

  imports: [ButtonComponent],

  imports: [],

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  router = inject(Router);

  login() {
    console.log('Login');
    this.router.navigate(['/home']);
  }

  // router = inject(Router);

  // login() {
  //   console.log('Login');
  //   this.router.navigate(['/home']);
  // }



}
