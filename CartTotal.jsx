class ShoppingCartItem {
  constructor(product, quantity) {
      this.product = product; // Instance of the Product class
      this.quantity = quantity; // Quantity of the product in the cart
  }

  // Method to calculate the total price of the item
  getTotalPrice() {
      return this.product.price * this.quantity;
  }
}