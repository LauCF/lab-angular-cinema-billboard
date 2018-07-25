import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'services/movies.service';
import { Movie } from '../../interfaces/movie'
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})

export class MyHomeComponent implements OnInit {
  movieList:Array<any>;

  constructor(public mS:MoviesService, private router: Router) {
    this.movieList = this.mS.getMovies();
   }
   

  ngOnInit() {
  }
  
}
