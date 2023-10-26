import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css'],
  imports: [CommonModule, FormsModule],
})
export class SearchComponentComponent {
  @Output() searchEvent = new EventEmitter<string>();

  searchTerm: string = '';
  private searchSubject = new Subject<string>();

  constructor() {
    this.searchSubject
      .pipe(debounceTime(700),
       distinctUntilChanged())
      .subscribe((searchTerm) => {
        this.searchEvent.emit(searchTerm);
      });
  }

  onSearch() {
    this.searchSubject.next(this.searchTerm);
  }
}
