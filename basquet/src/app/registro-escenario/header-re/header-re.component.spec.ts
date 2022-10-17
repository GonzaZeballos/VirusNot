import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderREComponent } from './header-re.component';

describe('HeaderREComponent', () => {
  let component: HeaderREComponent;
  let fixture: ComponentFixture<HeaderREComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderREComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderREComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
