import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutsAdminComponent } from './layouts-admin.component';

describe('LayoutsAdminComponent', () => {
  let component: LayoutsAdminComponent;
  let fixture: ComponentFixture<LayoutsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutsAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
