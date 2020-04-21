import { Component, OnInit } from '@angular/core';
import { SpotService } from 'src/app/services/spot.service';
import { ActivatedRoute } from '@angular/router';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-msw',
  templateUrl: './msw.component.html',
  styleUrls: ['./msw.component.css']
})
export class MswComponent implements OnInit {

  constructor(public spotService: SpotService, private route: ActivatedRoute) { }

  public mswData: any;

  faClock = faClock;
  faTachometerAlt = faTachometerAlt;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  public photosLoaded = false;

  ngOnInit() {
    this.galleryImages = [];
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];
    this.galleryImages = [];

    this.route.queryParams.subscribe(params => {
      this.spotService.getSpotByIdLambda(params.id).subscribe(spot => {
        this.spotService.selectedSpot = spot[0]; // in case page is refreshed
        this.spotService.getMagicSeaweedData(spot[0].mswId).subscribe((data: any) => {
          this.mswData = data[4];
          this.galleryImages.push({
            small: this.mswData.charts.swell,
            medium: this.mswData.charts.swell,
            big: this.mswData.charts.swell,
            description: 'Swell'
          });
          this.galleryImages.push({
            small: this.mswData.charts.period,
            medium: this.mswData.charts.period,
            big: this.mswData.charts.period,
            description: 'Period'
          });
          this.galleryImages.push({
            small: this.mswData.charts.wind,
            medium: this.mswData.charts.wind,
            big: this.mswData.charts.wind,
            description: 'Wind'
          });
          this.galleryImages.push({
            small: this.mswData.charts.pressure,
            medium: this.mswData.charts.pressure,
            big: this.mswData.charts.pressure,
            description: 'Pressure'
          });
          this.photosLoaded = true;
        }, error => {
          console.log(error);
        });
      });
    });
  }

}
