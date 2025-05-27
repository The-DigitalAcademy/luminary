import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './register.component.html',
  styles: ``
})
export class RegisterComponent {

  router = inject(Router);

  register() {
    console.log('Register');
    this.router.navigate(['/login']);
  }
}
