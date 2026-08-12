import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeInformation } from './crime-information';

describe('CrimeInformation', () => {
  let component: CrimeInformation;
  let fixture: ComponentFixture<CrimeInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrimeInformation],
    }).compileComponents();

    fixture = TestBed.createComponent(CrimeInformation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
