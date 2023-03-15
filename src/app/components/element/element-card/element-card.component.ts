import { Component } from '@angular/core';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-element-card',
  templateUrl: './element-card.component.html',
  styleUrls: ['./element-card.component.css'],
})
export class ElementCardComponent {
  constructor(public elmServices: ElementService) {}

  isElementHidden() {
    this.elmServices.isHidden = false;
  }
}
