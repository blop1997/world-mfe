import { AddToCartBtnComponent } from '../../../../../../../../../library-mfe/src/lib/components/buttons/ad-to-cart-btn/add-to-cart.component';
import { Component, computed, input, OnInit } from '@angular/core';
import { Country } from '../../../../models/country';

@Component({
  selector: 'country-trending-big-ctn',
  imports: [
    AddToCartBtnComponent
  ],
  templateUrl: './country-trending-big-pst.component.html',
  styleUrl: './country-trending-big-pst.component.css'
})
export class CountryTrendingBigPstComponent{

  readonly country = input<Country>();

  readonly image = computed(() =>
    this.country()?.flags?.svg
  );

  realPopulation =  computed(() => Math.round((this.country()?.population ?? 0 )*1));

  readonly countryWithRating = computed(() => {
    const country = this.country();
    if (!country) return undefined;

    return {
      ...country,
      rating: {
        rate: Math.floor(Math.random() * 5) + 1
      }
    };
  });

}
