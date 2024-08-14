import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.scss',
})
export class PetsComponent {
  pets = [
    {
      name: 'Cute French Bulldog',
      image: 'assets/img/shop/shop_img01.jpg',
      gender: 'Male',
      breed: 'French',
      location: 'Bakersfield, California',
    },
    {
      name: 'Purebred Pussycat',
      image: 'assets/img/shop/shop_img02.jpg',
      gender: 'Female',
      breed: 'Germany',
      location: 'Central Park, New York',
    },
    // Add more pets...
  ];
}
