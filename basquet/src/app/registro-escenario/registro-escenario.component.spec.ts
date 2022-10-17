import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEscenarioComponent } from './registro-escenario.component';

describe('RegistroEscenarioComponent', () => {
  let component: RegistroEscenarioComponent;
  let fixture: ComponentFixture<RegistroEscenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroEscenarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEscenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
