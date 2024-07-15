import { Component, Input } from '@angular/core';
import { Entry } from '../../interfaces/podcastData.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {

  //* VARIABLES:

  @Input() public podcast?: Entry;


  //* GETTERS:

  //* CONSTRUCTOR:

  constructor() { }

  //* LIFECYCLE HOOKS

  //* FUNCTIONS:





}
