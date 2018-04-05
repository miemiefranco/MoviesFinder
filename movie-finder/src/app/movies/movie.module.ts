import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { MoviesComponent } from './movies.component';
import { MovieService } from './movie.service';
import { MovieCardComponent } from './movie-card/movie-card.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'movies', component: MoviesComponent },
    ])
  ],
  declarations: [MoviesComponent, MovieCardComponent],
  providers:[
    MovieService
  ]
})
export class MovieModule { }
