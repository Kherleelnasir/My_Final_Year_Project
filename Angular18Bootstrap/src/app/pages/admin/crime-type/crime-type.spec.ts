import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeType } from './crime-type';

describe('CrimeType', () => {
  let component: CrimeType;
  let fixture: ComponentFixture<CrimeType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrimeType],
    }).compileComponents();

    fixture = TestBed.createComponent(CrimeType);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
