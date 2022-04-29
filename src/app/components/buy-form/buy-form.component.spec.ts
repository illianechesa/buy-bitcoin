import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';

import { BuyFormComponent } from './buy-form.component';

describe('BuyFormComponent', () => {
  let component: BuyFormComponent;
  let fixture: ComponentFixture<BuyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyFormComponent],
      imports: [NzMessageModule],
      providers: [FormBuilder, NzMessageService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
