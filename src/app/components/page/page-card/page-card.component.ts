import { Component } from '@angular/core';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-page-card',
  templateUrl: './page-card.component.html',
  styleUrls: ['./page-card.component.css'],
})
export class PageCardComponent {
  constructor(public pageServices: PageService) {}
}
