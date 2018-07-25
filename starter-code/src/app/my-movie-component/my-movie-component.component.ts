import { Component, OnInit } from "@angular/core";
import { MoviesService } from "services/movies.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-my-movie-component",
  templateUrl: "./my-movie-component.component.html",
  styleUrls: ["./my-movie-component.component.css"]
})
export class MyMovieComponent implements OnInit { 
  id: number;
  movie: any;

  constructor(
    public moviesService: MoviesService,
    public router: ActivatedRoute
  ) {
    this.router.params.subscribe(p => (this.id = p.id));
    
  }

  ngOnInit() {
    this.movie = this.moviesService.getMovie(this.id);
    console.log(this.movie,'<----')
  }
}
