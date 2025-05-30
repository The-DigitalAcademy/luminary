import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router, RouterLink } from '@angular/router';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { ButtonComponent } from '../button/button.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ PrimaryButtonComponent,  RouterLink, ButtonComponent ],
  template: `
    <div
      class="bg-slate-50 w-full shadow-lg border-b border-gray-200 flex justify-between sticky top-0 z-50 px-[6rem] py-[.5rem] rounded-b-md"
    >
     <div class=" mt-[.5rem] justify-center items-center mx-[1rem]">
         <button
        class=" text-2xl justify-center self-center italic font-bold tracking-wide text-gray-800 hover:text-slate-300"
        routerLink="/"
      >
        Luminary
      </button>
     </div>
      <div class="flex justify-center items-center mx-[20rem]">
        <input
          type="text"
          placeholder="Search products..."
          class="w-1/1 px-2 py-.5 border border-gray-300 rounded-md focus:outline-none mx-[.5rem]"
        />
        <button
          class="bg-slate-100 text-black px-2 py-.5 rounded-md hover:bg-slate-300 transition-all flex items-center gap-2"
        >
          <i class="bi bi-search"></i>
        </button>
      </div>
       <div class="flex items-center gap-4 mx-[1rem]">
          <button
            routerLink="/wishlist"
            class="bg-transparent text-gray-700 mx-2 my-2 rounded-md hover:bg-gray-100 transition-all flex items-center gap-2"
          >
            <i class="bi bi-heart"></i>
          </button>
          <app-primary-button label="{{ cartLabel() }}" routerLink="/cart" />
          @if(userService.currentUser()) {
            <app-button
           class=" bg-slate-300 text-center  my-1 mx-1 rounded-lg"
            label="Logout"
            (onClick)="navigateToHome()"
          />
          <span class="self-center">Welcome, {{this.userService.currentUser()?.firstName}}</span>
          }@else {
                <app-button
           class=" bg-slate-300 text-center  my-1 mx-1 rounded-lg"
            label="Login"
            (onClick)="navigateToLogin()"
          />
          <app-button
            class=" bg-slate-300 text-center my-1 mx-1 rounded-lg"
            label="Register"
            (onClick)="navigateToRegister()"
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
    this.router.navigate(['/login']);
  }
    navigateToRegister() {
    this.router.navigate(['/register']);
  }

  navigateToHome(){
    this.userService.logout();
  }

}
