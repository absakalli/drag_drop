import { Component } from '@angular/core';
import { ElementService } from 'src/app/services/element.service';
import { PageService } from 'src/app/services/page.service';
import Data from '../../Positions.json';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css'],
})
export class ImportComponent {
  constructor(
    public elmServices: ElementService,
    public pageServices: PageService
  ) {}

  import() {
    //sayfada bulunan elementleri json dosyası olarak dışarı aktarır
    this.pageServices.page = Data.Page;
    this.pageServices._pageColor = this.pageServices.page.backgroundColor;
    this.pageServices._pageHeight = this.pageServices.page.pageHeight;
    this.pageServices._pageWidth = this.pageServices.page.pageWidth;
    this.elmServices.elements = [...Data.Elements];
  }
}
