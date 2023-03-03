import UseSearch from './search.page.js';

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I go to home page', () => {
   UseSearch.visit();
})

When('I used the search feature to find an online banking page, and I clicked on a text link that was displayed in the search results', () => {
   UseSearch.fiturSearch('online banking{enter}');
   cy.get('h2').should('be.visible')
})

Then('Display the online banking page', () => {
   UseSearch.pageOnlineBanking();
   cy.get('#onlineBankingMenu > div').should('be.visible')
})


