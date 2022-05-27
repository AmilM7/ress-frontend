import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header-welcome/header.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';

import { HeaderUserComponent } from './header-user/header-user.component';
import {MatIconModule} from "@angular/material/icon";
import { FavoriteComponent } from './favorite/favorite.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { AboutUsComponent } from './about-us/about-us.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RestaurantServices} from "./services/restaurant.services";
import {RestaurantsResolver} from "./resolvers/restaurants.resolver";
import {AdminService} from "./services/admin.service";
import {AdminsResolver} from "./resolvers/admins.resolver";
import { RestaurantLogInComponent } from './restaurant-log-in/restaurant-log-in.component';
import { RestaurantSignUpComponent } from './restaurant-sign-up/restaurant-sign-up.component';
import { HeaderUserDashboardComponent } from './header-user-dashboard/header-user-dashboard.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { EventsComponent } from './events/events.component';

import {EventServices} from "./services/event.services";
import {EventsResolver} from "./resolvers/events.resolver";

import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {SingleUserComponent} from "./single-user/single-user.component";

import { LoginOptionComponent } from './login-option/login-option.component';
import { RegistrationOptionComponent } from './registration-option/registration-option.component';
import { ReservationsComponent } from './reservations/reservations.component';
import {ReservationServices} from "./services/reservation.service";
import {ReservationsResolver} from "./resolvers/reservations.resolver";
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RestaurantDashboardComponent } from './restaurant-dashboard/restaurant-dashboard.component';
import { HeaderRestaurantDashboardComponent } from './header-restaurant-dashboard/header-restaurant-dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FooterComponent,
    HeaderComponent,
    LogInComponent,
    SignUpComponent,
    PageNotFoundComponent,
    MainComponent,
    HeaderUserComponent,
    FavoriteComponent,
    ProfileComponent,
    LogoutComponent,
    AboutUsComponent,
    UserDashboardComponent,
    RestaurantLogInComponent,
    RestaurantSignUpComponent,
    HeaderUserDashboardComponent,
    RestaurantComponent,

    EventsComponent,


    AdminDashboardComponent,
    SingleUserComponent,

    LoginOptionComponent,
    RegistrationOptionComponent,
    RestaurantDashboardComponent,
    HeaderRestaurantDashboardComponent,
    ReservationsComponent,
    AdminLoginComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    RestaurantServices,
    RestaurantsResolver,

    EventServices,
    EventsResolver,

    AdminService,
    AdminsResolver,

    ReservationServices,
    ReservationsResolver

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
