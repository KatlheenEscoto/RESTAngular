import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  // Variables.
  posts: Post[];


  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.obtenerPosts();
  }

  public obtenerPosts() {
    this.postService.getPosts().subscribe(
      response => {
        this.posts = response;
      }
    );
  }

}
