import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtopBarComponent } from './utop-bar.component';

describe('UtopBarComponent', () => {
  let component: UtopBarComponent;
  let fixture: ComponentFixture<UtopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtopBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UtopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
