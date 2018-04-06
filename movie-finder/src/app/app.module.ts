import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MovieModule } from './movies/movie.module';
import { MoviesComponent } from './movies/movies.component';

import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MovieModule,
    RouterModule.forRoot([
      { path: '', component: MoviesComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
