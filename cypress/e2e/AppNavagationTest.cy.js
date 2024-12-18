/// <reference types="cypress" />

describe('Page Navagation Tests', () => {
  it('Can navagate to every page', { tags: ['@smoke'] }, () => { // smoke tag
    cy.visit('/');
    cy.get('[data-cy=clickhere]').should('have.text', 'Click Here'); // using data attributes for selectors
    cy.getBySel("clickhere").click();
    cy.title().should('eq', 'Tim Cockerham');                        // using custom commands for the selectors
    cy.getBySel("welcomeText").should('have.text', 'Welcome!');
    cy.get('[href="/dashboard"] > span').click();
    cy.title().should('eq', 'Dashboard');
    cy.getBySel("dashboard").should('have.text', 'Dashboard');
    cy.get('[href="/dashboard/invoices"]').click();
    cy.title().should('eq', 'Invoices');
    cy.getBySel("invoices").should('have.text', 'Invoices');
    cy.get('.hidden > .bg-white > :nth-child(2) > :nth-child(2)').should('have.text', 'thanos@thanos.info');
    cy.get('[href="/dashboard/customers"]').click();
    cy.title().should('eq', 'Customers');
    cy.get('.divide-y > :nth-child(1) > :nth-child(2)').should('have.text', 'ant-man@tinyurl.net');
    cy.get('[href="/dashboard/contact"] > .hidden').click();
    cy.get('[href="mailto:tim@tim-cockerham.com"] > span').should('be.visible');
  })
})

