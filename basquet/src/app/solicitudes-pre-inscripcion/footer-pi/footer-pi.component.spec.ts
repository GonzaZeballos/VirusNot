import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPIComponent } from './footer-pi.component';

describe('FooterPIComponent', () => {
  let component: FooterPIComponent;
  let fixture: ComponentFixture<FooterPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterPIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
