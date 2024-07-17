import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PodcastsService } from '../../services/podcasts.service';
import { debounceTime, Subject, Subscription } from 'rxjs';
import { unsubscribePetition } from '../../utils/utils';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  //* VARIABLES:

  @Output() public onDebounce = new EventEmitter<string>();

  public searchInputValue: string = '';
  public searchSubject: Subject<string> = new Subject<string>();
  public suscriptions: Subscription[] = [];

  //* CONSTRUCTOR:

  constructor(private podcastService: PodcastsService){}

  //* LIFECYCLE HOOKS

  ngOnInit(): void {
    this.emitDebounceSuscription();
  }

  ngOnDestroy(): void {
    unsubscribePetition(this.suscriptions);
  }

  //* FUNCIONES:

  //Function to send the value from the input to debounce function

  public onKeyPress():void {
    this.searchSubject.next(this.searchInputValue)
  }

  //Function to subscribe to debounce Function

  public emitDebounceSuscription(): void{
    let debouncerSuscription = this.searchSubject
    .pipe(debounceTime(300))
    .subscribe({
      next: (res) => {
        this.onDebounce.emit(res);
      },
      error: (err) => {
        alert('There was something wrong at debouncer suscription petition')
      }
    });

    this.suscriptions.push(debouncerSuscription);
  }
}
