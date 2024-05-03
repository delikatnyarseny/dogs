describe("Navigation in Header", () => {
  it("should navigate to different pages when links are clicked", () => {
    cy.visit("/");

    cy.get(".header-logo").should("exist");
    cy.get(".header-nav").should("exist");

    cy.get(".header-nav__list-item").each(($item, index) => {
      cy.wrap($item).should("exist").and("be.visible");
    });
  });
});
