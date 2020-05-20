import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MystyleDirective} from "./directives/mystyle.directive";

import {FlashMessagesModule} from "angular2-flash-messages"
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {HomeComponent} from './components/home/home.component';
import {FormsModule} from "@angular/forms";

import {ValidateService} from "./services/validate.service";
import {RoomComponent} from './components/room/room.component';
import {AuthService} from "./services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {TokenService} from "./services/token.service";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'room', component: RoomComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MystyleDirective,
    RoomComponent,
  ],
  imports: [
    BrowserModule,
    FlashMessagesModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [ValidateService, AuthService, TokenService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
