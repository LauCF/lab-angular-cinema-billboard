import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyHomeComponent } from './my-home-component/my-home-component.component';
import { MyMovieComponent } from './my-movie-component/my-movie-component.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { MoviesService } from 'services/movies.service';

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
