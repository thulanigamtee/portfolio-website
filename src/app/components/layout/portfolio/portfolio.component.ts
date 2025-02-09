import { Component } from '@angular/core';
import { SectionInfoComponent } from '../../shared/section-info/section-info.component';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { NgStyle } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  imports: [SectionInfoComponent, NgStyle],
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent {
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
  }

  projects: {
    image: string;
    name: string;
    description: string;
    technologies: string;
    site: string;
    code: string;
  }[] = [
    {
      image: 'assets/portfolio/audiophile.png',
      name: 'Audiophile E-commerce Website',
      description:
        'A modern, responsive e-commerce website for high-end audio products, built as part of a Frontend Mentor challenge. This project showcases a clean UI, smooth navigation, and a seamless shopping experience for users looking to buy premium headphones, speakers, and earphones.',
      technologies: 'Angular, TailwindCSS',
      site: 'https://audiophile-ecommerce-website-mu-ten.vercel.app/',
      code: 'https://github.com/thulanigamtee/audiophile-ecommerce-website',
    },
    {
      image: '/assets/portfolio/music-app.png',
      name: 'Full stack music player',
      description:
        'A full-stack music streaming application inspired by Spotify, built using Angular, Spring Boot, and PostgreSQL. This project provides a seamless user experience for discovering, playing, and managing music, with a modern UI and robust backend services.',
      technologies: 'Angular, Spring Boot, PostgreSQL, Bootstrap, 0Auth',
      site: '',
      code: 'https://github.com/thulanigamtee/spotify-clone-front',
    },
  ];

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
