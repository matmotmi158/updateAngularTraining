import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneProductComponent } from './phone-product.component';

describe('PhoneProductComponent', () => {
  let component: PhoneProductComponent;
  let fixture: ComponentFixture<PhoneProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
