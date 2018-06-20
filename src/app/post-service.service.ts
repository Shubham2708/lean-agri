import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpParams} from '@angular/common/http';

@Injectable()
export class PostServiceService {
  
  public valueOfIdForPost:any;
  public valueOfUserId:any;
  public headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
  private url = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http_service:HttpClient) { }

  //service to get all post
  public getAllPostDetails=()=>{
    let post_details = this.http_service.get(this.url);
    return post_details;
  }

  //service to get single postdetails
    public getSinglePostDetails=()=>{
      let post_details = this.http_service.get(this.url+`/${this.valueOfIdForPost}`);
      return post_details;
    }
   
  //service to get single postComments  
    public getSinglePostComments=()=>{
      let post_comments = this.http_service.get(this.url+`/${this.valueOfIdForPost}/comments`);
      return post_comments;
    }

  //edit post 
    public editPost=(body)=>{
      let edit_post = this.http_service.put(this.url+`/${this.valueOfIdForPost}`,body);
      return edit_post;
    }  

  //create post 
  public createPost=(body)=>{
    let create_post = this.http_service.post(this.url,body);
    return create_post;
  }  

}
