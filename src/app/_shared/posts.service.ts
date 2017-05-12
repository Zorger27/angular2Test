import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostsService {

  constructor(
    private http: Http
  ) { }

  getPosts( id? ){
    if( id ){
      return this.http.get('https://jsonplaceholder.typicode.com/posts?userId='+id);
    }else{
      return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }
  }

}
