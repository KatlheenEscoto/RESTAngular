import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // URLs.
  private urlGETPosts = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  // GET (Todos los posts).
  public getPosts(): Observable<Post[]> {
    return this.http.get(this.urlGETPosts).pipe(
      map(response => response as Post[]));
  }
}
