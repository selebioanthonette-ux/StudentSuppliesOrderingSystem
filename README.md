# Student Supplies Ordering System

A browser-based ordering system for a small school supplies shop near campus,
created for IT415 practical practice. Customers select supplies, manage their
cart, pay with cash, and view a digital receipt.

## Main features

- Display all six school supplies and their prices.
- Add products to the cart; repeated adds increase the existing quantity.
- Increase or decrease quantities, with a minimum of 1, or remove an item.
- Automatically calculate item subtotals and the total amount.
- Validate cash payment and calculate change.
- Display a digital receipt after successful payment.
- Clear the current transaction using New Transaction.

The interface retains five sections:

- Product List
- Shopping Cart
- Order Summary
- Payment Section
- Receipt Section

After successful payment, cart and payment controls are disabled until New Transaction.

## Technologies

HTML5, CSS, and vanilla JavaScript. No installation, backend, dependencies,
or build tools are required.

## Products

Product names and displayed prices are hard-coded in the HTML list. Each product
row also has a numeric `data-price` attribute used by JavaScript for calculations.

| Product | Price |
|---|---:|
| Ballpen | ₱12.00 |
| Pencil | ₱10.00 |
| Notebook | ₱35.00 |
| Yellow Pad | ₱45.00 |
| Eraser | ₱8.00 |
| Ruler | ₱15.00 |

## How to run

1. Open `index.html` directly in a normal web browser.
2. Keep `index.html`, `style.css`, and `script.js` together in the project folder.
3. No terminal commands or server are needed. JavaScript must be enabled.

## Files and basic structure

- `index.html` defines the page header, six hard-coded products, five sections, and footer. It links to
  the stylesheet and JavaScript file.
- `style.css` controls colors, spacing, and a two-column layout that becomes
  one column on narrow screens.
- `script.js` reads the product list, holds the cart in an array, handles cart
  controls, updates calculations, validates cash payment, creates the receipt,
  and resets the transaction.
- `README.md` describes the current project and how to run it.

## Manual verification

Open browser developer tools and reload the page. Check that `style.css`
and `script.js` load and that the console shows no errors. Check the following:

1. Add Ballpen once: quantity 1, unit price ₱12.00, subtotal and total ₱12.00.
2. Add Ballpen again, Notebook twice, and Eraser once: three cart rows,
   subtotals ₱24.00, ₱70.00, and ₱8.00, and total ₱102.00.
3. Increase Ballpen: quantity 3, subtotal ₱36.00, total ₱114.00.
4. Decrease Ballpen: quantity 2, subtotal ₱24.00, total ₱102.00.
5. Decrease Eraser at quantity 1: the decrease button is disabled; quantity stays 1.
6. Remove Eraser: it disappears from the cart and summary; total becomes ₱94.00.
7. Remove the remaining items: the empty message returns and total is ₱0.00.
8. Resize the window and check that product names, prices, and controls remain readable.

## Cart calculations

Repeated Add to Cart increases the existing item's quantity. Decrease stops at 1;
Remove deletes the item. Each subtotal is unit price multiplied by quantity.
The total is the sum of all subtotals. Amounts display with two decimal places.
The cart is stored only in memory and clears when the page is reloaded.

## Payment and receipt

Payment is prevented for an empty cart (the approved implementation decision).
Blank, non-numeric, non-finite, negative, and insufficient payments are rejected.
Cash input uses increments of ₱0.01. Change is amount paid minus total, rounded
to centavos. Amounts whose centavo value exceeds JavaScript's safe integer range
are rejected to prevent incorrect calculations. A receipt appears only after successful payment and includes each
item's quantity, unit price, subtotal, total, payment, change, and confirmation.
The reference is `SS-<timestamp in milliseconds>-<session counter>`.
Date/time uses the browser's local clock and locale. References are simple
local identifiers; no transaction history is stored.

New Transaction clears the cart, calculations, payment, messages, and receipt,
then enables controls again. All six products remain available.

## Manual payment tests

Build the ₱102.00 example order: Ballpen ×2, Notebook ×2, Eraser ×1.

- Try blank, negative, and ₱100.00 payment: an error should appear with no receipt.
- Try invalid numeric input if your browser permits it: reject it with no receipt.
  JavaScript also checks invalid values even when the numeric input blocks text.
- Pay ₱102.00: accept with ₱0.00 change and all required receipt details.
- Select New Transaction: cart empty, total ₱0.00, input/messages/receipt cleared,
  all products still visible, and controls enabled.
- Rebuild the order and pay ₱150.00: accept with ₱48.00 change.
- After payment, cart controls and payment are disabled; the receipt stays unchanged.
- Start a new transaction and confirm payment with an empty cart: reject it.

## Basic application flow

Choose products, adjust quantities, review the total, enter cash, and confirm
payment. Read the receipt, then select New Transaction for the next customer.

## Checkpoint 5 verification

Executable checks used the actual JavaScript with a simulated DOM, without
adding project dependencies. Product data, cart actions, quantities, subtotals,
totals, all payment cases, receipt fields, reset, and subsequent transactions
passed. An additional test reproduced a payment overflow: `1e308` previously
generated infinite change. Validation now rejects amounts too large for safe
centavo calculations; the regression check and complete sequence passed again.

These checks do not verify browser rendering, native numeric-input behavior,
keyboard navigation, or the browser console. The manual checks above remain
necessary. No browser verification is claimed.

## Submission documentation

- [AI interaction records](docs/AI_USAGE.md): two actual interactions, with
  student evaluation and modification fields explicitly pending.
- [Submission and screenshot checklist](docs/SUBMISSION_CHECKLIST.md): required
  evidence to capture before submission.

The records do not claim student testing, personal evaluations, or screenshots
that have not been provided.
