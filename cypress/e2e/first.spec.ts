/// <reference types="cypress" />

describe("Typescript + Cypress", () => {
    beforeEach(() => {
    cy.visit('/')
  })

it('Check H2 text', () => {
    cy.get('h2')
      .should('have.length', 1)
      .should('have.text','Available Examples')
  })

  it('Check URL contains', () => {
    cy.get('li')
      .contains('Add/Remove Elements')
      .click()
      .url()
      .should('have.include','/add_remove_elements/')
  })

  it('Check H2 text', () => {
    cy.visit('/add_remove_elements/')
      .location().then((loc) => {
        cy.log(`LOCATION ${loc}`)
      })
      .url().then((loc) => {
        cy.log(`URL ${loc}`)
      })
    cy.get('button')
      .contains('Delete')
      .should('not.exist')
      .get('button')
      .contains('Add Element')
      .click()
      .get('button')
      .contains('Delete')
      .should('exist')
      .should('have.length', 1)
  })
})