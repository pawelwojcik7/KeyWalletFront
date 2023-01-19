import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {User} from "../models/User";
import {UserService} from "../services/UserService";
import {LoginRequest} from "../models/LoginRequest";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginForm: FormGroup = new FormGroup({ userName: new FormControl(), password: new FormControl() });

  private subscriptions = new Subscription();

  constructor(private readonly userService: UserService,
              private readonly router: Router) { }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  login(): void {
    const requestBody: LoginRequest = { login: this.loginForm.value['userName'], password: this.loginForm.value['password'] };
    this.subscriptions.add(
      this.userService.loginUser(requestBody).subscribe(
        () => {
          this.userService.setUser(new User(requestBody.login, requestBody.password));
          this.router.navigate(['wallet']);
        },
        () => {
          this.userService.setUser(new User());
          this.loginForm.reset();
        }
      )

    );
  }
}
