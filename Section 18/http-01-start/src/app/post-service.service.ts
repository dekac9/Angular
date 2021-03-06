import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.medel';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http:HttpClient) { }


onCreatePost(naslov:string,sadrzaj:string){
const postData:Post={title:naslov, content:sadrzaj}
this.http.post<{name:string}>('https://ng-backend-projct-start-default-rtdb.firebaseio.com/posts.json',postData).subscribe((responseData)=>{
      console.log(responseData)

    })
this.http.get('https://ng-backend-projct-start-default-rtdb.firebaseio.com/posts.json').pipe(map((responseData:{(key:string):Post})=>{

      const postsArray:Post[]=[];
      
      for (const key in responseData) {
        if(responseData.hasOwnProperty(key)){
        postsArray.push({...responseData[key],id:key})
        }
        

      }
      console.log(responseData);
      return postsArray
    })).subscribe()  
}

onFetchPostsService(){
   
  return  this.http.get('https://ng-backend-projct-start-default-rtdb.firebaseio.com/posts.json').pipe(map((responseData:{(key:string):Post})=>{

      const postsArray:Post[]=[];
      
      for (const key in responseData) {
        if(responseData.hasOwnProperty(key)){
        postsArray.push({...responseData[key],id:key})
        }
        

      }
      console.log(responseData);
      return postsArray
    }))
}

onBrisanje(){
return this.http.delete('https://ng-backend-projct-start-default-rtdb.firebaseio.com/posts.json')

}

}
