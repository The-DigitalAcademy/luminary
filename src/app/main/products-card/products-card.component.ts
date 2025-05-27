import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-card',
  imports: [],
  templateUrl: './products-card.component.html',
  styleUrl: './products-card.component.scss'
})
export class ProductComponent {

  constructor(private router: Router) {}

  goToWishlist() {
    this.router.navigate(['/wishlist']);
  }
}