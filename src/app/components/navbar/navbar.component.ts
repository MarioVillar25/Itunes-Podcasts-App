import { Component } from '@angular/core';
import { PodcastsService } from '../../services/podcasts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {


  //* GETTERS:

  get loadingState() {
    return this.podcastsService.loadingState;
  }


  //* CONSTRUCTOR:

  constructor(private podcastsService: PodcastsService) {}


}
