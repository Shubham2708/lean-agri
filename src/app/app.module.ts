import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes} from  '@angular/router';
import { AppComponent } from './app.component';
import { GetAllPostComponent } from './get-all-post/get-all-post.component';
import { PostDetailsCommentsComponent } from './post-details-comments/post-details-comments.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { HttpClientModule } from '@angular/common/http';
import { PostServiceService } from './post-service.service';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GetAllPostComponent,
    PostDetailsCommentsComponent,
    CreatePostComponent,
    UpdatePostComponent,
    
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'all-post', component:GetAllPostComponent},
      {path:'', redirectTo:'/all-post',pathMatch:'full'},
      {path:'postdetail-comments',component:PostDetailsCommentsComponent},
      {path:'create-post',component:CreatePostComponent},
      {path:'update-post',component:UpdatePostComponent}
    ])
  ],
  providers: [PostServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
