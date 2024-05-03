describe("InfoSearch Component Tests", () => {
  beforeEach(() => {
    cy.visit("/info");
  });

  it("displays the search input and the title", () => {
    cy.get(".info-title").should("contain", "INFO DOG");
    cy.get('input[placeholder="Search"]').should("be.visible");
  });
});
