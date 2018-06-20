import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostServiceService } from '../post-service.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details-comments',
  templateUrl: './post-details-comments.component.html',
  styleUrls: ['./post-details-comments.component.css']
})
export class PostDetailsCommentsComponent implements OnInit {

  public post : any;
  public comment:any;
  constructor(private post_service:PostServiceService) { }

  ngOnInit() {
    this.getPostDetails();
    this.getPostComments();
  }

  public getPostDetails=()=>{
    this.post_service.getSinglePostDetails().subscribe((details)=>{
      console.log("api response for single post detail")
      console.log(details);
      this.post=details;
    })
  }

  public getPostComments=()=>{
    this.post_service.getSinglePostComments().subscribe((comments)=>{
      console.log("api response for single post comments")
      console.log(comments);
      this.comment=comments;
    })
  }
}
