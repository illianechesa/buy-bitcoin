import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';

import { UserCashComponent } from './user-cash.component';

describe('UserCashComponent', () => {
  let component: UserCashComponent;
  let fixture: ComponentFixture<UserCashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCashComponent],
      imports: [NzMessageModule, BrowserAnimationsModule],
      providers: [FormBuilder, NzMessageService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update balance properly', () => {
    component.balance = 10000;
    component.depositAmountForm.controls['amount'].setValue(1);
    component.handleConfirm();
    expect(component.balance).toEqual(10001);
  });
});
