import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ElementService } from 'src/app/services/element.service';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-to-pdf',
  templateUrl: './to-pdf.component.html',
  styleUrls: ['./to-pdf.component.css'],
})
export class ToPDFComponent {
  constructor(
    public elmServices: ElementService,
    public pageServices: PageService
  ) {}

  jsPdf() {
    //HTML to PDF
    html2canvas(this.pageServices.box.nativeElement).then((canvas) => {
      let PDF = new jsPDF('p', 'cm', [
        this.pageServices._pageHeight,
        this.pageServices._pageWidth,
      ]);
      PDF.addImage(canvas, 'JPEG', 0, 0, 0, 0);
      window.open(PDF.output('bloburl'));
    });
  }
}
