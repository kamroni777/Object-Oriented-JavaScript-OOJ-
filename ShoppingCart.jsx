class ShoppingCart {
  constructor() {
      this.items = []; // Array to store ShoppingCartItem instances
  }

  // Method to add an item to the cart
  addItem(product, quantity) {
      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
          // If the product already exists, update the quantity
          existingItem.quantity += quantity;
      } else {
          // Otherwise, add a new ShoppingCartItem
          this.items.push(new ShoppingCartItem(product, quantity));
      }
  }

  // Method to remove an item from the cart
  removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
  }

  // Method to get the total number of items in the cart
  getTotalItems() {
      return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  // Method to get the total price of all items in the cart
  getTotalPrice() {
      return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }

  // Method to display the cart contents
  displayCart() {
      console.log("Shopping Cart:");
      if (this.items.length === 0) {
          console.log("The cart is empty.");
      } else {
          this.items.forEach(item => {
              console.log(
                  `${item.product.name} - Quantity: ${item.quantity}, Total Price: $${item.getTotalPrice().toFixed(2)}`
              );
          });
          console.log(`Total Items: ${this.getTotalItems()}`);
          console.log(`Total Price: $${this.getTotalPrice().toFixed(2)}`);
      }
  }
}