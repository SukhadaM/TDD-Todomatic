describe("User should be able to edit a task", () => {
    it("edit Task", () => {
      cy.visit("http://localhost:3000/");
      cy.get('[id="edit-todo-1"]').click();
      cy.get('[id="todo-1"]').type("Cook");
      cy.get('[data-testid="todo-edit-save"]').click();
      cy.contains("Cook").should("be.visible");
    });
  });