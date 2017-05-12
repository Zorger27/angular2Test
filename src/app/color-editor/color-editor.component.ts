import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'color-editor',
  templateUrl: './color-editor.component.html',
  styleUrls: ['./color-editor.component.sass']
})
export class ColorEditorComponent implements OnInit {
  
  colors = [ 'white', 'red', 'green', 'blue' ];
  @Input() defaultColor = 'white';
  @Output() choosingColor = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  chooseColor( c ){
    this.defaultColor = c;
    this.choosingColor.emit( this.defaultColor );
  }

}
