# Student Supplies Ordering System

A browser-based school supplies ordering project for IT415 practical practice.

## Current checkpoint

Checkpoint 2 displays all six products and their prices in the Product List.
Each product has a disabled Add to Cart button; cart behavior is not available yet.
The interface retains five sections:

- Product List
- Shopping Cart
- Order Summary
- Payment Section
- Receipt Section

Shopping cart behavior, calculations, payment validation,
receipt generation, and transaction reset are not implemented yet.

## Technologies

HTML5, CSS, and vanilla JavaScript. No installation, backend, dependencies,
or build tools are required.

## Products

Product information is hard-coded directly in the HTML list.

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
- `script.js` is connected and reserved for later behavior. It currently
  contains strict mode and comments only.
- `README.md` describes the current project and how to run it.

## Manual verification

Open browser developer tools and reload the page. Check that `style.css`
and `script.js` load and that the console shows no errors. There are no
working ordering controls at this checkpoint. Confirm that each Add to Cart
button is disabled and leaves the cart unchanged. Check all prices against
the product table above and check that text remains readable on narrow screens.
