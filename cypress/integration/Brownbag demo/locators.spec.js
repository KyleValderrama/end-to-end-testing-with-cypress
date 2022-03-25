/// <reference types="cypress" />

describe("Locators", () => {
  beforeEach(() => {
    cy.visit("/locators");
  });

  it("locating elements with .get()", () => {
    // Get element with tag name
    cy.get("button");

    // Get element with class name
  });

  it("locating elements with .contains()", () => {});

  it("locating elements with .find()", () => {});
});
