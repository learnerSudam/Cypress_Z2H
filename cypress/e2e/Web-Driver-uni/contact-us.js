/// <reference types="Cypress" />
describe("Test Contact Us form of WebdriverUni",() =>{
    it("Should be able to submit a sucessful submission through the contact us form", () =>{
      // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")

       cy.visit("http://www.webdriveruniversity.com/")
       //Cypress doesn't support multiple browser tabs, If it opens a new tab by clicking on a link 
       // cypress still assumes that it's in the same browser, that's why the following line of code 
       //will through an error while executing it
       //cy.get('#contact-us').click({force:true})
       //to over come from this we have to remove the target of the element by remove method of
       //invoke command(invoke is a jquery method)
       //the following line of code will execute tests in the same browser tab
       cy.get('#contact-us').invoke('removeAttr','target').click({force:true})
       cy.document().should('have.property','charset').and('eq','UTF-8');
       cy.title().should('include','WebDriver | Contact Us');
       cy.url().should('include','contactus');
       cy.get('[name="first_name"]').type("Andy");
       cy.get('[name="last_name"]').type("Dufrense");
       cy.get('[name="email"]').type("andy@redeemption.com");
       cy.get('textarea.feedback-input').type("Get back to me ASAP");
       cy.get('[type="submit"]').click();
       cy.get('h1').should('have.text','Thank You for your Message!');
    });

    it("Should not be able to submit a sucessful submission through the contact us form as all fields are required", () =>{
      //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");

       cy.visit("http://www.webdriveruniversity.com/")
       //cy.get('#contact-us').click({force:true})
       cy.get('#contact-us').invoke('removeAttr','target').click({force:true})

       cy.get('[name="first_name"]').type("Andy");
       cy.get('[name="last_name"]').type("Dufrense");
       cy.get('textarea.feedback-input').type("Get back to me ASAP");
       cy.get('[type="submit"]').click();
       cy.get('body').contains("Error: all fields are required");
     });
})