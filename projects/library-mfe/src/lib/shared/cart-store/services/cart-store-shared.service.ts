import { Injectable, signal, computed, effect } from '@angular/core';
import { CartStorageSharedService } from './cart-storage-shared.service';
import { CartItem } from '../models/cart-Item';


@Injectable({ providedIn: 'root' })
export class CartStoreSharedService {

  private readonly _items = signal<CartItem[]>([]);

  readonly items = this._items.asReadonly();

  readonly count = computed(() =>
    this._items().reduce((acc, item) => acc + (item.quantity ?? 0), 0)
  );

  constructor(private storage: CartStorageSharedService) {
    this.hydrate();
    effect(() => {
      this.storage.save(this._items());
    });
  }

  private hydrate(): void {
    const stored = this.storage.load();
    this._items.set(stored);
  }

  addItem(cartItem: CartItem): void {
     console.log('CartStoreSharedService::addItem')
    console.log(cartItem)
    this._items.update(items => [...items, cartItem]);
  }

  removeItem(cartItem: CartItem): void {
    this._items.update(items =>
      items.filter(item => item.id !== cartItem.id)
    );
  }

  clear(): void {
    this._items.set([]);
  }

  get snapshot(): CartItem[] {
    return this._items();
  }

  readonly subTotal = computed(() =>
  this._items().reduce(
    (sum, item) =>
      sum + ((item.country?.population ?? 0) * (item.quantity ?? 0)),
    0
  )
);
}
