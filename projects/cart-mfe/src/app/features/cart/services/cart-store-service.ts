import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { CartItem } from '../../../../../../library-mfe/src/lib/shared/cart-store/models/cart-Item';

@Injectable({ providedIn: 'root' })
export class CartStoreService {

  private readonly itemsSubject = new BehaviorSubject<CartItem[]>(this.loadFromStorage());

  readonly items$ = this.itemsSubject.asObservable();

  readonly count$ = this.items$.pipe(
    map((items) => items.reduce((acc, item) => acc + (item.quantity ?? 0), 0)),
  );

  addItem(cartItem: CartItem) {
    const items = [...this.itemsSubject.value, cartItem];
    this.update(items);
  }

  removeItem(cartItem?: CartItem) {
    if (!cartItem) return;

    const items = this.itemsSubject.value.filter((item) => item.id !== cartItem.id);

    this.update(items);
  }

  getItems(): CartItem[] {
    return this.itemsSubject.value;
  }

  private update(items: CartItem[]) {
    this.itemsSubject.next(items);
    sessionStorage.setItem('cartItems', JSON.stringify(items));
  }

  private loadFromStorage(): CartItem[] {
    const raw = sessionStorage.getItem('cartItems');
    return raw ? JSON.parse(raw) : [];
  }
}
