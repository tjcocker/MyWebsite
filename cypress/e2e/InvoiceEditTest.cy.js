/// <reference types="cypress" />

context('Edit Invoices', { tags: 'edit' }, function () { 
    describe('Edit Invoices Tests', () => {
        it('Can Edit Invoices', () => {
            cy.visit('/dashboard/invoices');
            cy.get('.bg-sky-100 > .hidden').should('have.text', 'Invoices');
            cy.get('.h-10 > .hidden').should('have.text', 'Create Invoice');
            cy.get('.hidden > .bg-white > :nth-child(1) > :nth-child(2)').should('have.text', 'quill@gotg.org');
            cy.get('.bg-white > :nth-child(1) > :nth-child(3)').should('have.text', '$19.88');
            cy.get(':nth-child(1) > :nth-child(6) > .flex > a.rounded-md > .w-5').click();
            cy.get('.flex-grow').click();
            cy.get('#amount').clear();
            cy.get('#amount').type('500');
            cy.get('#pending').check();
            cy.get('.bg-blue-500').should('have.text', 'Edit Invoice');
            cy.get('.bg-blue-500').click();
            cy.visit('/dashboard/invoices');
            cy.get('.bg-white > :nth-child(1) > :nth-child(3)').should('have.text', '$500.00');
            cy.get(':nth-child(1) > :nth-child(6) > .flex > a.rounded-md > .w-5').click();
            cy.get('.flex-grow').click();
            cy.get('#amount').clear();
            cy.get('#amount').type('19.88');
            cy.get('#pending').check();
            cy.get('.bg-blue-500').should('have.text', 'Edit Invoice');
            cy.get('.bg-blue-500').click();
            cy.visit('/dashboard/invoices');
            cy.get('.bg-white > :nth-child(1) > :nth-child(3)').should('have.text', '$19.88');
        })
    })
})