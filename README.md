# Student Supplies Ordering System

A browser-based school supplies ordering project for IT415 practical practice.

## Current checkpoint

Checkpoint 3 supports adding products, increasing and decreasing quantities,
removing items, and automatically updating subtotals and the order total.
The interface retains five sections:

- Product List
- Shopping Cart
- Order Summary
- Payment Section
- Receipt Section

Payment validation, receipt generation, and transaction reset are not implemented yet.

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
2. Confirm that all six products, their prices, and Add to Cart buttons appear.
3. Resize the browser to check the layout on a narrow screen.

## Files and basic structure

- `index.html` defines the page header, six hard-coded products, five sections, and footer. It links to
  the stylesheet and JavaScript file.
- `style.css` controls colors, spacing, and a two-column layout that becomes
  one column on narrow screens.
- `script.js` reads the product list, holds the cart in an array, handles cart
  controls, and redraws the cart and summary after each change.
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
