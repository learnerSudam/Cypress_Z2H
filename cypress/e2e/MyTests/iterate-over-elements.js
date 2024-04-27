/// <reference types="Cypress" />

describe("Verify each product of Apparel and accessories", () => {
  it("Log Informations of each product ", () => {
    cy.visit("https://automationteststore.com/")
      .get("#categorymenu")
      .contains("Apparel & accessories")
      .click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Index: " + index + " : " + $el.text());
    });
  });

  it("Add specific product to basket", () => {
    cy.visit("https://automationteststore.com/")
      .get("#categorymenu")
      .contains("Apparel & accessories")
      .click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text().includes("Jersey Cotton Striped Polo Shirt")) {
        cy.wrap($el).click();
      }
    });
  });
});
