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
    label: 'Halle der Akaflieg Köln';
    zoom: number = 17;
    lat: number = 50.40357;
    lng: number = 6.528953;

    constructor() {
    }

    ngOnInit() {
        this.initMap();
    }

    private initMap() {
        const mapProp = {
            center: new google.maps.LatLng(this.lat, this.lng),
            zoom: this.zoom,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapProp);

        this.map.setCenter(new google.maps.LatLng(this.lat, this.lng));

        const coords = new google.maps.LatLng(this.lat, this.lng);

        const marker = new google.maps.Marker({
            position: coords,
            map: this.map,
            draggable: false
        });

        const infowindow = new google.maps.InfoWindow({
            content: this.label
        });

        marker.addListener('click', () => {
            infowindow.open(this.map, marker);
        });
    }
}
