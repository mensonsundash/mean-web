import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UfooterComponent } from './ufooter.component';

describe('UfooterComponent', () => {
  let component: UfooterComponent;
  let fixture: ComponentFixture<UfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UfooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
