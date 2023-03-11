import { Component } from '@angular/core';
import { ElementComponent } from '../element.component';
import { ElementFormComponent } from '../element-form/element-form.component';

@Component({
  selector: 'app-element-card',
  templateUrl: './element-card.component.html',
  styleUrls: ['./element-card.component.css'],
})
export class ElementCardComponent {
  elementComponent = new ElementComponent();
  elementFormComponent = new ElementFormComponent();
}
