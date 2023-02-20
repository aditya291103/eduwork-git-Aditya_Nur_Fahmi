/// <reference types="cypress" />

describe('login / logout test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()

    })
    it('should try login with invalid data', () => {
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('usernameinvalid')
        cy.get('input[name="user_password"]').type('passwordinvalid')
        cy.get('input[name="submit"]').click()
  })
  it('should display eror massage', () => {
    cy.get('.alert-error')
    .should('be.visible',)
    .and('contains.text', 'Login and/or password are wrong.')
  })
  it('should login to app with valid data', () => {
    cy.fixture("user").then(user => {
        const username = user.username
        const password = user.password

        cy.login(username, password)
    })
  })
  it('should logout from the  application', () => {
    cy.get('h2').should('contain.text', 'Cash Accounts')
    cy.contains('username').click()
    cy.get('#logout_link').click()
    cy.get('strong').should('contain.text', 'Home')
    cy.get('strong').should('contain.text', 'Online Banking')
    cy.get('strong').should('contain.text', 'Feedback')
    cy.get('a.brand').should('contain.text', 'Zero Bank')
    cy.get('h4').should('contain.text', ' Online Banking')
    cy.get('#online-banking').should('contain.text', 'More Services')
    cy.get('#account_activity_link').should('contain.text', 'Checking Account Activity')
    cy.get('h4').should('contain.text', 'Transfer Funds')
    cy.get('h4').should('contain.text', 'My Money Map')
    cy.get('#signin_button').should('contain.text', 'Signin')
    

  })
})