import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraREComponent } from './cabecera-re.component';

describe('CabeceraREComponent', () => {
  let component: CabeceraREComponent;
  let fixture: ComponentFixture<CabeceraREComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabeceraREComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraREComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
