import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterComponent} from "./register-page/register-page.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {AuthGuardService} from "./auth-guard/auth-guard.module";
//, canActivate: [AuthGuardService]
const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'main', component: MainPageComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
