import { Component, inject } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { OverlayService } from '../../../services/overlay.service';

@Component({
  selector: 'app-header',
  imports: [NavbarComponent, ButtonComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  name = ['T', 'h', 'u', 'l', 'a', 'n', 'i'];

  overlayService = inject(OverlayService);

  isMobileMenuActive = false;
  toggleMobileMenu() {
    this.isMobileMenuActive = !this.isMobileMenuActive;
    this.overlayService.overlayState = this.isMobileMenuActive;
  }
}
