describe("handling IFrames", () => {


    it('approch 1', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");

        const iframe = cy.get("#mce_0_ifr")
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);


        // iframe.then(($iframe) => {
        //     const iframeDoc = $iframe[0].contentDocument;
        //     cy.wrap(iframeDoc).find("body").type("Hello from IFrame");
        // })


        iframe.clear().type("welcoe Home");

    })





})