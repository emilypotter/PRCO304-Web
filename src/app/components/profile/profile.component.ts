import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { SpotService } from '../../services/spot.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;
  favourites = [];

  faTrashAlt = faTrashAlt;

  constructor(private authService: AuthService, private router: Router, private spotService: SpotService, private toastr: ToastrService) { }

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

  public removeFavouriteSpot(userId, spotId) {
    this.spotService.removeSpotFromFavourites(userId, spotId).subscribe(() => {
        this.toastr.success('Success', 'Spot removed from favourites');
    }, error => {
      this.toastr.success('Error', 'Could not remove spot from favourites ' + error);
    });
  }

}
