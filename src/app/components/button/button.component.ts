import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button
      class=" text-slate-800 px-2 py-1.5 rounded-lg transition-all"
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
