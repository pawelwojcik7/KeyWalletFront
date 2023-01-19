import {NgModule} from '@angular/core';
import {MainPageTemplateComponent} from "./main-page-template/main-page-template.component";
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
//canActivate: [AuthGuardService]
const routes: Routes = [
  {path: 'add-password', component: MainPageTemplateComponent},
  {path: 'my-passwords', component: MainPageTemplateComponent},
  {path: 'ip-addresses', component: MainPageTemplateComponent},
  {path: 'change-password', component: MainPageTemplateComponent},
  {path: 'sign-out', component: MainPageTemplateComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
