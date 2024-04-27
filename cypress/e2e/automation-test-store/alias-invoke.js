/// <reference types="Cypress" />

describe("Alias and invoke", () => {
  it("Validate a specific hair care product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path']").contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThumbnail");
    cy.get("@productThumbnail").its("length").should("be.gt", 5);
    cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
  });

  it("Validate the number of products in home page", () => {
    cy.visit("https://automationteststore.com/")
      .get(".thumbnail")
      .as("productThumbnail")
      .get("@productThumbnail")
      .should("have.length", 16);
    cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include','Add to Cart')
  });
  //in this variable the sum of all non sale and sale items will be stored
 var itemTotal=0;
  it("Validate the sum of all items", () => {
    cy.visit("https://automationteststore.com/").get(".thumbnail").as("productThumbnail")
    // The following code will log all the prices of products with the dollar symbol
    // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) =>{
    //     cy.log($el.text())
    // })
    //the itemPrice is like an array where all prices of non sale items are stored
    cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        //the saleItemPrice is like an array where all prices of sale items are stored
    cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')
    cy.get('@itemPrice').then($linkText =>{
        //spliting the dollar symbol from the price by split method and assigning it into a variable
        var itemPrice=$linkText.split('$');
        //in this variable the sum of all non sale item's price will be stored
        var itemPriceTotal=0;
        var i
            // The following code will log all the prices of products with out the dollar symbol
        for(i=0;i<itemPrice.length;i++){
            cy.log("item price of "+ [i] + " is " +itemPrice[i])
            itemPriceTotal +=Number(itemPrice[i])
        }
        itemTotal +=itemPriceTotal;
        cy.log('Non sale price items total: '+itemPriceTotal)
    })
    cy.get('@saleItemPrice').then($linkText =>{
        //spliting the dollar symbol from the price by split method
        var saleItemPrice=$linkText.split('$');
        var saleItemPriceTotal=0;
        var i
            // The following code will log all the prices of products with out the dollar symbol
        for(i=0;i<saleItemPrice.length;i++){
            cy.log("item price of "+ [i] +" is "+saleItemPrice[i])
            saleItemPriceTotal +=Number(saleItemPrice[i])
        }
        itemTotal +=saleItemPriceTotal;
        cy.log('Sale price items total: '+saleItemPriceTotal)
    })
    .then(()=>{
        cy.log("The total price of all products: "+itemTotal)
        expect(itemTotal).to.equal(639.49)
    })
  });
});
