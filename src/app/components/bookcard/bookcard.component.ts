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


  readonly DEFAULT_COVER = 'https://img.drz.lazcdn.com/static/pk/p/3fe9c8a1dbfb5b3910e306183ec5d669.jpg_720x720q80.jpg_.webp';

  getBookCover(imgUrl: string | null): string {
    return imgUrl || this.DEFAULT_COVER;
  }
}
