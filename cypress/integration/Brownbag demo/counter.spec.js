/// <reference types="cypress" />

// Component Test : Counter
describe("Component Test : Counter", function () {
  before(function () {
    cy.visit("/counter");
    this.n = 30;
  });

  // Case [0]: Count should be equal to 0 and "Decrement" button should be disabled
  it("Count should be equal to 0 and 'Decrement' button should be disabled", function () {
    // 1. Check count if it is equal to 0
    cy.get("#count").should("equal", "Count: " + 0);
    // 2. Check "Decrement" button if it is disabled
    cy.contains("Decrement").should("be.disabled");
  });

  // Case [1]: Count should be equal to (n) when 'Increment' button is clicked (n) times
  it(" Count should be equal to (n) when 'Increment' button is clicked (n) times", function () {
    // 1. Click "Increment" Button (n) times
    [...Array(this.n)].forEach(() => {
      cy.contains("Increment").click();
    });
    // 2. Check count if it is equal to (n)
    cy.get("#count").should("contain", this.n);
  });

  // Case [2]: Count should be equal to 0 when 'Decrement' button is clicked (n) times and 'Decrement' button should be disabled
  // 1. Click "Decrement" Button (n) times
  // 2. Check count if it is equal to 0
  // 3. Check "Decrement" button if it is disabled
});
