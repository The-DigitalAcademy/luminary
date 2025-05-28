import { UserService } from './../../services/user.service';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';
import { User } from './user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ButtonComponent, FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styles: ``
})
export class RegisterComponent {


  router = inject(Router);
  userService = inject(UserService);

  user: User = {
    name : '',
    surname : '',
    email : '',
    password : '',
  }
  confirmPassword = '';

  onSubmit() {
    if(!this.user.name || !this.user.surname || !this.user.email || !this.user.password || !this.confirmPassword){
      alert('Please fill all the fields');
    }else if(this.user.password !== this.confirmPassword){
      alert('Passwords do not match');
    }else if(this.user.password.length < 6){
      alert('Password must be at least 6 characters long');
    }else{
      this.userService.register(this.user).subscribe(user => {
        if(user){
          alert('User registered successfully');
          this.router.navigate(['/login']);
          this.user.name = '';
          this.user.surname = '';
          this.user.email = '';
          this.user.password = '';
        }
      });
    }
}
}
