import { Component, Input } from '@angular/core';
import { Entry } from '../../interfaces/podcastData.interface';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {

  //* VARIABLES:

  @Input() public podcast!: Entry;

}
