import {
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  OnInit,
} from '@angular/core';
import { _Element } from 'src/app/models/element.model';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css'],
})
export class ElementComponent implements OnInit {
  @ViewChildren('elements') _elements: QueryList<ElementRef>;

  constructor(public elmServices: ElementService) {}

  ngOnInit() {
    this.elmServices.elements = [];
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
    this.elmServices.elements.splice(this.elmServices._index, 1);
    this.clearElementField();
  }

  clearElementField() {
    //input field ve formun içerisini temizler
    this.elmServices._elementBg = '';
    this.elmServices._id = null;
    this.elmServices._tip = '';
    this.elmServices._text = '';
    this.elmServices._layer = '';
    this.elmServices._bgColor = '';
    this.elmServices._bgUrl = '';
    this.elmServices._width = '';
    this.elmServices._height = '';
    this.elmServices._textLoc = '';
    this.elmServices._punto = '';
    this.elmServices._font = '';
    this.elmServices._isBold = false;
    this.elmServices._isItalic = false;
    this.elmServices._isUnderline = false;
  }

  setElementProp(element: any) {
    //düzenle butonuna basıldığında girilen değerleri elemente atar
    if (this.elmServices._id != undefined || null || '') {
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
      this.setBg(element);
      this.getBg(element);
    } else {
      alert('Lütfen düzenlemek istedğiniz elementi seçiniz.');
    }
  }

  getElementProp(element: any, i: any) {
    //tıklanan elementin özelliklerini forma yazar
    this.elmServices.element = element;
    this.elmServices._index = i;
    const _elements = this._elements.toArray();
    var matrix = new WebKitCSSMatrix(
      _elements[i].nativeElement.style.transform
    );
    element.height = _elements[i].nativeElement.offsetHeight;
    element.width = _elements[i].nativeElement.offsetWidth;
    element.top = matrix.m42;
    element.left = matrix.m41;
    this.elmServices._id = this.elmServices.element.id;
    this.elmServices._tip = this.elmServices.element.tip;
    this.elmServices._text = this.elmServices.element.text;
    this.elmServices._font = this.elmServices.element.font;
    this.elmServices._punto = this.elmServices.element.punto;
    this.elmServices._layer = this.elmServices.element.layer;
    this.elmServices._width = this.elmServices.element.width;
    this.elmServices._height = this.elmServices.element.height;
    this.elmServices._textLoc = this.elmServices.element.textLoc;
    this.elmServices._textColor = this.elmServices.element.textColor;
    this.getTextProp();
    this.getBg(element);
  }

  //#region Element özelliklerinin set get metodları

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
      case 'OelmServices.rta':
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

  getTextProp() {
    //element içeriğinin özellikelerini çeker
    if (this.elmServices.element.textWeight) {
      this.elmServices._isBold = true;
    } else {
      this.elmServices._isBold = false;
    }
    if (this.elmServices.element.textStyle) {
      this.elmServices._isItalic = true;
    } else {
      this.elmServices._isItalic = false;
    }
    if (this.elmServices.element.textDecor) {
      this.elmServices._isUnderline = true;
    } else {
      this.elmServices._isUnderline = false;
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

  setBg(element: any) {
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

  getBg(element: any) {
    //elementin arkaplanını forma yazar
    switch (element.bg) {
      case 'img':
        this.elmServices._bgUrl = element.bgUrl;
        this.elmServices._bgColor = '';
        this.elmServices._elementBg = 'img';
        this.elmServices._isUrlHidden = false;
        this.elmServices._isColorHidden = true;
        break;
      case 'color':
        this.elmServices._bgUrl = '';
        this.elmServices._bgColor = element.bgColor;
        this.elmServices._elementBg = 'color';
        this.elmServices._isUrlHidden = true;
        this.elmServices._isColorHidden = false;
        break;
      case 'trans':
        this.elmServices._bgUrl = '';
        this.elmServices._bgColor = 'Transparan';
        this.elmServices._elementBg = 'trans';
        this.elmServices._isUrlHidden = true;
        this.elmServices._isColorHidden = true;
        break;
      default:
        break;
    }
  }

  //#endregion
}
