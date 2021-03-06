import { Component, OnInit } from '@angular/core';

import { IMovie, IResponse, IGenre, IGenreResponse } from './movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  response :IResponse;
  movies:IMovie[];
  movie:IMovie;
  genreResponse: IGenreResponse;
  genres: IGenre[];
  sliderContent;

  errorMessage:string;

  constructor(private _movieService: MovieService){
  }

  ngOnInit() {
  this._movieService.searchMovies("beauty").subscribe( response => {
     this.response = response;
     this.movies = this.response.results;    
   },
   error => this.errorMessage = <any>error);

   this._movieService.getMovie("551").subscribe( data => {
     this.movie = data;
   });

  this._movieService.getGenre().subscribe( genres => {
    this.genreResponse = genres;
    this.genres = this.genreResponse.genres;
  });
  }

  controlLClicked()
  {
    let currentMargin = parseInt(this.sliderContent.nativeElement.style.marginLeft);
    if(isNaN(currentMargin)){
      currentMargin = 0;
    }

    let newMargin = currentMargin + 275;  
    this.sliderContent.nativeElement.style.marginLeft = newMargin+'px';
    alert('left clicked');
  }
  controlRClicked()
  {
    alert('right clicked');
  }

}
