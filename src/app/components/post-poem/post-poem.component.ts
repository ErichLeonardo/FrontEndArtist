import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-post-poem',
  templateUrl: './post-poem.component.html',
  styleUrls: ['./post-poem.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule],
})
export class PostPoemComponent  implements OnInit {

  posts: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllPosts().subscribe((data) => {
      console.log(data)
      this.posts = data
    })
  }

}
