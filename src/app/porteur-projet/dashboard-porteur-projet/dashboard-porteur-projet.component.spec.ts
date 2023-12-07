import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPorteurProjetComponent } from './dashboard-porteur-projet.component';

describe('DashboardPorteurProjetComponent', () => {
  let component: DashboardPorteurProjetComponent;
  let fixture: ComponentFixture<DashboardPorteurProjetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardPorteurProjetComponent]
    });
    fixture = TestBed.createComponent(DashboardPorteurProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
