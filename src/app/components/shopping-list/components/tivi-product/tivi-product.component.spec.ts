import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiviProductComponent } from './tivi-product.component';

describe('TiviProductComponent', () => {
  let component: TiviProductComponent;
  let fixture: ComponentFixture<TiviProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiviProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiviProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
