import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../ui/button/button.component';
import { SectionInfoComponent } from '../../shared/section-info/section-info.component';
import { NgClass } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-form',
  imports: [
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

  sendEmail() {
    if (this.contactForm.invalid) {
      alert('Please fill out all fields correctly.');
      return;
    }

    emailjs
      .send(
        'service_8mhlvub',
        'template_zwbgkcj',
        this.contactForm.value,
        'pL_LER6KeBstCSd0W'
      )
      .then((response) => {
        console.log('Email sent successfully!', response);
        alert('Message sent successfully!');
        console.log(this.contactForm.value);
        this.contactForm.reset();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send message.');
      });
  }
}
