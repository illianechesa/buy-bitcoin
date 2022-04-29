import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Volatility } from 'src/app/core/enums';

import { PriceComponent } from './price.component';

describe('PriceComponent', () => {
  let component: PriceComponent;
  let fixture: ComponentFixture<PriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriceComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set proper classes names', () => {
    component.price = 10000;
    component.updateNewPrice(10002);
    expect(component.wentUp).toEqual(Volatility.UP);
    component.updateNewPrice(10001);
    expect(component.wentUp).toEqual(Volatility.DOWN);
  });
});
