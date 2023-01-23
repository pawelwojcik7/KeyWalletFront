import { ChangeDetectorRef, Component } from '@angular/core';
import {first, Subscription} from 'rxjs';
import { PasswordValidatorService } from '../services/password-validator.service';
import {ChangePassword} from "../models/ChangePassword";
import {PasswordService} from "../services/PasswordService";
import {UserService} from "../services/UserService";
import {User} from "../models/User";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.less']
})
export class ChangePasswordComponent {


  public passwordIsValid: boolean = false;
  password: string = "";
  replacedPassword: string = "";
  smthFailed: boolean = false;
  failedMessage: string = "";
  changePasswordRequest: ChangePassword = {login: this.userService.user.login, oldPassword: this.userService.user.login, newPassword: "", keepAsHash: false};

  constructor(public readonly passwordValidator: PasswordValidatorService, private changeDetector: ChangeDetectorRef, private passwordService: PasswordService, private userService: UserService) {
    this.passwordValidator.getpasswordIsValidObs().subscribe((p: boolean) => { this.passwordIsValid = p })
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

  changePasswordReq(): void {
      this.changePasswordRequest.login = this.userService.user.login;
      this.changePasswordRequest.oldPassword = this.userService.user.password;
    this.userService.changePassword(this.changePasswordRequest)
      .pipe(first())
      .subscribe(
        () => {
          this.userService.setUser(new User(this.changePasswordRequest.login, this.changePasswordRequest.newPassword, this.changePasswordRequest.keepAsHash))
          this.smthFailed= false;
        }, (error) => {
          this.smthFailed=true;
          this.failedMessage=error.error
        });
  }

}
