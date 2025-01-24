import { Component, inject } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { OverlayService } from '../../../services/overlay.service';
import { LogoComponent } from '../../shared/logo/logo.component';

@Component({
  selector: 'app-header',
  imports: [NavbarComponent, ButtonComponent, LogoComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  overlayService = inject(OverlayService);

  isMobileMenuActive = false;
  toggleMobileMenu() {
    this.isMobileMenuActive = !this.isMobileMenuActive;
    this.overlayService.overlayState = this.isMobileMenuActive;
  }
}
