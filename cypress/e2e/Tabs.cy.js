describe('Handle tab', (() => {


    it.skip("Approach 1", () => {

        cy.visit("https://the-internet.herokuapp.com/windows"); // parent tab

        cy.get('.example >a').invoke('removeAttr', 'target').click(); // clicking on link


        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

        cy.wait(5000);

        //operations
        cy.go('back'); // back to parent tabs
    })

    it("Approach 2", () => {

        cy.visit("https://the-internet.herokuapp.com/windows"); // parent tab

        cy.get('.example >a').then((e) => {
            let url = e.prop('href');
            cy.visit(url);
        })


        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

        cy.wait(5000);

        //operations
        cy.go('back'); // back to parent tabs
    })

}))