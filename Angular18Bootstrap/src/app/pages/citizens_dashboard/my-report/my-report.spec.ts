import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReport } from './my-report';

describe('MyReport', () => {
  let component: MyReport;
  let fixture: ComponentFixture<MyReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyReport],
    }).compileComponents();

    fixture = TestBed.createComponent(MyReport);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
