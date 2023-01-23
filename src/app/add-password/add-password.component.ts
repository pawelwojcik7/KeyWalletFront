import {Component} from '@angular/core';
import {PasswordService} from "../services/PasswordService";
import {Password} from "../models/Password";
import {first} from "rxjs";
import {UserService} from "../services/UserService";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-password',
  templateUrl: './add-password.component.html',
  styleUrls: ['./add-password.component.less']
})
export class AddPasswordComponent {

  newPassword: Password = {password: '', isDecrypted: false, id: 1}
  smthFailed: boolean = false;
  failedMessage: String = "";



  constructor(private passwordService: PasswordService, private userService: UserService) {
  }

  addNewPasswordToUserWalet(): void {
    this.newPassword.userDTO = this.userService.user;
    this.passwordService.addNewPasswordToUserWallet(this.newPassword)
      .pipe(first())
      .subscribe(
        () => {

        }, (error) => {
          this.smthFailed = true;
          this.failedMessage = error.error;
        }
      )
  }

}
