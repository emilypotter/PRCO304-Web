import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotListComponent } from './spot-list.component';
import { AppComponent } from 'src/app/app.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { HomeComponent } from '../home/home.component';
import { ProfileComponent } from '../profile/profile.component';
import { SpotDetailComponent } from '../spot-detail/spot-detail.component';
import { CurrentConditionsComponent } from '../current-conditions/current-conditions.component';
import { ForecastComponent } from '../forecast/forecast.component';
import { NearbySpotsComponent } from '../nearby-spots/nearby-spots.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { MatAutocompleteModule, MatInputModule, MatSelectModule, MatFormFieldModule } from '@angular/material';
import { NgxLoadingModule } from 'ngx-loading';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { VgCoreModule } from 'videogular2/compiled/core';
import { VgControlsModule } from 'videogular2/compiled/controls';
import { VgOverlayPlayModule } from 'videogular2/compiled/overlay-play';
import { VgBufferingModule } from 'videogular2/compiled/buffering';
import { VgStreamingModule } from 'videogular2/compiled/streaming';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxGalleryModule } from 'ngx-gallery';
import { StarRatingModule } from 'angular-star-rating';
import { ChatComponent } from '../chat/chat.component';

describe('SpotListComponent', () => {
  let component: SpotListComponent;
  let fixture: ComponentFixture<SpotListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
    NearbySpotsComponent,
    ChatComponent
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
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
