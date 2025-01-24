import { Component, inject } from '@angular/core';
import { HeaderComponent } from './components/layout/header/header.component';
import { OverlayService } from './services/overlay.service';
import { Subject, takeUntil } from 'rxjs';
import { NgClass } from '@angular/common';
import { HomeComponent } from './components/layout/home/home.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ContactFormComponent } from './components/layout/contact-form/contact-form.component';
import { PortfolioComponent } from './components/layout/portfolio/portfolio.component';
import { AboutComponent } from './components/layout/about/about.component';
import { LogoComponent } from './components/shared/logo/logo.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    NgClass,
    HomeComponent,
    FooterComponent,
    ContactFormComponent,
    PortfolioComponent,
    AboutComponent,
    LogoComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  isOverlayActive: boolean = false;
  private destroy$ = new Subject<void>();

  overlayService = inject(OverlayService);

  ngOnInit() {
    this.overlayService.overlay$
      .pipe(takeUntil(this.destroy$))
      .subscribe((state) => (this.isOverlayActive = state));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
