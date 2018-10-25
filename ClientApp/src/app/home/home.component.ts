import { CoreService } from './../services/core.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  url: string;
  output: string;

  constructor(private coreService: CoreService) { }

  submit() {
    this.coreService.getData(this.url).subscribe(x => console.log(x));
  }
}





