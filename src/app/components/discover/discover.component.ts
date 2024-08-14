import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.scss',
})
export class DiscoverComponent {
  cities = [
    {
      name: 'New York City',
      image: 'assets/img/images/discover_img01.jpg',
      petCount: 50,
    },
    {
      name: 'Carolina City',
      image: 'assets/img/images/discover_img02.jpg',
      petCount: 19,
    },
    // Add more cities...
  ];
}
