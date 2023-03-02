const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I go to home page', () => {
   cy.visit('http://zero.webappsecurity.com/index.html')
})

When('I used the search feature to find an online banking page and I clicked on a text link that was displayed in the search results', () => {
   cy.get('#searchTerm').type('online banking{enter}')
   cy.get('h2').should('be.visible')
})

Then('Display the online banking page', () => {
   cy.get('li > a').click()
   cy.get('#onlineBankingMenu > div').should('be.visible')
})
