/// <reference types="cypress" />

describe("Case sensitivity",()=>{

    it("Filter should be case sensitive",()=>{
        cy.visitWebsite();
        cy.get(".new-todo").type("Todo 1{enter}");
        cy.get(".new-todo").type("Todo 2{enter}");

        cy.get(".todo-list>li").eq(1).find(".toggle").should("be.exist").click();

        cy.get(".todo-list").eq(0).should("not.equal","todo 1");
        cy.get(".todo-list").eq(1).should("not.equal","todo 2");

        cy.get(".filters>li:nth-child(2)").click();
        cy.get(".view").should("not.equal","todo 1");
        
        cy.get(".filters>li:nth-child(3)").click();
        cy.get(".view").should("not.equal","todo 2");
    })

})