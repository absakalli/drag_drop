import { Component } from '@angular/core';
import { _Data } from 'src/app/models/data.model';
import { _Token } from 'src/app/models/token.model';
import { ElementService } from 'src/app/services/element.service';
import { WebApiService } from 'src/app/services/web-api.service';

@Component({
  selector: 'app-web-api',
  templateUrl: './web-api.component.html',
  styleUrls: ['./web-api.component.css'],
})
export class WebApiComponent {
  token: _Token;
  data: _Data;

  constructor(private service: WebApiService, private elmServices: ElementService) {}

  ngOnInit() {
    this.data = new _Data('hseyinsungur@gmail.com', '123456', 1, true);
    this.login();
  }

  login() {
    this.service.authentication(this.data).subscribe({
      next: (_token) => {
        this.token = _token;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getElements() {
    this.service.getElements(this.token.accessToken).subscribe({
      next: (elements) => {
        this.elmServices.elements = [...elements];
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  setElements() {
    this.elmServices.elements.forEach((element) => {
      this.service.setElements(element, this.token.accessToken).subscribe({
        next: (elements) => {
          console.log(elements);
        },
        error: (err) => {
          console.log(err);
        },
      });
    });
  }

  deleteElements() {
    if (this.elmServices._id != undefined || null || '') {
      this.service
        .deleteElements(this.elmServices._id, this.token.accessToken)
        .subscribe({
          next: (elements) => {
            console.log(elements);
          },
        });
    } else {
      alert('Lütfen düzenlemek istedğiniz elementi seçiniz.');
    }
  }
}
