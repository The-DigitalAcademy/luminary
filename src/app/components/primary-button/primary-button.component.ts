import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `<button class="text-black px-2 py-1 rounded-lg transition-all" (click)="btnClicked.emit()">
      <span class="text-md"> <i class="bi bi-cart2"></i>{{ label() }}</span>
    </button>`,
  styles: ``,
})

export class PrimaryButtonComponent {
  label = input<string>();

  btnClicked = output();
}
