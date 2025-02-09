import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../ui/button/button.component';

@Component({
  selector: 'app-navbar',
  imports: [NgClass, ButtonComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  navigationLinks: { name: string; path: string }[] = [
    { name: 'home', path: 'home' },
    { name: 'about me', path: 'about' },
    { name: 'portfolio', path: 'portfolio' },
    // { name: 'contact me', path: '/contact' },
  ];

  @Input() isMobileMenuActive!: boolean;

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
