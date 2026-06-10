import { Component, OnInit, Input} from '@angular/core';
import { ModalController, IonicModule } from '@ionic/angular';
import { Place } from 'src/app/places/place.model';
import { IonHeader, IonButton, IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
  imports: [IonicModule],
})
export class CreateBookingComponent  implements OnInit {

  @Input()
  selectedPlace!: Place;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onBookPlace() {
    this.modalCtrl.dismiss({ message: 'This is a dummy message!' }, 'confirm');
  }

}
