import { Component, inject } from '@angular/core';
import { BookServiceService } from '../../services/book-service.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, 
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  bookService = inject(BookServiceService);

  onCategoryChange(categoryId: number | null): void {
    this.bookService.setCategoryFilter(categoryId).subscribe();
  }
}