import { Component } from "@angular/core";

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html'
})

export class PaletteComponent {
  public arrColors: Array<string>;

  constructor() {
    this.arrColors = ['#424242', '#4CAF50', '#2196F3', '#F5F5F5'];
  }

}