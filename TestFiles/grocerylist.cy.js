/// <reference types="cypress" />

describe('Grocery list app tests', () => {
  beforeEach(() => {
    cy.visit('/grocery.html')
  })

  it('URL contains grocery', () => {
    cy.url().should('include', '/grocery')
  })

  it('Contains grocery list title', () => {
    cy.contains('grocery list')
  })

  it('Contains submit button', () => {
    cy.get('button').should('contain', 'submit')
  })

  it('Contains home button', () => {
    cy.get('div').should('contain', 'Return to Main Site')
  })

  it('Enters an item, clears item, asserts item is cleared', () => {
    cy.get('#grocery').type('Milk');
    cy.get('.submit-btn').click();
    cy.get('article').should('contain', 'Milk');
    cy.get('.clear-btn').click();
    cy.get('article').should('not.exist')
  })

  it('Clicks home button', () => {
    cy.contains('Return to Main Site').click()
  })
})
