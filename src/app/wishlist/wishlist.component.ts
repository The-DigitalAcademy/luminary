import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
//import { Product } from '../models/item.model';

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

@Component({
  selector: 'app-wishlist',
   imports: [ NgFor, NgIf],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  
  router = inject(Router)


  wishlist: Product[] = [
{
      id : 121, 
      title : 'IPhone',
      price: 899.99, 
      thumbnail : "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/thumbnail.webp", 
      },
      {
      id : 122, 
      title : 'iPhone 6"',
      price: 9899.99, 
      thumbnail : "https://cdn.dummyjson.com/product-images/smartphones/iphone-6/thumbnail.webp", 
      },
        {
      id : 123, 
      title : 'iPhone 13 Pro',
      price: 9099.99, 
      thumbnail : "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/thumbnail.webp", 
      },
      

  ];

  addToCart(item: Product) {
   console.log('Add to cart:', item);

  }

   removeItem(id: number) {
    this.wishlist = this.wishlist.filter(item => item.id !== id);
  }
}


