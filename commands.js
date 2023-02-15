Cypress.Commands.add('paymen', () => {
    // cy.clearCookies()
    cy.clearLocalStorage()

    // Login
    cy.get('#user_login').type(username)

    cy.get('#user_password').type(password)

    cy.get('#user_remember_me').click()

    cy.get('input[name="submit"]').click()

        // Proses pembayaran
          cy.get('#pay_bills_tab > a').click()

          cy.get('#sp_payee').select("Apple")
          cy.get('#sp_account').select('Loan')
          cy.get('#sp_amount').type("100")

          cy.get('#sp_date').click()
          cy.get(':nth-child(4) > :nth-child(4) > .ui-state-default').click()

          cy.get('#sp_description').type('new brand')
          cy.get('#pay_saved_payees').click()
          cy.get('#alert_content > span').should('contain.text', 'The payment was successfully submitted.')

})