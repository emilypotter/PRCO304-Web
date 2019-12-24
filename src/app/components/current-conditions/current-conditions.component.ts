import { Component, OnInit, ViewChild, Input, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrentWeather } from '../../model/currentWeatherModel';
import { Forecast, Wave } from '../../model/forecastModel';
import { Conditions, SurflineSpot, SurflineSpotConditions } from '../../model/spotModel';
import { SpotService } from '../../services/spot.service';
import { WeatherService } from '../../services/weather.service';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.scss']
})
export class CurrentConditionsComponent implements OnInit {

  constructor(@Inject(LOCAL_STORAGE) private localStorage: any, public spotService: SpotService, private route: ActivatedRoute, private weatherService: WeatherService, public authService: AuthService, private toastr: ToastrService) { }
  public conditions: Conditions;
  public forecast: Wave[];
  public flat = false;
  public currentWeather: CurrentWeather;
  // @Input() spot: SurflineSpot;

  ngOnInit() {
    console.log(this.localStorage.id);
    this.route.queryParams.subscribe(params => {
      this.spotService.getSpotByIdLambda(params.id).subscribe(spot => {
        this.spotService.selectedSpot = spot[0];
        this.weatherService.selectedSpot = spot[0];
        this.getConditions();
        this.getCurrentWeather();
      });
    });
  }

  private getConditions(): void {
    this.spotService.getCurrentConditionsFromSurfline().subscribe((data: SurflineSpotConditions) => {
      this.conditions = data.data.conditions[0];
      if (data.data.conditions[0].am.minHeight === 0 && data.data.conditions[0].am.maxHeight === 0) {
        this.flat = true;
      }
    });
  }

  public getCurrentWeather(): void {
    this.weatherService.getCurrentWeather().subscribe((data: CurrentWeather) => {
      this.currentWeather = data;
    });
  }

  public addToFavourites() {
    const spot = {
      spot: this.spotService.selectedSpot._id
    };

    this.spotService.addSpotToFavourites(this.localStorage.id, spot).subscribe((res: any) => {
      this.toastr.success('Success', 'Spot added to favourites');
    }, error => {
      this.toastr.error('Error', 'Unable to add spot to favourites ' + error);
    });
  }

  // NEXT: profile, fav spots, tests, spot pics, input best data in db for all spots, web sockets

}
