import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyRUComponent } from './body-ru.component';

describe('BodyRUComponent', () => {
  let component: BodyRUComponent;
  let fixture: ComponentFixture<BodyRUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyRUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyRUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
