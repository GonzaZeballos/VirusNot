import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraPIComponent } from './cabecera-pi.component';

describe('CabeceraPIComponent', () => {
  let component: CabeceraPIComponent;
  let fixture: ComponentFixture<CabeceraPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabeceraPIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
