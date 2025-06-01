import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `<button class="cursor-pointer"
      (click)="btnClicked.emit()">
      <span class="text-md"> <i class="bi bi-cart2"></i>{{ label() }}</span>
    </button>`,
  styles: ``,
})
  
export class PrimaryButtonComponent {
  label = input<string>();

  btnClicked = output();
}