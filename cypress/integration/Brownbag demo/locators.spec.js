/// <reference types="cypress" />

// Basic Commands: Locators
describe("Basic Commands: Locators", function () {
  before(function () {
    cy.visit("/locators");
  });

  // Case [0]: Locate elements with .get() command
  it("Locate elements with .get() command", function () {
    cy.get("#btn-with-id");
    cy.get("[type='submit']");
    cy.get("[data-testid='btn-with-test-id']");
  });
  // Case [1]: Locate elements with .contains() command
  it("Locate elements with .contains() command", function () {
    cy.contains("Unique Text");
    cy.contains("Not Unique Text");
  });
  // Case [2]: Locate elements with .find() command
  it("Locate elements with .find() command", function () {
    cy.get("form").find(".btn-2");
  });
});
