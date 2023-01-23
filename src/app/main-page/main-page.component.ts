import { Component } from '@angular/core';
import {NavbarButtons} from "../models/enums";

@Component({
  selector: 'app-root',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  title = 'key-wallet';
  tabs = NavbarButtons;
  selectedTab: NavbarButtons = NavbarButtons.MyPasswords;
}
