import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService, BlogPost } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Blog Posts</h2>
    <ul>
      <li *ngFor="let post of posts">
        <h3>{{ post.title }}</h3>
        <p>{{ post.content }}</p>
        <small>By {{ post.author }} on {{ post.date | date }}</small>
        <br />
        <strong>Category: {{ post.category }}</strong>
      </li>
    </ul>
  `,
  styles: [`
    h2 {
      text-align: center;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      border: 1px solid #ccc;
      padding: 15px;
      margin: 10px 0;
      border-radius: 8px;
    }
  `]
})
export class BlogListComponent implements OnInit {
  posts: BlogPost[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}
