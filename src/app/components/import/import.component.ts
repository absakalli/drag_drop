import { Component } from '@angular/core';
import { ElementComponent } from 'src/app/components/element/element.component';
import { PageComponent } from 'src/app/components/page/page.component';
import Data from '../../Positions.json';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css'],
})
export class ImportComponent {
  elementComponent: ElementComponent;
  pageComponent: PageComponent;

  import() {
    //sayfada bulunan elementleri json dosyası olarak dışarı aktarır
    this.pageComponent.page = Data.Page;
    this.pageComponent._pageColor = this.pageComponent.page.backgroundColor;
    this.pageComponent._pageHeight = this.pageComponent.page.pageHeight;
    this.pageComponent._pageWidth = this.pageComponent.page.pageWidth;
    this.elementComponent.elements = [...Data.Elements];
  }
}
