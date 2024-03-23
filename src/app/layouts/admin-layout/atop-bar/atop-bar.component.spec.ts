import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtopBarComponent } from './atop-bar.component';

describe('AtopBarComponent', () => {
  let component: AtopBarComponent;
  let fixture: ComponentFixture<AtopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtopBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
