import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostServiceService } from '../post-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-all-post',
  templateUrl: './get-all-post.component.html',
  styleUrls: ['./get-all-post.component.css']
})
export class GetAllPostComponent implements OnInit {

  public allPost:any;
  constructor(private post_service_http:PostServiceService, public router:Router) { }

  ngOnInit() {
    this.getAllPost();
  }

  public getAllPost=()=>{
    this.post_service_http.getAllPostDetails().subscribe((data)=>{
      console.log("api response for getting all post");
      console.log(data);
      this.allPost=data;
    });
  }

  public redirectToDetails=(valueOfId,valueOfUserId)=>{
    this.post_service_http.valueOfUserId=valueOfUserId;
    this.post_service_http.valueOfIdForPost=valueOfId;
  }
  
}
