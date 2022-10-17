import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterREComponent } from './footer-re.component';

describe('FooterREComponent', () => {
  let component: FooterREComponent;
  let fixture: ComponentFixture<FooterREComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterREComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterREComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
