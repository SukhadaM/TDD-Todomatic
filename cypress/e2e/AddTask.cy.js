describe("Should be able to add task", () => {
    it("add task", () => {
      cy.visit("http://localhost:3000");
      cy.get('[data-testid="form-input"]').type("Cook");
      cy.get('[data-testid="add-button"]').click();
      cy.contains("Cook").should("be.visible");
    });
  });