import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BlogService {

  constructor(private http: HttpClient) { }

  getContent() {
      return this.http.get('/blog/posts');
  }

}
