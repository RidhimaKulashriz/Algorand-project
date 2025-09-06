# Algorand-project
# 🛒 Algorand Shopping Cart dApp

## 📖 Project Description  
This project is a **decentralized shopping cart application** built on the **Algorand blockchain**.  
It demonstrates how smart contracts can power secure, transparent, and tamper-proof e-commerce experiences.  

The dApp allows users to interact with a shopping cart in a decentralized way, ensuring all operations are stored and validated on-chain.  

---

## 🚀 What it Does  
- Lets users add and manage items in their cart  
- Uses Algorand smart contracts to store cart state securely  
- Provides an example of building beginner-friendly dApps on Algorand  
- Demonstrates **TypeScript-based contract development**  

---

## ✨ Features  
- **Decentralized Cart State**: Items are stored on Algorand blockchain via smart contracts  
- **Beginner-Friendly**: Simple code structure for new blockchain developers  
- **Transparency**: Cart updates are visible and verifiable on-chain  
- **Customizable**: Extendable for discounts, product catalogs, or payments  

---

## 🔗 Deployed Smart Contract  
MPFBLC6MAI53RH4RZYNIMS772ZKPEA3GUWX4RBQZR5A2WCYOG6ZMZSDV3Q

---

## 🛠 Example Smart Contract Code  

```typescript
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
