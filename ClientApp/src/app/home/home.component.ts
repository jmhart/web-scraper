import { UrlData } from './../models/url-data';
import { CoreService } from './../services/core.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  url: string;
  data: UrlData = {
    url: '',
    html: ''
  };
  isDisabled: boolean;

  constructor(private coreService: CoreService) { }

  submit() {
    this.isDisabled = true;
    this.coreService.getData(this.url)
      .subscribe(data => {
        this.data = data;
      }, error => {
        alert("Error");
        this.isDisabled = false;
      }, () => {
        this.isDisabled = false;
      });
  }
}





