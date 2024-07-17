import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PodcastsService } from '../../services/podcasts.service';
import { Subscription, switchMap } from 'rxjs';
import { Result } from '../../interfaces/episodesListData.interface';
import { unsubscribePetition } from '../../utils/utils';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-episode-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './episode-page.component.html',
  styleUrl: './episode-page.component.scss'
})
export class EpisodePageComponent implements OnInit, OnDestroy {

  //* VARIABLES:

  public suscriptions: Subscription[] = [];
  public episodeId: string = '';
  public episode!: Result;
  public artist :string | undefined;


  //* GETTERS:

  //* CONSTRUCTOR:

  constructor(
    private podcastsService: PodcastsService,
    private activatedRoute: ActivatedRoute,
   ) { }

  //* LIFECYCLE HOOKS

  public ngOnInit(): void {
    this.podcastsService.loadingState = true;
    setTimeout(() => {
      this.readOneEpisode();
    }, 300)
  }
  public ngOnDestroy(): void {
    unsubscribePetition(this.suscriptions);
  }

  //* FUNCTIONS:


  //Function to read Episode by Podcast ID

  public readOneEpisode(){
    //Suscription to get episode Id
    let getEpisodeId = this.activatedRoute.params.subscribe(params => {
      this.episodeId = params['episodeId']
    })

    let petitionEpisode = this.activatedRoute.params
     .pipe(switchMap(({ podcastId }) => {
     return this.podcastsService.readEpisodesByPodcastId(podcastId)
     }))
     .subscribe({
       next: (res) => {
        let data = res.results.filter((elem) => elem.trackId.toString() === this.episodeId)
         this.episode = data[0]
         this.artist = res.results[0].artistName;
         this.podcastsService.loadingState = false;
       },
       error: (err) => {
         alert('There was a problem at petition: "readEpisodeByPodcastId"')
       }
     })

     this.suscriptions.push(getEpisodeId, petitionEpisode);
    }
}
