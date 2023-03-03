import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { _DisposeViewRepeaterStrategy } from '@angular/cdk/collections';
import { __spreadArray } from 'tslib';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import exportFromJSON from 'export-from-json';
import Data from '../../Positions.json';

@Component({
  selector: 'add-div',
  templateUrl: './add-div.component.html',
  styleUrls: ['./add-div.component.css'],
})
export class AddDiv implements OnInit {
  @ViewChildren('elements') _elements: QueryList<ElementRef>;
  @ViewChild('box') box: ElementRef;
  @HostListener('document:keydown.escape') escapeHandle() {
    this.isHiddenP = true;
    this.isHiddenD = true;
  }

  elements: _Element[];
  element: _Element;
  page: _Page;
  //#region Page Var

  _bgP: any;
  _widthP: any;
  _heightP: any;
  _bgUrlP: any;
  _bgColorP: any;
  isHiddenP: any;

  //#endregion
  //#region Element Var

  _id: any;
  _tip: any;
  _isI: any;
  _isB: any;
  _isUL: any;
  _span: any;
  _font: any;
  _punto: any;
  _index: any;
  _layer: any;
  _widthD: any;
  _heightD: any;
  _spanLoc: any;
  _bg: any;
  _bgUrlD: any;
  _bgColorD: any;
  isHiddenD: any;
  isHiddenID: any;
  isHiddenCD: any;
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

  //#endregion

  //#region Element işlemleri

  ngOnInit() {
    this.page = new _Page('29.7', '21', '#460707');
    this._heightP = this.page.heightP;
    this._widthP = this.page.widthP;
    this._bgColorP = this.page.bgColorP;
    this.elements = [];
    this.isHiddenD = true;
    this.isHiddenP = true;
    this.isHiddenID = true;
    this.isHiddenCD = true;
  }

  jsPdf() {
    //HTML to PDF
    html2canvas(this.box.nativeElement).then((canvas) => {
      let PDF = new jsPDF('p', 'cm', [this._heightP, this._widthP]);
      PDF.addImage(canvas, 'JPEG', 0, 0, 0, 0);
      window.open(PDF.output('bloburl'));
    });
  }

  addElement() {
    //element ekler
    this.element = new _Element(
      crypto.randomUUID(),
      150,
      50,
      '',
      '0',
      '#000000'
    );
    this.elements.push(this.element);
  }

  removeElement() {
    //seçili elementi siler
    this.elements.splice(this._index, 1);
    this.clearFieldElement();
  }

  import() {
    //sayfada bulunan elementleri json dosyası olarak dışarı aktarır
    this.page = Data.Page;
    this._bgColorP = this.page.bgColorP;
    this._heightP = this.page.heightP;
    this._widthP = this.page.widthP;
    this.elements = [...Data.Elements];
  }

  export() {
    //json dosyasındaki elementleri içeri aktarır
    const data = { Page: this.page, Elements: this.elements };
    const fileName = 'Div_Att';
    const exportType = 'json';
    exportFromJSON({ data, fileName, exportType });
  }

  //#endregion
  //#region Page ayarları ve özellikleri get set

  openPageForm() {
    //sayfa set formunu açar
    this.isHiddenP = false;
  }

  closePageForm() {
    //sayfa set formunu kapar
    this.isHiddenP = true;
  }

  setPageProp() {
    //içerisindeki elementleri siler ve girilen değerlerden yeni bir sayfa oluşturur
    this.elements = [];
    this.page.widthP = this._widthP;
    this.page.heightP = this._heightP;
    this.page.bgColorP = this._bgColorP;
    this.isHiddenP = true;
    this.clearFieldElement();
  }

  clearFieldElement() {
    //input field ve formun içerisini temizler
    this._bg = '';
    this._id = null;
    this._tip = '';
    this._span = '';
    this._layer = '';
    this._bgColorD = '';
    this._bgUrlD = '';
    this._widthD = '';
    this._heightD = '';
    this._spanLoc = '';
    this._punto = '';
    this._font = '';
    this._isB = false;
    this._isI = false;
    this._isUL = false;
  }

  //#endregion
  //#region Element ayarları ve özellikleri get set

  openDivForm() {
    //element set formunu açar
    this.isHiddenD = false;
    return false;
  }

  closeDivForm() {
    //element set formunu kapar
    this.isHiddenD = true;
  }

  setDivProp(element: any) {
    //düzenle butonuna basıldığında girilen değerleri elemente atar
    if (this._id != undefined || null || '') {
      element = this.element;
      this.isHiddenD = true;
      element.tip = this._tip;
      element.span = this._span;
      element.font = this._font;
      element.punto = this._punto;
      element.layer = this._layer;
      element.spanLoc = this._spanLoc;
      // element.bgUrlD = 'url(' + this._bgUrlD + ')';
      this.setSpanLoc();
      this.setSpanProp();
      this.setBG(element);
      this.getBG(element);
    } else {
      alert('Lütfen düzenlemek istedğiniz elementi seçiniz.');
    }
  }

  getDivProp(element: any, i: any) {
    //tıklanan elementin özelliklerini forma yazar
    this.element = element;
    this._index = i;
    const _elements = this._elements.toArray();
    var matrix = new WebKitCSSMatrix(
      _elements[i].nativeElement.style.transform
    );
    element.heightD = _elements[i].nativeElement.offsetHeight;
    element.widthD = _elements[i].nativeElement.offsetWidth;
    element.top = matrix.m42;
    element.left = matrix.m41;
    this._id = this.element.id;
    this._tip = this.element.tip;
    this._span = this.element.span;
    this._font = this.element.font;
    this._punto = this.element.punto;
    this._layer = this.element.layer;
    this._widthD = this.element.widthD;
    this._heightD = this.element.heightD;
    this._spanLoc = this.element.spanLoc;
    this.getSpanProp();
    this.getBG(element);
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

  setSpanLoc() {
    //tıklanan elementin içeriğini seçilen konuma taşır
    switch (this._spanLoc) {
      case 'SagUst':
        this.element.spanTop = 10;
        this.element.spanLeft = null;
        this.element.spanRight = 0;
        this.element.spanBottom = null;
        break;
      case 'SagAlt':
        this.element.spanTop = null;
        this.element.spanLeft = null;
        this.element.spanRight = 0;
        this.element.spanBottom = 10;
        break;
      case 'SolUst':
        this.element.spanTop = 10;
        this.element.spanLeft = 0;
        this.element.spanRight = null;
        this.element.spanBottom = null;
        break;
      case 'SolAlt':
        this.element.spanTop = null;
        this.element.spanLeft = 0;
        this.element.spanRight = null;
        this.element.spanBottom = 10;
        break;
      case 'Orta':
        this.element.spanTop = null;
        this.element.spanLeft = null;
        this.element.spanRight = null;
        this.element.spanBottom = null;
        break;
      default:
        break;
    }
  }

  setSpanProp() {
    //element içeriğinin özelliklerini ayarlar
    if (this._isB) {
      this.element.fontWeight = 'bold';
    } else {
      this.element.fontWeight = '';
    }
    if (this._isI) {
      this.element.fontStyle = 'italic';
    } else {
      this.element.fontStyle = '';
    }
    if (this._isUL) {
      this.element.textDecoration = 'underline';
    } else {
      this.element.textDecoration = '';
    }
  }

  getSpanProp() {
    //element içeriğinin özellikelerini çeker
    if (this.element.fontWeight) {
      this._isB = true;
    } else {
      this._isB = false;
    }
    if (this.element.fontStyle) {
      this._isI = true;
    } else {
      this._isI = false;
    }
    if (this.element.textDecoration) {
      this._isUL = true;
    } else {
      this._isUL = false;
    }
  }

  changeBgType(bgType: any) {
    //elementin arkaplan şeklini değiştirdiğine uygun alanın görünürlüğünü açar
    switch (bgType) {
      case 'img':
        this.isHiddenID = false;
        this.isHiddenCD = true;
        break;
      case 'color':
        this.isHiddenCD = false;
        this.isHiddenID = true;
        break;
      case 'trans':
        this.isHiddenCD = true;
        this.isHiddenID = true;
        break;
      default:
        break;
    }
  }

  setBG(element: any) {
    //elementin arkaplanını seçilen içerik olarak değiştirir
    element.bg = this._bg;
    switch (this._bg) {
      case 'img':
        element.bgUrlD = this._bgUrlD;
        element.bgColorD = '#00000000';
        this._bgColorD = '';
        this._bgUrlD = element.bgUrlD;
        break;
      case 'color':
        element.bgColorD = this._bgColorD;
        element.bgUrlD = '';
        this._bgUrlD = '';
        this._bgColorD = element.bgColor;
        break;
      case 'trans':
        element.bgColorD = '#00000000';
        element.bgUrlD = '';
        this._bgUrlD = '';
        this._bgColorD = 'Transparan';
        break;
      default:
        break;
    }
  }

  getBG(element: any) {
    //elementin arkaplanını forma yazar
    switch (element.bg) {
      case 'img':
        this._bgUrlD = element.bgUrlD;
        this._bgColorD = '';
        this._bg = 'img';
        this.isHiddenID = false;
        this.isHiddenCD = true;
        break;
      case 'color':
        this._bgUrlD = '';
        this._bgColorD = element.bgColorD;
        this._bg = 'color';
        this.isHiddenID = true;
        this.isHiddenCD = false;
        break;
      case 'trans':
        this._bgUrlD = '';
        this._bgColorD = 'Transparan';
        this._bg = 'trans';
        this.isHiddenID = true;
        this.isHiddenCD = true;
        break;
      default:
        break;
    }
  }

  //#endregion

  //#endregion
}

export class _Element {
  id: any;
  tip: any;
  top: any;
  left: any;
  span: any;
  font: any;
  punto: any;
  fontWeight: any;
  fontStyle: any;
  textDecoration: any;
  spanTop: any;
  spanLeft: any;
  spanRight: any;
  spanBottom: any;
  layer: any;
  heightD: any;
  widthD: any;
  spanLoc: any;
  bgColorD: any;
  bgUrlD: any;
  bg: any;

  constructor(
    id: any,
    widthD: any,
    heightD: any,
    bgUrlD: any,
    layer: any,
    bgColorD: any
  ) {
    this.id = id;
    this.widthD = widthD;
    this.heightD = heightD;
    this.top = '';
    this.left = '';
    this.bgUrlD = bgUrlD;
    this.layer = layer;
    this.bgColorD = bgColorD;
    this.spanLoc = 'Orta';
    this.span = 'Drag & Drop';
    this.tip = 'Yazi';
    this.bg = 'color';
    this.punto = 25;
    this.font = 'Arial';
    this.fontWeight = '';
    this.fontStyle = '';
    this.textDecoration = '';
    this.spanTop = null;
    this.spanBottom = null;
    this.spanLeft = null;
    this.spanRight = null;
  }
}

class _Page {
  heightP: any;
  widthP: any;
  bgColorP: any;

  constructor(heightP: any, widthP: any, bgColorP: any) {
    this.heightP = heightP;
    this.widthP = widthP;
    this.bgColorP = bgColorP;
  }
}
