import { Component } from '@angular/core';
import exportFromJSON from 'export-from-json';
import { ElementService } from 'src/app/services/element.service';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css'],
})
export class ExportComponent {
  constructor(
    public elmServices: ElementService,
    public pageServices: PageService
  ) {}

  export() {
    //json dosyasındaki elementleri içeri aktarır
    const data = {
      Page: this.pageServices.page,
      Elements: this.elmServices.elements,
    };
    const fileName = 'Div_Att';
    const exportType = 'json';
    exportFromJSON({ data, fileName, exportType });
  }
}
