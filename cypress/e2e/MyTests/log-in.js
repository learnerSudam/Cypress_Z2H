/// <reference types="Cypress" />
///<reference types="cypress-xpath" />

describe("Test the Log In button of Cashflo", () => {
  it.only("Verify the user is able to LogIn to Cashflo by providing valid email id and password", () => {
    cy.intercept("POST", "**/v1/auth/login").as("login");
    cy.visit("https://app.staging.cashflo.dev/#/account/login");
    cy.get("#username").type("surajit.kumar@manjushreeindia.com");
    cy.get("#password").type("Cashflo@123");
    cy.get("button[type='submit']").click();
    cy.wait("@login");
    cy.get(".mb-1 > strong").should("have.text", "Surajit Aditya");
  });
  it("Verify the user is able to LogIn to facebook by valid email and password", () => {
    cy.intercept("POST", "**/v1/auth/login").as("logIn");
    cy.visit("https://www.facebook.com/");
    cy.get("#username").type("surajit.kumar@manjushreeindia.com");
    cy.get("#password").type("Cashflo@123");
    cy.get('button[type="submit"]').click();
    cy.wait("@logIn");
    cy.get(".mb-1 > strong").should("have.text", "Surajit Aditya");
  });
});
