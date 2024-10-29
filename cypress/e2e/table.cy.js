describe('handle tables', (() => {

    beforeEach('Login', () => {
        cy.visit('https://demo.opencart.com/admin/');

        // cy.get('#input-username').type("demo");
        // cy.get("#input-password").type("demo");
        cy.get("button[type=submit]").click();


        // customers -> customers
        cy.get("#menu-customer>a").click(); // customers main menu
        cy.get("#menu-customer>ul>li:first-child").click(); // customers sub menus


    })

    it.skip('Check number Rows & Columns', () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should("have.length", '10');
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should("have.length", '6');
    })

    it.skip('Check cell data from specific row & column', () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)").contains("Asd12@gmail.com")
    })

    it.skip('read all the rows & columns data in the first page', () => {

        cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(($row, index, $rows) => {

            cy.wrap($row).within(() => {
                cy.get("td").each(($cell, cellIndex, $cells) => {
                    cy.log($cell.text())
                })
            })

        })

    })

    it.only('pagination', () => {

        //find totla number of pages
        // cy.get(".col-sm-6.text-end").then((e) => {
        //     let totalPages;
        //     let myText = e.text(); // showing 1 to 10 5581 (550 pages)
        //     totalPages = myText.substring(myText.indexOf("(") + 1, myText.indexOf("pages") - 1);

        //     console.log("🚀 ~ cy.get ~ totalpages:", +totalPages) 
        // })

        let totalPages = 5


        for (let p = 1; p < totalPages; p++) {

            if (totalPages > 1) {
                cy.log("Active page is :====> " + p);

                cy.get(`ul[class='pagination']>li:nth-child(${p})`).click();
                cy.wait(3000);

                cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(($row, index, $rows) => {

                    cy.wrap($row).within(() => {
                        cy.get(`td:nth-child(3)`).then((e) => {
                            cy.log(e.text()) // Email 
                        })
                    })

                })
            }

        }


    })
}))