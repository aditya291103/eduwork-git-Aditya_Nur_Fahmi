/// <reference types="cypress" />

describe('create new user', () => {
    it('Add a new user', () => {
        var user = {
            "name": 'Aditya Nur Fahmi',
            "job": 'Student Eduwork'
        } 
        cy.request('POST', 'https:reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201)
            expect(response.body.name).equal(user.name)
            expect(response.body.job).equal(user.job)
        })
    })
})
