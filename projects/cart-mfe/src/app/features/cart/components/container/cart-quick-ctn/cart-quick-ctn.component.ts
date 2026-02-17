import { CartItem, CartStoreSharedService, MFEvents } from 'library-mfe';
import { Component, computed, HostListener, inject, OnInit } from '@angular/core';
import { CartStoreService } from '../../../services/cart-store-service';
import { CartItemQuickPstComponent } from '../../presentation/cart-item-quick-pst/cart-item-quick-pst.component';

@Component({
  selector: 'app-cart-quick-ctn',
  imports: [CartItemQuickPstComponent],
  templateUrl: './cart-quick-ctn.component.html',
  styleUrl: './cart-quick-ctn.component.css',
})
export class CartQuickCtnComponent implements OnInit {

  private cartStoreService = inject(CartStoreService);
  private cartStoreSharedService = inject(CartStoreSharedService);

  cartItems = this.cartStoreSharedService.items;

  subTotal = computed(() => this.cartItems().length);

  ngOnInit(): void {
    console.log('CartQuickCtnComponent :: ngOnInit');
  }

  cartPageCheckout() {
    console.log('Navegar a página de todos los favoritos');
    window.dispatchEvent(
      new CustomEvent(MFEvents.VIEW_ALL_FAVORITES, {})
    );
  }

  cartPageCart() {
    console.log('Planificar viaje con favoritos');
    window.dispatchEvent(
      new CustomEvent(MFEvents.PLAN_TRIP, {
        detail: { favorites: this.cartItems() }
      })
    );
  }

  @HostListener('window:' + MFEvents.ADD_TO_CART, ['$event'])
  onMFEAddToCart(event: any) {
    console.log('countries-mfe::CartComponent::' + MFEvents.ADD_TO_CART);

    // El evento ahora trae datos de país en lugar de producto
    const { country, quantity = 1 } = event.detail;

    this.cartStoreSharedService.addItem({
      id: crypto.randomUUID(),
      country,
      quantity
    });
  }

  cartToggleClass() {
    window.dispatchEvent(
      new CustomEvent(MFEvents.CART_TOGGLE_CLASS, {})
    );
  }

  onRemove(cartItem: CartItem) {
    this.cartStoreSharedService.removeItem(cartItem);
  }
}
