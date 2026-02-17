import { CONSTANTS_MFES } from '../../../../../../../../../library-mfe/src/lib/constants/constants-mfe';
import { MFRouterLinkDirective } from './../../../../../../../../../library-mfe/src/lib/directives/MFRouterLinkDirective';
import { Component, computed, inject, input } from '@angular/core';
import { MFEvents } from '../../../../../../../../../library-mfe/src/lib/events/events-enums';
import { Country } from '../../../../models/country';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'country-trending-small-ctn',
  imports: [
    MFRouterLinkDirective
  ],
  templateUrl: './country-trending-small-pst.component.html',
  styleUrl: './country-trending-small-pst.component.css',
})
export class CountryTrendingSmallPstComponent {

  readonly country = input<Country>();

  readonly image = computed(() =>
  this.country()?.flags?.svg
  );

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

  readonly rating = computed<number>(() => {
    const country = this.country();
    if (!country) return 0;
    return Math.floor(Math.random() * 5) + 1;
  });

  readonly reviewsCount = computed<number>(() => {
    const country = this.country();
    if (!country) return 0;
    return Math.floor(Math.random() * 4900) + 100;
  });

  readonly stars = computed(() => {
    const rate = this.rating();
    return Array.from({ length: 5 }, (_, i) => i < rate);
  });

  mfeAppCountries=CONSTANTS_MFES.MFE_COUNTRIES

  addToCart(country?: Country) {
    console.log('countries-mfe::CountryTrendingSmallPstComponent::addToCart...');
    window.dispatchEvent(
        new CustomEvent(MFEvents.ADD_TO_CART, {
        detail: {
          country:country,
          quantity:1
        },
      })
    );
  }

}
