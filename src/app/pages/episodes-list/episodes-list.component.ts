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

   @Input() public episode!: Result;

   //* GETTERS:

   //* CONSTRUCTOR:

   constructor(
    private podcastsService: PodcastsService,
    private activatedRoute: ActivatedRoute,
   ) { }

   //* LIFECYCLE HOOKS


   public ngOnInit(): void {
    this.readPodcastById();
   }

   public ngOnDestroy(): void {
    unsubscribePetition(this.suscriptions)
   }

   //* FUNCTIONS:

   public readPodcastById(){
    this.activatedRoute.params
    .pipe(switchMap(({ podcastId }) => {
    console.log("ID", podcastId);
    return this.podcastsService.readPodcastById(podcastId)
    }))
    .subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        alert('There was a problem at petition: "readPodcastById"')
      }
    })

    //this.suscriptions.push(petitionPodcastById);
   }
}
