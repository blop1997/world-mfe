import { inject, Injectable, NgZone } from "@angular/core";
import { CartUiStoreService } from "./cart-ui-store-service";

@Injectable({ providedIn: 'root' })
export class MfeCartBridgeService {

  private readonly uiStore=inject(CartUiStoreService)
  private readonly zone=inject(NgZone);
}
