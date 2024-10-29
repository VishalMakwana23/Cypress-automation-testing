describe("Alert Demo", () => {


    // 1. javascript Alert : It will have some text and 'OK' button

    it("JS Alert", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.get("button[onClick='jsAlert()']").click();

        cy.on('window:alert', (t) => {
            expect(t).to.contains("I am a JS Alert");
        })

        // Alert window automatically closed by cypress
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })


    // 2. javascript Confirm Alert : It will have some text and 'OK' and 'Cancel' button

    it("JS Confirm Alert - ok", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm', (t) => {
            expect(t).to.contains("I am a JS Confirm");
        })

        // Alert window automatically closed by cypress
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })


    it("JS Confirm Alert - cancel", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm', (t) => {
            expect(t).to.contains("I am a JS Confirm");
        })

        cy.on('window:confirm', () => false) // Cypress close alert window using cancel button

        // Alert window automatically closed by cypress
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })


    // 3. javascript Prompt Alert : It will have some text with a text box for user input along with 'OK' button 

    it("JS Prompt Alert", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('welcome')
        })

        cy.get("button[onclick='jsPrompt()']").click();

        // cy.on('window:prompt', () => false) // Cypress close alert window using cancel button

        // cypress will automatically close prompted alert - it will use Ok button - by default
        cy.get('#result').should('have.text', 'You entered: welcome')

    })

    // 4. Authenticated Alert
    it.only("JS Authenticated Alert", () => {


        // approch 1
        // cy.visit("https://the-internet.herokuapp.com/basic_auth", { auth: { username: "admin", password: 'admin' } });
        // cy.get('.example').should('have.contain', 'Congratulations')

        // approch 2
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
        cy.get('.example').should('have.contain', 'Congratulations')

    })

})