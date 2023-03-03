const URL = 'http://zero.webappsecurity.com/index.html'
const SEARCH = '#searchTerm'
const ONLINE_BANKING = 'li > a'

class UseSearch {
    static visit() {
        cy.visit(URL)
    }

    static fiturSearch() {
        cy.get(SEARCH).type('online banking{enter}')
    }
    
    static pageOnlineBanking() {
        cy.get(ONLINE_BANKING).click()
    }
}
export default UseSearch