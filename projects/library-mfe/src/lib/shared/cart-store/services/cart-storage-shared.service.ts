import { inject, Injectable } from '@angular/core';
import { CartItem } from '../models/cart-Item';
import { CryptoService } from '../../../crypto/crypto.service';


@Injectable({ providedIn: 'root' })
export class CartStorageSharedService {
  private readonly KEY = 'cartItems';
  private crypto= inject(CryptoService)

  async load(): Promise<CartItem[]> {
    const raw = sessionStorage.getItem(this.KEY);
    if (!raw) return [];

    try {
      return await this.crypto.decrypt(raw);
    } catch {
      return [];
    }
  }

  async save(items: CartItem[]): Promise<void> {
    const encrypted = await this.crypto.encrypt(items);
    sessionStorage.setItem(this.KEY, encrypted);
  }

  clear(): void {
    sessionStorage.removeItem(this.KEY);
  }
}
