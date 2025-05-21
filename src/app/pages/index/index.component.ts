import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  imports: [CommonModule, RouterModule, FormsModule]
})
export class IndexComponent implements OnInit {
  movies1: any[] = [];     
  movies2: any[] = [];     
  series: any[] = [];     
  favorites: any[] = [];

  searchText: string = '';  //Variable para guardar texto de búsqueda

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    // Carga las películas y series desde el servicio
    this.movieService.getMovies1().subscribe((data: any) => this.movies1 = data.movies);
    this.movieService.getMovies2().subscribe((data: any) => this.movies2 = data.movies);
    this.movieService.getSeries().subscribe((data: any) => this.series = data.series);
  }

  // Filtra una lista según searchText (busca coincidencias en el título, ignorando mayúsculas)
  filterItems(items: any[]): any[] {
    if (!this.searchText) {
      return items;
    }
    const text = this.searchText.toLowerCase();
    return items.filter(item => item.title.toLowerCase().includes(text));
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

  
  scrollLeft(track: HTMLElement): void {
    track.scrollBy({ left: -300, behavior: 'smooth' });
  }


  scrollRight(track: HTMLElement): void {
    track.scrollBy({ left: 300, behavior: 'smooth' });
  }

  public currentSection: 'movies' | 'series' | 'favorites' | 'all' = 'all';


  
}




