import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogFormComponent } from './blog-form/blog-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BlogListComponent, BlogFormComponent],
  template: `
    <div class="container">
      <h1>My Blog App</h1>
      <app-blog-form></app-blog-form>
      <app-blog-list></app-blog-list>
    </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      text-align: center;
    }
  `]
})
export class AppComponent {}
