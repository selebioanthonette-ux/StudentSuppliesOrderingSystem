# AI Usage Documentation

Project: Student Supplies Ordering System

Tool: Codex coding assistant

These records use actual interactions from this project's conversation.
Prompt wording is retained below; headings and lists are rendered as Markdown.
AI responses are summaries, as permitted by the practice scenario.
The student must complete the personal evaluation and modifications fields
before submission. Assistant-run checks are not student evaluations or manual
browser tests. No student-made modifications have been reported in this chat;
this does not establish that none were made outside it.

## Interaction 1 — Requirements analysis

### 1. Prompt Used

```text
this is the attached file i am referring to in my first prompt, i just forgot to send it with the message. Analyze it for me so that you have an idea of the system we are making
```

The attachment was `IT415_PRACTICE.pdf` in the project root.

### 2. Purpose

Understand the instructor's scenario before starting implementation.

### 3. AI Response

The assistant read all seven PDF pages and summarized the six products, cart
flow, calculations, payment validation, receipt, and transaction reset. It also
identified GitHub, AI documentation, screenshot, README, and submission
requirements. It explained that the main requirements specify six products
despite the final checklist saying at least five, and that the student's
HTML/CSS/JavaScript and minimum-quantity decisions fit the scenario. No files
were changed during that analysis.

### 4. Your Evaluation

**Pending student input.** After comparing the response with the scenario,
state whether it was correct, partially correct, or incorrect and explain why.
Do not treat the assistant's summary as your evaluation.

### 5. Modifications Made

**Pending student input.** Record changes you actually made to the analysis
before using it, or state that you made none only if that is accurate.

## Interaction 2 — Complete testing, debugging, and usability

### 1. Prompt Used

The following is the message text, with its Markdown presentation normalized.

```text
Complete Testing, Debugging, and Usability Improvements

Read the entire existing project.

Do NOT add new optional features.

This checkpoint is for:

Complete Testing, Debugging & Usability

Step 1 — Run the Complete Required Test Sequence

Test:

Products

- All six products appear
- All prices are correct
- Add to Cart exists for every product

Cart

- Add one product
- Add multiple products
- Increase quantity
- Decrease quantity
- Remove product
- Repeated Add to Cart
- Quantity does not remain zero or become negative

Calculations

Verify:

Subtotal = Unit Price × Quantity

Verify:

Total = Sum of Item Subtotals

Use the known test:

Ballpen ×2 = ₱24
Notebook ×2 = ₱70
Eraser ×1 = ₱8

Expected total:

₱102

Payment

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

Receipt

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

New Transaction

After completing a transaction:

Select New Transaction.

Verify:

- Cart cleared
- Payment cleared
- Validation messages cleared
- Receipt cleared
- Product list remains available
- Application is ready for another transaction

Step 2 — Identify Real Problems

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

Step 3 — Improve Readability and Usability

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

Step 4 — Report

Report:

- Complete tests performed
- PASS/FAIL result for each
- Actual bugs discovered
- Root causes
- Fixes made
- Usability improvements made
- Files changed
- Remaining known issues
- Current git status

Do NOT commit.

Do NOT push.

STOP after Checkpoint 5.

Suggested Git commit after I review and approve the checkpoint:

Fix bugs and improve application
```

### 2. Purpose

Verify the required transaction flow, fix real problems, and improve basic
readability without adding features.

### 3. AI Response

The assistant ran the actual JavaScript using a simulated DOM. Required product,
cart, calculation, payment, receipt, and reset checks passed. An additional test
reproduced a real bug: finite payment `1e308` overflowed when multiplied by 100
and produced a successful receipt with `₱Infinity` change. The assistant added
a safe-centavo-range validation check, reran the sequence and regression check,
and reported passes. It replaced quantity symbols with Increase/Decrease and
added guidance for minimum quantity, payment input, and reset. It modified
`script.js`, `index.html`, and `README.md`. It did not commit or push.

Browser rendering, native numeric-input behavior, keyboard navigation, and
browser-console checks remained unverified because local-file browser access
was blocked. The assistant explicitly reported that limitation.

### 4. Your Evaluation

**Pending student input.** Run the README's manual tests and record your actual
results. Explain whether the AI output was correct, partially correct, or
incorrect, including whether you confirmed the calculations and reset behavior.

### 5. Modifications Made

**Pending student input.** Record only changes you personally made before using
the output, or state that you made none if accurate. The assistant's overflow
fix and label changes above are AI-produced changes, not student modifications.

## Before submitting these records

- Complete both personal evaluation fields.
- Complete both student modifications fields honestly.
- Retain the original chat prompts/responses or screenshots as supporting evidence.
- Do not claim manual browser testing until you have performed it.
