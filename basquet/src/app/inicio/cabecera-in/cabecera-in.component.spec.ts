import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraINComponent } from './cabecera-in.component';

describe('CabeceraINComponent', () => {
  let component: CabeceraINComponent;
  let fixture: ComponentFixture<CabeceraINComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabeceraINComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
