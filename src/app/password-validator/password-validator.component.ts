import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PasswordValidatorService } from '../services/password-validator.service';


@Component({
  selector: 'app-password-validator',
  templateUrl: './password-validator.component.html',
  styleUrls: ['./password-validator.component.less'],
})
export class PasswordValidatorComponent {


  constructor(public readonly passwordValidator: PasswordValidatorService) {

  }


}
