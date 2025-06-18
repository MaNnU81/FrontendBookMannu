import { Component } from '@angular/core';
import { BooklistComponent } from "../booklist/booklist.component";

@Component({
  selector: 'app-home',
  imports: [BooklistComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
