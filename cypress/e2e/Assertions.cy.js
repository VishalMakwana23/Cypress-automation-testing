



describe("Assertion Demo", () => {

    it("Implicit Assertion", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // ******   should   and  *******

        // cy.url("").should('include', 'orangehrmlive.com')
        // cy.url("").should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url("").should('contain', 'orangehrm')


        // ******   remove duplicates cy.url("")   ******

        // cy.url("").should('include', 'orangehrmlive.com')
        // .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('contain', 'orangehrm')

        // ******   using and keyword   ******
        // cy.url("").should('include', 'orangehrmlive.com')
        //     .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //     .and('not.contain', 'orangehrms')

        // cy.title().should('include', 'Orange')
        //     .and('eq', 'OrangeHRM')

        // cy.get('.orangehrm-login-branding > img').should('be.visible')
        //     .and('exist')
        // cy.get('.orangehrm-login-branding > img').should('exist')

        // ******   user login validation testing   ******
        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin") // provide value into inputbox
        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value', 'Admin') // provide value into inputbox

    })



    it("Explicit Assertion", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[placeholder='Username']").type("Admin") 
        cy.get("input[placeholder='Password']").type("admin123") 

        cy.get("button[type='submit']").click()

        let expactedName = "xyz";

        cy.get(".oxd-userdropdown-name").then((x) => {
 
            let actualname = x.text();
            console.log("🚀 ~ cy.get ~ actualname:", actualname)

            // BDD style
            expect(actualname).to.equal(expactedName);
            expect(actualname).to.not.equal(expactedName);

            //TDD style

            assert.equal(actualname, expactedName, "Name is matching");
            assert.notEqual(actualname, expactedName, "Name is not matching");

        })

    })
})