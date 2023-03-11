import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { ElementComponent } from './components/element/element.component';
import { ImportComponent } from './components/import/import.component';
import { ExportComponent } from './components/export/export.component';
import { WebApiComponent } from './components/web-api/web-api.component';
import { PageComponent } from './components/page/page.component';
import { ToPDFComponent } from './components/to-pdf/to-pdf.component';
import { ElementFormComponent } from './components/element/element-form/element-form.component';
import { ElementCardComponent } from './components/element/element-card/element-card.component';
import { PageCardComponent } from './components/page/page-card/page-card.component';
import { PageFormComponent } from './components/page/page-form/page-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ImportComponent,
    ExportComponent,
    WebApiComponent,
    ToPDFComponent,
    ElementComponent,
    ElementFormComponent,
    ElementCardComponent,
    PageComponent,
    PageCardComponent,
    PageFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
