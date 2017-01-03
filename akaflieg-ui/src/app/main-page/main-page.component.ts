import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

}
