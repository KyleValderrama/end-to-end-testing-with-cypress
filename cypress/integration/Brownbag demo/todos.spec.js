/// <reference types="cypress" />

// E2E Test: Todos
describe("E2E Test: Todos", function () {
  before(function () {
    cy.visit("/todos");
    this.todo = "Learn Cypress";
  });
  // Should be able to add, validate form, mark, and unmark todo as done
  it("Should be able to add, validate form, mark, and unmark todo as done", function () {
    // 1. Click 'New Todo' Button
    cy.contains("New Todo").click();
    // 2. Check if the text input appears
    cy.get("input").should("be.visible");
    // 3. Click 'Add' Button
    cy.contains("Add").click();
    // 4. Check if error message appears
    cy.contains("Input field is required").should("be.visible");
    // 5. Type a todo in the input
    cy.get("input").type(this.todo);
    // 6. Click 'Add' Button
    cy.contains("Add").click();
    // 7. Check if added todo card appears in the list
    cy.get(".todo-card").contains(this.todo).should("be.visible");
    // 8. Double click the todo card to mark it as done
    cy.get(".todo-card").contains(this.todo).dblclick();
    // 9. Check if todo card has "done" text in it
    cy.get(".todo-card").contains(this.todo).parent().should("contain", "done");
    // 10. Double click the todo card to remove the mark as done
    cy.get(".todo-card").contains(this.todo).dblclick();
    // 11. Check if "done" in todo-card is removed
    cy.get(".todo-card")
      .contains(this.todo)
      .parent()
      .should("not.contain", "done");
  });
});
