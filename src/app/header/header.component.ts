import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  // str:string = 'String';
  // num:number = 5;
  // bool:boolean = true;
  // arr:number[] = [1,2,3];
  // x = 234;

  x = 10;

  getSmth(){
    return this.x
  }

  constructor() { }

  ngOnInit() {
    this.getSmth()
  }

}
