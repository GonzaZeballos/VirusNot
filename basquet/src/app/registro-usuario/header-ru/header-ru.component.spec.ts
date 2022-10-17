import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRUComponent } from './header-ru.component';

describe('HeaderRUComponent', () => {
  let component: HeaderRUComponent;
  let fixture: ComponentFixture<HeaderRUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderRUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
