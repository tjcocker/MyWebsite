/// <reference types="cypress" />

context('Create Invoices', { tags: 'create' }, function () {
    describe('Create Invoices Tests', () => {
        it('Can Create Invoices', () => {
            cy.visit('/dashboard/invoices');
            cy.get('.h-10 > .hidden').click();
            cy.get('#customer').select('d6e15727-9fe1-4961-8c5b-ea44a9bd81aa');
            cy.get('#amount').clear('1');
            cy.get('#amount').type('19.88');
            cy.get('#paid').check();
            cy.get('.bg-blue-500').click();
            cy.visit('/dashboard/invoices');
            cy.get('.bg-white > :nth-child(1) > :nth-child(3)').should('have.text', '$19.88');
            cy.get(':nth-child(1) > :nth-child(6) > .flex > form > .rounded-md > .w-5 > path').click();
        })
    })
})