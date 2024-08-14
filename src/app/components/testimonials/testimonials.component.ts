import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  testimonials = [
    {
      content:
        'Duis aute irure dolor in repreerit in voluptate velitesse We understand that your irure dolor in repreerit in voluptate just about you',
      author: 'Brooklyn Simon',
      role: 'Designer',
      image: 'assets/img/images/h3_testi_author01.png',
    },
    // Add more testimonials...
  ];
}
