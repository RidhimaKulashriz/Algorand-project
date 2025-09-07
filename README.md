# 🛒 ShoppingCart dApp on Algorand

A simple decentralized shopping cart application built on **Algorand** using **TypeScript Smart Contracts**.  
This project demonstrates how to build and interact with a smart contract that manages a cart on-chain.

---

## 📖 Project Description
ShoppingCart dApp is a blockchain-based shopping cart where all cart operations (add, view, clear) are handled by an Algorand smart contract.  
It showcases how decentralized applications can store and manipulate data securely without relying on centralized servers.

---

## ⚙️ What it does
- Allows users to **add items** with their quantity to the shopping cart.
- Lets users **view the current cart** stored on-chain.
- Provides a way to **clear the cart** completely.

All these operations are recorded on Algorand’s blockchain, ensuring **security, immutability, and decentralization**.

---

## ✨ Features
- 🛍 **Add Items** – Add items with quantity into the cart.  
- 📋 **View Cart** – Retrieve the list of all items currently in the cart.  
- 🧹 **Clear Cart** – Reset the cart back to empty.  
- ⚡ **Algorand Powered** – Runs on Algorand blockchain ensuring high speed and low cost.  
- 📝 **Simple & Extendable** – Easy to expand with features like pricing, checkout, payments, etc.  

---

## 📜 Smart Contract Code
```ts
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
````

---

## 🚀 Deployed Smart Contract

🔗 **Contract Address**: [XXX](XXX)

---

## 💡 Next Steps

* Add **item prices** and implement a **checkout function**.
* Integrate with **Algorand Wallet** for real payments.
* Build a **frontend UI** for seamless user experience.

---

## 🤝 Contributing

Feel free to fork this repo, open issues, or submit pull requests to improve the dApp.

---

## 📄 License

This project is licensed under the **MIT License** – free to use and modify.

---

```

Would you like me to also **make this visually attractive for GitHub** with shields (badges) like `Made with Algorand`, `TypeScript`, `MIT License`, etc., so it stands out more?
```
Here’s a clean and beginner-friendly **README.md** tailored for your ShoppingCart dApp:

````markdown
# 🛒 ShoppingCart dApp on Algorand

A simple decentralized shopping cart application built on **Algorand** using **TypeScript Smart Contracts**.  
This project demonstrates how to build and interact with a smart contract that manages a cart on-chain.

---

## 📖 Project Description
ShoppingCart dApp is a blockchain-based shopping cart where all cart operations (add, view, clear) are handled by an Algorand smart contract.  
It showcases how decentralized applications can store and manipulate data securely without relying on centralized servers.

---

## ⚙️ What it does
- Allows users to **add items** with their quantity to the shopping cart.
- Lets users **view the current cart** stored on-chain.
- Provides a way to **clear the cart** completely.

All these operations are recorded on Algorand’s blockchain, ensuring **security, immutability, and decentralization**.

---

## ✨ Features
- 🛍 **Add Items** – Add items with quantity into the cart.  
- 📋 **View Cart** – Retrieve the list of all items currently in the cart.  
- 🧹 **Clear Cart** – Reset the cart back to empty.  
- ⚡ **Algorand Powered** – Runs on Algorand blockchain ensuring high speed and low cost.  
- 📝 **Simple & Extendable** – Easy to expand with features like pricing, checkout, payments, etc.  

---

## 📜 Smart Contract Code
```ts
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
````

---

## 🚀 Deployed Smart Contract

🔗 **Contract Address**: [XXX](XXX)

---

## 💡 Next Steps

* Add **item prices** and implement a **checkout function**.
* Integrate with **Algorand Wallet** for real payments.
* Build a **frontend UI** for seamless user experience.

---

## 🤝 Contributing

Feel free to fork this repo, open issues, or submit pull requests to improve the dApp.

---

## 📄 License

This project is licensed under the **MIT License** – free to use and modify.

---

```

```
