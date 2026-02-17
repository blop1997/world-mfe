export enum MFEvents {

  // GENERIC
  ROUTE_CHANGED           = 'mfRouteChanged',

  // PRODUCTS

  SELECTED_PRODUCT         = 'selectedProduct',


  // CART
  ADD_TO_CART             = 'addToCart',

  CHANGE_QUANTITY_IN_CART = 'changeQuantityInCart',

  REMOVE_FROM_CART        = 'removeFromCart',

  CART_TOGGLE_CLASS       = 'cartToggleClass',

  REFRESH_CART_ITEMS     = 'refreshCartItems',

  // PAYMENT
  PROCEED_TO_PAYMENT      = 'proceedToPayment',

  VIEW_ALL_FAVORITES = 'viewAllFavorites',
  PLAN_TRIP = 'planTrip',
  FAVORITES_UPDATED = 'favoritesUpdated'

}
