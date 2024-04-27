/// <reference types="Cypress" />
///<reference types="cypress-xpath" />
describe('Test the contact-us form in Automation Test store', () => {
    it.only('Verify user is able to submit a sucessfull submission', () => {
        cy.visit("https://automationteststore.com/")
        cy.get('a[href$="contact"]').click().then(function(linkText){
            cy.log('selected the following link: '+ linkText.text())
        });
        cy.xpath("//input[contains(@id,'ContactUsFrm_first_name')]").type("Andy");
        cy.get('#ContactUsFrm_email').type("andy@redeemption.com");
        cy.get('#ContactUsFrm_email').should('have.attr','name','email');
        cy.xpath("//textarea[contains(@id,'ContactUsFrm_enquiry')]").type("need information about a product");
        cy.xpath("//button[contains(@title,'Submit')]").click();
        cy.xpath("//p[text()='Your enquiry has been successfully sent to the store owner!']").should('have.text','Your enquiry has been successfully sent to the store owner!');
    });
    it('Verify user is able to submit a sucessfull submission', () => {
        cy.visit("https://automationteststore.com/")
        .get('a[href$="contact"]').click().then(function(linkText){
            console.log('selected the following link '+ linkText.text())
        })

    });
});