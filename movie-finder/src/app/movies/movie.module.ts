import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { MoviesComponent } from './movies.component';
import { MovieService } from './movie.service';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'movies', component: MoviesComponent },
    ])
  ],
  declarations: [MoviesComponent],
  providers:[
    MovieService
  ]
})
export class MovieModule { }
