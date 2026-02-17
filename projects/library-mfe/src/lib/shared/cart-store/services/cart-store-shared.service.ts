import { Injectable, signal, computed, effect, inject } from '@angular/core';
import { CartStorageSharedService } from './cart-storage-shared.service';
import { CartItem } from '../models/cart-Item';


@Injectable({ providedIn: 'root' })
export class CartStoreSharedService {

  private storage = inject(CartStorageSharedService);

  private readonly _items = signal<CartItem[]>([]);

  readonly items = this._items.asReadonly();

  readonly count = computed(() =>
    this._items().reduce((acc, item) => acc + (item.quantity ?? 0), 0)
  );

  constructor() {
    effect(() => {
      this.persist();
    });

    this.hydrate();
  }

  private async hydrate(): Promise<void> {
    const stored = await this.storage.load();
    this._items.set(stored);
  }

  private async persist(): Promise<void>{
    await this.storage.save(this._items());
  }

  addItem(cartItem: CartItem): void {
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
