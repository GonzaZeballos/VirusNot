import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraRuComponent } from './cabecera-ru.component';

describe('CabeceraRuComponent', () => {
  let component: CabeceraRuComponent;
  let fixture: ComponentFixture<CabeceraRuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabeceraRuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraRuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
