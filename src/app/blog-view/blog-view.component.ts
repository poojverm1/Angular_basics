import { Component, OnInit, OnDestroy } from '@angular/core';
//import route related code
import {ActivatedRoute,Router} from "@angular/router";
import { BlogService } from '../blog.service';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  
})
export class BlogViewComponent implements OnInit,OnDestroy{

  public currentBlog;
  

  constructor(private _route:ActivatedRoute,private router:Router,public blogService:BlogService) {
console.log("constructor is called");
   }

   ngOnDestroy():void{
    console.log("Destroy from blog view is called");
   }

  ngOnInit() {
    console.log("nginit from blog view is called");

    //get blog id from
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
   this.currentBlog = this.blogService.getSingleInformation(myBlogId);
   console.log(this.currentBlog);
  }

 
}