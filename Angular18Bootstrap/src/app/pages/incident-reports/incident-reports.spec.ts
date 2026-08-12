import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { IncidentReports } from './incident-reports';
import { HeaderService } from '../../shared/services/header.service';

describe('IncidentReports', () => {
  let component: IncidentReports;
  let fixture: ComponentFixture<IncidentReports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidentReports, RouterTestingModule],
      providers: [HeaderService],
    }).compileComponents();

    fixture = TestBed.createComponent(IncidentReports);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should link the first case to its incident details route', () => {
    const link = fixture.debugElement.query(By.css('a[href="/incident-details/case133"]'));
    expect(link).toBeTruthy();
  });
});
