/// <reference types="Cypress" />

describe('Verifying variables, cypress commands and jquery commands ', () => {
    //This will work but it is not recomended
     it('Navigating to specific product pages', () => {
        //This will work but it is not recomended
        cy.visit('https://automationteststore.com/')
    //     const makeupLink= cy.get("a[href*='product/category&path']").contains("Makeup")
    //     makeupLink.click()
    //     const skinCareLink= cy.get("a[href*='product/category&path']").contains("Skincare")
    //    skinCareLink.click()
    // This will not work
    //     const makeupLink= cy.get("a[href*='product/category&path']").contains("Makeup")
    //     const skinCareLink= cy.get("a[href*='product/category&path']").contains("Skincare")
    //     makeupLink.click()
    //    skinCareLink.click()

    // Recomended Approach
    .get("a[href*='product/category&path']").contains("Makeup").click()
    .get("a[href*='product/category&path']").contains("Skincare").click()
     });
    it('Navigating to specific product pages', () => {
            cy
            .visit('https://automationteststore.com/')
            .get("a[href*='product/category&path']").contains("Makeup").click()
             
         //Following code will fail
         // const header = cy.get('h1 .maintext')
         // .log(header.text())

         cy.get('h1 .maintext').then(($headerText) => {
            const headerText = $headerText.text()
            cy.log('Found header text: '+ headerText )
            expect(headerText).is.eq('Makeup')
         })
        });

        it.only('Validate the properties of Contact Us page', () => {
            cy
            .visit('https://automationteststore.com/index.php?rt=content/contact')

            //Uses cypress commands and chaining
            .contains('#ContactUsFrm','Contact Us Form').find('#field_11').should('contain','First name:')
            // JQuery Approach
            cy.contains('#ContactUsFrm','Contact Us Form').then(text =>{
                const firstnameText = text.find('#field_11').text()
                expect(firstnameText).to.contain('First name:')
     
            //Embedded commands (Closure)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text())
                .log(fnText)
            })
           })
        });
});