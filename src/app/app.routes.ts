import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path:'',
        loadComponent: () =>
          import('./pages/podcast-list/podcast-list.component').then(
            (c) => c.PodcastListComponent
          ),
      },
      {
        path:'podcast/:podcastId',
        loadComponent: () =>
          import('./pages/episodes-list/episodes-list.component').then(
            (c) => c.EpisodesListComponent
          ),
      },
      {
        path:'podcast/:podcastId/episode/:episodeId',
        loadComponent: () =>
          import('./pages/episode-page/episode-page.component').then(
            (c) => c.EpisodePageComponent
          ),
      },
      {
        path: '**',
        redirectTo: '',
      }
    ]
  }
];
