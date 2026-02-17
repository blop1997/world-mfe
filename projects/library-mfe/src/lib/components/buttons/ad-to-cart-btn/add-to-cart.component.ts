import { Component, input, OnInit } from "@angular/core";
import { MFEvents } from "../../../events/events-enums";
import { Country } from "../../../shared/cart-store/models/country";

@Component({
  selector: 'add-to-cart-btn',
  imports: [

  ],
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.css'
})
export class AddToCartBtnComponent {

  readonly country = input<Country>();

  addToCart() {
    console.log('addToCart...Library');
    window.dispatchEvent(
        new CustomEvent(MFEvents.ADD_TO_CART, {
        detail: {
          country:this.country(),
          quantity:1
        },
      })
    );
  }

}
