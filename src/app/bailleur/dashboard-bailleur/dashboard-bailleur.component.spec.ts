import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBailleurComponent } from './dashboard-bailleur.component';

describe('DashboardBailleurComponent', () => {
  let component: DashboardBailleurComponent;
  let fixture: ComponentFixture<DashboardBailleurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardBailleurComponent]
    });
    fixture = TestBed.createComponent(DashboardBailleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
