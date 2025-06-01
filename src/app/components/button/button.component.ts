import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button
      class=" bg-gray-500 text-white px-2 py-1 rounded-lg hover:bg-gray-200 hover:text-gray-600 transition-all"
      (click)="btnClicked.emit()"

    >
      <span class="text-md">{{ label() }}</span>
    </button>
  `,
  styles: ``,
})
export class ButtonComponent {
  label = input<string>();

  btnClicked = output();
}