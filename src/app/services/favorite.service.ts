import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favorites: string[] = [];

  addFavorite(id: string) {
    if (!this.favorites.includes(id)) {
      this.favorites.push(id);
    }
  }

  removeFavorite(id: string) {
    this.favorites = this.favorites.filter(fav => fav !== id);
  }

  getFavorites(): string[] {
    return [...this.favorites];
  }
}
