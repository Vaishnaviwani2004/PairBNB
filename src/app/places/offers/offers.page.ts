import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
  standalone: false
})
export class OffersPage implements OnInit {
offers: Place[] = [];
  constructor(private placesService: PlacesService, private router: Router) { }

  ngOnInit() {
    this.offers = this.placesService.places;
    console.log('Loaded offers:', this.offers);
  }

  onEdit(id: string, slidingItem: any) {
    slidingItem.close();
    this.router.navigate(['/', 'places', 'offers', 'edit', id]);
  }

}
