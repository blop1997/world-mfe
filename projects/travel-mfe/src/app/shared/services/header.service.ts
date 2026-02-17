import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  
  private toggleStateSubject = new BehaviorSubject<boolean>(false);
  private toggleMenuSubject = new BehaviorSubject<boolean>(false);

  toggleState$ = this.toggleStateSubject.asObservable();
  toggleMenu$ = this.toggleMenuSubject.asObservable();

  constructor() { }

  toggleCart() {
    this.toggleStateSubject.next(!this.toggleStateSubject.value);
  }

  toggleMenu(): void {
    this.toggleMenuSubject.next(!this.toggleMenuSubject.value);
  }

}
