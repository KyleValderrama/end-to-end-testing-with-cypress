/// <reference types="cypress" />

describe("Counter", () => {
  beforeEach(() => {
    cy.visit("/counter");
  });

  const n = 10;

  it("should equal to (n) when clicked Increment (n) times", () => {
    [...Array(n)].map(() => {
      cy.contains("Increment").click();
    });
    cy.get("#count").should("contain", n);
    [...Array(n)].map(() => {
      cy.contains("Decrement").click();
    });
    cy.get("#count").should("contain", 0);

    cy.contains("Decrement").should("be.disabled");
  });

  it("should equal to 0 when clicked Decrement (n) times", () => {});
});
