import {Component, OnInit} from '@angular/core';
import {GalleryItem, ImageItem} from '@ngx-gallery/core';

@Component({
    selector: 'app-dashboard-public',
    templateUrl: './dashboard-public.component.html',
    styleUrls: ['./dashboard-public.component.scss']
})
export class DashboardPublicComponent implements OnInit {

    items: GalleryItem[];

    imageData = [
        {
            srcUrl: '../assets/img/gallery_items/001.jpg',
            previewUrl: '../assets/img/gallery_items/thumb_001.jpg'
        },
        {
            srcUrl: '../assets/img/gallery_items/002.jpg',
            previewUrl: '../assets/img/gallery_items/thumb_002.jpg'
        },
        {
            srcUrl: '../assets/img/gallery_items/003.jpg',
            previewUrl: '../assets/img/gallery_items/thumb_003.jpg'
        },
        {
            srcUrl: '../assets/img/gallery_items/004.jpg',
            previewUrl: '../assets/img/gallery_items/thumb_004.jpg'
        }

    ];

    constructor() {
    }

    ngOnInit() {
        this.items = this.imageData.map(item => new ImageItem(item.srcUrl, item.previewUrl));
    }
}
