import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UsersService {

  constructor(
    private http: Http
  ) { }

  getUsers( id? ){
    if( id ){
      return this.http.get('https://jsonplaceholder.typicode.com/users/'+id)
    }else{
      return this.http.get('https://jsonplaceholder.typicode.com/users')
    }
  }

}
