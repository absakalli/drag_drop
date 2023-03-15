import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { _Page } from '../models/page.model';

@Injectable({
  providedIn: 'root',
})
export class PageService {
  @ViewChild('box') box: ElementRef;
  page: _Page;
  _pageWidth: any;
  _pageHeight: any;
  _pageWidthPx: any;
  _pageHeightPx: any;
  _pageColor: any;
  isHidden = true;

  constructor() {}
}
