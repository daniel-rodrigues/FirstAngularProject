import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
})
export class DataBindingComponent {
  public countClick: number = 0;
  public urlImagem: string = "https://angular.io/assets/images/logos/angular/angular.svg";
  public name: string = "";

  addClick() {
    this.countClick++;
  }

  resetNumber() {
    this.countClick = 0;
  }

  keyUpEvent(event: any){
    this.name = event.target.value;
  }
}

