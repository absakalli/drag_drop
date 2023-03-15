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
    this.getBgProp(element);
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

  getBgProp(element: any) {
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
}
