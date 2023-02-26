/// <reference types="cypress" />

describe('test fitur web imprint supplier', () => {
  before(() => {
    cy.clearCookies()
		cy.visit('https://buildensis.imprintsupplier.com/')
    cy.url().should('include', 'login')
    
})  
 it('login', () => {

     cy.fixture('users').then(users => {
         const email = users.email
         const password = users.password

          cy.login(email, password)
     })
    })
    it('fitur dasbord content', () => {
      cy.url().should('include', 'home/dashboard')
    cy.get('#side-menu > :nth-child(3) > .waves-effect').click()
    })
    it('fitur lembur saya content', () => {
      cy.url().should('include', 'overtime')
      cy.get('#select2-select2-hr_period-container').click()
      cy.wait(1000)
      cy.get('[data-select2-id="20"]').click()
      cy.get('#datatable_hr_overtime_submission_length > label > .custom-select').select('50')
      cy.get('#hr_overtime_submission > .mt-3 > .col-12 > :nth-child(2) > .btn').click()
      cy.get('#side-menu > :nth-child(4) > .waves-effect').click()
    })
    it('fitur absensi content', () => {
      cy.url().should('include', 'attendances')
      cy.get('#select2-select2-hr_period-container').click().wait(1000)
      cy.get('[data-select2-id="29"]').click()
      cy.get('#select2-select2-hr_employee-container').click().wait(1000)
      cy.get('.select2-results__option--highlighted').click()
      cy.get(':nth-child(6) > .btn').click()
      cy.get('#side-menu > :nth-child(5) > .waves-effect').click()
    })
    it('fitur laporan harian content', () => {
      cy.url().should('include', 'timelines')
      cy.get('#select2-select2-master_department_search-container').click().wait(1000)
      cy.get('.select2-results__option--highlighted').click()
      cy.get('.col-12 > :nth-child(4) > .btn').click()
    })
    it('logout content', () => {
      cy.get(':nth-child(37) > .waves-effect').click()
      cy.url().should('include', 'login')
    })
})