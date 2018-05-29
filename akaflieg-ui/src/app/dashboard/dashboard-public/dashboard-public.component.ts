import {Component, OnInit} from '@angular/core';
import {ICarouselConfig, AnimationConfig} from 'angular4-carousel';

@Component({
    selector: 'app-dashboard-public',
    templateUrl: './dashboard-public.component.html',
    styleUrls: ['./dashboard-public.component.scss']
})
export class DashboardPublicComponent implements OnInit {

    public imageSources: string[] = [
        './assets/img/carousel/cp_001.jpg',
        './assets/img/carousel/cp_002.jpg',
        './assets/img/carousel/cp_003.jpg',
        './assets/img/carousel/cp_004.jpg'
    ];

    public config: ICarouselConfig = {
        verifyBeforeLoad: true,
        log: false,
        animation: true,
        animationType: AnimationConfig.SLIDE,
        autoplay: false,
        autoplayDelay: 2000,
        stopAutoplayMinWidth: 768
    };

    constructor() {
    }

    ngOnInit() {
    }

}
