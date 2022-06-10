import {NgModule} from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "./Components/Pages/page-not-found/page-not-found.component";
import {SignUpComponent} from "./Components/Signup/user-signup/sign-up.component";
import {LogInComponent} from "./Components/Login/user-login/log-in.component";
import {MainComponent} from "./Components/Pages/main/main.component";
import {Routex} from "./Technical/constants/constants";
import {FavoriteComponent} from "./favorite/favorite.component";
import {AboutUsComponent} from "./Components/Pages/about-us/about-us.component";
import {UserDashboardComponent} from "./Components/Dashboards/user-dashboard/user-dashboard.component";
import {ResolverResponse} from "./Technical/constants/resolver-response.constants";
import {RestaurantsResolver} from "./Technical/resolvers/restaurants.resolver";
import {RestaurantLogInComponent} from "./Components/Login/restaurant-login/restaurant-log-in.component";
import {RestaurantSignUpComponent} from "./Components/Signup/restaurant-signup/restaurant-sign-up.component";
import {RestaurantComponent} from "./restaurant/restaurant.component";
import {RestaurantResolver} from "./Technical/resolvers/restaurant.resolver";
import {EventsComponent} from "./events/events.component";
import {EventsResolver} from "./Technical/resolvers/events.resolver";
import {AdminDashboardComponent} from "./Components/Dashboards/admin-dashboard/admin-dashboard.component";
import {AdminsResolver} from "./Technical/resolvers/admins.resolver";
import {SingleUserComponent} from "./single-user/single-user.component";
import { SingleUserResolver} from "./Technical/resolvers/singleUser.resolver";
import {LoginOptionComponent} from "./Components/Login/login-option/login-option.component";
import {RegistrationOptionComponent} from "./Components/Signup/registration-option/registration-option.component";
import {ReservationsResolver} from "./Technical/resolvers/reservations.resolver";
import {RestaurantDashboardComponent} from "./Components/Dashboards/restaurant-dashboard/restaurant-dashboard.component";
import {AdminLoginComponent} from "./Components/Login/admin-login/admin-login.component";
import {RestaurantsNotAcceptedResolver} from "./Technical/resolvers/restaurantsNotAccepted.resolver";
import {UserProfileComponent} from "./Components/Profiles-and-views/user-profile/user-profile.component";
import {RestaurantProfileComponent} from "./Components/Profiles-and-views/restaurant-profile/restaurant-profile.component";
import {ReservationFormComponent} from "./Components/reservation-form/reservation-form.component";
import {ReservationsOfUserComponent} from "./reservations-of-user/reservations-of-user.component";
import {ReservationsResolverOfUser} from "./Technical/resolvers/reservation-of-user.resolver";
import {SuccessPageComponent} from "./Components/Pages/success-page/success-page.component";
import {MostlyReservedRestaurantsResolver} from "./Technical/resolvers/mostlyReservedRestaurants.resolver";
import {SuggestedRestaurantsResolver} from "./Technical/resolvers/suggestedRestaurants.resolver.";
import {AuthorizedGuard} from "./Technical/guards/authorized.guard";
import {UserViewComponent} from "./Components/Profiles-and-views/user-view/user-view.component";
import {RestaurantViewComponent} from "./Components/Profiles-and-views/restaurant-view/restaurant-view.component";
import {PersonUniqueResolver} from "./Technical/resolvers/personUnique.resolver";

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
  {path: Routex.favorite, canActivate: [AuthorizedGuard], component: FavoriteComponent},
  {path: Routex.events, canActivate: [AuthorizedGuard], component: EventsComponent},
  {
    path: Routex.reservationsOfUser,
    canActivate: [AuthorizedGuard],
    component: ReservationsOfUserComponent,
    resolve: {
      [ResolverResponse.reservationsOfUser]: ReservationsResolverOfUser,
    }
  },
  {
    path: Routex.userDashboard,
    canActivate: [AuthorizedGuard],
    component: UserDashboardComponent,
    resolve: {
      [ResolverResponse.restaurants]: RestaurantsResolver,
      [ResolverResponse.mostlyReservedRestaurants]: MostlyReservedRestaurantsResolver,
      [ResolverResponse.suggestedRestaurants]: SuggestedRestaurantsResolver,
      [ResolverResponse.uniqueUser]: PersonUniqueResolver,
    }
  },
  {path: Routex.reservationform,
    canActivateChild: [AuthorizedGuard],
    children:[
      {
        path:Routex.restaurant,
        component: ReservationFormComponent,
        resolve: {
          [ResolverResponse.restaurant]: RestaurantResolver,
          [ResolverResponse.uniqueUser]: PersonUniqueResolver,

        }
      }
    ]
  },
  {
    path: Routex.user,
    canActivateChild: [AuthorizedGuard],
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
    path: Routex.reservationsOfUser,
    canActivate: [AuthorizedGuard],
    component: ReservationsOfUserComponent,
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
    canActivateChild: [AuthorizedGuard],
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
    path: Routex.adminDashboard,
    component: AdminDashboardComponent,
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
    canActivateChild: [AuthorizedGuard],
    children:[
      {
        path:  Routex.empty,
        component: UserProfileComponent,
        resolve: {
          [ResolverResponse.reservationsOfUser]: ReservationsResolverOfUser,
          [ResolverResponse.uniqueUser]: PersonUniqueResolver,
        }
      }
    ]
  },
  {
    path: Routex.userView,
    canActivateChild: [AuthorizedGuard],
    children:[
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
    canActivateChild: [AuthorizedGuard],
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
  {
    path: Routex.restaurantView,
    canActivateChild: [AuthorizedGuard],
    children:[
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
    [RouterModule.forRoot(routes,{useHash:true})]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
