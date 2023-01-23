import {Component, OnInit} from '@angular/core';
import {IpAddress} from "../models/IpAddress";
import {PasswordService} from "../services/PasswordService";
import {first} from "rxjs";
import {UserLogin} from "../models/UserLogin";
import {UserService} from "../services/UserService";

@Component({
  selector: 'app-user-logins',
  templateUrl: './user-logins.component.html',
  styleUrls: ['./user-logins.component.less']
})
export class UserLoginsComponent implements OnInit{

  table: UserLogin[] = [];

  ngOnInit(): void {
    this.load()

  }

  constructor(private passwordService: PasswordService, private userService: UserService) {
  }

  load() {
    this.passwordService.getUserLogins(this.userService.user.login)
      .pipe(first()).subscribe((data: UserLogin[]) => {
      this.table = data
    }, (error) => {

    })
  }
}
