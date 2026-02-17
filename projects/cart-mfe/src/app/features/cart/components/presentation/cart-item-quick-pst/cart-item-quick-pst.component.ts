import { Component, computed, inject, input, output } from '@angular/core';
import { CartItem } from 'library-mfe';


@Component({
  selector: 'cart-item-quick-ctn',
  imports: [],
  templateUrl: './cart-item-quick-pst.component.html',
  styleUrl: './cart-item-quick-pst.component.css',
})
export class CartItemQuickPstComponent {
  readonly cartItem = input<CartItem>();
  readonly removeItem = output<CartItem>();

  readonly image = computed(() => this.cartItem()?.country?.flags?.svg);

  remove() {
    const item = this.cartItem();
    if (!item) return;
    this.removeItem.emit(item);
  }
}
