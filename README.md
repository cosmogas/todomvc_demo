# TodoMVC CRUD Automation_demo

## Project Description
Automated end-to-end tests for the TodoMVC demo application.
The project validates CRUD (Create, Read, Update, Delete) functionality using Playwright and TypeScript,
following the Page Object Model pattern.

---

## Tech Stack
- Node.js
- Playwright
- TypeScript
- ESLint
- Prettier
- Husky
- GitHub Actions

## Code Quality

- ESLint and Prettier are configured for linting and formatting
-  Husky pre-push hook blocks push if linting fails

Husky pre-push hook blocks push if linting fails
---

## Project Structure
- src/pages - Page Object Models
- tests - Test specifications

## Install Dependencies
npm install

## Run Tests Locally
npm run test


## Run tests in UI mode:

npm run test:ui

## Test Reports

After execution, Playwright generates an HTML report.

Open the report:

npm run report

## Implemented Scenarios

Create todo

Read todo list

Update todo

Delete todo

