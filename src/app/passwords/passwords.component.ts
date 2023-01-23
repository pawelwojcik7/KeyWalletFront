import {Component, OnInit} from '@angular/core';
import {Password} from "../models/Password";
import {PasswordService} from "../services/PasswordService";
import {UserService} from "../services/UserService";
import {first} from "rxjs";

@Component({
  selector: 'app-passwords',
  templateUrl: './passwords.component.html',
  styleUrls: ['./passwords.component.less']
})
export class PasswordsComponent implements OnInit{
  userPasswords: Password[] = [];
  shareToWho: string = "";
  displayShare: boolean = false;
  smthFailed: boolean = false;
  failedMessage: string = "";
  sharePasswordItem: Password = {password: '', isDecrypted: false, id: 1}
  ngOnInit(): void {
    this.loadUserStoredPasswords();
  }
  editButton: String = "Przejdź do trybu edycji";
  editMode: boolean = true;
  constructor(private passwordService: PasswordService, private userService: UserService) {
  }
  loadUserStoredPasswords(): void {
    this.passwordService.getAllPasswordsForUser(this.userService.user)
      .pipe(first())
      .subscribe((data: Password[]) => {
        this.userPasswords = data;
        console.log(this.userPasswords);
        this.smthFailed = false;
      }, (error) => {
        this.smthFailed = true;
        this.failedMessage = error.error
      });
  }

  decryptPassword(password: Password) {
    this.passwordService.decryptPassword(this.userService.user.password, password.id)
      .pipe(first())
      .subscribe(data => {
        password.password = data.cryptPassword;
        password.isDecrypted = true;
        this.smthFailed = false;
      }, (error) => {
        this.smthFailed = true;
        this.failedMessage = error.error
      });
  }

  encryptPassword(password: Password) {
    this.passwordService.encryptPassword(this.userService.user.password, password.id)
      .pipe(first())
      .subscribe(data => {
        password.password = data.cryptPassword;
        password.isDecrypted = false;
        this.smthFailed = false;
      }, (error) => {
        this.smthFailed = true;
        this.failedMessage = error.error
      });
  }


  changeMode() {
    this.editMode = !this.editMode;
    this.shareToWho= "";
    this.displayShare = false;
    if (this.editMode == false) {
      this.editButton = "Przejdź do trybu podglądu"
    } else {
      this.editButton = "Przejdź do trybu edycji"
    }
  }

  deletePassword(passwordId: number) {
    this.passwordService.deletePassword(passwordId).
    pipe(first())
      .subscribe((next) => {
        this.loadUserStoredPasswords();
        this.shareToWho= "";
        this.displayShare = false;
      }, (error) =>{
        this.smthFailed = true;
        this.failedMessage=error.error
      })
  }

  displayShareForm(item: Password) {
    this.displayShare = !this.displayShare;
    this.sharePasswordItem = item;
  }
  sharePassword() {
    let sharePasswordDTO = {
      login: this.shareToWho,
      passwordId: this.sharePasswordItem.id,
      masterPassword: this.userService.user.password,
      who: this.userService.user.login
    }
    this.passwordService.sharePassword(sharePasswordDTO).pipe(first()).subscribe((next) => {
      console.log(next)
      this.displayShare=false;
      this.shareToWho="";
      this.smthFailed= false;
    }, (error) => {
      this.smthFailed=true;
      this.failedMessage=error.error
    });
  }
}
