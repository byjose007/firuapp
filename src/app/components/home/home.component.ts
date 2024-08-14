import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { BlogComponent } from '../blog/blog.component';
import { PetsComponent } from '../pets/pets.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { CtaComponent } from '../cta/cta.component';
import { DiscoverComponent } from '../discover/discover.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutComponent,
    BlogComponent,
    PetsComponent,
    TestimonialsComponent,
    CtaComponent,
    DiscoverComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
