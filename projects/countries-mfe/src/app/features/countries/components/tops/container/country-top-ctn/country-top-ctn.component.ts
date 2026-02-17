import { Component, computed, inject, OnInit } from '@angular/core';
import { CountryService } from '../../../../services/country.service';
import { CountryTopPstComponent } from '../../presentation/country-top-pst/country-top-pst.component';
import { Country } from '../../../../models/country';

@Component({
  selector: 'app-country-top-ctn',
  imports: [
    CountryTopPstComponent
  ],
  templateUrl: './country-top-ctn.component.html',
  styleUrl: './country-top-ctn.component.css'
})
export class CountryTopCtnComponent{

  private readonly countryService = inject(CountryService);

  readonly countries = computed<Country[]>(
    () =>(this.countryService.countries.value() ?? []).slice(0, 4)
  );

}
