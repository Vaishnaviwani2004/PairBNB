import { Component, Input, OnInit } from '@angular/core';
import { IonItem, IonImg, IonLabel } from "@ionic/angular/standalone";
import { Place } from '../../place.model';
import { IonicModule } from "@ionic/angular";
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common'; 


@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss'],
  imports: [IonicModule, RouterLink, DatePipe],
})
export class OfferItemComponent  implements OnInit {
  @Input() offer: Place | any;

  constructor() { }

  ngOnInit() {}

  getDummyDate(){
    return new Date();
  }

}
