import * as vars from '../variables/footer-header-sidebar'
const url = Cypress.config('baseUrl')

describe('login url correct', () => {
    it('passes', () => {
        cy.visit(url)
        cy.url().should('include', '/auth/login')
    })  
})

describe('Login section', () => {
    beforeEach(() => {
        cy.login()
    })

    it('login success', () => {
        cy.get(vars.katalog_menu).should('be.visible')
    })

    it('validate menu', () => {
        vars.menus.forEach((menu) => {
            cy.get(menu).should('be.exist')
          })
    })
})