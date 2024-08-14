import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  blogPosts = [
    {
      title: 'Understanding Zoonotic and Safeguarding Your Health',
      image: 'assets/img/blog/h2_blog_post01.jpg',
      date: '25th Aug, 2024',
      author: 'admin',
      categories: ['Pet', 'Medical'],
      excerpt:
        'Duis aute irure dolor in reprehenderit innera voWe care for the growing needs of our comm unitye build systems.',
    },
    // Add more blog posts...
  ];
}
