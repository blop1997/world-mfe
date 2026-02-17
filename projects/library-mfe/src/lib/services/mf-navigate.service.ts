import { inject, Injectable, signal } from '@angular/core';
//import { toObservable } from '@angular/core/rxjs-interop';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MFEvents } from '../events/events-enums';

@Injectable({ providedIn: 'root' })
export class MFNavigateService {

  private _navigation = signal(false);
  private _navigation$!: Observable<boolean>;

  private router = inject(Router);

  constructor() {
    //this._navigation$ = toObservable(this._navigation);
  }

  navigate( mfeBase:string,route: string, extras?: NavigationExtras) {

    if ((window as any).isHost) {

      let sw = (window as any).isHost;

      console.log('sw...' + sw);

      if (sw) {

        window.dispatchEvent(
          new CustomEvent(MFEvents.ROUTE_CHANGED, {
            detail: {
              route: `${mfeBase}/${route}`,
              extras,
            },
          })
        );

      } else {
        this.router.navigate([route], extras);
      }
    } else {
      const url=String(route);
      this.router.navigate([url],
      {
          queryParams: null,
          replaceUrl: true
      })

    }

    this._navigation.set(true);
  }

  get navigation(): Observable<boolean> {
    return this._navigation$;
  }
}
