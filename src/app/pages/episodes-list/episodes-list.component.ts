import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PodcastsService } from '../../services/podcasts.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { Entry } from '../../interfaces/podcastData.interface';
import { unsubscribePetition } from '../../utils/utils';
import { CommonModule } from '@angular/common';
import { Result } from '../../interfaces/episodesListData.interface';

@Component({
  selector: 'app-episodes-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './episodes-list.component.html',
  styleUrl: './episodes-list.component.scss'
})
export class EpisodesListComponent implements OnInit, OnDestroy {

   //* VARIABLES:

   public suscriptions: Subscription[] = []



   @Input() public episodes!: Result[];

   public podcastId!: number;
   public podcast?: Entry[];

   //* GETTERS:

   //* CONSTRUCTOR:

   constructor(
    private podcastsService: PodcastsService,
    private activatedRoute: ActivatedRoute,
   ) { }

   //* LIFECYCLE HOOKS


   public ngOnInit(): void {
    this.readEpisodesByPodcastId();
    this.readPodcastById(this.podcastId);

   }

   public ngOnDestroy(): void {
    unsubscribePetition(this.suscriptions)
   }

   //* FUNCTIONS:

   public readEpisodesByPodcastId(){
   let petitionPodcastById = this.activatedRoute.params
    .pipe(switchMap(({ podcastId }) => {
    console.log("ID", podcastId);
    return this.podcastsService.readEpisodesByPodcastId(podcastId)
    }))
    .subscribe({
      next: (res) => {
        this.episodes = res.results
        this.podcastId = res.results[0].collectionId
        console.log(this.podcastId);
        console.log(res.results);
      },
      error: (err) => {
        alert('There was a problem at petition: "readPodcastById"')
      }
    })

    this.suscriptions.push(petitionPodcastById);
   }

   public readPodcastById(id:number){
    this.podcastsService.readAllPodcasts().subscribe({
      next: (res) => {
        let data = res.feed.entry.filter((elem) => elem.id.attributes['im:id'] === this.podcastId.toString());
        this.podcast = data;
        console.log(this.podcast);
      },
      error: (err) => {
        alert('There was a problem at petition: "readPodcastById"')
      }
    })

   }
}
