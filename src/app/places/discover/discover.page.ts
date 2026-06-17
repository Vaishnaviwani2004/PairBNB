import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { MenuController, SegmentChangeEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
  standalone: false
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[] = [];
  isLoading = false;

  constructor(
    private placesService: PlacesService,
    private menuCtrl: MenuController
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.placesService.fetchPlaces().subscribe({
      next: (places) => {
        this.loadedPlaces = places;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load places:', err);
        this.isLoading = false;
      }
    });
  }

  clicked(place: Place) {
    console.log('Clicked place:', place);
  }

  onSegmentChange(event: CustomEvent<SegmentChangeEventDetail>) {
    const value = event.detail.value;
    if (value === 'all') {
      this.loadedPlaces = this.placesService.places;
    } else if (value === 'bookable') {
      // this.loadedPlaces = this.placesService.places.filter(place => place.isBookable);
    }
  }
}