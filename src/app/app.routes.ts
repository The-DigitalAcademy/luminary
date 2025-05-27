import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { RegisterComponent } from './pages/register/register.component';
import { WishlistComponent } from './wishlist/wishlist.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'wishlist',component:WishlistComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}

  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
