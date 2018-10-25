import { CoreService } from './../services/core.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  input: string;
  output: string;

  constructor(private coreService: CoreService) { }

  submit() {
    this.output = this.coreService.getData();
  }
}





