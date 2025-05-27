import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../button/button.component';



@Component({
  selector: 'app-header',
  imports: [ ButtonComponent ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  router = inject(Router);

  showLogin() {
    console.log('Login');
    this.router.navigate(['/login']);
  }

  showRegister() {
    console.log('register');
    this.router.navigate(['/register']);
  }

}
