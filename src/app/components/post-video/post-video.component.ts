import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ApiService } from 'src/app/service/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-video',
  templateUrl: './post-video.component.html',
  styleUrls: ['./post-video.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule],
})
export class PostVideoComponent  implements OnInit {

  posts: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllPosts().subscribe((data) => {
      console.log(data)
      this.posts = data
    })
  }

}
