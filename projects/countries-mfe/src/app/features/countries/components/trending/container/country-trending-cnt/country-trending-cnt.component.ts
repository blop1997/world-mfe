import { Component, computed, inject } from '@angular/core';
import { CountryService } from '../../../../services/country.service';
import { CountryTrendingBigPstComponent } from '../../presenter/country-trending-big-pst/country-trending-big-pst.component';
import { CountryTrendingSmallPstComponent } from '../../presenter/country-trending-small-pst/country-trending-small-pst.component';
import { Country } from '../../../../models/country';

@Component({
  selector: 'app-country-trending-pst',
  imports: [
    CountryTrendingBigPstComponent,
    CountryTrendingSmallPstComponent
  ],
  templateUrl: './country-trending-cnt.component.html',
  styleUrl: './country-trending-cnt.component.css',
})
export class CountryTrendingCntComponent {

  private readonly countryService = inject(CountryService);

  readonly countries = computed<Country[]>(
    () =>(this.countryService.countries.value() ?? []).slice(0, 6)
  );

  readonly country = computed<Country | undefined>(() => {
    const countries = this.countries();
    if (countries.length === 0) return undefined;

    const index = Math.floor(Math.random() * countries.length);
    return countries[index];
  });
}
