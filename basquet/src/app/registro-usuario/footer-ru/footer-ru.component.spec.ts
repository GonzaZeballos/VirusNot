import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterRUComponent } from './footer-ru.component';

describe('FooterRUComponent', () => {
  let component: FooterRUComponent;
  let fixture: ComponentFixture<FooterRUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterRUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterRUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
