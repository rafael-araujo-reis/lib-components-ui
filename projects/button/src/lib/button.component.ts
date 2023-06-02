import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-button',
  template: `
    <button [disabled]="disabled">
      {{ description }}
    </button>
  `,
  styles: [],
})
export class ButtonComponent {
  @Input() description: string = '';
  @Input() disabled: boolean = false;
}
