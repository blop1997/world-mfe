import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  HostListener,
  inject,
  Injector,
  OnInit,
  effect,
  signal,
  Type,
} from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { MFEvents } from 'library-mfe';

@Component({
  selector: 'app-slide-over',
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './slide-over.component.html',
  styleUrl: './slide-over.component.css',
})
export class SlideOverComponent implements OnInit {
  toggleState: boolean = false;
  private headerService = inject(HeaderService);
  private router = inject(Router);

  cart = signal<Type<unknown> | null>(null);

  constructor() {
    effect(() => {
      loadRemoteModule('cartsMfe', './CartQuickCtnComponent')
        .then((m) => {
          this.cart.set(m.CartQuickCtnComponent);
        })
        .catch(console.error);
    });
  }

  ngOnInit(): void {
    console.log('CartQuickPstComponent :: ngOnInit');
    this.headerService.toggleState$.subscribe((state) => {
      this.toggleState = state;
    });
  }


  toggleClass() {
    this.headerService.toggleCart();
  }

  pageCheckout() {
    this.router.navigate(['./e-commerce/checkout']);
    this.toggleClass();
  }

  pageCart() {
    this.router.navigate(['./e-commerce/cart']);
    this.toggleClass();
  }

  @HostListener('window:' + MFEvents.CART_TOGGLE_CLASS, ['$event'])
  onMFECartToggleClass(event: any) {
    this.toggleClass();
  }
}
