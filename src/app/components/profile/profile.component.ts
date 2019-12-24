import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { SpotService } from '../../services/spot.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;
  favourites = [];

  constructor(private authService: AuthService, private router: Router, private spotService: SpotService) { }

  ngOnInit() {
    this.authService.loadUsername();
    this.authService.getUserByUsername(this.authService.username).subscribe((user: any) => {
      this.user = user[0];
      this.user.favourites.forEach(spot => {
        this.spotService.getSpotByIdLambda(spot.spot).subscribe((fav: any) => {
          this.favourites.push(fav[0]);
        });
      });
    });
  }

  public navigateToSpot(spotId) {
    this.router.navigate(['/spot'], { queryParams: { id: spotId } });
  }

}
