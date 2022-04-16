import { NgModule } from '@angular/core';
import {Route, Router, RouterModule, Routes} from "@angular/router";
import {HeaderComponent} from "./header-welcome/header.component";
import {FooterComponent} from "./footer/footer.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {LogInComponent} from "./log-in/log-in.component";
import {MainComponent} from "./main/main.component";
import {Routex} from "./constants/constants";
import {FavoriteComponent} from "./favorite/favorite.component";
import {ProfileComponent} from "./profile/profile.component";
import {LogoutComponent} from "./logout/logout.component";
import  {AboutUsComponent} from "./about-us/about-us.component";


const routes: Routes  = [
  {path: Routex.Empty, component : MainComponent},
  {path: Routex.signUp, component : SignUpComponent},
  {path: Routex.logIn, component :  LogInComponent},
  {path: Routex.favorite, component: FavoriteComponent},
  {path: Routex.profile, component: ProfileComponent},
  {path: Routex.logout, component:LogoutComponent},
  {path: Routex.aboutUs, component:AboutUsComponent},
  {path: '**', component : PageNotFoundComponent},

]

@NgModule({
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
