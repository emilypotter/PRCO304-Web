import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { NgxLoadingModule } from 'ngx-loading';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { SpotListComponent } from './components/spot-list/spot-list.component';
import { AuthGuard } from './guards/auth.guard';
import { SpotService } from './services/spot.service';
import { WeatherService } from './services/weather.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SpotDetailComponent } from './components/spot-detail/spot-detail.component';
import { CurrentConditionsComponent } from './components/current-conditions/current-conditions.component';
import { VgBufferingModule } from 'videogular2/compiled/buffering';
import { VgControlsModule } from 'videogular2/compiled/controls';
import { VgCoreModule } from 'videogular2/compiled/core';
import { VgOverlayPlayModule } from 'videogular2/compiled/overlay-play';
import { VgStreamingModule } from 'videogular2/compiled/streaming';
import { ForecastComponent } from './components/forecast/forecast.component';
import { NearbySpotsComponent } from './components/nearby-spots/nearby-spots.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxGalleryModule } from 'ngx-gallery';
import { StarRatingModule } from 'angular-star-rating';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    SpotListComponent,
    SpotDetailComponent,
    CurrentConditionsComponent,
    ForecastComponent,
    NearbySpotsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CommonModule,
    NgtUniversalModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgxLoadingModule.forRoot({}),
    InfiniteScrollModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VgStreamingModule,
    NgxSmartModalModule.forRoot(),
    FontAwesomeModule,
    NgxGalleryModule,
    StarRatingModule.forRoot()
  ],
  providers: [AuthGuard, SpotService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
