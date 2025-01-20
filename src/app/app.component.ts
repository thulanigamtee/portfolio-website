import { Component, inject } from '@angular/core';
import { HeaderComponent } from './components/layout/header/header.component';
import { OverlayService } from './services/overlay.service';
import { Subject, takeUntil } from 'rxjs';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, NgClass],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'portfolio-website';
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
