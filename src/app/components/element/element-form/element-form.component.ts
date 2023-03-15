import { Component } from '@angular/core';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-element-form',
  templateUrl: './element-form.component.html',
  styleUrls: ['./element-form.component.css'],
})
export class ElementFormComponent {
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

  constructor(public elmServices: ElementService) {}

  setElmProp(element: any) {
    //düzenle butonuna basıldığında girilen değerleri elemente atar
    element = this.elmServices.element;
    element.tip = this.elmServices._tip;
    element.text = this.elmServices._text;
    element.font = this.elmServices._font;
    element.punto = this.elmServices._punto;
    element.layer = this.elmServices._layer;
    element.textLoc = this.elmServices._textLoc;
    element.textColor = this.elmServices._textColor;
    this.setTextLoc();
    this.setTextProp();
    this.setBgProp(element);
    this.elmServices.isHidden = true;
  }

  layerUp() {
    //elementin katmanını arttırır
    this.elmServices._layer = parseInt(this.elmServices._layer + 1);
  }

  layerDown() {
    //elementin katmanını azaltır
    if (this.elmServices._layer > 0) {
      this.elmServices._layer = this.elmServices._layer - 1;
    } else {
      alert("Element katmanı 0'dan küçük olamaz.");
      return;
    }
  }

  setTextLoc() {
    //tıklanan elementin içeriğini seçilen konuma taşır
    switch (this.elmServices._textLoc) {
      case 'SagUst':
        this.elmServices.element.textTop = 10;
        this.elmServices.element.textLeft = null;
        this.elmServices.element.textRight = 0;
        this.elmServices.element.textBottom = null;
        break;
      case 'SagAlt':
        this.elmServices.element.textTop = null;
        this.elmServices.element.textLeft = null;
        this.elmServices.element.textRight = 0;
        this.elmServices.element.textBottom = 10;
        break;
      case 'SolUst':
        this.elmServices.element.textTop = 10;
        this.elmServices.element.textLeft = 0;
        this.elmServices.element.textRight = null;
        this.elmServices.element.textBottom = null;
        break;
      case 'SolAlt':
        this.elmServices.element.textTop = null;
        this.elmServices.element.textLeft = 0;
        this.elmServices.element.textRight = null;
        this.elmServices.element.textBottom = 10;
        break;
      case 'Orta':
        this.elmServices.element.textTop = null;
        this.elmServices.element.textLeft = null;
        this.elmServices.element.textRight = null;
        this.elmServices.element.textBottom = null;
        break;
      default:
        break;
    }
  }

  setTextProp() {
    //element içeriğinin özelliklerini ayarlar
    if (this.elmServices._isBold) {
      this.elmServices.element.textWeight = 'bold';
    } else {
      this.elmServices.element.textWeight = '';
    }
    if (this.elmServices._isItalic) {
      this.elmServices.element.textStyle = 'italic';
    } else {
      this.elmServices.element.textStyle = '';
    }
    if (this.elmServices._isUnderline) {
      this.elmServices.element.textDecor = 'underline';
    } else {
      this.elmServices.element.textDecor = '';
    }
  }

  changeBgType(bgType: any) {
    //elementin arkaplan şeklini değiştirdiğine uygun alanın görünürlüğünü açar
    switch (bgType) {
      case 'img':
        this.elmServices._isUrlHidden = false;
        this.elmServices._isColorHidden = true;
        break;
      case 'color':
        this.elmServices._isColorHidden = false;
        this.elmServices._isUrlHidden = true;
        break;
      case 'trans':
        this.elmServices._isColorHidden = true;
        this.elmServices._isUrlHidden = true;
        break;
      default:
        break;
    }
  }

  setBgProp(element: any) {
    //elementin arkaplanını seçilen içerik olarak değiştirir
    element.bg = this.elmServices._elementBg;
    switch (this.elmServices._elementBg) {
      case 'img':
        element.bgUrl = this.elmServices._bgUrl;
        element.bgColor = '#00000000';
        this.elmServices._bgColor = '';
        this.elmServices._bgUrl = element.bgUrl;
        break;
      case 'color':
        element.bgColor = this.elmServices._bgColor;
        element.bgUrl = '';
        this.elmServices._bgUrl = '';
        this.elmServices._bgColor = element.bgColor;
        break;
      case 'trans':
        element.bgColor = '#00000000';
        element.bgUrl = '';
        this.elmServices._bgUrl = '';
        this.elmServices._bgColor = 'Transparan';
        break;
      default:
        break;
    }
  }
}
