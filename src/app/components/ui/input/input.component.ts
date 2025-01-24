import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input() label!: string;
  @Input() type: string = '';
  @Input() id!: string;
  @Input() placeholder!: string;
  @Input() control!: any;
}
