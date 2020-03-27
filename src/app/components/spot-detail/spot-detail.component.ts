import { Component, OnInit } from '@angular/core';
import { SpotService } from '../../services/spot.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SurflineSpot, SurflineSpotConditions, Conditions } from '../../model/spotModel';
import { Forecast } from 'src/app/model/forecastModel';

@Component({
  selector: 'app-spot-detail',
  templateUrl: './spot-detail.component.html',
  styleUrls: ['./spot-detail.component.scss']
})
export class SpotDetailComponent implements OnInit {
  public spot: Forecast;

  constructor(public spotService: SpotService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.spotService.getSpotByIdLambda(params.id).subscribe(spot => {
        this.spotService.selectedSpot = spot[0]; // in case page is refreshed
        // this.getSpotFromSurfline();
        this.getForecast();
      });
    });
  }

  private getForecast(): void {
    this.spotService.getForecastFromSurfline().subscribe((data: Forecast) => {
      this.spot = data;
    });
  }

  // private getSpotFromSurfline(): void {
  //   // this.spotService.getSpotFromSurfline().subscribe((data: SurflineSpot[]) => {
  //   //   this.spot = data[0]; // data comes back as an array with one element so pick that one a assign it to spot
  //   // });
  //   this.spotService.getCurrentConditionsFromSurfline().subscribe(data => {
  //     // this.spot = data[0];
  //   });
  // }

}
