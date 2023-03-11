import { Component } from '@angular/core';
import { PageFormComponent } from '../page-form/page-form.component';
import { PageComponent } from '../page.component';

@Component({
  selector: 'app-page-card',
  templateUrl: './page-card.component.html',
  styleUrls: ['./page-card.component.css'],
})
export class PageCardComponent {
  pageComponent = new PageComponent();
  pageFormComponent = new PageFormComponent();
}
