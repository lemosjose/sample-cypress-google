const { beforeEach } = require("mocha")
const { realEvent } = require("cypress-real-events")

describe('assert API', () => {
  beforeEach(() => {
    cy.visit("https://google.com")
  })

  it('common search', () => {
    cy.get('#APjFqb')
    .type("sample text{enter}")
  })
  it('keyboard-only seach', () => {
    cy.get('#APjFqb')
    .type("Ryan Gosling")
    Cypress._.times(5,(k)  => {~
      cy.realPress("Tab")
    })
    cy.realPress("Enter")
  })

  it('suggestion searh', () => {
    cy.get('#APjFqb')
    .type("Ituiuta")
    cy.get(':nth-child(1) > .eIPGRd > .sbic')
    .click({ force:true })
  })
})