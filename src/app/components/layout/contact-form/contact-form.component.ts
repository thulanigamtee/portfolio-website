import { Component, inject } from '@angular/core';
import { InputComponent } from '../../ui/input/input.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'app-contact-form',
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent {
  contactForm!: FormGroup;
  formBuilder = inject(FormBuilder);

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      message: ['', Validators.required],
    });
  }
}
