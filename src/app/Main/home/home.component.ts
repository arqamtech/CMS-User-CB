import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/Services/Posts/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(
    private postService: PostsService,

  ) {
    this.getPosts();

  }

  ngOnInit() {
  }
  posts;

  getPosts = () => this.postService.getPosts().subscribe(res => (this.posts = res));
  preview = (id) => window.open(`post/${id}`)

}
