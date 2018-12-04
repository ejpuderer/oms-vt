import { Component } from '@angular/core';
import { ShowListBase } from '../show-list-base';
import { Blog } from '../models/blog.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent extends ShowListBase<Blog> {
  
  getType() { return Blog.prototype }

  blogSchema = {

  }

  postingSchema: any[];

  onListUpdate() { 
    this.expandedView = [];
    this.expandedView.fill(false, 0, this.availableDocs.length);
    this.postingSchema = [];
    for (let blog of this.availableDocs) {
      this.postingSchema.push({
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        'datePublished': blog.blogDate,
        'headline': blog.title,
        'articleBody': blog.contents
      })
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
