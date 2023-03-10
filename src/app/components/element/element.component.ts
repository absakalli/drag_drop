import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { _Element } from 'src/app/models/element.model';
import { ElementFormComponent } from './element-form/element-form.component';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css'],
})
export class ElementComponent {
  @ViewChildren('elements') _elements: QueryList<ElementRef>;

  elementFormComponent: ElementFormComponent;
  public elements: _Element[];
  public element: _Element;

  _id: any;
  _tip: any;
  _isItalic: any;
  _isBold: any;
  _isUnderline: any;
  _text: any;
  _font: any;
  _punto: any;
  _index: any;
  _layer: any;
  _width: any;
  _height: any;
  _textLoc: any;
  _elementBg: any;
  _bgUrl: any;
  _bgColor: any;
  _textColor: any;
  _isUrlHidden: any;
  _isColorHidden: any;

  ngOnInit() {
    this.elements = [];
    this._isUrlHidden = true;
    this._isColorHidden = true;
  }

  addElement() {
    //element ekler
    this.element = new _Element(
      crypto.randomUUID(),
      150,
      50,
      '',
      '0',
      '#000000',
      0,
      0
    );
    this.elements.push(this.element);
  }

  removeElement() {
    //seçili elementi siler
    this.elements.splice(this._index, 1);
    this.clearElementField();
  }

  clearElementField() {
    //input field ve formun içerisini temizler
    this._elementBg = '';
    this._id = null;
    this._tip = '';
    this._text = '';
    this._layer = '';
    this._bgColor = '';
    this._bgUrl = '';
    this._width = '';
    this._height = '';
    this._textLoc = '';
    this._punto = '';
    this._font = '';
    this._isBold = false;
    this._isItalic = false;
    this._isUnderline = false;
  }

  setElementProp(element: any) {
    //düzenle butonuna basıldığında girilen değerleri elemente atar
    if (this._id != undefined || null || '') {
      element = this.element;
      this.elementFormComponent._isElmFormHidden = true;
      element.tip = this._tip;
      element.text = this._text;
      element.font = this._font;
      element.punto = this._punto;
      element.layer = this._layer;
      element.textLoc = this._textLoc;
      element.textColor = this._textColor;
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
    this.element = element;
    this._index = i;
    const _elements = this._elements.toArray();
    var matrix = new WebKitCSSMatrix(
      _elements[i].nativeElement.style.transform
    );
    element.height = _elements[i].nativeElement.offsetHeight;
    element.width = _elements[i].nativeElement.offsetWidth;
    element.top = matrix.m42;
    element.left = matrix.m41;
    this._id = this.element.id;
    this._tip = this.element.tip;
    this._text = this.element.text;
    this._font = this.element.font;
    this._punto = this.element.punto;
    this._layer = this.element.layer;
    this._width = this.element.width;
    this._height = this.element.height;
    this._textLoc = this.element.textLoc;
    this._textColor = this.element.textColor;
    this.getTextProp();
    this.getBg(element);
  }

  //#region Element özelliklerinin set get metodları

  layerUp() {
    //elementin katmanını arttırır
    this._layer = parseInt(this._layer + 1);
  }

  layerDown() {
    //elementin katmanını azaltır
    if (this._layer > 0) {
      this._layer = this._layer - 1;
    } else {
      alert("Element katmanı 0'dan küçük olamaz.");
      return;
    }
  }

  setTextLoc() {
    //tıklanan elementin içeriğini seçilen konuma taşır
    switch (this._textLoc) {
      case 'SagUst':
        this.element.textTop = 10;
        this.element.textLeft = null;
        this.element.textRight = 0;
        this.element.textBottom = null;
        break;
      case 'SagAlt':
        this.element.textTop = null;
        this.element.textLeft = null;
        this.element.textRight = 0;
        this.element.textBottom = 10;
        break;
      case 'SolUst':
        this.element.textTop = 10;
        this.element.textLeft = 0;
        this.element.textRight = null;
        this.element.textBottom = null;
        break;
      case 'SolAlt':
        this.element.textTop = null;
        this.element.textLeft = 0;
        this.element.textRight = null;
        this.element.textBottom = 10;
        break;
      case 'Orta':
        this.element.textTop = null;
        this.element.textLeft = null;
        this.element.textRight = null;
        this.element.textBottom = null;
        break;
      default:
        break;
    }
  }

  setTextProp() {
    //element içeriğinin özelliklerini ayarlar
    if (this._isBold) {
      this.element.textWeight = 'bold';
    } else {
      this.element.textWeight = '';
    }
    if (this._isItalic) {
      this.element.textStyle = 'italic';
    } else {
      this.element.textStyle = '';
    }
    if (this._isUnderline) {
      this.element.textDecor = 'underline';
    } else {
      this.element.textDecor = '';
    }
  }

  getTextProp() {
    //element içeriğinin özellikelerini çeker
    if (this.element.textWeight) {
      this._isBold = true;
    } else {
      this._isBold = false;
    }
    if (this.element.textStyle) {
      this._isItalic = true;
    } else {
      this._isItalic = false;
    }
    if (this.element.textDecor) {
      this._isUnderline = true;
    } else {
      this._isUnderline = false;
    }
  }

  changeBgType(bgType: any) {
    //elementin arkaplan şeklini değiştirdiğine uygun alanın görünürlüğünü açar
    switch (bgType) {
      case 'img':
        this._isUrlHidden = false;
        this._isColorHidden = true;
        break;
      case 'color':
        this._isColorHidden = false;
        this._isUrlHidden = true;
        break;
      case 'trans':
        this._isColorHidden = true;
        this._isUrlHidden = true;
        break;
      default:
        break;
    }
  }

  setBg(element: any) {
    //elementin arkaplanını seçilen içerik olarak değiştirir
    element.bg = this._elementBg;
    switch (this._elementBg) {
      case 'img':
        element.bgUrl = this._bgUrl;
        element.bgColor = '#00000000';
        this._bgColor = '';
        this._bgUrl = element.bgUrl;
        break;
      case 'color':
        element.bgColor = this._bgColor;
        element.bgUrl = '';
        this._bgUrl = '';
        this._bgColor = element.bgColor;
        break;
      case 'trans':
        element.bgColor = '#00000000';
        element.bgUrl = '';
        this._bgUrl = '';
        this._bgColor = 'Transparan';
        break;
      default:
        break;
    }
  }

  getBg(element: any) {
    //elementin arkaplanını forma yazar
    switch (element.bg) {
      case 'img':
        this._bgUrl = element.bgUrl;
        this._bgColor = '';
        this._elementBg = 'img';
        this._isUrlHidden = false;
        this._isColorHidden = true;
        break;
      case 'color':
        this._bgUrl = '';
        this._bgColor = element.bgColor;
        this._elementBg = 'color';
        this._isUrlHidden = true;
        this._isColorHidden = false;
        break;
      case 'trans':
        this._bgUrl = '';
        this._bgColor = 'Transparan';
        this._elementBg = 'trans';
        this._isUrlHidden = true;
        this._isColorHidden = true;
        break;
      default:
        break;
    }
  }

  //#endregion
}
