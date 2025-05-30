import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button
      class=" bg-gray-500 text-white px-2 py-1 rounded-lg hover:bg-gray-200 hover:text-gray-600 transition-all"
      (click)="onClick.emit($event)"
    >
      <span class="text-md">{{label}}</span>
    </button>
  `,
  styles: ``,
})
export class ButtonComponent {
  @Input() label = '';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Output() onClick = new EventEmitter<Event>();

}
