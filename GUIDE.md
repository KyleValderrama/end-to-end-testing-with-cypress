## **DEMO**

### In this session you should learn

- Setup Cypress
- Create and setup basic configuration for test file
- Locators / Selectors: `.get()`, `.find()`, `.contains()`
- Actions: `.click()`, `.type()`
- Assertions: `.should()`
- Create simple Component Test
- Create simple E2E Test

## **Prerequisites**

### Cypress requires a very basic knowledge of the following:

- HTML
- JavaScript

## **Setting Up Cypress**

1. Go to your project folder
2. In terminal, run `yarn add cypress --dev` or `npm install cypress --save-dev`
3. Open cypress browser using `npx cypress open`
   > or create test script on `package.json` _(optional)_
4. Add a `baseUrl` and other configurations to `cypress.json`
5. Cypress Directory

## **Test file creation and basic configurations**

1. Create a test file: `<your-test-name>.spec.js`
2. In the test file, Add cypress reference `/// <reference types="cypress" />`, describe block `describe()`, and test cases using `it()`

## **Basic Commands: Locators**

##### Case [0]: `Locate elements with .get() command`

##### Case [1]: `Locate elements with .contains() command`

##### Case [2]: `Locate elements with .find() command`

## **Component Test: Counter**

##### Case [0]: `Count should be equal to 0 and "Decrement" button should be disabled`

1. Check count if it is equal to 0
2. Check "Decrement" button if it is disabled

##### Case [1]: `Count should be equal to (n) when 'Increment' button is clicked (n) times`

1. Click "Increment" Button (n) times
2. Check count if it is equal to (n)

##### Case [2]: `Count should be equal to 0 when 'Decrement' button is clicked (n) times and 'Decrement' button should be disabled`

1. Click "Decrement" Button (n) times
2. Check count if it is equal to 0
3. Check "Decrement" button if it is disabled

## **E2E Test: Todos**

##### `Should be able to add, validate form, and mark todo as done`

1. Click 'New Todo' Button
2. Check if the text input appears
3. Click 'Add' Button
4. Check if error message appears
5. Type a todo in the input
6. Click 'Add' Button
7. Check if added todo card appears in the list
8. Double click the todo card to mark it as done
9. Check if todo card has "done" text in it
10. Double click the todo card to remove the mark as done
11. Check if "done" in todo-card is removed
