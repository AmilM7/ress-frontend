import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from './Components/Pages/main/main.component';

import {RestaurantsAcceptedResolver} from "./Technical/resolvers/restaurants-accepted";
import {Routex} from "./Technical/constants/constants";
import {SignUpComponent} from "./Components/Signup/user-signup/sign-up.component";
import {LogInComponent} from "./Components/Login/user-login/log-in.component";
import {RestaurantLogInComponent} from "./Components/Login/restaurant-login/restaurant-log-in.component";
import {AboutUsComponent} from "./Components/Pages/about-us/about-us.component";
import {RestaurantSignUpComponent} from "./Components/Signup/restaurant-signup/restaurant-sign-up.component";
import {LoginOptionComponent} from "./Components/Login/login-option/login-option.component";
import {RegistrationOptionComponent} from "./Components/Signup/registration-option/registration-option.component";
import {AdminLoginComponent} from "./Components/Login/admin-login/admin-login.component";
import {AuthorizedGuard} from "./Technical/guards/authorized.guard";
import {SuccessPageComponent} from "./Components/Pages/success-page/success-page.component";
import {UserDashboardComponent} from "./Components/Dashboards/user-dashboard/user-dashboard.component";
import {ResolverResponse} from "./Technical/constants/resolver-response.constants";
import {MostlyReservedRestaurantsResolver} from "./Technical/resolvers/mostlyReservedRestaurants.resolver";
import {SuggestedRestaurantsResolver} from "./Technical/resolvers/suggestedRestaurants.resolver.";
import {ReservationFormComponent} from "./Components/reservation-form/reservation-form.component";
import {RestaurantResolver} from "./Technical/resolvers/restaurant.resolver";
import {AdminDashboardComponent} from "./Components/Dashboards/admin-dashboard/admin-dashboard.component";
import {AdminsResolver} from "./Technical/resolvers/admins.resolver";
import {RestaurantsNotAcceptedResolver} from "./Technical/resolvers/restaurantsNotAccepted.resolver";
import {RestaurantDashboardComponent} from "./Components/Dashboards/restaurant-dashboard/restaurant-dashboard.component";
import {ReservationsResolver} from "./Technical/resolvers/reservations.resolver";
import {RestaurantsResolver} from "./Technical/resolvers/restaurants.resolver";
import {UserProfileComponent} from "./Components/Profiles-and-views/user-profile/user-profile.component";
import {ReservationsResolverOfUser} from "./Technical/resolvers/reservation-of-user.resolver";
import {UserViewComponent} from "./Components/Profiles-and-views/user-view/user-view.component";
import {SingleUserResolver} from "./Technical/resolvers/singleUser.resolver";
import {RestaurantProfileComponent} from "./Components/Profiles-and-views/restaurant-profile/restaurant-profile.component";
import {RestaurantViewComponent} from "./Components/Profiles-and-views/restaurant-view/restaurant-view.component";
import {PageNotFoundComponent} from "./Components/Pages/page-not-found/page-not-found.component";


const routes: Routes = [
  {path: Routex.empty, component: MainComponent},
  {path: Routex.signUp, component: SignUpComponent},
  {path: Routex.logIn, component: LogInComponent},
  {path: Routex.restaurantLogIn, component: RestaurantLogInComponent},
  {path: Routex.restaurantSignUp, component: RestaurantSignUpComponent},
  {path: Routex.aboutUs, component: AboutUsComponent},
  {path: Routex.logInOption, component: LoginOptionComponent},
  {path: Routex.signUpOption, component: RegistrationOptionComponent},
  {path: Routex.adminlogin, component: AdminLoginComponent},
  {path: Routex.successPage, canActivate: [AuthorizedGuard], component: SuccessPageComponent},
  {
    path: Routex.userDashboard,
    canActivate: [AuthorizedGuard],
    component: UserDashboardComponent,
    resolve: {
      [ResolverResponse.accepted]: RestaurantsAcceptedResolver,
      [ResolverResponse.mostlyReservedRestaurants]: MostlyReservedRestaurantsResolver,
      [ResolverResponse.suggestedRestaurants]: SuggestedRestaurantsResolver,
    }
  },
  {
    path: Routex.reservationform,
    canActivateChild: [AuthorizedGuard],
    children: [
      {
        path: Routex.restaurant,
        component: ReservationFormComponent,
        resolve: {
          [ResolverResponse.restaurant]: RestaurantResolver,
        }
      }
    ]
  },
  {
    path: Routex.adminDashboard,
    component: AdminDashboardComponent,
    resolve: {
      [ResolverResponse.admins]: AdminsResolver,
      [ResolverResponse.notAccepted]: RestaurantsNotAcceptedResolver,
    }
  },
  {
    path: Routex.restaurantDashboard,
    children: [
      {
        path: Routex.empty,
        component: RestaurantDashboardComponent,
        resolve: {
          [ResolverResponse.reservations]: ReservationsResolver,
          [ResolverResponse.restaurants]: RestaurantsResolver,
        }
      }
    ]
  },
  {
    path: Routex.userProfile,
    canActivateChild: [AuthorizedGuard],
    children: [
      {
        path: Routex.empty,
        component: UserProfileComponent,
        resolve: {
          [ResolverResponse.reservationsOfUser]: ReservationsResolverOfUser,
        }
      }
    ]
  },
  {
    path: Routex.userView,
    canActivateChild: [AuthorizedGuard],
    children: [
      {
        path: Routex.empty,
        component: UserViewComponent,
        resolve: {
          [ResolverResponse.singleUser]: SingleUserResolver,
        }
      }
    ]
  },
  {
    path: Routex.restaurantProfile,
    children: [
      {
        path: Routex.empty,
        component: RestaurantProfileComponent,
        resolve: {
          [ResolverResponse.reservations]: ReservationsResolver,
          [ResolverResponse.restaurants]: RestaurantsResolver,
        }
      }
    ]
  },
  {
    path: Routex.restaurantView,
    canActivateChild: [AuthorizedGuard],
    children: [
      {
        path: Routex.restaurant,
        component: RestaurantViewComponent,
        resolve: {
          [ResolverResponse.restaurant]: RestaurantResolver,
        }
      }
    ]
  },
  {path: '**', component: PageNotFoundComponent},
]

@NgModule({
  imports: [
    [RouterModule.forRoot(routes, {useHash: true})]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
