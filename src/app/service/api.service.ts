// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }

  getAllArtists() {
    const endpoint = `${environment.api.url}/${environment.api.endpoint_artist}`;
    return this.http.get(endpoint);
  }

  createArtist(artist: any) {
    const endpoint = `${environment.api.url}/${environment.api.endpoint_artist}`;
    return this.http.post(endpoint, artist);
  }

  getAllPosts(){
    const endpoint = `${environment.api.url}/${environment.api.endpoint_post}`;
    return this.http.get(endpoint);
  }

  createPost(post: any){
    const endpoint = `${environment.api.url}/${environment.api.endpoint_post}`;
    return this.http.post(endpoint, post);
  }

  createOrUpdatePost(post: any){
    const endpoint = `${environment.api.url}/${environment.api.endpoint_post}`;
    return this.http.put(endpoint, post);
  }

  getArtist(id: string){
    const endpoint = `${environment.api.url}/${environment.api.endpoint_artist}/${id}`;
    return this.http.get(endpoint);
  }

  getArtistsByProvince(province: string){
    const endpoint = `${environment.api.url}/${environment.api.endpoint_artist}/${province}`;
    return this.http.get(endpoint);
  }

  getPost(id: string){
    const endpoint = `${environment.api.url}/${environment.api.endpoint_post}/${id}`;
    return this.http.get(endpoint);
  }

  getArtistByEmail(email: string){
    const endpoint = `${environment.api.url}/${environment.api.endpoint_artist}/${email}`;
    return this.http.get(endpoint);
  }

  createOrUpdateArtist(artist: any){
    const endpoint = `${environment.api.url}/${environment.api.endpoint_artist}`;
    return this.http.put(endpoint, artist);
  }
  
 



}