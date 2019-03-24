import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';

import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private spinnerService: NgxSpinnerService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url.match('/user/') || event.url.match('/admin/') || event.url.match('/book/') ) {
          this.hideElement = true;
        } else {
          this.hideElement = false;
        }
      }
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url.match('/user/login') || event.url.match('/user/register')) {
          this.hideFooter = true;
        } else {
          this.hideFooter = false;
        }
      }
    });
  }

  public hideElement = false;
  public hideFooter = false;

  ngOnInit() {
    this.spinner();
  }

  spinner(): void {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 2000);
  }

}
