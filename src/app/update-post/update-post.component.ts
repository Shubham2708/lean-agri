import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { PostServiceService } from '../post-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  public newtitle:any;
  public newbody:any;
  public flag:number;

  constructor(private post_service:PostServiceService,private router:Router) { }

  ngOnInit() {
  }

  public editedValue=()=>{
    let bodyOfPost = {
      body:this.newbody,
      title:this.newtitle,
      userId:this.post_service.valueOfUserId
    }
    this.post_service.editPost(bodyOfPost).subscribe((data)=>{
      console.log("api response for edit")
      console.log(data);
      this.flag=1;
      setTimeout(() => {
        this.router.navigate(['/all-post'])
      }, 4000);
    })
  }

}
