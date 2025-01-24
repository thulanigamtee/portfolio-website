import { Component, inject } from '@angular/core';
import { InputComponent } from '../../ui/input/input.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../ui/button/button.component';
import { SectionInfoComponent } from '../../shared/section-info/section-info.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  imports: [
    InputComponent,
    ButtonComponent,
    ReactiveFormsModule,
    SectionInfoComponent,
    NgClass,
  ],
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent {
  contactForm!: FormGroup;
  formBuilder = inject(FormBuilder);

  info: { subTitle: string; title: string; descripition: string } = {
    subTitle: 'Connect with me',
    title: 'Get in touch',
    descripition:
      "I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.",
  };

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      message: ['', Validators.required],
    });
  }
}
