import { Injectable } from '@angular/core';
import { Movies } from '../sample-movies'; 
import { Movie } from '../interfaces/movie';


@Injectable()
export class MoviesService {
    movies: Array<Movie> = Movies;
    
    constructor() { }
    
    getMovies(){
      return this.movies;
    }
    
    getMovie(id){
      return this.movies.filter((movie) => movie.id == id)[0];
    }
}

