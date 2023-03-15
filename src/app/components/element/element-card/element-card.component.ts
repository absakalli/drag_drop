import { Component } from '@angular/core';
import { _Element } from 'src/app/models/element.model';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-element-card',
  templateUrl: './element-card.component.html',
  styleUrls: ['./element-card.component.css'],
})
export class ElementCardComponent {
  constructor(public elmServices: ElementService) {}

  openElmForm() {
    if (this.elmServices._id != undefined || null || '') {
      this.elmServices.isHidden = false;
    } else {
      alert('Lütfen düzenlemek istedğiniz elementi seçiniz.');
    }
  }

  addElement() {
    //element ekler
    this.elmServices.element = new _Element(
      crypto.randomUUID(),
      150,
      50,
      '',
      '0',
      '#000000',
      0,
      0
    );
    this.elmServices.elements.push(this.elmServices.element);
  }

  removeElement() {
    //seçili elementi siler
    if (this.elmServices._index != undefined || null || '') {
      this.elmServices.elements.splice(this.elmServices._index, 1);
      this.elmServices._index = null;
      this.elmServices.clearElementField();
    } else {
      alert('Lütfen düzenlemek istedğiniz elementi seçiniz.');
    }
  }
}
