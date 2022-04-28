import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCashComponent } from './user-cash.component';

describe('UserCashComponent', () => {
  let component: UserCashComponent;
  let fixture: ComponentFixture<UserCashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
