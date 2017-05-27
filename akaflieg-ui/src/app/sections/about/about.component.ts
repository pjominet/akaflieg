import { Component, OnInit } from '@angular/core';
declare const google: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const gmapKey = 'AIzaSyDMb-EA7VWCNijtDppiizhkSBoMXf9Qfz8';
    const label = 'Halle der Akaflieg Köln';
    const zoom = 17;
    const lat = 50.40357;
    const lng = 6.528953;
    this.mapInit(lat, lng, zoom, label);
  }

  mapInit(lat, lng, zoom, label) {
    const coords = {lat: lat, lng: lng};

    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: zoom,
      center: coords
    });
    const marker = new google.maps.Marker({
      label: label,
      position: coords,
      map: map
    });
  }
}
