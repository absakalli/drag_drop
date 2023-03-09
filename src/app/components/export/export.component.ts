import { Component } from '@angular/core';
import exportFromJSON from 'export-from-json';
import { ElementComponent } from 'src/app/components/element/element.component';
import { PageComponent } from 'src/app/components/page/page.component';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css'],
})
export class ExportComponent {
  elementComponent: ElementComponent;
  pageComponent: PageComponent;

  export() {
    //json dosyasındaki elementleri içeri aktarır
    const data = {
      Page: this.pageComponent.page,
      Elements: this.elementComponent.elements,
    };
    const fileName = 'Div_Att';
    const exportType = 'json';
    exportFromJSON({ data, fileName, exportType });
  }
}
