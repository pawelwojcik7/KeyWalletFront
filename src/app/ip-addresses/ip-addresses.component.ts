import {Component, OnInit} from '@angular/core';
import {IpAddress} from "../models/IpAddress";
import {PasswordService} from "../services/PasswordService";
import {first} from "rxjs";

@Component({
  selector: 'app-ip-addresses',
  templateUrl: './ip-addresses.component.html',
  styleUrls: ['./ip-addresses.component.less']
})
export class IpAddressesComponent implements OnInit {

  table: IpAddress[] = [];

  ngOnInit(): void {
    this.load()

  }

  constructor(private passwordService: PasswordService) {
  }

  load() {
    this.passwordService.getAllIpAddresses()
      .pipe(first()).subscribe((data: IpAddress[]) => {
      this.table = data
    }, (error) => {

    })
  }


  block(item: IpAddress) {
    this.passwordService.blockIpAddress(item.id)
      .pipe(first()).subscribe(() =>{
        this.load()
    }, () => {

    })
  }

  unblock(item: IpAddress) {
    this.passwordService.unblockIpAddress(item.id)
      .pipe(first()).subscribe(() =>{
      this.load()
    }, () => {

    })
  }
}
