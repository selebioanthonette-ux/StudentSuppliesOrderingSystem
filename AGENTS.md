# AGENTS.md — Student Supplies Ordering System

## 1. Project Context

This project is for an IT415 Application Development and Emerging Technologies practical examination/practice.

Project Name:

StudentSuppliesOrderingSystem

The application is a simple browser-based Student Supplies Ordering System for a small school supplies shop near campus.

Customers should be able to:

- View available school supplies
- Add products to a shopping cart
- Manage product quantities
- Remove products from the cart
- View item subtotals and the total amount
- Enter a cash payment
- Receive payment validation
- View the calculated change
- Receive a digital receipt
- Start a new transaction

The goal is a simple, functional, understandable, and testable application.

Do not make the project unnecessarily complex.


## 2. Your Role

You are the coding assistant for this project.

You will work directly inside the currently opened project folder.

You may:

- Inspect existing project files
- Create files required by the current checkpoint
- Edit existing files
- Fix real bugs
- Improve code when explicitly requested
- Perform reasonable verification available in the environment

The student will provide development instructions one checkpoint at a time.

Work ONLY on the requested checkpoint.

Do not automatically continue to another checkpoint.


## 3. Required Technology

Use:

- HTML5
- CSS
- Vanilla JavaScript

The application must run directly in a normal web browser.

Keep the project simple.

Do NOT introduce:

- React
- Vue
- Angular
- Tailwind
- Bootstrap unless explicitly requested
- Node.js backend
- PHP backend
- Python backend
- Databases
- Authentication systems
- Login/register systems
- External APIs
- Package managers
- Build tools
- Unnecessary libraries or dependencies

A database and user authentication are not required for this project.


## 4. Product Data

Use the following six products exactly:

| Product | Price |
|---|---:|
| Ballpen | ₱12.00 |
| Pencil | ₱10.00 |
| Notebook | ₱35.00 |
| Yellow Pad | ₱45.00 |
| Eraser | ₱8.00 |
| Ruler | ₱15.00 |

The products may be hard-coded in the application.

Do not add additional products unless explicitly requested.


## 5. Required Application Sections

The interface must eventually contain these sections:

1. Product List
2. Shopping Cart
3. Order Summary
4. Payment Section
5. Receipt Section

However, do not implement the complete functionality of all sections during an early checkpoint if it has not yet been requested.

Respect checkpoint boundaries.


## 6. Shopping Cart Rules

When the cart functionality is requested:

- Add to Cart should add the selected product.
- If the same product is added again, increase its existing quantity instead of creating unnecessary duplicate cart entries.
- Display the product name.
- Display the unit price.
- Display the quantity.
- Display the item subtotal.
- Allow quantity increase.
- Allow quantity decrease.
- Allow an item to be removed.

Quantity should not remain zero or negative.

Use a minimum quantity of 1 while an item remains in the cart.

Use a separate Remove action to completely remove an item.


## 7. Calculation Rules

Use these formulas:

Item Subtotal:

Subtotal = Unit Price × Quantity

Order Total:

Total Amount = Sum of All Item Subtotals

Display Philippine peso amounts using the ₱ symbol and two decimal places when appropriate.

Examples:

Ballpen × 1 = ₱12.00

Ballpen × 2 = ₱24.00

Example test order:

- Ballpen × 2 = ₱24.00
- Notebook × 2 = ₱70.00
- Eraser × 1 = ₱8.00

Expected Total:

₱102.00


## 8. Payment Rules

When payment functionality is requested, provide a cash payment input and a Confirm Payment action.

Validate the payment before completing the transaction.

Reject:

- Blank payment
- Invalid/non-numeric payment
- Negative payment
- Payment below the total amount

If payment equals the total amount:

- Accept the payment
- Change must be ₱0.00

If payment is greater than the total amount:

- Accept the payment
- Calculate the correct change

Use:

Change = Amount Paid − Total Amount

Example:

Total = ₱102.00

Paid = ₱150.00

Expected Change = ₱48.00

Do not generate a successful receipt when payment validation fails.

If payment is attempted while the cart is empty, prevent the transaction and provide a clear message.


## 9. Digital Receipt Rules

After a successful payment, display a digital receipt.

The receipt should include:

- Transaction reference
- Date and time when available
- Purchased products
- Quantity of each product
- Unit price and/or item subtotal
- Total amount
- Amount paid
- Change
- Confirmation message

Use a simple transaction reference.

Do not build unnecessary transaction-history, database, printing, PDF, email, or account features unless explicitly requested.


## 10. New Transaction Rules

When New Transaction functionality is requested, it should reset the current transaction.

Clear:

- Shopping cart
- Product quantities associated with the cart
- Order calculations
- Payment input
- Payment validation messages
- Receipt information

Keep the product list available for the next customer.

The application should return to a clean state ready for another transaction.


## 11. Scope Control

Do not invent requirements.

Do not add unnecessary features such as:

- Login/register
- Customer accounts
- Admin accounts
- Database storage
- Inventory management system
- Product CRUD
- Search
- Categories
- Discounts
- Taxes
- Promo codes
- GCash
- Card payments
- Online payments
- External APIs
- Order history
- Email receipts
- PDF receipts
- Advanced printing systems
- Complex animations
- Frameworks
- Backend services

Prioritize required functionality over extra features.

If an unspecified decision is necessary, choose the simplest reasonable implementation and clearly report the decision.


## 12. Checkpoint Development Rule

Development must happen one checkpoint at a time.

Expected development sequence:

### Checkpoint 1
Project Setup and Basic Interface

### Checkpoint 2
Product List and Basic User Interface

### Checkpoint 3
Shopping Cart and Order Calculations

### Checkpoint 4
Payment Validation, Digital Receipt, and New Transaction

### Checkpoint 5
Complete Testing, Real Bug Fixes, and Usability Improvements

Do not implement functionality from future checkpoints early unless explicitly instructed.

After completing the requested checkpoint, STOP and wait for the student's next instruction.


## 13. Before Making Changes

Before editing the project:

1. Inspect the existing project files.
2. Understand the current project state.
3. Identify the current checkpoint.
4. Preserve functionality that already works.
5. Do not rewrite working code unnecessarily.
6. Do not implement future checkpoint features.

If instructions conflict with the current project state, explain the issue before making unnecessary changes.


## 14. After Making Changes

After completing a checkpoint, report:

### Changes Made
Explain what was implemented.

### Files Created or Modified
List the files you actually changed.

### How It Works
Briefly explain the important logic in student-friendly language.

### Verification Performed
Explain what you were actually able to check.

Never claim that something passed if it was not actually tested.

### Manual Browser Tests
Tell the student exactly what should be manually tested.

### Expected Results
Explain what should happen during those tests.

### Problems or Limitations
Report any known issues.

### Git Status
If available, report the current Git working-tree state.

Then STOP.

Do not continue to the next checkpoint automatically.


## 15. Testing Rules

Testing is part of development.

The completed application should eventually be tested for:

- Adding one product
- Adding multiple products
- Increasing quantity
- Decreasing quantity
- Removing an item
- Correct item subtotal
- Correct total amount
- Repeated Add to Cart behavior
- Blank payment
- Invalid/non-numeric payment
- Negative payment
- Insufficient payment
- Exact payment
- Excess payment
- Correct change
- Successful digital receipt
- New Transaction reset

Use known expected values when possible.

Example calculation test:

Ballpen × 2 = ₱24.00

Notebook × 2 = ₱70.00

Eraser × 1 = ₱8.00

Expected Total = ₱102.00

Payment tests for that order:

₱100.00 → Reject as insufficient

₱102.00 → Accept, change = ₱0.00

₱150.00 → Accept, change = ₱48.00


## 16. Debugging Rules

Do not intentionally create bugs for the purpose of generating Git history.

When a real bug occurs:

1. Reproduce the problem.
2. Identify the expected behavior.
3. Identify the actual behavior.
4. Determine the actual cause.
5. Make the smallest reasonable fix.
6. Retest the affected functionality.
7. Check that existing functionality still works.
8. Explain the bug and fix clearly.

Only document bugs that actually occurred.


## 17. Code Quality Rules

Code should be:

- Readable
- Organized
- Consistently formatted
- Appropriately named
- Easy for a student to explain
- Appropriate for the size of the application

Avoid:

- Unnecessary abstraction
- Overengineering
- Huge functions when simple separation is reasonable
- Duplicate logic when easily avoidable
- Unexplained complicated code
- Unnecessary dependencies

Prefer simple solutions that satisfy the requirements correctly.


## 18. Git and GitHub Rules

Do NOT automatically:

- Create commits
- Push to GitHub
- Create branches
- Create pull requests
- Rewrite Git history

The student controls Git and GitHub operations unless explicitly asking you to perform them.

The project uses the main branch only.

Development should produce meaningful checkpoints approximately corresponding to:

1. Initial commit: Set up project and basic interface
2. Add product list and basic user interface
3. Implement cart and order calculations
4. Add payment validation and digital receipt
5. Fix bugs and improve application

Do not create fake changes merely to produce these commits.

A checkpoint should be implemented and tested before it is committed.


## 19. AI-Assisted Development Rules

AI is being used as a development assistant.

The student remains responsible for:

- Understanding generated code
- Evaluating the result
- Testing the application
- Identifying problems
- Requesting or making modifications
- Explaining how the application works

When completing a meaningful AI-assisted task, provide a concise summary that can help the student document:

- What was requested
- What the AI produced
- What should be evaluated
- What was changed

Do not invent the student's evaluation.

Do not claim that the student manually modified something unless the student actually did.


## 20. Documentation Rules

Documentation should reflect the application that actually exists.

Do not document features that have not been implemented.

The final README should eventually contain:

- Project title
- Project description
- Main features
- Product information
- Technologies used
- How to run the application
- Basic application flow

Keep documentation clear and appropriate for an IT415 student project.


## 21. Important Final Rule

Always follow this development pattern:

Current Checkpoint
→ Inspect Existing Project
→ Implement Only Current Requirements
→ Verify
→ Student Manually Tests
→ Fix Real Problems if Necessary
→ Checkpoint Approved
→ Student Handles Git Commit and Push
→ Next Checkpoint

Do not skip ahead.

Do not build the entire application from the first prompt.

Do not add features simply because they might make the application look more advanced.

A simple, correct, tested, and explainable solution is preferred.