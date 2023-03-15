import { Component } from '@angular/core';
import { ElementService } from 'src/app/services/element.service';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-page-form',
  templateUrl: './page-form.component.html',
  styleUrls: ['./page-form.component.css'],
})
export class PageFormComponent {
  constructor(
    public pageServices: PageService,
    public elmServices: ElementService
  ) {}

  setPageProp() {
    //içerisindeki elementleri siler ve girilen değerlerden yeni bir sayfa oluşturur
    this.elmServices.elements = [];
    this.pageServices.page.pageWidth = this.pageServices._pageWidth;
    this.pageServices.page.pageHeight = this.pageServices._pageHeight;
    this.pageServices.page.backgroundColor = this.pageServices._pageColor;
    this.pageServices.isHidden = true;
    this.elmServices.clearElementField();
  }
}
