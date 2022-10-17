import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPIComponent } from './body-pi.component';

describe('BodyPIComponent', () => {
  let component: BodyPIComponent;
  let fixture: ComponentFixture<BodyPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyPIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
