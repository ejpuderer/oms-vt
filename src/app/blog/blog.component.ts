import { Component, OnInit } from '@angular/core';
import { ShowListBase } from '../show-list-base';
import { Blog } from '../models/blog.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent extends ShowListBase<Blog> {
  
  getType() { return Blog.prototype }

  onListUpdate() { 
    this.expandedView = [];
    for (let doc of this.availableDocs) {
      this.expandedView.push(false);
    }
  }

  onModelUpdate(data: any) {
    const blog = new Blog(data);
    if (blog.blogDate) blog.blogDate = new Date(data["blogDate"].seconds * 1000);
    return blog;
  }

  expandedView: boolean[] = [];

  expandClick(index: number) {
    this.expandedView[index] = !this.expandedView[index];
  }

}
