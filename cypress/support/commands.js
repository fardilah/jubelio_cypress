import * as vars from '../fixtures/data.json'

const url = Cypress.config('baseUrl')
const user_email = vars.user_email
const user_password = vars.user_password

const field_email = "input[id='textfield-email']"
const field_password = "input[id='textfield-password']"
const btn_login = "button:contains('Login')"

Cypress.Commands.add('login', () => {
    cy.visit(url)
    cy.wait(5000)
    cy.get(field_email).type(user_email)
    cy.get(field_password).type(user_password)
    cy.get(btn_login).click()
})