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
isFetching=false;
greska=null
ispisgreske=''

  

  constructor(private http: HttpClient, private postService:PostServiceService) {}

  ngOnInit() {
    this.isFetching=true
    this.postService.onFetchPostsService().subscribe(post=>{
      this.isFetching=false;
      this.loadedPosts=post})
  }

  onCreatePost(postData: Post) {
    // Send Http request
    //console.log(postData);
this.postService.onCreatePost(postData.title, postData.content);
 this.postService.onFetchPostsService().subscribe(post=>{
      this.isFetching=false;
      this.loadedPosts=post

    })

    }
  


   
  

  onFetchPosts() {
    this.isFetching=true
    this.postService.onFetchPostsService().subscribe(post=>{
      this.isFetching=false;
      this.loadedPosts=post

    }, error =>{this.greska=true;
    this.ispisgreske=error.error.error
    console.log(this.ispisgreske);
    ;});
    
   // this.getPosts()
    // Send Http request

  }

  onClearPosts() {
    this.postService.onBrisanje().subscribe(()=>{
      this.loadedPosts=[]
    })
    // Send Http requests

  }

  // private getPosts(){
  //   this.postService.onFetchPosts()
    
  // }
}
