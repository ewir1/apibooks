import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { BookInterface } from 'src/app/models/book-interface';
import { NgForm } from '@angular/forms';
// import { Swal } from 'sweetalert2';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss'],
  })
export class ListBooksComponent implements OnInit {
  constructor(private dataApiService: DataApiService) {}

  private books: BookInterface;
  pageAcual: 1;

  ngOnInit() {
    this.getListBooks();
  }

  getListBooks(): void {
    this.dataApiService.getAllBooks().subscribe((books: BookInterface) => (this.books = books));
  }

  ondeleteBook(id: string): void {
    if (confirm('Are you sure to delete?')) {
         this.dataApiService.deleteBook(id).subscribe();
    }
  }

  onPreUpdateBook(book: BookInterface): void {
    this.dataApiService.selectedBook = Object.assign({}, book);
  }

  resetForm(book: NgForm): void {
    this.dataApiService.selectedBook = {
      id: null,
      titulo: '',
      idioma: '',
      descripcion: '',
      portada: '',
      precio: '',
      link_amazon: '',
      autor: '',
      oferta: ''
    };
  }
}
