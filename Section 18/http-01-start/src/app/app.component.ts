import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ map }from 'rxjs/operators';
import { Post } from './post.medel';
import { PostServiceService } from './post-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts:Post []= [];
isFetching=false

  

  constructor(private http: HttpClient, private postService:PostServiceService) {}

  ngOnInit() {
    this.getPosts()
  }

  onCreatePost(postData: Post) {
    // Send Http request
    //console.log(postData);
this.postService.onCreatePost(postData.title, postData.content)
  }

  onFetchPosts() {
    this.postService.onFetchPosts()
   // this.getPosts()
    // Send Http request

  }

  onClearPosts() {
    // Send Http requests
  }

  private getPosts(){
    this.postService.onFetchPosts()
    
  }
}
