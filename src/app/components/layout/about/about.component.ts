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
      'I am an experienced Full Stack Software Developer with almost three years of expertise in the field. Throughout my career, I have had the opportunity to work on a variety of projects, which has allowed me to develop a wide range of skills. I am passionate about creating high-quality software and am always looking for ways to improve my skills.',
  };
}
