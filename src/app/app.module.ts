import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './Components/Pages/homepage/homepage.component';
import { FooterComponent } from './Components/Footer/footer/footer.component';
import { HeaderComponent } from './Components/Headers/header-welcome/header.component';
import { LogInComponent } from './Components/Login/user-login/log-in.component';
import { SignUpComponent } from './Components/Signup/user-signup/sign-up.component';
import { PageNotFoundComponent } from './Components/Pages/page-not-found/page-not-found.component';
import { MainComponent } from './Components/Pages/main/main.component';
import {MatIconModule} from "@angular/material/icon";
import { AboutUsComponent } from './Components/Pages/about-us/about-us.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserDashboardComponent } from './Components/Dashboards/user-dashboard/user-dashboard.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RestaurantServices} from "./Technical/services/restaurant.services";
import {RestaurantsResolver} from "./Technical/resolvers/restaurants.resolver";
import {AdminService} from "./Technical/services/admin.service";
import {AdminsResolver} from "./Technical/resolvers/admins.resolver";
import { RestaurantLogInComponent } from './Components/Login/restaurant-login/restaurant-log-in.component';
import { RestaurantSignUpComponent } from './Components/Signup/restaurant-signup/restaurant-sign-up.component';
import { HeaderUserDashboardComponent } from './Components/Headers/header-user-dashboard/header-user-dashboard.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import {AdminDashboardComponent} from "./Components/Dashboards/admin-dashboard/admin-dashboard.component";
import {SingleUserComponent} from "./single-user/single-user.component";
import { LoginOptionComponent } from './Components/Login/login-option/login-option.component';
import { RegistrationOptionComponent } from './Components/Signup/registration-option/registration-option.component';
import {ReservationServices} from "./Technical/services/reservation.service";
import {ReservationsResolver} from "./Technical/resolvers/reservations.resolver";
import {RestaurantDashboardComponent} from "./Components/Dashboards/restaurant-dashboard/restaurant-dashboard.component";
import {HeaderRestaurantDashboardComponent} from "./Components/Headers/header-restaurant-dashboard/header-restaurant-dashboard.component";
import {AdminLoginComponent} from "./Components/Login/admin-login/admin-login.component";
import { AdminDashboardHeaderComponent } from './Components/Headers/admin-dashboard-header/admin-dashboard-header.component';
import { UserProfileComponent } from './Components/Profiles-and-views/user-profile/user-profile.component';
import { RestaurantProfileComponent } from './Components/Profiles-and-views/restaurant-profile/restaurant-profile.component';
import { ReservationFormComponent } from './Components/reservation-form/reservation-form.component';
import { ReservationsOfUserComponent } from './reservations-of-user/reservations-of-user.component';
import { SuccessPageComponent } from './Components/Pages/success-page/success-page.component';
import {FilterPipe} from "./Technical/pipes/filter.pipe";
import {AuthorizedGuard} from "./Technical/guards/authorized.guard";
import {AuthService} from "./Technical/services/auth.services";
import {provideAuthorizationInterceptor} from "./Technical/interceptors/authorization.interceptors";
import { UserViewComponent } from './Components/Profiles-and-views/user-view/user-view.component';
import { RestaurantViewComponent } from './Components/Profiles-and-views/restaurant-view/restaurant-view.component';
import {ProfileService} from "./Technical/services/profile.services";

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
    AboutUsComponent,
    UserDashboardComponent,
    RestaurantLogInComponent,
    RestaurantSignUpComponent,
    HeaderUserDashboardComponent,
    RestaurantComponent,
    RestaurantDashboardComponent,
    HeaderRestaurantDashboardComponent,
    AdminDashboardComponent,
    SingleUserComponent,
    LoginOptionComponent,
    RegistrationOptionComponent,
    AdminLoginComponent,
    AdminDashboardHeaderComponent,
    UserProfileComponent,
    RestaurantProfileComponent,
    ReservationFormComponent,
    ReservationsOfUserComponent,
    SuccessPageComponent,
    FilterPipe,
    UserViewComponent,
    RestaurantViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    provideAuthorizationInterceptor(),
    RestaurantServices,
    RestaurantsResolver,

    AdminService,
    AdminsResolver,

    ReservationServices,
    ReservationsResolver,

    AuthorizedGuard,
    AuthService,

    ProfileService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
