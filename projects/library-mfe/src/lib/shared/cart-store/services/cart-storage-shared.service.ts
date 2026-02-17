import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-Item';


@Injectable({ providedIn: 'root' })
export class CartStorageSharedService {

  private readonly KEY = 'cartItems';

  load(): CartItem[] {
    const raw = sessionStorage.getItem(this.KEY);
    return raw ? JSON.parse(raw) : [];
  }

  save(items: CartItem[]): void {
    sessionStorage.setItem(this.KEY, JSON.stringify(items));
  }

  clear(): void {
    sessionStorage.removeItem(this.KEY);
  }
}
