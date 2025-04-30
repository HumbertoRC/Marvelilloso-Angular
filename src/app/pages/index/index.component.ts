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
  favorites: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getMovies1().subscribe((data: any) => this.movies1 = data.movies);
    this.movieService.getMovies2().subscribe((data: any) => this.movies2 = data.movies);
    this.movieService.getSeries().subscribe((data: any) => this.series = data.series);
  }

  isFavorite(item: any): boolean {
    return this.favorites.some(fav => fav.title === item.title);
  }

  toggleFavorite(item: any): void {
    const index = this.favorites.findIndex(fav => fav.title === item.title);
    if (index > -1) {
      this.favorites.splice(index, 1);
    } else {
      this.favorites.push(item);
    }
  }

  scrollLeft(track: HTMLElement): void {
    track.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight(track: HTMLElement): void {
    track.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
