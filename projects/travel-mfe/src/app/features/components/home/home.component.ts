import { loadRemoteModule } from '@angular-architects/native-federation';
import { JsonPipe, NgComponentOutlet } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, effect, HostListener, inject, Injector, OnInit, signal, Type } from '@angular/core';
import { MFEvents } from 'library-mfe';
import { Country } from '../../../../../../cart-mfe/src/app/features/cart/model/country';

@Component({
  selector: 'app-home',
  imports: [
        //JsonPipe,
        NgComponentOutlet
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

  private injector=inject(Injector);
  countriesTrending = signal<Type<unknown> | null>(null);
  countriesTops = signal<Type<unknown> | null>(null);

  constructor() {
    effect(() => {

      // Trending
      loadRemoteModule('countriesMfe', './CountryTrendingCntComponent')
        .then((m) => {
          this.countriesTrending.set(m.CountryTrendingCntComponent);
        })
        .catch(console.error);

      // Tops
      loadRemoteModule('countriesMfe', './CountryTopCtnComponent')
        .then((m) => {
          this.countriesTops.set(m.CountryTopCtnComponent);
        })
        .catch(console.error);
    });
  }

  @HostListener('window:'+MFEvents.ADD_TO_CART, ['$event'])
  onMFEAddToCart(event: any) {

  }


}
