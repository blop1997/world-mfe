import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryTopCtnComponent } from './country-top-ctn.component';

describe('CountryTopCtnComponent', () => {
  let component: CountryTopCtnComponent;
  let fixture: ComponentFixture<CountryTopCtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryTopCtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryTopCtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
