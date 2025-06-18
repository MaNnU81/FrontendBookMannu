import { Component, inject, OnInit } from '@angular/core';
import { BookServiceService } from '../../services/book-service.service';
import { BookcardComponent } from "../bookcard/bookcard.component";
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-booklist',
  standalone: true,
  imports: [MatIconModule, BookcardComponent, CommonModule, MatProgressSpinnerModule],
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent implements OnInit {
  bookService = inject(BookServiceService);

  ngOnInit(): void {
    this.bookService.loadBooks().subscribe();
    this.bookService.loadCategories().subscribe();
  }
}