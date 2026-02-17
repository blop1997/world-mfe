import { effect, inject, Injectable, resource, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  // TODO

url='https://restcountries.com/v3.1/region/america'

urlName='https://restcountries.com/v3.1/name'

http= inject(HttpClient);


private countryName = signal<string | null>(null);

country = signal<Country | null>(null);

 constructor() {
    effect(async () => {
      const name = this.countryName();
      if (name === null) {
        this.country.set(null);
        return;
      }

      const res = await fetch(`${this.urlName}/${name}`);
      if (!res.ok) {
        this.country.set(null);
        return;
      }

      this.country.set(await res.json());
    });
  }


  findByName(name: string) {
    this.countryName.set(name);
  }

  countries = resource<Country[], void>({
    loader: async () => {
      const res = await fetch(this.url);
      if (!res.ok) throw new Error('Error loading countries');
      return res.json();
    }
  });
}
