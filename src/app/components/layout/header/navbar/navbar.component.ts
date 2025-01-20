import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../../ui/button/button.component';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, NgClass, ButtonComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  navigationLinks: { name: string; path: string }[] = [
    { name: 'home', path: '' },
    { name: 'about me', path: '/about' },
    { name: 'portfolio', path: '/portfolio' },
    // { name: 'contact me', path: '/contact' },
  ];

  @Input() isMobileMenuActive!: boolean;
}
