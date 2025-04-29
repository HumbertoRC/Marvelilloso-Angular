import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';

@Component({
  standalone: true,
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  imports: [CommonModule] 
})
export class IndexComponent implements OnInit {
  movies1: any[] = [];
  movies2: any[] = [];
  series: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getMovies1().subscribe((data: any) => {
      this.movies1 = data.movies;
    });
    this.movieService.getMovies2().subscribe((data: any) => {
      this.movies2 = data.movies;
    });
    this.movieService.getSeries().subscribe((data: any) => {
      this.series = data.series;
    });
  }
}
