import { Component, OnInit } from '@angular/core';
import { SpotService } from 'src/app/services/spot.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-msw',
  templateUrl: './msw.component.html',
  styleUrls: ['./msw.component.css']
})
export class MswComponent implements OnInit {

  constructor(public spotService: SpotService, private route: ActivatedRoute) { }

  public mswData: any;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.spotService.getSpotByIdLambda(params.id).subscribe(spot => {
        this.spotService.selectedSpot = spot[0]; // in case page is refreshed
        this.spotService.getMagicSeaweedData(spot[0].mswId).subscribe((data: any) => {
          this.mswData = data[4];
        }, error => {
          console.log(error);
        });
      });
    });
  }

}
