import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/Services/Posts/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {


  postId;

  constructor(
    private route: ActivatedRoute,
    private postServ: PostsService,
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postId = params['id'];
    });
    console.log(this.postId);
    this.getPost();
  }

  cPost;

  getPost = () =>
    this.postServ
      .getPost(this.postId)
      .subscribe(res => (this.cPost = res.data()));




}
