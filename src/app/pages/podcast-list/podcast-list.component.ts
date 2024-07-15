import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { SearchBoxComponent } from "../../components/search-box/search-box.component";

@Component({
  selector: 'app-podcast-list',
  standalone: true,
  imports: [CardComponent, SearchBoxComponent],
  templateUrl: './podcast-list.component.html',
  styleUrl: './podcast-list.component.scss'
})
export class PodcastListComponent {

}
