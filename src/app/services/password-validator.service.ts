import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
@Injectable({
  providedIn: 'root'
})
export class PasswordValidatorService {


  passwordIsValid: boolean = true;
  passwordIsValidObs = new BehaviorSubject<boolean>(this.passwordIsValid);

  password: string = "";
  replacedPassword: string = "";


  notValidItemClass: string = 'bi-x-circle';
  ValidItemClass: string = 'bi-check-circle-fill';

  isValidLength: boolean = true;
  isValidSmallLetter: boolean = false;
  isValidBigLetter: boolean = false;
  isValidNumber: boolean = false;
  isValidSpecial: boolean = false;

  constructor() { }

  getpasswordIsValidObs() {
    return this.passwordIsValidObs.asObservable();
  }

  setPassword(password: string) {
    this.password = password;
  }

  setReplacedPassword(replacedPassword: string) {
    this.replacedPassword = replacedPassword;
  }

  enableValidMatchPasswords(): boolean {
    if (this.isValidLength &&
      this.isValidSmallLetter &&
      this.isValidBigLetter &&
      this.isValidNumber &&
      this.isValidSpecial) {
      return true;
    }
    return false;
  }

  validLength(): string {
    if (this.password?.length > 8) {
      this.isValidLength = true;
      return this.ValidItemClass;
    }
    this.isValidLength = false;
    return this.notValidItemClass;
  }

  validSmallLetter(): string {
    if ((this.password?.match(/[a-z]/g) || '').length) {
      this.isValidSmallLetter = true;
      return this.ValidItemClass;
    }
    this.isValidSmallLetter = false;

    return this.notValidItemClass;
  }

  validBigLetter(): string {
    if ((this.password?.match(/[A-Z]/g) || '').length) {
      this.isValidBigLetter = true;
      return this.ValidItemClass;
    }
    this.isValidBigLetter = false;
    return this.notValidItemClass;
  }

  validNumber(): string {
    if ((this.password?.match(/[0-9]/g) || '').length) {
      this.isValidNumber = true;
      return this.ValidItemClass;
    }
    this.isValidNumber = false;

    return this.notValidItemClass;
  }

  validSpecial(): string {
    if (specialChars.test(this.password)) {
      this.isValidSpecial = true;
      return this.ValidItemClass;
    }
    this.isValidSpecial = false;
    return this.notValidItemClass;
  }

  validReplacedPassword(): string {
    if (this.enableValidMatchPasswords() && !this.password.localeCompare(this.replacedPassword)) {
      this.passwordIsValid = true;
      this.passwordIsValidObs.next(this.passwordIsValid);
      return this.ValidItemClass;
    }
    this.passwordIsValid = false;
    this.passwordIsValidObs.next(this.passwordIsValid);
    return this.notValidItemClass;
  }
}
