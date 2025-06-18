import { Component, inject, OnInit } from '@angular/core';
import { BookServiceService } from '../../services/book-service.service';
import { BookcardComponent } from "../bookcard/bookcard.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booklist',
  imports: [BookcardComponent, CommonModule],
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.scss'
})
export class BooklistComponent implements OnInit {

 
  bookServ = inject(BookServiceService);
  

  ngOnInit(): void {
    this.bookServ.getBooks()
    this.bookServ.getCategories()
  }

}
