import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [];

  constructor(private http: HttpClient) {}


  fetchPlaces(): Observable<Place[]> {
    return this.http.get<any[]>('assets/data/places.json').pipe(
      map(data =>
        data.map(item => new Place(
          item.id,
          item.title,
          item.description,
          item.imageUrl,
          item.price,
          new Date(item.availableFrom),
          new Date(item.availableTo)
        ))
      ),
      tap(places => {
        this._places = places;
      })
    );
  }

    get places() {
    return [...this._places];
  }


  getPlace(id: string) {
    return { ...this._places.find(p => p.id === id) };
  }
}