import { Component, inject } from '@angular/core';
import { SectionInfoComponent } from '../../shared/section-info/section-info.component';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { NgStyle } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { project } from './project.model';
import { PortfolioService } from '../../../services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  imports: [SectionInfoComponent, NgStyle],
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent {
  projects: project[] = [];
  portfolioService = inject(PortfolioService);

  info: { subTitle: string; title: string; descripition: string } = {
    subTitle: 'My portfolio',
    title: 'My latest work',
    descripition:
      'Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.',
  };

  private destroy$ = new Subject<void>();

  isDesktopWidth!: boolean;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 768px)'])
      .pipe(takeUntil(this.destroy$))
      .subscribe((state: BreakpointState) => {
        this.isDesktopWidth = state.matches;
      });
    this.portfolioService.getProjects().then((data) => (this.projects = data));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
