import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.sass']
})
export class UserDetailsComponent implements OnChanges {

  @Input() user;

  constructor() { }

  ngOnChanges() {
    console.log( this.user );
  }

}
