import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-post-music',
  templateUrl: './post-music.component.html',
  styleUrls: ['./post-music.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule],
})
export class PostMusicComponent  implements OnInit {

  posts: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllPosts().subscribe((data) => {
      console.log(data)
      this.posts = data
    })
  }
}
