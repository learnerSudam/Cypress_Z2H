/// <reference types="Cypress" />

describe('Log product details of Apparel and Accessories', () => {
    it('Log informations of a product', () => {
        cy.visit('https://automationteststore.com/index.php?rt=product/category&path=52')
        cy.get('#categorymenu').contains('Apparel & accessories').click()
        cy.get('h1 .maintext').then(($headerText) =>{
           const headerText =$headerText.text()
           cy.log('Found header text: '+ headerText)
           expect(headerText).is.eq('Apparel & accessories')
           //git commit
        })
    });
});