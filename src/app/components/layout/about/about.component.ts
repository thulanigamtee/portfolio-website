import { Component } from '@angular/core';
import { SectionInfoComponent } from '../../shared/section-info/section-info.component';

@Component({
  selector: 'app-about',
  imports: [SectionInfoComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  info: { subTitle: string; title: string; descripition: string } = {
    subTitle: 'Introduction',
    title: 'About me',
    descripition:
      'I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.',
  };
}
