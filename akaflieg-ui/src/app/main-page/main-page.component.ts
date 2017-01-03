import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  private toggleFooter: string = 'none';

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

  toggleFooterExtension (value) {
    if(value === 'privacy' && this.toggleFooter != 'privacy') {
      this.toggleFooter = value;
      return this.toggleFooter;
    } else if(value === 'terms' && this.toggleFooter != 'terms') {
      this.toggleFooter = value;
      return this.toggleFooter;
    } else {
      this.toggleFooter = 'none';
      return this.toggleFooter;
    }

  }

}
