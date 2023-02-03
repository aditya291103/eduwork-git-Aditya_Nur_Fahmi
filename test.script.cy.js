describe('My First Test', () => {
    it('clicking "type" show the headings', () => {
        cy.visit('https://example.cypress.io')
  
        cy.contains('type').click()
  
        // Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', 'commands/actions')
        // Get an input, type into it and verify that the value has been updated
        cy.get('.action-email')
          .type('adityanurfahmi37@gmail.com')
          .should('have.value', 'adityanurfahmi37@gmail.com')
    })
  })