import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopProductComponent } from './laptop-product.component';

describe('LaptopProductComponent', () => {
  let component: LaptopProductComponent;
  let fixture: ComponentFixture<LaptopProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
