import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { BookInterface } from 'src/app/models/book-interface';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  })
export class ModalComponent implements OnInit {
  constructor(private dataApiService: DataApiService, private location: Location) {}

  private book: BookInterface;

  ngOnInit() {}

  onSaveBook(bookForm: NgForm): void {
    if (bookForm.value.bookId === null) {
      this.dataApiService.saveBook(bookForm.value).subscribe(book => {
        location.reload();
      });
    } else {
      this.dataApiService.updateBook(bookForm.value).subscribe(book => {
        location.reload();
      });
    }
  }

}
