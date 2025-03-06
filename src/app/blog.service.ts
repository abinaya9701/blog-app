import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface BlogPost {
  title: string;
  content: string;
  author: string;
  date: Date;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogPosts = new BehaviorSubject<BlogPost[]>([
    {
      title: 'First Post',
      content: 'This is the content of the first post.xyz123',
      author: 'Admin',
      date: new Date(),
      category: 'General'
    }
  ]);

  getPosts(): Observable<BlogPost[]> {
    return this.blogPosts.asObservable();
  }

  addPost(post: BlogPost) {
    const currentPosts = this.blogPosts.value;
    this.blogPosts.next([post, ...currentPosts]);
  }
}
