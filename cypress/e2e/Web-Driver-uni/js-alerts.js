/// <reference types="Cypress" />
describe("Handle JS Alerts",() =>{
    it("Confirm js alert contains the correct text", () =>{
      // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")

       cy.visit("http://www.webdriveruniversity.com/")
       cy.get('#popup-alerts').invoke('removeAttr','target').click({force:true})
       //Cypres outputs the text message which shows in alert box automatically
       cy.get('#button1').click()
       //to perform an assertion we have to use the 'window.alert' 
       cy.on('window:alert',(str) =>{
        //here we commanded cypress to we want to handle the alert ourselves
        //here we have to specify the type of event that we want to handle
        //in this case "window:alert"
        //Then by handling the call back what ever the output from 
        //the event, will be parsed into the parameter
        expect(str).to.equal('I am an alert box!')
        //and the assertion will check the correctness of the text
       });
    });

    it('Validate javascript confirm alert box works correctly when clicking ok',() =>{
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force:true})
        cy.get('#button4').click()
        cy.on('window:alert',(str) =>{
            //in "window.alert" cypress auto accepts the alerts
            //we can not change this behaviour
            //if we return true means it will click on OK
            //if we return false , it will click on cancel
            return true;
        })
        //here we are checking that whether the p tag of the button 
        //contains correct text or not after doing an action
        cy.get('#confirm-alert-text').contains('You pressed OK!')
    })

    it('Validate javascript confirm alert box works correctly when clicking cancel',() =>{
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force:true})
        cy.get('#button4').click()
        cy.on('window:confirm',(str) =>{
            //but with "window:confirm" we can change the behaviour
            //to click on cancel button we have to return false
            return false;
        })
        //here we are checking that whether the p tag of the button 
        //contains correct text or not after doing an action
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    })
   // Stubs are used to replace a function, record it's usage, and control it's behaviour
    it('Validate javascript confirm alert box, using a stub',() =>{
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force:true})
        //first we need to set up a stub
        const stub = cy.stub()
        //now we wil copy the window:cinfirm event into stub
        //so that when the event gets fired we can use the stub 
        cy.on('window:confirm',stub)
        // the then command : Enables you to work with the subject yielded from the previous command / promise.
        cy.get('#button4').click().then(() =>{
            //here we are intercepting a call, for that we need 
            //to specify the number of the call
            //Returns the nth call. Accessing individual calls helps with more detailed behavior verification when the spy is called more than once.
            //@param n — Zero based index of the spy call.
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        })
        
    })
})