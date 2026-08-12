import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCrime } from './report-crime';

describe('ReportCrime', () => {
  let component: ReportCrime;
  let fixture: ComponentFixture<ReportCrime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportCrime],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportCrime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
