import { Injectable, signal } from '@angular/core';
import { Book } from '../model/book';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

 

  readonly BASE_URL = "http://localhost:5091/api/"

  books = signal<Book[]>([])
  categories = signal<Category[]>([])

  constructor() { }

  getBooks() {
    const url = this.BASE_URL + "books";
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log('1',data)  
        this.books.set(data)
        console.log('2', this.books())  
      })
      .catch(err => console.log(err))

  }
  
  getCategories(){
    const url = this.BASE_URL + "categories";
    fetch(url)
      .then(resp => resp.json())
      .then(data => this.categories.set(data))
      .catch(err => console.log(err))
  }
}
