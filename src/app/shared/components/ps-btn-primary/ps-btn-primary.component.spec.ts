import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsButtonComponent } from './ps-btn-primary.component';

describe('PsButtonComponent', () => {
  let component: PsButtonComponent;
  let fixture: ComponentFixture<PsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
