"use strict";

// Product names and prices come from the hard-coded HTML product list.
const products = Array.from(document.querySelectorAll(".product-row"), (row) => ({
  name: row.querySelector("h3").textContent,
  price: Number(row.dataset.price)
}));
const cart = [];
const cartItems = document.getElementById("cart-items");
const orderSummary = document.getElementById("order-summary");
const paymentInput = document.getElementById("amount-paid");
const confirmPaymentButton = document.getElementById("confirm-payment");
const paymentMessage = document.getElementById("payment-message");
const receiptContent = document.getElementById("receipt-content");
const receiptPlaceholder = document.getElementById("receipt-placeholder");
let paymentCompleted = false;
let transactionCount = 0;

function formatMoney(amount) {
  return `₱${amount.toFixed(2)}`;
}

function addToCart(productIndex) {
  if (paymentCompleted) return;
  paymentMessage.textContent = "";
  const existingItem = cart.find((item) => item.productIndex === productIndex);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ productIndex, quantity: 1 });
  }
  renderCart();
}

function changeQuantity(productIndex, change) {
  if (paymentCompleted) return;
  paymentMessage.textContent = "";
  const item = cart.find((entry) => entry.productIndex === productIndex);
  if (item) {
    item.quantity = Math.max(1, item.quantity + change);
    renderCart();
  }
}

function removeItem(productIndex) {
  if (paymentCompleted) return;
  paymentMessage.textContent = "";
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
    decrease.textContent = "Decrease";
    decrease.setAttribute("aria-label", `Decrease ${product.name} quantity`);
    decrease.disabled = paymentCompleted || item.quantity === 1;
    decrease.addEventListener("click", () => changeQuantity(item.productIndex, -1));

    const increase = document.createElement("button");
    increase.type = "button";
    increase.textContent = "Increase";
    increase.disabled = paymentCompleted;
    increase.setAttribute("aria-label", `Increase ${product.name} quantity`);
    increase.addEventListener("click", () => changeQuantity(item.productIndex, 1));

    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "Remove";
    remove.disabled = paymentCompleted;
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

function getTotal() {
  return cart.reduce((total, item) => total + products[item.productIndex].price * item.quantity, 0);
}

function confirmPayment() {
  if (paymentCompleted) return;
  paymentMessage.className = "error-message";

  if (cart.length === 0) {
    paymentMessage.textContent = "Your cart is empty. Add a product before paying.";
    return;
  }

  const rawPayment = paymentInput.value.trim();
  const amountPaid = Number(rawPayment);
  // badInput catches numeric input that the browser cannot convert to a value.
  if (paymentInput.validity.badInput || !Number.isFinite(amountPaid)) {
    paymentMessage.textContent = "Enter a valid numeric payment amount.";
    return;
  }
  if (rawPayment === "") {
    paymentMessage.textContent = "Enter the amount paid.";
    return;
  }
  if (amountPaid < 0) {
    paymentMessage.textContent = "Payment cannot be negative.";
    return;
  }
  // Centavo calculations must stay within JavaScript's safe integer range.
  if (!Number.isSafeInteger(Math.round(amountPaid * 100))) {
    paymentMessage.textContent = "Payment amount is too large. Enter a smaller cash amount.";
    return;
  }
  if (paymentInput.validity.stepMismatch) {
    paymentMessage.textContent = "Enter a payment amount with no more than two decimal places.";
    return;
  }

  const total = getTotal();
  if (amountPaid < total) {
    paymentMessage.textContent = `Insufficient payment. The total is ${formatMoney(total)}.`;
    return;
  }

  const change = Math.round((amountPaid - total) * 100) / 100;
  const now = new Date();
  transactionCount += 1;
  const reference = `SS-${now.getTime()}-${transactionCount}`;
  receiptContent.replaceChildren();

  // Use textContent so receipt values are treated as text, not HTML.
  function receiptLine(text) {
    const line = document.createElement("p");
    line.textContent = text;
    receiptContent.append(line);
  }

  receiptLine(`Transaction reference: ${reference}`);
  receiptLine(`Date and time: ${now.toLocaleString()}`);
  cart.forEach((item) => {
    const product = products[item.productIndex];
    receiptLine(`${product.name} | Quantity: ${item.quantity} | Unit price: ${formatMoney(product.price)} | Subtotal: ${formatMoney(product.price * item.quantity)}`);
  });
  receiptLine(`Total amount due: ${formatMoney(total)}`);
  receiptLine(`Amount paid: ${formatMoney(amountPaid)}`);
  receiptLine(`Change: ${formatMoney(change)}`);
  receiptLine("Payment confirmed. Thank you for your purchase!");
  receiptContent.hidden = false;
  receiptPlaceholder.hidden = true;
  paymentMessage.className = "success-message";
  paymentMessage.textContent = `Payment accepted. Change: ${formatMoney(change)}. Select New Transaction for the next order.`;
  paymentCompleted = true;
  paymentInput.disabled = true;
  confirmPaymentButton.disabled = true;
  document.querySelectorAll(".product-row button").forEach((button) => {
    button.disabled = true;
  });
  renderCart();
}

function newTransaction() {
  cart.length = 0;
  paymentCompleted = false;
  paymentInput.value = "";
  paymentInput.disabled = false;
  confirmPaymentButton.disabled = false;
  paymentMessage.textContent = "";
  paymentMessage.className = "";
  receiptContent.replaceChildren();
  receiptContent.hidden = true;
  receiptPlaceholder.hidden = false;
  document.querySelectorAll(".product-row button").forEach((button) => {
    button.disabled = false;
  });
  renderCart();
}

confirmPaymentButton.addEventListener("click", confirmPayment);
document.getElementById("new-transaction").addEventListener("click", newTransaction);

document.querySelectorAll(".product-row button").forEach((button, index) => {
  button.addEventListener("click", () => addToCart(index));
});

renderCart();
