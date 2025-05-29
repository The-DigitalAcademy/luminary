import { Component } from '@angular/core';
import { HomePageComponent } from "./pages/home-page/home-page.component";

@Component({
  selector: 'app-root',
  imports: [HomePageComponent],
  template: `
    <app-home-page/>
  `,
  styles: [],
})
export class AppComponent {}
