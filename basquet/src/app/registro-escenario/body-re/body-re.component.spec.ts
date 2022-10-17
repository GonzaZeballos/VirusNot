import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyREComponent } from './body-re.component';

describe('BodyREComponent', () => {
  let component: BodyREComponent;
  let fixture: ComponentFixture<BodyREComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyREComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyREComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
