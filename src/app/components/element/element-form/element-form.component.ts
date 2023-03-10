import { Component, HostListener } from '@angular/core';
import { ElementComponent } from '../element.component';

@Component({
  selector: 'app-element-form',
  templateUrl: './element-form.component.html',
  styleUrls: ['./element-form.component.css'],
})
export class ElementFormComponent {
  @HostListener('document:keydown.escape') escapeHandle() {
    this._isElmFormHidden = true;
  }
  elementComponent: ElementComponent;
  _isElmFormHidden: any;

  tips = [
    { value: 'Yazi', viewValue: 'Yazi' },
    { value: 'Fotoğraf', viewValue: 'Fotoğraf' },
    { value: 'Barkod', viewValue: 'Barkod' },
  ];
  locs = [
    { value: 'SagUst', viewValue: 'Sağ Üst' },
    { value: 'SagAlt', viewValue: 'Sağ Alt' },
    { value: 'SolUst', viewValue: 'Sol Üst' },
    { value: 'SolAlt', viewValue: 'Sol Alt' },
    { value: 'Orta', viewValue: 'Orta' },
  ];
  bgs = [
    { value: 'color', viewValue: 'Renk' },
    { value: 'img', viewValue: 'Fotoğraf' },
    { value: 'trans', viewValue: 'Transparan' },
  ];
  fonts = [
    { value: 'Arial', viewValue: 'Arial' },
    { value: 'Verdana', viewValue: 'Verdana' },
    { value: 'Tahoma', viewValue: 'Tahoma' },
    { value: 'Trebuchet MS', viewValue: 'Trebuchet MS' },
    { value: 'Times New Roman', viewValue: 'Times New Roman' },
    { value: 'Georgia', viewValue: 'Georgia' },
    { value: 'Garamond', viewValue: 'Garamond' },
    { value: 'Courier New', viewValue: 'Courier New' },
    { value: 'Brush Script MT', viewValue: 'Brush Script MT' },
    { value: 'Papyrus', viewValue: 'Papyrus' },
  ];

  ngOnInit() {
    this._isElmFormHidden = true;
  }

  openElementForm() {
    //element set formunu açar
    this._isElmFormHidden = false;
    return false;
  }

  closeElementForm() {
    //element set formunu kapar
    this._isElmFormHidden = true;
  }
}
