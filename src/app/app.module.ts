import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainPageComponent} from "./main-page/main-page.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterComponent} from "./register-page/register-page.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import {PageNotFoundComponent} from './page-not-found/page-not-found-component';
import {AddPasswordComponent} from "./add-password/add-password.component";
import {PasswordValidatorComponent} from "./password-validator/password-validator.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {TabListComponent} from "./tab-list/tab-list.component";
import {TabComponent} from "./tab/tab.component";
import {PasswordsComponent} from "./passwords/passwords.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";
import { IpAddressesComponent } from './ip-addresses/ip-addresses.component';
import { UserLoginsComponent } from './user-logins/user-logins.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPageComponent,
    RegisterComponent,
    PageNotFoundComponent,
    AddPasswordComponent,
    PasswordValidatorComponent,
    AppComponent,
    NavbarComponent,
    TabListComponent,
    TabComponent,
    RegisterComponent,
    PasswordsComponent,
    ChangePasswordComponent,
    IpAddressesComponent,
    UserLoginsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
