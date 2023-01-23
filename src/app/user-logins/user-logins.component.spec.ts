import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginsComponent } from './user-logins.component';

describe('UserLoginsComponent', () => {
  let component: UserLoginsComponent;
  let fixture: ComponentFixture<UserLoginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLoginsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLoginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
