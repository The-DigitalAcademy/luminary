import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router, RouterLink } from '@angular/router';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { ButtonComponent } from '../button/button.component';
import { UserService } from '../../services/user.service';
import { SearchComponent } from '../search/search.component';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ PrimaryButtonComponent,  RouterLink, ButtonComponent, SearchComponent ],

  template: `
    <div 
      class="fixed top-0 left-0 w-full h-16 bg-white/80 backdrop-blur-md shadow-md border-b border-gray-300 flex justify-evenly items-center px-6 py-4 z-50"
    >
     <div class=" mt-[.5rem] flex justify-center items-center gap-2 mx-[1rem]">
       <img
       src="https://cdn.discordapp.com/attachments/1356890391424536576/1375453050503692378/Logo-Photoroom.png?ex=683ba139&is=683a4fb9&hm=b335c00a0181408a250369465746d644703fe5030d0a36890fda7358a3ea1832&"
        alt="Luminary"
        class="  rounded-full object-cover bg-gray-600 w-[3rem] h-[3rem]"
        routerLink="/"
      />
         <button
        class=" text-2xl justify-center self-center italic font-bold tracking-wide text-gray-800 hover:text-blue-800"
        routerLink="/"
      >
        Luminary
      </button>
     </div>
      <div class="flex justify-center items-center ">
        <app-search/>
      </div>
       <div class="flex items-center gap-3 mx-[1rem]">
          <button
            routerLink="/wishlist"
            class="bg-transparent text-gray-700 mx-2 my-2 rounded-md hover:bg-gray-100 transition-all flex items-center gap-2"
          >
            <i class="bi bi-heart"></i>
          </button>
          <app-primary-button label="{{ cartLabel() }}" routerLink="/cart" />
          @if(userService.currentUser()) {
            <app-button
           class="  text-center  my-1 mx-1 rounded-lg"
            label="Logout"
            (click)="navigateToHome()"
          />
          <span class="self-center">Welcome, {{this.userService.currentUser()?.firstName}}</span>
          }@else {
          <app-button
          class="  text-center  my-1 mx-1 rounded-lg"
            label="Login"
            (click)="navigateToLogin()"
          />
          <app-button
            class="  text-center my-1 mx-1 rounded-lg"
            label="Register"
            (click)="navigateToRegister()"
          />
          }
      </div>
    </div>
  `,
  styles: `
  `,
})
export class HeaderComponent {
  cartService = inject(CartService);
  router = inject(Router);
  public userService = inject(UserService);

  cartLabel = computed(() => `${this.cartService.cart().length}`);

   navigateToLogin() {
    console.log('navigateToLogin');
    this.router.navigate(['/login']);
  }
    navigateToRegister() {
      console.log('navigateToRegister');
    this.router.navigate(['/register']);
  }

  navigateToHome(){
    this.userService.logout();
  }

}
