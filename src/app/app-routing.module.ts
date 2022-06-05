import {NgModule} from '@angular/core';
import {Route, Router, RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {LogInComponent} from "./log-in/log-in.component";
import {MainComponent} from "./main/main.component";
import {Routex} from "./constants/constants";
import {FavoriteComponent} from "./favorite/favorite.component";
import {ProfileComponent} from "./profile/profile.component";
import {LogoutComponent} from "./logout/logout.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {UserDashboardComponent} from "./user-dashboard/user-dashboard.component";
import {ResolverResponse} from "./constants/resolver-response.constants";
import {RestaurantsResolver} from "./resolvers/restaurants.resolver";
import {RestaurantLogInComponent} from "./restaurant-log-in/restaurant-log-in.component";
import {RestaurantSignUpComponent} from "./restaurant-sign-up/restaurant-sign-up.component";
import {RestaurantComponent} from "./restaurant/restaurant.component";
import {RestaurantResolver} from "./resolvers/restaurant.resolver";
import {EventsComponent} from "./events/events.component";
import {EventsResolver} from "./resolvers/events.resolver";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {AdminsResolver} from "./resolvers/admins.resolver";
import {SingleUserComponent} from "./single-user/single-user.component";
import { SingleUserResolver} from "./resolvers/singleUser.resolver";
import {LoginOptionComponent} from "./login-option/login-option.component";
import {RegistrationOptionComponent} from "./registration-option/registration-option.component";
import {ReservationsResolver} from "./resolvers/reservations.resolver";
import {RestaurantDashboardComponent} from "./restaurant-dashboard/restaurant-dashboard.component";
import {AdminLoginComponent} from "./admin-login/admin-login.component";
import {RestaurantsNotAcceptedResolver} from "./resolvers/restaurantsNotAccepted.resolver";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {RestaurantProfileComponent} from "./restaurant-profile/restaurant-profile.component";
import {ReservationFormComponent} from "./reservation-form/reservation-form.component";
import {ReservationsOfUserComponent} from "./reservations-of-user/reservations-of-user.component";
import {ReservationsResolverOfUser} from "./resolvers/reservation-of-user.resolver";
import {SuccessPageComponent} from "./success-page/success-page.component";
import {MostlyReservedRestaurantsResolver} from "./resolvers/mostlyReservedRestaurants.resolver";
import {SuggestedRestaurantsResolver} from "./resolvers/suggestedRestaurants.resolver.";

const routes: Routes = [
  {path: Routex.empty, component: MainComponent},
  {path: Routex.signUp, component: SignUpComponent},
  {path: Routex.logIn, component: LogInComponent},
  {path: Routex.restaurantLogIn, component: RestaurantLogInComponent},
  {path: Routex.restaurantSignUp, component: RestaurantSignUpComponent},
  {path: Routex.favorite, component: FavoriteComponent},
  {path: Routex.profile, component: ProfileComponent},
  {path: Routex.logout, component: LogoutComponent},
  {path: Routex.aboutUs, component: AboutUsComponent},
  {path: Routex.events, component: EventsComponent},
  {path: Routex.logInOption, component: LoginOptionComponent},
  {path: Routex.signUpOption, component: RegistrationOptionComponent},
  {path: Routex.adminlogin, component: AdminLoginComponent},
  {path: Routex.successPage, component: SuccessPageComponent},
  {
    path: Routex.reservationsOfUser, component: ReservationsOfUserComponent,
    resolve: {
      [ResolverResponse.reservationsOfUser]: ReservationsResolverOfUser,
    }
  },
  {
    path: Routex.userDashboard, component: UserDashboardComponent,
    resolve: {
      [ResolverResponse.restaurants]: RestaurantsResolver,
      [ResolverResponse.mostlyReservedRestaurants]: MostlyReservedRestaurantsResolver,
      [ResolverResponse.suggestedRestaurants]: SuggestedRestaurantsResolver,
    }
  },
  {path: Routex.reservationForm, component: ReservationFormComponent},
  {
    path: Routex.user,
    children: [
      {
        path: Routex.restaurant, component: RestaurantComponent,
        resolve: {
          [ResolverResponse.restaurant]: RestaurantResolver,
        }
      },

    ]
  },
  {
    path: Routex.reservationsOfUser, component: ReservationsOfUserComponent,
    resolve: {
      [ResolverResponse.reservationsOfUser]: ReservationsResolverOfUser,
    }
  },
  {
    path: Routex.events,
    children: [
      {
        path: Routex.eventDashboard, component: EventsComponent,
        resolve: {
          [ResolverResponse.events]: EventsResolver,
        }
      },
    ]
  },
  {
    path: Routex.admins,
    children: [
      {
        path: Routex.singleUser, component: SingleUserComponent,
        resolve: {
          [ResolverResponse.singleUser]: SingleUserResolver,
        }
      }
    ]
  },
  {
    path: Routex.adminDashboard, component: AdminDashboardComponent,
    resolve: {
      [ResolverResponse.admins]: AdminsResolver,
      [ResolverResponse.notAccepted]: RestaurantsNotAcceptedResolver,
    }
  },
  {
    path: Routex.restaurantDashboard,
    children:[
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
    children:[
      {
        path: Routex.empty,
        component: UserProfileComponent,
        resolve: {
          [ResolverResponse.reservations]: ReservationsResolver,
          [ResolverResponse.admins]: AdminsResolver,
        }
      }
    ]
  },
  {
    path: Routex.restaurantProfile,
    children:[
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
  {path: '**', component: PageNotFoundComponent},
]

@NgModule({
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
