import { Component, OnInit } from '@angular/core';
import { UsersService } from '../_shared/users.service'
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {
  
  users;
  chosenUser;
  
  constructor(
    private us: UsersService
  ) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers(){
    this.us.getUsers().toPromise()
      .then( response => {
        this.users = response.json();
      } )
  }

  chooseUser( u ){
    this.chosenUser = u;
  }

}
