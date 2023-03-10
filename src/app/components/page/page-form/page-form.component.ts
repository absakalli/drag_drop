import { Component, HostListener } from '@angular/core';
import { PageComponent } from '../page.component';

@Component({
  selector: 'app-page-form',
  templateUrl: './page-form.component.html',
  styleUrls: ['./page-form.component.css'],
})
export class PageFormComponent {
  @HostListener('document:keydown.escape') escapeHandle() {
    this._isPageFormHidden = true;
  }
  pageComponent: PageComponent;
  _isPageFormHidden: any;

  ngOnInit() {
    this._isPageFormHidden = true;
  }

  openPageForm() {
    //sayfa set formunu açar
    this._isPageFormHidden = false;
  }

  closePageForm() {
    //sayfa set formunu kapar
    this._isPageFormHidden = true;
  }
}
