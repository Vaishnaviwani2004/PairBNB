import { Injectable } from '@angular/core';

import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
   private _places: Place[] = [
    new Place(
      'p1',
      'Taj Mahal Suite',
      'Experience royalty near the iconic Taj Mahal in Agra.',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1280px-Taj_Mahal_%28Edited%29.jpeg',
      199.99,
      new Date('2024-01-01'),
      new Date('2024-12-31')
    ),
    new Place(
      'p2',
      'Houseboat Heaven',
      'A serene stay on the backwaters of Kerala.',
      'https://gos3.ibcdn.com/bc422762d04e11e8b8910242ac110003.jpg',
      149.99,
      new Date('2024-01-01'),
      new Date('2024-12-31')
    ),
    new Place(
      'p3',
      'Rajput Palace Retreat',
      'Live like a king in the golden city of Jaisalmer.',
      'https://www.rajasthanplaces.com/wp-content/uploads/2025/12/Rajasthan-Forts-and-Palaces-Tour-1024x536.webp',
      249.99,
      new Date('2024-01-01'),
      new Date('2024-12-31')
    ),
    new Place(
      'p4',
      'Himalayan Hideaway',
      'A peaceful mountain escape in Manali, Himachal Pradesh.',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/b4/a9/cd/aerial-view.jpg?w=900&h=500&s=1',
      129.99,
      new Date('2024-01-01'),
      new Date('2024-12-31')
    ),
    new Place(
      'p5',
      'Goa Beach Villa',
      'Sun, sand and surf at a luxury villa in North Goa.',
      'https://luxurystays.in/sale-villas/LSG-005/0.jpg',
      179.99,
      new Date('2024-01-01'),
      new Date('2024-12-31')
    ),
    new Place(
      'p6',
      'Heritage Haveli Jaipur',
      'Stay in a beautifully restored haveli in the Pink City.',
      'https://site.outlookindia.com/traveller/wp-content/uploads/2018/07/face.gif',
      159.99,
      new Date('2024-01-01'),
      new Date('2024-12-31')
    )
  ];

  get places() {
    return [...this._places];
  }

  constructor() {}

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }
}
