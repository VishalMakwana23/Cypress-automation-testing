describe('Suit name', () => {


    it('test 1 - positive', () => {
      cy.visit('https://vishalworks.vercel.app/')
      cy.title().should('eq','Vishal Makwana - Senior Full-Stack Developer')
    })


    it('test 2 - nagative', () => {
        cy.visit('https://vishalworks.vercel.app/')
        cy.title().should('eq','Vishal Makwana123')
      })
    
  
  })