import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesPreInscripcionComponent } from './solicitudes-pre-inscripcion.component';

describe('SolicitudesPreInscripcionComponent', () => {
  let component: SolicitudesPreInscripcionComponent;
  let fixture: ComponentFixture<SolicitudesPreInscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesPreInscripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesPreInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
