
describe("Check ui Element", () => {
    it("Checking Radio Buttons", () => {
        cy.visit("https://testautomationpractice.blogspot.com/");

        // visibility of radio buttons
        cy.get("input#male").should("be.visible");
        cy.get("input#female").should("be.visible");

        // selecting radio buttons
        cy.get("input#male").check().should("be.checked");
        cy.get("input#female").should("not.be.checked");

    })

    it("Checking Check Boxes", () => {
        cy.visit("https://testautomationpractice.blogspot.com/");

        // visibility of check boxes
        cy.get("input#sunday").should("be.visible");
        cy.get("input#monday").should("be.visible");

        // selecting and unselecting check boxes
        cy.get("input#sunday").check().should("be.checked");
        cy.get("input#sunday").uncheck().should("not.be.checked");

        //select all the check boxes
        cy.get("input[type='checkbox']").check().should('be.checked');

        // unselect all the check boxes
        cy.get("input[type='checkbox']").uncheck().should('not.be.checked');

        // select only first check box
        cy.get("input[type='checkbox']").first().check().should('be.checked');

        // select only second check box
        cy.get("input[type='checkbox']").eq(1).check().should('be.checked');


    })


})