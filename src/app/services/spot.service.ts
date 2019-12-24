import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Spot, SurflineSpotConditions, SurflineSpot, LambdaResponse, Region } from '../model/spotModel';
import { Observable } from 'rxjs';
import { Forecast } from '../model/forecastModel';

@Injectable({
  providedIn: 'root'
})
export class SpotService {

  constructor(private http: HttpClient) { }

  public selectedRegionId: string;
  public selectedSpot: Spot;

  // public getSpotFromSurfline(): Observable<SurflineSpot[]> {
  //   return this.http.get<SurflineSpot[]>(`https://api.surfline.com/v1/mobile/report/${this.selectedSpot.surflineId}` );
  // }

  public getCurrentConditionsFromSurfline(): Observable<SurflineSpotConditions> {
    return this.http.get<SurflineSpotConditions>(`https://services.surfline.com/kbyg/spots/forecasts/conditions?spotId=${this.selectedSpot.surflineLongId}&days=1`);
  }

  public getForecastFromSurfline(): Observable<Forecast> {
    return this.http.get<Forecast>(`https://services.surfline.com/kbyg/spots/forecasts/wave?spotId=${this.selectedSpot.surflineLongId}&days=5&intervalHours=24`);
  }

  public getRegionsLambda(): Observable<LambdaResponse> {
    return this.http.get<LambdaResponse>('https://tetqc1kgx7.execute-api.eu-west-2.amazonaws.com/prod/swellregions');
  }

  public getSpotsForRegionLambda(regionId: string): Observable<Spot[]> {
    return this.http.get<Spot[]>(`https://tetqc1kgx7.execute-api.eu-west-2.amazonaws.com/prod/swellspots/region?id=${regionId}`);
  }

  public getSpotByIdLambda(id: string): Observable<Spot[]> {
    return this.http.get<Spot[]>(`https://tetqc1kgx7.execute-api.eu-west-2.amazonaws.com/prod/swellspots/spot?id=${id}`);
  }

  public getSpotsLambda(): Observable<LambdaResponse> {
    return this.http.get<LambdaResponse>('https://tetqc1kgx7.execute-api.eu-west-2.amazonaws.com/prod/swellspots');
  }

  public getSpotByNameLambda(name: string): Observable<LambdaResponse> {
    return this.http.get<LambdaResponse>(`https://tetqc1kgx7.execute-api.eu-west-2.amazonaws.com/prod/swellspots/spotname?name=${name}`);
  }

  public addSpotToFavourites(userId: string, spotObj: any): Observable<LambdaResponse> {
    console.log(userId);
    return this.http.post<LambdaResponse>(`https://tetqc1kgx7.execute-api.eu-west-2.amazonaws.com/prod/swellusers/favourite?userId=${userId}`, spotObj);
  }
}
