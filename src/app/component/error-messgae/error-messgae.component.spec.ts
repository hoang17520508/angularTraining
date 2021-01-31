import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessgaeComponent } from './error-messgae.component';

describe('ErrorMessgaeComponent', () => {
  let component: ErrorMessgaeComponent;
  let fixture: ComponentFixture<ErrorMessgaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorMessgaeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorMessgaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
