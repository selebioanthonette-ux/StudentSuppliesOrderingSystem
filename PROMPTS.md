# PROMPTS.md — Student Supplies Ordering System

## Project

**Student Supplies Ordering System**

IT415 Midterm Practical Practice

---

# General Instructions for Codex

Before working on any checkpoint:

1. Read `AGENTS.md`.
2. Read this `PROMPTS.md`.
3. Inspect the existing project files.
4. Inspect existing tests if any.
5. Work ONLY on the checkpoint I explicitly request.
6. Do not automatically continue to the next checkpoint.

The goal is a simple, functional, testable, and explainable application.

Use:

- HTML5
- CSS
- Vanilla JavaScript
- Hard-coded product data
- Browser-based application

Do NOT introduce unless explicitly requested:

- React
- Vue
- Angular
- Backend/server
- Database
- Authentication
- APIs
- Online payment systems
- Package dependencies
- Build tools

Do not add optional features just to make the application look more advanced.

I am responsible for understanding, evaluating, modifying, and testing
AI-generated work.

After every checkpoint:

1. Explain what you changed.
2. List the files changed.
3. Explain important code/logic in student-friendly language.
4. Tell me exactly how to test the checkpoint.
5. Report any tests you performed.
6. Show the current `git status`.
7. STOP and wait for my instruction.

Do NOT commit or push unless I explicitly tell you to do so.

Work only on `main`.

Do not create branches or pull requests.


---

# P0 — Requirements Analysis

Analyze the provided `IT415_PRACTICE` scenario for the
Student Supplies Ordering System.

Do NOT generate application code yet.

Based only on the provided scenario, analyze:

1. Problem definition
2. Target users
3. Required product data
4. Main application flow
5. Functional requirements
6. Inputs
7. Outputs
8. Business rules and calculations
9. Input validation
10. Data requirements
11. Digital receipt requirements
12. UI requirements
13. Testing requirements
14. Git and GitHub requirements
15. AI-assisted development requirements
16. Submission requirements
17. Recommended technology stack
18. Development checkpoints
19. Scope control
20. Requirement conflicts or ambiguities

Clearly separate explicit scenario requirements from recommendations.

Do not silently invent missing requirements.

At the end provide:

- Requirements Checklist
- Before Coding — Decisions to Confirm
- Proposed Checkpoint Order

Do NOT modify project files.

Do NOT generate application code.

STOP after the analysis.


---

# P1 — Project Setup and Basic Interface

Read `AGENTS.md`, `PROMPTS.md`, and the approved requirements analysis.

Implement ONLY:

**Checkpoint 1 — Project Setup & Basic Interface**

## Goal

Create a simple working browser-based project for the
Student Supplies Ordering System.

## Technology

Use only:

- HTML5
- CSS
- Vanilla JavaScript

Do not add:

- Frameworks
- Database
- Backend
- Authentication
- APIs
- Package dependencies

## Project Structure

Keep the structure simple and appropriate for a timed practical exam.

At minimum, prepare the files needed for:

- HTML interface
- CSS styling
- JavaScript behavior
- README

Do not create unnecessary folders or architecture.

## Basic Interface

Create the basic application layout with clearly identifiable sections for:

- Product List
- Shopping Cart
- Order Summary
- Payment Section
- Receipt Section

At this checkpoint, these sections may contain simple placeholders.

The goal is to establish the interface structure, NOT to implement the
complete application.

## Do NOT Implement Yet

Do not implement:

- Full product list
- Add to Cart behavior
- Quantity controls
- Cart calculations
- Payment validation
- Receipt generation
- New Transaction behavior

Those belong to later checkpoints.

## Verification

Verify:

1. The application opens successfully in the browser.
2. The five required interface sections exist.
3. HTML, CSS, and JavaScript files load correctly.
4. There are no obvious console errors.
5. The project remains simple and understandable.

After implementation, report:

- Files created
- Files modified
- Purpose of each file
- How to run the application
- How the basic structure works
- Verification performed
- Current `git status`

Do NOT commit.

Do NOT push.

STOP after Checkpoint 1.

Suggested Git commit after I review and approve this checkpoint:

`Initial commit: Set up project and basic interface`


---

# P2 — Product List and Basic User Interface

Read the existing project first.

Implement ONLY:

**Checkpoint 2 — Six Products & Product UI**

Do not begin cart functionality yet.

## Required Products

Display ALL SIX products using these exact names and prices:

1. Ballpen — ₱12.00
2. Pencil — ₱10.00
3. Notebook — ₱35.00
4. Yellow Pad — ₱45.00
5. Eraser — ₱8.00
6. Ruler — ₱15.00

Use hard-coded product information.

No database is required.

## Product Interface

Each product must clearly display:

- Product name
- Price
- Add to Cart button

Product names and prices must be readable.

The Product List and Shopping Cart areas should be easy to understand.

Keep the visual design simple.

Do not spend excessive time on decorative styling.

## Do NOT Implement Yet

Do not implement:

- Working Add to Cart logic
- Quantity calculations
- Subtotal calculations
- Total calculations
- Payment
- Receipt
- New Transaction

The buttons may exist visually, but the full cart behavior belongs to P3.

## Verification

Check:

- Ballpen is ₱12.00
- Pencil is ₱10.00
- Notebook is ₱35.00
- Yellow Pad is ₱45.00
- Eraser is ₱8.00
- Ruler is ₱15.00
- All six products appear
- Every product has Add to Cart
- Product names are readable
- Prices are readable
- Layout remains easy to use

Report:

- What was implemented
- Files changed
- How the product data is represented
- Verification results
- Current `git status`

Do NOT commit.

Do NOT push.

STOP after Checkpoint 2.

Suggested Git commit after I review and approve this checkpoint:

`Add product list and basic user interface`


---

# P3 — Shopping Cart and Order Calculations

Read the current project before making changes.

Implement ONLY:

**Checkpoint 3 — Shopping Cart, Quantities & Calculations**

## Required Cart Functionality

Implement:

- Add to Cart
- Display selected product name
- Display unit price
- Display quantity
- Increase quantity
- Decrease quantity
- Remove item
- Calculate item subtotal
- Calculate total amount
- Automatically update the Order Summary whenever the cart changes

## Quantity Rule

A cart item's quantity must not remain zero or become negative.

Use this approved implementation decision:

- Minimum cart quantity = 1
- Decrease must not take quantity below 1
- Use a separate Remove button to remove an item

If Add to Cart is selected again for an item already in the cart:

- Increase the existing item's quantity
- Do not create a duplicate cart row

## Required Calculations

Use:

`Subtotal = Unit Price × Quantity`

Use:

`Total Amount = Sum of All Item Subtotals`

Keep calculation logic simple and easy to explain.

## Order Summary

The Order Summary must automatically reflect the current cart.

It should show enough information to verify the current order and total.

## Testing

Test at minimum:

### Test 1 — One Product

Add:

Ballpen ×1

Expected:

- Quantity = 1
- Unit price = ₱12.00
- Subtotal = ₱12.00
- Total = ₱12.00

### Test 2 — Multiple Products

Add:

Ballpen ×2
Notebook ×2
Eraser ×1

Expected:

Ballpen:
2 × ₱12 = ₱24

Notebook:
2 × ₱35 = ₱70

Eraser:
1 × ₱8 = ₱8

Expected total:

₱24 + ₱70 + ₱8 = ₱102

### Test 3 — Increase

Increase a product quantity.

Verify:

- Quantity increases
- Subtotal increases correctly
- Total updates

### Test 4 — Decrease

Decrease a product quantity.

Verify:

- Quantity decreases
- Subtotal updates
- Total updates
- Quantity never becomes zero or negative

### Test 5 — Remove

Remove a product.

Verify:

- Product disappears from cart
- Order Summary updates
- Total updates

### Test 6 — Repeated Add

Click Add to Cart again for an existing product.

Verify:

- Existing quantity increases
- Duplicate cart row is not created

## Do NOT Implement Yet

Do not implement:

- Payment completion
- Digital receipt
- New Transaction

Those belong to P4.

After implementation report:

- Cart logic implemented
- Calculation logic implemented
- Files changed
- Test cases performed
- Expected vs actual results
- Current `git status`

Do NOT commit.

Do NOT push.

STOP after Checkpoint 3.

Suggested Git commit after I review and approve this checkpoint:

`Implement cart and order calculations`


---

# P4 — Payment Validation, Digital Receipt, and New Transaction

Read and test the existing cart functionality first.

Implement ONLY:

**Checkpoint 4 — Payment, Validation, Change, Receipt & Reset**

## Cash Payment

Provide:

- Numeric payment input
- Confirm Payment button

The application must validate the entered amount before completing the
transaction.

## Required Payment Validation

### Blank Payment

If payment is blank:

- Reject payment
- Display an appropriate error
- Do not generate a successful receipt

### Invalid Payment

If payment is not a valid number:

- Reject payment
- Display an appropriate error
- Do not generate a successful receipt

Even if the browser's numeric input limits text entry, the JavaScript
validation must still account for an invalid numeric value.

### Negative Payment

If payment is negative:

- Reject payment
- Display an appropriate error

### Insufficient Payment

If:

`Amount Paid < Total Amount`

then:

- Reject payment
- Display an appropriate error
- Do not generate a successful receipt

### Exact Payment

If:

`Amount Paid = Total Amount`

then:

- Accept payment
- Change = ₱0.00

### Excess Payment

If:

`Amount Paid > Total Amount`

then:

- Accept payment
- Calculate correct change

## Change Formula

Use:

`Change = Amount Paid − Total Amount`

Example:

Total = ₱102.00

Paid = ₱150.00

Expected:

Change = ₱48.00

## Empty Cart

Use the approved implementation decision:

Prevent payment when the cart is empty.

Display a simple message explaining that the cart is empty.

Treat this as an implementation decision rather than an explicit scenario
requirement.

## Digital Receipt

ONLY after successful payment, display a digital receipt containing:

- Transaction reference number
- Date and time, if available
- Purchased products
- Quantity of each product
- Unit price
- Subtotal
- Total amount due
- Amount paid
- Change
- Payment confirmation message

Do NOT generate a successful receipt after invalid or insufficient payment.

## Transaction Reference

Generate a simple transaction reference.

The scenario does not prescribe the exact format.

Keep the implementation understandable and explain how it works.

## Date and Time

Include current date/time because it is simple to provide, while recognizing
that the scenario states "if available."

## New Transaction

Provide a New Transaction button.

When selected, clear:

- Shopping cart
- Quantities belonging to the previous cart
- Payment amount
- Payment validation messages
- Order transaction calculations/state as appropriate
- Previous receipt

The hard-coded product list must remain available.

The application should be ready for a completely new transaction.

## Testing

Test ALL of the following:

1. Blank payment
2. Invalid/non-numeric payment
3. Negative payment
4. Payment below total
5. Payment exactly equal to total
6. Payment greater than total
7. Correct change
8. Receipt appears only after successful payment
9. Receipt contains required information
10. New Transaction clears previous transaction
11. Product list remains after reset
12. Empty-cart payment is prevented

Use the ₱102 example when useful:

Ballpen ×2 = ₱24
Notebook ×2 = ₱70
Eraser ×1 = ₱8

Total = ₱102

If paid ₱150:

Change = ₱48

After implementation report:

- Payment behavior implemented
- Validation cases implemented
- Receipt behavior implemented
- Reset behavior implemented
- Files changed
- Test results
- Current `git status`

Do NOT commit.

Do NOT push.

STOP after Checkpoint 4.

Suggested Git commit after I review and approve this checkpoint:

`Add payment validation and digital receipt`


---

# P5 — Complete Testing, Debugging, and Usability Improvements

Read the entire existing project.

Do NOT add new optional features.

This checkpoint is for:

**Complete Testing, Debugging & Usability**

## Step 1 — Run the Complete Required Test Sequence

Test:

### Products

- All six products appear
- All prices are correct
- Add to Cart exists for every product

### Cart

- Add one product
- Add multiple products
- Increase quantity
- Decrease quantity
- Remove product
- Repeated Add to Cart
- Quantity does not remain zero or become negative

### Calculations

Verify:

`Subtotal = Unit Price × Quantity`

Verify:

`Total = Sum of Item Subtotals`

Use the known test:

Ballpen ×2 = ₱24
Notebook ×2 = ₱70
Eraser ×1 = ₱8

Expected total:

₱102

### Payment

Test:

- Blank payment
- Invalid payment
- Negative payment
- Insufficient payment
- Exact payment
- Excess payment

For total ₱102:

Paid ₱100
→ Reject

Paid ₱102
→ Accept
→ Change ₱0

Paid ₱150
→ Accept
→ Change ₱48

### Receipt

Verify:

- Receipt appears only after successful payment
- Transaction reference appears
- Date/time appears if implemented
- Purchased products are correct
- Quantities are correct
- Unit prices are correct
- Subtotals are correct
- Total is correct
- Amount paid is correct
- Change is correct
- Payment confirmation appears

### New Transaction

After completing a transaction:

Select New Transaction.

Verify:

- Cart cleared
- Payment cleared
- Validation messages cleared
- Receipt cleared
- Product list remains available
- Application is ready for another transaction

## Step 2 — Identify Real Problems

If testing reveals an actual bug or requirement mismatch:

1. Reproduce it.
2. Explain the expected behavior.
3. Explain the actual behavior.
4. Identify the root cause.
5. Apply the smallest appropriate fix.
6. Retest the affected behavior.
7. Repeat the complete relevant test sequence.

Do NOT invent a bug just to create debugging history.

If no functional bug exists, do not deliberately break the application.

## Step 3 — Improve Readability and Usability

Review the application for genuine usability/readability problems.

You may improve:

- Labels
- Spacing
- Readability
- Button clarity
- Error-message clarity
- Basic layout consistency

Do NOT:

- Redesign the whole application
- Add animations
- Add frameworks
- Add optional features
- Add database functionality
- Add login
- Add online payments

## Step 4 — Report

Report:

- Complete tests performed
- PASS/FAIL result for each
- Actual bugs discovered
- Root causes
- Fixes made
- Usability improvements made
- Files changed
- Remaining known issues
- Current `git status`

Do NOT commit.

Do NOT push.

STOP after Checkpoint 5.

Suggested Git commit after I review and approve the checkpoint:

`Fix bugs and improve application`


---

# P6 — README and Submission Documentation

This is a documentation/finalization prompt.

Do NOT add application features.

Review the completed application and update the README so that it accurately
describes the project that actually exists.

## README

Include:

- Project title
- Brief description
- Main features
- Product list
- Technology used
- How to run the application
- Basic transaction flow

Do not claim features that do not exist.

## AI Usage Documentation

Prepare the required AI interaction records.

For each documented AI interaction include:

1. Prompt Used
2. Purpose
3. AI Response
4. Your Evaluation
5. Modifications Made

Do not invent evaluations or modifications.

Use actual AI interactions from this development process.

At least two AI interactions must be documented.

## Screenshot Checklist

Remind me to capture evidence of:

- Product List
- Shopping Cart
- Payment Validation
- Digital Receipt
- GitHub repository
- GitHub commit history

Do not fabricate screenshots.

## Verification

Verify that the README accurately matches the final application.

Report:

- Documentation updated
- Files changed
- AI documentation still needed, if any
- Screenshots still needed, if any
- Current `git status`

Do NOT commit.

Do NOT push.

STOP after documentation review.


---

# P7 — Final Submission Verification

Perform a FINAL REVIEW.

Do not add optional features.

Do not refactor working code merely for preference.

## Application Checklist

Verify:

- [ ] Application opens successfully
- [ ] All six products appear
- [ ] Product prices are correct
- [ ] Products can be added to cart
- [ ] Quantities can be increased
- [ ] Quantities can be decreased
- [ ] Products can be removed
- [ ] Invalid zero/negative quantities are prevented
- [ ] Subtotals calculate correctly
- [ ] Total calculates correctly
- [ ] Order Summary updates automatically
- [ ] Cash payment input works
- [ ] Blank payment is rejected
- [ ] Invalid payment is rejected
- [ ] Negative payment is rejected
- [ ] Insufficient payment is rejected
- [ ] Exact payment succeeds
- [ ] Excess payment succeeds
- [ ] Change is correct
- [ ] Receipt appears after successful payment
- [ ] Receipt contains required information
- [ ] Transaction reference exists
- [ ] New Transaction clears previous transaction
- [ ] Product list remains available after reset

## Git/GitHub Checklist

Inspect and remind me to verify:

- [ ] Git repository exists
- [ ] Correct GitHub remote is configured
- [ ] Required meaningful commits exist
- [ ] Every local commit has been pushed
- [ ] Commit history is visible on GitHub
- [ ] Repository contains latest source code

Expected development history should approximately contain:

1. `Initial commit: Set up project and basic interface`
2. `Add product list and basic user interface`
3. `Implement cart and order calculations`
4. `Add payment validation and digital receipt`
5. `Fix bugs and improve application`

Do not create fake commits merely to match this list.

## Submission Checklist

Verify/remind me to prepare:

- [ ] Working application source code
- [ ] GitHub repository link
- [ ] At least two documented AI interactions
- [ ] Product-list screenshot
- [ ] Shopping-cart screenshot
- [ ] Payment-validation screenshot
- [ ] Digital-receipt screenshot
- [ ] GitHub repository/commit-history screenshot
- [ ] README

Give me a final:

- PASS/FAIL checklist
- Missing requirements
- Remaining submission tasks
- Any problems that must be fixed before submission

Do NOT commit.

Do NOT push.

STOP after the final verification.