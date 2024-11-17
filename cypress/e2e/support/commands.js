// custom command for data-cy="selector"
Cypress.Commands.add('getBySel', (selector, ...args) => {
    return cy.get(`[data-cy="${selector}"]`, ...args)
})
