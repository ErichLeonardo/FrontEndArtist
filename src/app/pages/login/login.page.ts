import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton, IonInput, IonItem, IonLabel, IonTitle, IonToolbar, IonHeader, IonContent,
IonNote, IonList, IonImg } from '@ionic/angular/standalone';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonItem, IonLabel, IonTitle, IonToolbar, IonHeader, IonContent,
  IonNote, IonList, IonImg]
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private apiService: ApiService, private router : Router) { }

  ngOnInit() {
    
  }

  login() {
    this.apiService.getArtistByEmail(this.email).toPromise()
      .then((artist: any) => {
        if (artist) {
          if (artist.password === this.password) {
            // Contraseña válida, el usuario está autenticado correctamente
            console.log('Login exitoso');
            // Aquí podrías redirigir al usuario a la página principal, por ejemplo
          } else {
            // Contraseña incorrecta
            console.log('Contraseña inválida');
            // Aquí podrías mostrar un mensaje de error al usuario, por ejemplo
          }
        } else {
          // Artista no encontrado
          console.log('Artista no encontrado');
          // Aquí podrías mostrar un mensaje de error al usuario, por ejemplo
        }
      })
      .catch((error) => {
        // Manejar cualquier error que ocurra al obtener el artista
        console.error('Error durante el inicio de sesión:', error);
        // Aquí podrías mostrar un mensaje de error al usuario, por ejemplo
      });
  }

  register() {
    console.log('register');
    this.router.navigate(['form']);
  }

  forgotPassword() {
    console.log('forgotPassword');
  }

}
