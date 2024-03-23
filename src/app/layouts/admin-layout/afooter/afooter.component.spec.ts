import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfooterComponent } from './afooter.component';

describe('AfooterComponent', () => {
  let component: AfooterComponent;
  let fixture: ComponentFixture<AfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
