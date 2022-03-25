# Demo ✨

**Run the Application**

1. `yarn`
2. `yarn dev`

**Application Overview**

- Locators
- Counter
- Todo App

**Setup**

- Install Cypress to the project `yarn add cypress --dev` or `npm install cypress --save-dev`
- Run Cypress `npx cypress open`
- Cypress Directory
- cypress.json
- Creating a test file `[name].spec.(js | ts)`
- Block and Test Cases

**Locators**

- Get - Get one or more DOM elements by selector or alias.
- Contains - Get the DOM element containing the text. DOM elements can contain more than the desired text and still match.
- Find - Get the descendent DOM elements of a specific selector.

**Unit Test : Counter Component**

1. Click Increment Button (n) times
2. Check count if it is equal to (n)
3. Click Decrement Button (n) times
4. Check count if it is equal to 0
5. Check if the Decrement button is disabled

**E2E Test todo app**

1. Click "New Todo" Button
2. Check if the text input appears
3. Click Add Button
4. Check if error message appears
5. Type a todo in the input
6. Click Add
7. Check if todo-card has new child
8. Double click the todo-card to mark as done
9. Check if todo-card has "done" text
10. Double click the todo-card to remove the mark as done
11. Check if "done" in todo-card is removed
