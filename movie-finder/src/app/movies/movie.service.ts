import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { IMovie, IResponse, IGenre, IGenreResponse } from './movie';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class MovieService{
  private _apikey: string;
  private _baseServiceURL;
  private _serviceURL;

  constructor(private _http: HttpClient){
      this._apikey = '3d53b71d157acd7d7ecad78cf751cd14';
      this._baseServiceURL = 'https://api.themoviedb.org/3/'
  }
  
  getMovies(): Observable<IResponse>{
      return this._http.get<IResponse>(this._serviceURL)
      //.do( data => console.log(JSON.stringify(data)))
      .catch(this.handleError);
  }

  getPopularMovies(pageNumber:number = 1){
      var search = new URLSearchParams();
      search.set('api_key', this._apikey);
      search.set('page', pageNumber.toString());
    this._serviceURL = this._baseServiceURL + "movie/top_rated" +"?" +search.toString();
    return this._http.get<IResponse>(this._serviceURL)
           .catch(this.handleError);
  }

  searchMovies(searchStr: string, pageNumber:number = 1){
    var search = new URLSearchParams();
    search.set('api_key', this._apikey);
    search.set('query', searchStr);
    search.set('page', pageNumber.toString());
    this._serviceURL = this._baseServiceURL + "search/movie" +"?" +search.toString();
    return this._http.get<IResponse>(this._serviceURL)
         .catch(this.handleError);
  }

  getMovie(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this._apikey);
    this._serviceURL = this._baseServiceURL + "movie/" + id +"?" +search.toString();
    return this._http.get<IMovie>(this._serviceURL)
         .catch(this.handleError);
  }
  
  getGenre(){
    var search = new URLSearchParams();
    search.set('api_key', this._apikey);
    this._serviceURL = this._baseServiceURL + "genre/movie/list"  +"?" +search.toString();
    return this._http.get<IGenreResponse>(this._serviceURL)
         .do( data => console.log(JSON.stringify(data)))
         .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse)
  {
      console.log(err.message);
     return Observable.throw(err.message);
  }


}