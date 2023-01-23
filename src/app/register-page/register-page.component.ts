import {AfterContentChecked, ChangeDetectorRef, Component} from '@angular/core';
import {first, Subscription} from 'rxjs';

import {PasswordValidatorService} from "../services/password-validator.service";
import {UserService} from "../services/UserService";
import {User} from "../models/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
  providers: [PasswordValidatorService]
})
export class RegisterComponent implements AfterContentChecked {
  public passwordIsValid: boolean = false;
  password: string = "";
  replacedPassword: string = "";
  userCreds: User = {login: "", password: "", keepPasswordAsHash: false};
  registryFailed: boolean = false;
  failedMessage: String = "";
  private subscriptions = new Subscription();

  constructor(public readonly passwordValidator: PasswordValidatorService, private changeDetector: ChangeDetectorRef, private userService: UserService, private readonly router: Router) {
    this.passwordValidator.getpasswordIsValidObs().subscribe((p: boolean) => {
      this.passwordIsValid = p
    })
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  passwordChange(password: string): void {
    this.passwordValidator.setPassword(password);
  }

  replacedPasswordChange(password: string): void {
    this.passwordValidator.setReplacedPassword(password);
  }

  register(): void {
    this.userService.registerUser(this.userCreds)
      .pipe(first())
      .subscribe(
        (response) => {
          this.userService.setUser(this.userCreds)
          this.router.navigate(["main"]);

        }, (error) => {
          this.registryFailed = true;
          this.failedMessage=error.error;

        }
      )
  }
}

