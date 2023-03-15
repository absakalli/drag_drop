import { Injectable } from '@angular/core';
import { _Page } from '../models/page.model';

@Injectable({
  providedIn: 'root',
})
export class PageService {
  page: _Page;
  _pageWidth: any;
  _pageHeight: any;
  _pageWidthPx: any;
  _pageHeightPx: any;
  _pageColor: any;
  isHidden = true;

  constructor() {}
}
