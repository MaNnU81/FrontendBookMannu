import { Component, Input } from '@angular/core';
import { Book } from '../../model/book';

@Component({
  selector: 'app-bookcard',
  imports: [],
  templateUrl: './bookcard.component.html',
  styleUrl: './bookcard.component.scss'
})
export class BookcardComponent {
@Input({required: true}) bookToDisplay!:Book;
}
