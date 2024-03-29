import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ArtistComponent } from '../components/artist/artist.component';
import { PostPoemComponent } from '../components/post-poem/post-poem.component';
import { PostImgComponent } from '../components/post-img/post-img.component';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, ArtistComponent, PostPoemComponent, PostImgComponent],
})
export class Tab1Page {

  constructor() {}

  ngOnInit() {

  }
}
