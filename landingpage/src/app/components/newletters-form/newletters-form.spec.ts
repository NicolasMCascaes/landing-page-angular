import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlettersForm } from './newletters-form';

describe('NewlettersForm', () => {
  let component: NewlettersForm;
  let fixture: ComponentFixture<NewlettersForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewlettersForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewlettersForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
