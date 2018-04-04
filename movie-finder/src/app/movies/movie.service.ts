import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class MovieService{
  private _apikey: string = '3d53b71d157acd7d7ecad78cf751cd14';
  private _serviceURL = 'https://api.themoviedb.org/3/search/movie?query=beauty&api_key=3d53b71d157acd7d7ecad78cf751cd14';

  constructor(private _http: HttpClient){}
  
  getMovies(): Observable<any[]>{
      return this._http.get<any[]>(this._serviceURL)
      .do( data => console.log(JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse)
  {
      console.log(err.message);
     return Observable.throw(err.message);
  }

}