import { Component } from '@angular/core';
import { Blog } from 'src/app/models/blog.model';
import { DBListBasecomponent } from '../DBListBaseComponent';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent extends DBListBasecomponent<Blog> {

  getType() {
    return Blog.prototype;
  }

  onModelUpdate(data: any) {
    const blog = new Blog(data);
    if (blog.blogDate ) blog.blogDate = new Date(data["blogDate"].seconds * 1000);
    return blog;
  }
  
}
