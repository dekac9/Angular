import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  onCreatePost(postData: { title: string; content: string }) {
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
    this.http.get('https://ng-backend-projct-start-default-rtdb.firebaseio.com/posts.json').subscribe(posts=>{console.log(posts);})
  }
}
