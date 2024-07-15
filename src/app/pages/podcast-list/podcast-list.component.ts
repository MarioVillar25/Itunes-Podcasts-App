import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { SearchBoxComponent } from "../../components/search-box/search-box.component";
import { CommonModule } from '@angular/common';
import { PodcastsService } from '../../services/podcasts.service';
import { Subscription } from 'rxjs';
import { unsubscribePetition } from '../../utils/utils';

@Component({
  selector: 'app-podcast-list',
  standalone: true,
  imports: [CardComponent, SearchBoxComponent, CommonModule],
  templateUrl: './podcast-list.component.html',
  styleUrl: './podcast-list.component.scss'
})
export class PodcastListComponent implements OnInit, OnDestroy {

    //* VARIABLES:

    public suscripciones: Subscription[] = [];

    //* GETTERS:

    get podcasts(){
      return this.podcastService.podcasts;
    }



    //* CONSTRUCTOR:

    constructor(private podcastService: PodcastsService) { }

    //* LIFECYCLE HOOKS

    ngOnInit(): void {
      this.readAllPodcasts();
    };

    ngOnDestroy(): void {
      unsubscribePetition(this.suscripciones);
    };

    //* FUNCTIONS:

    //Function to read all podcasts:

    public readAllPodcasts(){
      let petitionAllPodcasts =  this.podcastService.readAllPodcasts().subscribe({
        next: (res) => {
          console.log(res.feed.entry);
          this.podcastService.podcasts = res.feed.entry
        },
        error: (err) => {
          alert('There was an error at petition: readAllPodcasts')
        }
      })

      this.suscripciones.push(petitionAllPodcasts);

    }

}
