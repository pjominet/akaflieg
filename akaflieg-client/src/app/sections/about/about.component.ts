import {Component, OnInit, ViewChild} from '@angular/core';
import {} from '@types/googlemaps';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    @ViewChild('gmap') mapElement: any;
    map: google.maps.Map;

    constructor() {
    }

    ngOnInit() {
        this.initMap();
    }

    private initMap() {
        const label = '<div style="margin-right: .7em">Halle der Akaflieg Köln</div>';
        const zoom = 17;
        const lat = 50.40357;
        const lng = 6.528953;

        const mapOptions = {
            center: new google.maps.LatLng(lat, lng),
            zoom: zoom,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

        this.map.setCenter(new google.maps.LatLng(lat, lng));

        const coords = new google.maps.LatLng(lat, lng);

        const marker = new google.maps.Marker({
            position: coords,
            map: this.map,
            draggable: false
        });

        const infowindow = new google.maps.InfoWindow({
            content: label
        });

        marker.addListener('click', () => {
            infowindow.open(this.map, marker);
        });
    }
}
