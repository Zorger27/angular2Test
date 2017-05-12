import { Component, OnInit } from '@angular/core';
import { PostsService } from '../_shared/posts.service';
import { UsersService } from '../_shared/users.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass'],
  providers: [PostsService, UsersService]
})
export class PostsComponent implements OnInit {

  posts;
  userId;
  author;
  constructor(
    private ps: PostsService,
    private us: UsersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getUserId();
    this.getPosts();
  }
  
  getPosts(){
    if( !this.userId ){
      this.ps.getPosts().toPromise()
        .then( res => {
          this.posts = res.json();
        } )
    }else{
      this.ps.getPosts( this.userId ).toPromise()
      .then( res => {
        this.posts = res.json();
      } )
    }
  }
  getUserId(){
    this.route.params.subscribe( params => {
      this.userId = params["id"];
    } )
  }

}
