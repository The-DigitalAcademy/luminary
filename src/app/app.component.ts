import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoryComponent } from './main/category/category.component';
import { ProductComponent } from './main/products-card/products-card.component';
import { FooterComponent } from './main/footer/footer.component';
import { SearchComponent } from './main/search/search.component';
import { HeaderComponent } from './components/header/header.component';
import { WishlistComponent } from './wishlist/wishlist.component';
 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CategoryComponent, ProductComponent, FooterComponent, SearchComponent,WishlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'luminary-app';
}
