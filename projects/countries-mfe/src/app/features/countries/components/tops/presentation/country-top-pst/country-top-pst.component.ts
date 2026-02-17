import { AddToCartBtnComponent } from './../../../../../../../../../library-mfe/src/lib/components/buttons/ad-to-cart-btn/add-to-cart.component';
import { MFEvents } from './../../../../../../../../../library-mfe/src/lib/events/events-enums';
import { Component, computed, inject, input } from '@angular/core';
import { Country } from '../../../../models/country';

@Component({
  selector: 'country-top-pst',
  imports: [
    AddToCartBtnComponent
  ],
  templateUrl: './country-top-pst.component.html',
  styleUrl: './country-top-pst.component.css',
})
export class CountryTopPstComponent {

  readonly country = input<Country>();

  readonly image = computed(() =>
    this.country()?.flags?.svg
  );


  addToCart(country?: Country) {

    console.log('addToCart...');

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
