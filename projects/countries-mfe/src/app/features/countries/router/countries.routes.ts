
import { Routes } from '@angular/router';
import { CountryComponent } from '../country.component';


export const COUNTRIES_ROUTES: Routes = [
  {
    path:'countries',
    component: CountryComponent,
    children: [
      {
        path: "trending",
        loadComponent: () =>import('../components/trending/container/country-trending-cnt/country-trending-cnt.component').then((c) => c.CountryTrendingCntComponent)
      },
      {
        path: "tops",
        loadComponent: () =>import('../components/tops/container/country-top-ctn/country-top-ctn.component').then((c) => c.CountryTopCtnComponent)
      },
      {
        path: "details/:name",
        loadComponent: () =>import('../components/details/container/country-details-ctn/country-details-ctn.component').then((c) => c.CountryDetailsCtnComponent)
      }
    ]
  },
  { path: '',
    redirectTo: 'countries/trending',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: 'countries/trending',
    pathMatch: 'full'
  }
]
