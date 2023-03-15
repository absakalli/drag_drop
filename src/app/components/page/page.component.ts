import { Component, ElementRef, ViewChild } from '@angular/core';
import { _Page } from 'src/app/models/page.model';
import { ElementService } from 'src/app/services/element.service';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent {
  @ViewChild('box') box: ElementRef;
  constructor(
    public pageServices: PageService,
    public elmServices: ElementService
  ) {
    this.pageServices.page = new _Page('29.7', '21', '#460707');
    this.getPageProp();
  }

  ngAfterViewInit() {
    this.pageServices.box = this.box;
    this.pageServices.getPageSizePx();
  }

  getPageProp() {
    this.pageServices._pageHeight = this.pageServices.page.pageHeight;
    this.pageServices._pageWidth = this.pageServices.page.pageWidth;
    this.pageServices._pageColor = this.pageServices.page.backgroundColor;
  }
}
