import { TestBed } from '@angular/core/testing';

import { PasswordValidatorService } from '../../../../semestr2/Programowanie Aplikacji Intenretowych/KeyWalletFront/src/app/services/password-validator.service';

describe('PasswordValidatorService', () => {
  let service: PasswordValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
