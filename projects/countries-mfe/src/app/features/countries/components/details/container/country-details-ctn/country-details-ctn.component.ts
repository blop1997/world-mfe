import { Component, inject, OnInit } from '@angular/core';
import { CountryService } from '../../../../services/country.service';
import { CommonModule } from '@angular/common';
import { Country } from '../../../../models/country';

@Component({
  selector: 'app-country-details-ctn',
  imports: [
    CommonModule
  ],
  templateUrl: './country-details-ctn.component.html',
  styleUrl: './country-details-ctn.component.css'
})
export class CountryDetailsCtnComponent implements OnInit {

  countries?: Country[];

  countryService = inject(CountryService);

  activeIndex: number | null = null;
  toggleAccordion(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }


  ngOnInit(): void {

  }

}
