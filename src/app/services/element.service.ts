import { Injectable } from '@angular/core';
import { _Element } from '../models/element.model';

@Injectable({
  providedIn: 'root',
})
export class ElementService {
  elements: _Element[];
  element: _Element;
  public _id: any;
  public _tip: any;
  public _isItalic: any;
  public _isBold: any;
  public _isUnderline: any;
  public _text: any;
  public _font: any;
  public _punto: any;
  public _index: any;
  public _layer: any;
  public _width: any;
  public _height: any;
  public _textLoc: any;
  public _elementBg: any;
  public _bgUrl: any;
  public _bgColor: any;
  public _textColor: any;
  public _isUrlHidden = true;
  public _isColorHidden = true;
  public isHidden = true;

  constructor() {}

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
}
