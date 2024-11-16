/// <reference types="cypress" />

context('Delete Invoice', { tags: 'delete' }, function () { 
    describe('Delete Invoice Test', () => {
        it('Can Delete Invoices', () => {
            cy.visit('/dashboard/invoices');
            cy.get(':nth-child(1) > :nth-child(6) > .flex > form > .rounded-md > .w-5').click();
            cy.visit('/dashboard/invoices');
            cy.get('.bg-white > :nth-child(1) > :nth-child(3)').should('not.have.text', '$19.88');
            cy.get('.h-10 > .hidden').click();
            cy.get('#customer').select('d6e15727-9fe1-4961-8c5b-ea44a9bd81aa');
            cy.get('#amount').clear('1');
            cy.get('#amount').type('19.88');
            cy.get('#paid').check();
            cy.get('.bg-blue-500').click();
            cy.visit('/dashboard/invoices');
            cy.get('.bg-white > :nth-child(1) > :nth-child(3)').should('have.text', '$19.88');
        })
    })
})