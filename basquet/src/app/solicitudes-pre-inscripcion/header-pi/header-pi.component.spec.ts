import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPIComponent } from './header-pi.component';

describe('HeaderPIComponent', () => {
  let component: HeaderPIComponent;
  let fixture: ComponentFixture<HeaderPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
