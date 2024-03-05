import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonTextarea, IonImg } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { ApiService } from '../service/api.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButton, 
    IonIcon, IonTextarea, IonImg, FormsModule],
})
export class Tab3Page {

  public img: string = ''; 
  title: string = '';
  content: string = '';


  constructor(private apiService: ApiService) {}

  CreatePost(){
    
  }

  OpenCamera(){
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        const videoElement = document.getElementById('videoElement') as HTMLVideoElement;
        if (videoElement) {
          videoElement.srcObject = stream;
          videoElement.play();
        }
      })
      .catch(error => {
        console.error("Error accessing the camera:", error);
      });
  }

  OpenCamera2(){
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        const videoElement = document.getElementById('videoElement2') as HTMLVideoElement;
        if (videoElement) {
          videoElement.srcObject = stream;
          videoElement.play();
        }
      })
      .catch(error => {
        console.error("Error accessing the camera:", error);
      });
  }

  public async takePic(){
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl 
    });
  
    // Save the base64 image using the media_url method
    this.media_url(image.dataUrl!);
  }
  
  // Define the media_url method
  private media_url(dataUrl: string){
    // Handle the base64 image data here
    console.log('Media URL:', dataUrl);
    // You can also perform further processing or save the image data
  }

  

  OpenGallery(){
    this.takePic();
  }

  OpenFiles(){
    
  }

  public async OpenMicrophone(){
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      const chunks: Blob[] = [];
  
      mediaRecorder.ondataavailable = (event) => {
        chunks.push(event.data);
      }
  
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(blob);
        const audio = new Audio(audioUrl);
        audio.play();
      }
  
      mediaRecorder.start();
  
      // Wait for a few seconds
      await new Promise(resolve => setTimeout(resolve, 5000));
  
      mediaRecorder.stop();
    } catch (error) {
      console.error('Error accessing the microphone:', error);
    }
  }


  CreatePost2(){
    const title = this.title;
    const content = this.content;

    this.apiService.createOrUpdatePost({title, content}).subscribe((posts: any) => {
      console.log(posts);
    })
  }


}
