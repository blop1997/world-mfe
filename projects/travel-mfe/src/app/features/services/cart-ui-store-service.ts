import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CartUiStoreService {

  private readonly countSubject = new BehaviorSubject<number>(0);
  readonly count$ = this.countSubject.asObservable();

  setCount(count: number) {
    this.countSubject.next(count);
  }

  increment(by = 1) {
    this.countSubject.next(this.countSubject.value + by);
  }
  
}
