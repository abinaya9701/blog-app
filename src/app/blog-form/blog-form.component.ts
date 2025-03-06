import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h2>Add New Blog Post</h2>
    <form [formGroup]="blogForm" (ngSubmit)="onSubmit()">
      <input formControlName="title" placeholder="Title" />
      <textarea formControlName="content" placeholder="Content"></textarea>
      <input formControlName="author" placeholder="Author" />
      <input formControlName="category" placeholder="Category" />
      <button type="submit" [disabled]="blogForm.invalid">Add Post</button>
    </form>
  `,
  styles: [`
    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    input, textarea {
      padding: 10px;
      border-radius: 4px;
      border: 1px solid #ccc;
    }
    button {
      padding: 10px;
      border: none;
      background: #28a745;
      color: white;
      border-radius: 4px;
      cursor: pointer;
    }
    button[disabled] {
      background: #ccc;
    }
  `]
})
export class BlogFormComponent {
  blogForm: FormGroup;

  constructor(private fb: FormBuilder, private blogService: BlogService) {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      author: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.blogForm.valid) {
      this.blogService.addPost({
        ...this.blogForm.value,
        date: new Date()
      });
      this.blogForm.reset();
    }
  }
}
