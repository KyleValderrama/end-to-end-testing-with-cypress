/// <reference types="cypress" />

// Basic Commands: Locators

describe("Basic Commands: Locators", () => {
  before(() => {
    cy.visit("/locators");
  });

  // Case [0]: Locate elements with .get() command
  it("Locate elements with .get() command", () => {});
  // Case [1]: Locate elements with .contains() command
  // Case [2]: Locate elements with .find() command
});
