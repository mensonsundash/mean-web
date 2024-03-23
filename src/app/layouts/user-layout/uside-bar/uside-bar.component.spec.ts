import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsideBarComponent } from './uside-bar.component';

describe('UsideBarComponent', () => {
  let component: UsideBarComponent;
  let fixture: ComponentFixture<UsideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsideBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
