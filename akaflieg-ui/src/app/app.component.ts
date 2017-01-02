import {Component, OnInit} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import {AppService} from "./app.service";
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private dataArray: any[] = [];

  newItem: any = {};

  constructor(private http: Http,
              private appService: AppService) {
  }

  ngOnInit(): void {
    this.getAllNews();

    /* ---- jQuery-Bootstrap Features ---- */
    $(document).ready(function() {
      // page scrolling feature (requires jquery.easing)
      $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
      });

      // scroll spy (requires bootstrap.js)
      $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
      });

      // offset when scrolling
      $('#mainNav').affix({
        offset: {
          top: 100
        }
      });

      // hamburger menu toggle
      $('.navbar-collapse ul li a').click(function(){
        $('.navbar-toggle:visible').click();
      });
    });
  }

  getAllNews() {
    this.appService.getAllNews()
      .subscribe(data => this.dataArray = data);
  }

  addNewsElement() {
    this.appService.addNewElement(this.newItem.header, this.newItem.body)
      .subscribe(data => this.getAllNews(),
        err => console.log(err));
  }
}
