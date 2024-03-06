import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton, IonInput, IonItem, IonLabel, IonTitle, IonToolbar, IonHeader, IonContent,
IonNote, IonList, IonImg } from '@ionic/angular/standalone';
import { ApiService } from 'src/app/service/api.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonItem, IonLabel, IonTitle, IonToolbar, IonHeader, IonContent,
  IonNote, IonList, IonImg, FormsModule],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private apiService: ApiService, private router : Router) { }

  ngOnInit() {
    
  }

  login() {
    const email = this.email; 
    const password = this.password; 
  
    this.apiService.getAllArtists().subscribe((artists: any) => {
      const artist = artists.find((a: any) => a.email === email && a.password === password);
      if (artist) {
        // Usuario autenticado, redirigir a tab5 y pasar el usuario como parámetro
        console.log('Usuario autenticado:', artist);
        this.router.navigate(['tabs/tab5'], { state: { loggedInArtist: artist } });
      } else {
        // Usuario no encontrado o contraseña incorrecta
        console.log('Nombre de usuario o contraseña incorrectos');
      }
    });
  }
  
  register() {
    console.log('register');
    this.router.navigate(['form']);
  }

  forgotPassword() {
    console.log('forgotPassword');
    this.router.navigate(['forgotpassword']);
  }

}
