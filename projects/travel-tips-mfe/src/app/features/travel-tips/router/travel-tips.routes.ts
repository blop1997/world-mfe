import { Routes } from '@angular/router';
import { TravelTipsComponent } from '../travel-tips.component';


export const TRAVEL_TIPS_ROUTES: Routes = [
  {
    path:'travel-tips',
    component: TravelTipsComponent,
    children: [
      {
        path: "",
        loadComponent: () =>import('../components/container/travel-tips-ctn/travel-tips-ctn.component').then((c) => c.TravelTipsCtnComponent)
      }
    ]
  },
  { path: '',
    redirectTo: 'travel-tips',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: 'travel-tips',
    pathMatch: 'full'
  }
]
