import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent {

  //* VARIABLES:

  public searchInputValue: string = '';

  //* CONSTRUCTOR:

  constructor(){}

  //* LIFECYCLE HOOKS

  //* FUNCIONES:




}
