import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ElementComponent } from 'src/app/components/element/element.component';
import { PageFormComponent } from './page-form/page-form.component';
import { _Page } from 'src/app/models/page.model';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  @ViewChild('box') box: ElementRef;  
  elementComponent = new ElementComponent();
  pageFormComponent: PageFormComponent;
  page: _Page;

  _pageWidth: any;
  _pageHeight: any;
  _pageWidthPx: any;
  _pageHeightPx: any;
  _pageColor: any;

  constructor() {
    this.page = new _Page('29.7', '21', '#460707');
    this.getPageProp();
  }

  ngOnInit() {
    this.pageFormComponent = new PageFormComponent();
  }

  getPageProp() {
    this._pageHeight = this.page.pageHeight;
    this._pageWidth = this.page.pageWidth;
    this._pageColor = this.page.backgroundColor;
  }

  getPageSizePx() {
    //sayfanın boyutunu pixel cinsinden alır
    this._pageHeightPx = this.box.nativeElement.offsetHeight;
    this._pageWidthPx = this.box.nativeElement.offsetWidth;
  }

  setPageProp() {
    //içerisindeki elementleri siler ve girilen değerlerden yeni bir sayfa oluşturur
    this.elementComponent.elements = [];
    this.page.pageWidth = this._pageWidth;
    this.page.pageHeight = this._pageHeight;
    this.page.backgroundColor = this._pageColor;
    this.pageFormComponent.closePageForm();
    this.elementComponent.clearElementField();
  }
}
