import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService, BlogPost } from './blog.service';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent {
  post?: BlogPost;

  constructor(private route: ActivatedRoute, private blogService: BlogService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.post = this.blogService.getPostById(+id);
    }
  }
}
