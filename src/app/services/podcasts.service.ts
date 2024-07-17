import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entry, PodcastData } from '../interfaces/podcastData.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { EpisodesListData } from '../interfaces/episodesListData.interface';

@Injectable({
  providedIn: 'root'
})
export class PodcastsService {
  //* VARIABLES:

  public podcasts: Entry[] = [];
  public baseUrl: string = environment.BASE_URL;
  public baseUrlById: string = environment.BASE_ID_URL;
  public limitEpisodes: number = 20;
  public loadingState: boolean = false;

  //* CONSTRUCTOR:

  constructor(private http:HttpClient) { }

  //* LIFECYCLE HOOKS

  //* FUNCIONES:

  //Function to create Observable to read All Podcast

  public readAllPodcasts(): Observable<PodcastData>{
   return this.http.get<PodcastData>(`${this.baseUrl}?name=History`);
  }

    //Function to create Observable to read podcast by id

  public readEpisodesByPodcastId(id:string): Observable<EpisodesListData>{
    return this.http.get<EpisodesListData>(`${this.baseUrlById}${id}&media=podcast&entity=podcastEpisode&limit=${this.limitEpisodes}`);
  }


  //https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20

  //${id}&media=podcast&entity=podcastEpisode&limit=20

  //https://itunes.apple.com/lookup?id=1535809341&media=podcast&entity=podcastEpisode&limit=20

}
