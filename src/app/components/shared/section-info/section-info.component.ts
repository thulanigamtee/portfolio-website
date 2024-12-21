import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-info',
  imports: [],
  templateUrl: './section-info.component.html',
})
export class SectionInfoComponent {
  @Input() info: { subTitle: string; title: string; descripition: string } = {
    subTitle: '',
    title: '',
    descripition: '',
  };
}
