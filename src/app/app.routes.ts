import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PetsComponent } from './components/pets/pets.component';
import { BlogComponent } from './components/blog/blog.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'pets', component: PetsComponent },
  { path: 'blog', component: BlogComponent },
  { path: '**', redirectTo: '' },
];
