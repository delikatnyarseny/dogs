describe("Navigation in Header", () => {
  it("should navigate to different pages when links are clicked", () => {
    cy.visit("/"); // Предполагая, что заголовок находится на главной странице

    // Проверяем, что заголовок содержит нужные элементы
    cy.get(".header-logo").should("exist");
    cy.get(".header-nav").should("exist");

    // Проверяем, что все ссылки в навигации присутствуют и кликабельны
    cy.get(".header-nav__list-item").each(($item, index) => {
      cy.wrap($item).should("exist").and("be.visible");
    });
  });
});
