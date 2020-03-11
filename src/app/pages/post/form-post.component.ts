import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css']
})
export class FormPostComponent implements OnInit {

  title = 'Rellena todos los campos.';
  post: Post = new Post();

  constructor(private postService: PostService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public create() {
    // Método create.
    this.postService.postPost(this.post).subscribe(
      response => {
        // Navegando a otra pagina desde el componente.
        this.router.navigate(['/posts']);
      }
    );
  }
}
