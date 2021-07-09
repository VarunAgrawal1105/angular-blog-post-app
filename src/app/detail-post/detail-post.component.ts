import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PostService} from '../post.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {
  collection:any = [];
  data:any;
  // likes: any = 0;
  constructor(private router: ActivatedRoute, private post: PostService, private rout:Router) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id);
    this.post.getCurrentPost(this.router.snapshot.params.id).subscribe((result)=>{
      console.warn(result);
      this.collection = result
    })
  }

  deletePost(item: any){
    // console.warn(item);`
    // this.collection.splice(item-1,1);
    this.post.deletePost(item).subscribe((result)=>{
      this.rout.navigate(['/']);
    })
  }

  likePost(){
    this.post.getCurrentPost(this.router.snapshot.params.id).subscribe((result)=>{
      this.data = result;
      this.data.likes += 1;
      this.collection = this.data;
    })
    // this.post.updatePost(this.router.snapshot.params.id,this.data.likes).subscribe((result)=>{
    //   // this.rout.navigate(['/']);   
    // })
  }
}
