"use strict";

// Product names and prices come from the hard-coded HTML product list.
const products = Array.from(document.querySelectorAll(".product-row"), (row) => ({
  name: row.querySelector("h3").textContent,
  price: Number(row.dataset.price)
}));
const cart = [];
const cartItems = document.getElementById("cart-items");
const orderSummary = document.getElementById("order-summary");

function formatMoney(amount) {
  return `₱${amount.toFixed(2)}`;
}

function addToCart(productIndex) {
  const existingItem = cart.find((item) => item.productIndex === productIndex);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ productIndex, quantity: 1 });
  }
  renderCart();
}

function changeQuantity(productIndex, change) {
  const item = cart.find((entry) => entry.productIndex === productIndex);
  if (item) {
    item.quantity = Math.max(1, item.quantity + change);
    renderCart();
  }
}

function removeItem(productIndex) {
  const index = cart.findIndex((item) => item.productIndex === productIndex);
  if (index !== -1) {
    cart.splice(index, 1);
    renderCart();
  }
}

function renderCart() {
  cartItems.replaceChildren();
  orderSummary.replaceChildren();
  let total = 0;

  if (cart.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "Your cart is empty. Choose a product from the Product List.";
    cartItems.append(emptyMessage);
  }

  cart.forEach((item) => {
    const product = products[item.productIndex];
    const subtotal = product.price * item.quantity;
    total += subtotal;

    const row = document.createElement("div");
    row.className = "cart-row";
    const name = document.createElement("h3");
    name.textContent = product.name;
    const details = document.createElement("p");
    details.textContent = `Unit price: ${formatMoney(product.price)} | Quantity: ${item.quantity} | Subtotal: ${formatMoney(subtotal)}`;
    const controls = document.createElement("div");
    controls.className = "cart-controls";

    const decrease = document.createElement("button");
    decrease.type = "button";
    decrease.textContent = "−";
    decrease.setAttribute("aria-label", `Decrease ${product.name} quantity`);
    decrease.disabled = item.quantity === 1;
    decrease.addEventListener("click", () => changeQuantity(item.productIndex, -1));

    const increase = document.createElement("button");
    increase.type = "button";
    increase.textContent = "+";
    increase.setAttribute("aria-label", `Increase ${product.name} quantity`);
    increase.addEventListener("click", () => changeQuantity(item.productIndex, 1));

    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "Remove";
    remove.setAttribute("aria-label", `Remove ${product.name} from cart`);
    remove.addEventListener("click", () => removeItem(item.productIndex));

    controls.append(decrease, increase, remove);
    row.append(name, details, controls);
    cartItems.append(row);

    const summaryItem = document.createElement("p");
    summaryItem.textContent = `${product.name} × ${item.quantity} = ${formatMoney(subtotal)}`;
    orderSummary.append(summaryItem);
  });

  const totalLine = document.createElement("p");
  totalLine.className = "order-total";
  totalLine.textContent = `Total Amount: ${formatMoney(total)}`;
  orderSummary.append(totalLine);
}

document.querySelectorAll(".product-row button").forEach((button, index) => {
  button.addEventListener("click", () => addToCart(index));
});

renderCart();
