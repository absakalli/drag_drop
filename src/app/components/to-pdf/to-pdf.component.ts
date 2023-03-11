import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { PageComponent } from 'src/app/components/page/page.component';

@Component({
  selector: 'app-to-pdf',
  templateUrl: './to-pdf.component.html',
  styleUrls: ['./to-pdf.component.css'],
})
export class ToPDFComponent {
  pageComponent = new PageComponent();

  jsPdf() {
    //HTML to PDF
    html2canvas(this.pageComponent.box.nativeElement).then((canvas) => {
      let PDF = new jsPDF('p', 'cm', [
        this.pageComponent._pageHeight,
        this.pageComponent._pageWidth,
      ]);
      PDF.addImage(canvas, 'JPEG', 0, 0, 0, 0);
      window.open(PDF.output('bloburl'));
    });
  }
}
