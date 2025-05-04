/// <reference types="cypress" />

describe("Add todo",()=>{

    it("Should add a new todo",()=>{
        cy.visitWebsite();
        cy.get(".new-todo").type("New todo{enter}");
        cy.get(".view").should("contain","New todo55");
    })

})


