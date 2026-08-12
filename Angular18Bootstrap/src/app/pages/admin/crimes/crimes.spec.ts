import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Crimes } from './crimes';

describe('Crimes', () => {
  let component: Crimes;
  let fixture: ComponentFixture<Crimes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Crimes],
    }).compileComponents();

    fixture = TestBed.createComponent(Crimes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
