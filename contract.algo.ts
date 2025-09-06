import { Contract, GlobalState } from "@algorandfoundation/algorand-typescript";

export class ShoppingCart extends Contract {

  // Global state to store items (for now just one string list)
  cart = GlobalState<string>({ key: "cart", initialValue: "" });

  // Add item to cart
  addItem(name: string, quantity: string): string {
    this.cart.value = this.cart.value + " | " + name + " x" + quantity;
    return name;
  }

  // Get all items in cart
  getCart(): string {
    return this.cart.value;
  }

  // Clear cart
  clearCart(): string {
    this.cart.value = "";
    return "Cart cleared!";
  }
}
