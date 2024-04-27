/// <reference types="Cypress" />

describe('Alias and Invoke', () => {
    it('Validate a specific Apparel and Accessories product', () => {
        cy.visit('https://automationteststore.com/')
        .get("#categorymenu")
      .contains("Apparel & accessories")
      .click();
      cy.get(".fixed_wrapper .prdocutname").eq(5).invoke('text').as('productDesc')
     cy.get('@productDesc').its("length").should('be.gt',5)
     cy.get('@productDesc').should('include','Fruit of the Loom T-Shirts 5 Pack - Super Premium')

    });
});