/// <reference types="cypress" />

describe('navbar test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })
    it('should display online banking content', () => {
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
    })

    it('should display feedback content', () => {
        cy.get('#feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('h3').should('be.visible')
    })

    it('should display homepage content', () => {
        cy.get('a.brand').click()
        cy.url().should('include', 'index.html')
    })

    it('should display page login content', () => {
        cy.get('#signin_button').click()
        cy.url().should('include', 'login.html')

        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            cy.login(username, password)

        })

    })

    it('should display account summary content', () => {
        cy.url().should('include', 'bank/account-summary.html')
        cy.get('h2').should('contain.text', 'Cash Accounts')
        .and('contain.text', 'Investment Accounts')
        .and('contain.text', 'Investment Accounts')
        .and('contain.text', 'Credit Accounts').and('contain.text','Loan Accounts')
     })
     it('should display account activity content', () => {
        cy.get('#account_activity_tab > a').click()
        cy.url().should('include', 'bank/account-activity.html')
        cy.get('#aa_accountId').select('Loan')
     })

     it('should display transfer funds content', () => {
        cy.get('#transfer_funds_tab').click()
        cy.url().should('include', 'bank/transfer-funds.html')
        cy.get('#tf_amount').type("100")
        cy.get('#tf_description').type('new brand')
        cy.get('#btn_submit').click()
        cy.get('#btn_submit').click()
        cy.get('.alert').should('contain.text', 'You successfully submitted your transaction.')
     })
     it('should display logout content', () => {
        cy.get(':nth-child(3) > .dropdown-toggle').click()
        cy.get('#logout_link').click()
        cy.url().should('include', 'index.html')
     })
})