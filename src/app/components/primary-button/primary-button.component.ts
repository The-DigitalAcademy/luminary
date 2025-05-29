import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `<button
      class=" bg-slate-500 text-white w-full border px-2 py-1 rounded-lg shadow-md hover:opacity-80 transition-all"
      (click)="btnClicked.emit()">
      <span class="text-md"> <i class="bi bi-cart2"></i>{{ label() }}</span>
    </button>`,
  styles: ``,
})

export class PrimaryButtonComponent {
  label = input<string>();

  btnClicked = output();
}
