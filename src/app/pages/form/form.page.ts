import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { } from '@ionic/angular/standalone';
import { ApiService } from 'src/app/service/api.service';
import { Artist } from 'src/app/model/artist';

import { IonicModule, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule,
    ReactiveFormsModule, IonicModule]
  })

    
export class FormPage {

  registerForm: FormGroup;

  key: number = 8; // Inicializas la clave con un valor inicial, por ejemplo 0
  email: string = '';
  password: string = '';
  artistName: string = '';
  name: string = '';
  ccaa: string = '';
  province: string = '';
  image: string = '';
  age: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private toastController: ToastController
  ) {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      artistName: ['', Validators.required],
      name: [''],
      age: ['', Validators.required],
      ccaa: ['', Validators.required],
      province: ['', Validators.required],
      image: ['']
     
    });
  }

  
  
  CompleteRegister(): void {
    if (this.registerForm.valid) {
      const artistData: Artist = {
        key: 0,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        artistName: this.registerForm.value.artistName,
        name: this.registerForm.value.name,
        age: this.registerForm.value.age,
        ccaa: this.registerForm.value.ccaa,
        province: this.registerForm.value.province,
        image: this.registerForm.value.image
      };

      this.apiService.createArtist(artistData)
        .subscribe(
          (response: any) => {
            console.log('Registro exitoso:', response);
            if (response) {
              this.showToast('Registro exitoso', 'success', 2000);
              this.router.navigate(['login']);
            } else {
              this.showToast('Error en el registro', 'danger', 2000);
            }
          },
          (error: any) => {
            console.error('Error en el registro:', error);
            this.showToast('Error en el registro', 'danger', 2000);
          }
        );
    } else {
      this.showToast('Formulario inválido', 'danger');
    }
  }


  async showToast(msg: string, color: string = 'primary', duration: number = 2000): Promise<void> {
    const toast = await this.toastController.create({
      message: msg,
      duration: duration,
      color: color
    });
    toast.present();
  }

}
