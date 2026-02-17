import { Country } from "./country";

export type CartItem = {
  id:string;
  country?: Country;
  quantity?: number;
}
