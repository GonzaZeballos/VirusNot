import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderINComponent } from './header-in.component';

describe('HeaderINComponent', () => {
  let component: HeaderINComponent;
  let fixture: ComponentFixture<HeaderINComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderINComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
