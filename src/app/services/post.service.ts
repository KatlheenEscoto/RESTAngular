import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/post';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // URLs.
  private urlPosts = 'https://jsonplaceholder.typicode.com/posts';

  // Headers.
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  // GET (Todos los posts).
  public getPosts(): Observable<Post[]> {
    return this.http.get(this.urlPosts).pipe(
      map(response => response as Post[]));
  }

  // POST (Crear un post).
  public postPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.urlPosts, post, {headers: this.httpHeaders});
  }

}
