/// <reference types="Cypress" />
describe("Validate webdriveruni homepage links",() =>{
    it("confirm links redirect to correct page", () =>{

       cy.visit("http://www.webdriveruniversity.com/")
       //the click"({force:true})" command will click on the element anyhow if there are difficulties in clicking them
       cy.get('#contact-us').invoke('removeAttr','target').click({force:true})
       //the url() command will check the desired data in the url
       cy.url().should('include','Contact-Us')
       //the go command can navigate forward or backward in the browser
       cy.go('back')
       cy.reload()
       cy.url().should('include','http://www.webdriveruniversity.com/')
       //cy.reload(true) //this command will reload the page without using cache

       cy.go('forward')
       cy.url().should('include','Contact-Us')

       cy.go('back')
       cy.get('#login-portal').invoke('removeAttr','target').click({force:true})
       cy.url().should('include','Login-Portal')
       cy.go('back')

       cy.get('#to-do-list').invoke('removeAttr','target').click({force:true})
       cy.url().should('include','To-Do-List')
       cy.go('back')



    });
})