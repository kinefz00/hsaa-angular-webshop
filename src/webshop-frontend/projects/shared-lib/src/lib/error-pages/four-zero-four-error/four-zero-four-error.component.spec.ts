import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourZeroFourErrorComponent } from './four-zero-four-error.component';

describe('FourZeroFourErrorComponent', () => {
  let component: FourZeroFourErrorComponent;
  let fixture: ComponentFixture<FourZeroFourErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourZeroFourErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourZeroFourErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
