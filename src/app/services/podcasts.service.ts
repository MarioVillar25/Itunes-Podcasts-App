import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entry, PodcastData } from '../interfaces/podcastData.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PodcastsService {
  //* VARIABLES:

  public podcasts: Entry[] = [];
  public baseUrl: string = environment.BASE_URL

  //* CONSTRUCTOR:

  constructor(private http:HttpClient) { }

  //* LIFECYCLE HOOKS

  //* FUNCIONES:

  //Function to create Observable to read All Podcast

  public readAllPodcasts(): Observable<PodcastData>{
   return this.http.get<PodcastData>(`${this.baseUrl}?name=History`);
  }



}
