import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button
      class=" text-black w-full px-2 py-1.5 rounded-lg shadow-sm hover:hover:bg-slate-500 hover:text-white transition-all"
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
