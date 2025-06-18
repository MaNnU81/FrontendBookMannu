import { computed, Injectable, signal } from '@angular/core';
import { Book } from '../model/book';
import { Category } from '../model/category';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  readonly BASE_URL = "http://localhost:5091/api/";

  // Stato privato
  private _books = signal<Book[]>([]);
  private _categories = signal<Category[]>([]);
  private _selectedCategoryId = signal<number | null>(null);
  private _isLoading = signal<boolean>(false);

  // Stato pubblico (sola lettura)
  public books = computed(() => this._books());
  public categories = computed(() => [{ id: null, name: 'Tutte le categorie' }, ...this._categories()]);
  public selectedCategoryId = computed(() => this._selectedCategoryId());
  public isLoading = computed(() => this._isLoading());

  constructor(private http: HttpClient) {}

  // Metodi pubblici
  loadBooks(): Observable<Book[]> {
    this._isLoading.set(true);
    return this.http.get<Book[]>(`${this.BASE_URL}Books`).pipe(
      tap({
        next: (books) => {
          this._books.set(books);
          this._isLoading.set(false);
        },
        error: () => this._isLoading.set(false)
      })
    );
  }

  loadCategories(): Observable<Category[]> {
    this._isLoading.set(true);
    return this.http.get<Category[]>(`${this.BASE_URL}Categories`).pipe(
      tap({
        next: (categories) => {
          this._categories.set(categories);
          this._isLoading.set(false);
        },
        error: () => this._isLoading.set(false)
      })
    );
  }

  setCategoryFilter(categoryId: number | null): Observable<Book[]> {
    this._selectedCategoryId.set(categoryId);
    this._isLoading.set(true);

    if (!categoryId) {
      return this.loadBooks();
    }

    return this.http.get<Book[]>(`${this.BASE_URL}Books/by-category/${categoryId}`).pipe(
      tap({
        next: (books) => {
          this._books.set(books);
          this._isLoading.set(false);
        },
        error: () => this._isLoading.set(false)
      })
    );
  }
}