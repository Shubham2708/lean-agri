import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { PostServiceService } from '../post-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  public newtitle:any;
  public newbody:any;
  public flag:number;
  public newUserId:number;

  constructor(private post_service:PostServiceService, private router:Router) { }

  ngOnInit() {
  }

  public createPost=()=>{
    let createPostBody = {
      body:this.newbody,
      title:this.newtitle,
      userId:this.newUserId
    }
    this.post_service.createPost(createPostBody).subscribe((createdPost)=>{
      console.log("api response for create")
      console.log(createdPost);
      this.flag=1;
      setTimeout(() => {
        this.router.navigate(['/all-post'])
      }, 4000);
    })
    
  }
}
