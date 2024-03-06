import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonAvatar
, IonItem, IonCardTitle, IonCardHeader, IonCard, IonItemOption, IonItemOptions,
IonItemSliding, IonIcon, IonCardContent, IonCardSubtitle } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from '../service/LocalStorageService';





@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonLabel,
  IonAvatar, IonItem, IonCardTitle, IonCardHeader, IonCard, IonItemOption, IonItemOptions
  , IonItemSliding, IonIcon, IonCardContent, CommonModule, IonCardSubtitle],
})
export class Tab5Page implements OnInit {
  loggedInArtist: any;
  

  constructor(private router: Router, private apiService: ApiService, private localStorageService: LocalStorageService) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.loggedInArtist = navigation.extras.state['loggedInArtist'];
      console.log('Usuario antes de guardar en LocalStorage:', this.loggedInArtist);
      // Guardar el usuario en el LocalStorage
      this.localStorageService.setItem('loggedInArtist', this.loggedInArtist);
    }
  
    // Intentar obtener el artista del LocalStorage
    this.loggedInArtist = this.localStorageService.getItem('loggedInArtist') || null;
    console.log('Usuario después de obtener del LocalStorage:', this.loggedInArtist);
  }
  

  logout() {
    // Limpiar la información de inicio de sesión
    this.loggedInArtist = null;
    // Eliminar loggedInArtist de LocalStorage
    this.localStorageService.removeItem('loggedInArtist');
    // Redirigir al usuario a la página de inicio de sesión
    this.router.navigate(['login']);
  }
}

