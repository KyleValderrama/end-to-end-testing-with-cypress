/// <reference types="cypress" />

describe("Locators", () => {
  beforeEach(() => {
    cy.visit("/locators");
  });

  it("locate items via .get() command", () => {
    // Get element with tag name
    cy.get("button");

    // Get element with class name
    cy.get(".btn-with-class");

    // Get element with many class name
    cy.get(".btn-with-class.btn-with-many-class");

    // Get element with class name
    cy.get("[type='submit']");
  });

  it("locate items via .contains() command", () => {
    cy.contains("Not Unique Text");
    cy.getByBtnClassName("Not Unique Text");
  });

  it("locate items via .find() command", () => {
    cy.get("form").find(".btn-1");
  });
});
