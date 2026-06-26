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

  constructor(
    private placesService: PlacesService,
    private menuCtrl: MenuController
  ) {}

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
  }

  clicked(place: Place) {
    console.log('Clicked place:', place);
  }

  onSegmentChange(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log('Segment changed:', event.detail);
    const value = event.detail.value;
    if (value === 'all') {
      this.loadedPlaces = this.placesService.places;
    } else if (value === 'bookable') {
      // this.loadedPlaces = this.placesService.places.filter(place => place.isBookable);
    }
  }
}