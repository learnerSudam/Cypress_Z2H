/// <reference types="Cypress" />
describe("Cypress web security",() =>{
    it("User can not visit two super domains(two different domains)", () =>{
        // due to cypress web security , cypress doesn't allow us to visit two super domains
      cy.visit('http://www.webdriveruniversity.com/')
      cy.visit('https://automationteststore.com/')
    });
    //if we add "chromeWebSecurity: false" in "cypress.config.json" file 
      //this test will however pass 
    it("try to visit two super domains by validating user actions", () =>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#automation-test-store').invoke('removeAttr','target').click()
     });
//the origin command let's us to visit two super domains
     it("Origin Command", () =>{
        cy.origin('webdriveruniversity.com/', ()=>{
            cy.visit('/')
        })
        cy.origin('https://automationteststore.com/', ()=>{
            cy.visit('/')
        })

        cy.visit('http://www.webdriveruniversity.com/')
        cy.visit('http://selectors.webdriveruniversity.com/')
        
     });

})