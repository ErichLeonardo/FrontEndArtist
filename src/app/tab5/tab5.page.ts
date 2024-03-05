import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonAvatar
, IonItem, IonCardTitle, IonCardHeader, IonCard, IonItemOption, IonItemOptions,
IonItemSliding, IonIcon } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';


@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonLabel,
  IonAvatar, IonItem, IonCardTitle, IonCardHeader, IonCard, IonItemOption, IonItemOptions
  , IonItemSliding, IonIcon],
})
export class Tab5Page {
  constructor() {}

  ngOnInit() {
  }

  logout(){
    
  }

}
