import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Artist } from 'src/app/model/artist';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class ArtistComponent  implements OnInit {

  artists : any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllArtists().subscribe((data) => {
      this.artists = data;
    });
}
}
