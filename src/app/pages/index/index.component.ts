import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  imports: [CommonModule, RouterModule]
})
export class IndexComponent implements OnInit {
  movies1: any[] = [];     
  movies2: any[] = [];     
  series: any[] = [];     
  favorites: any[] = [];   

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    // Carga las películas y series desde el servicio
    this.movieService.getMovies1().subscribe((data: any) => this.movies1 = data.movies);
    this.movieService.getMovies2().subscribe((data: any) => this.movies2 = data.movies);
    this.movieService.getSeries().subscribe((data: any) => this.series = data.series);
  }

  // Verifica si un ítem está en favoritos
  isFavorite(item: any): boolean {
    return this.favorites.some(fav => fav.title === item.title);
  }

  // Agrega o quita un ítem de favoritos
  toggleFavorite(item: any): void {
    const index = this.favorites.findIndex(fav => fav.title === item.title);
    if (index > -1) {
      this.favorites.splice(index, 1); // Quita si ya está
    } else {
      this.favorites.push(item); // Agrega si no está
    }
  }

  // Desplaza el carrusel hacia la izquierda
  scrollLeft(track: HTMLElement): void {
    track.scrollBy({ left: -300, behavior: 'smooth' });
  }

  // Desplaza el carrusel hacia la derecha
  scrollRight(track: HTMLElement): void {
    track.scrollBy({ left: 300, behavior: 'smooth' });
  }
}




