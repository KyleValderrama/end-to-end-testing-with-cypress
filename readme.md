# Demo ✨

**Run Application**

1. `yarn`
2. `yarn dev`

**Application Overview**

- Locators
- Counter
- Todo App

**Setup**

- Install Cypress to project `yarn add cypress --dev` or `npm install cypress --save-dev`
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

- Click Increment Button (n) times
- Check count if it is equal to (n)
- Click Decrement Button (n) times
- Check count if it is equal to 0
- Check if the Decrement button is disabled

**E2E Test todo app**

- Click "New Todo" Button
- Check if the text input appears
- Click Add Button
- Check if error message appears
- Type a todo in the input
- Click Add
- Check if todo-card has new child
- Double click the todo-card to mark as done
- Check if todo-card has "done" text
- Double click the todo-card to remove the mark as done
- Check if "done" in todo-card is removed
