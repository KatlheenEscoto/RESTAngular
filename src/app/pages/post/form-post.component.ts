import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css']
})
export class FormPostComponent implements OnInit {

  title = 'Rellena todos los campos.';
  post: Post = new Post();

  constructor() { }

  ngOnInit(): void {
  }

  public create() {
    console.log('Clicked!');
    console.log(this.post);
  }
}
