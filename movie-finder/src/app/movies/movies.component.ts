import { Component, OnInit } from '@angular/core';

import { MovieService } from './movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies :any[];
  errorMessage:string;

  constructor(private _movieService: MovieService){}

  ngOnInit() {
  this._movieService.getMovies().subscribe( movies => {
     this.movies = movies;
   },
   error => this.errorMessage = <any>error);
  
  }

}
