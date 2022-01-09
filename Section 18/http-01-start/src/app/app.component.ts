import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ map }from 'rxjs/operators';
import { Post } from './post.medel';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPosts()
  }

  onCreatePost(postData: Post) {
    // Send Http request
    //console.log(postData);
    this.http.post('https://ng-backend-projct-start-default-rtdb.firebaseio.com/posts.json',postData).subscribe(responseData=>{
      console.log(responseData);
    })
  }

  onFetchPosts() {
    this.getPosts()
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }

  private getPosts(){
    this.http.get('https://ng-backend-projct-start-default-rtdb.firebaseio.com/posts.json').pipe(map((responseData:{[key:string]:Post})=>{

      const postsArray=[];
      
      for (const key in responseData) {
if(responseData.hasOwnProperty(key)){
postsArray.push({...responseData[key],id:key})
}
        

      }
      return postsArray
    })).subscribe(posts=>{console.log(posts)})
  }
}
