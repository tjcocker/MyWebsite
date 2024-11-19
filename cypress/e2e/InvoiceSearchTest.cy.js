/// <reference types="cypress" />

    describe('Search Invoices Test', () => {
        it('Can Search Invoices', { tags: ['@search'] }, () => {
            cy.visit('/dashboard/invoices');
            cy.get('.-space-x-px > [href="/dashboard/invoices?page=2"]').click();
            cy.get('.hidden > .bg-white > :nth-child(2) > :nth-child(2)').should('have.text', 'ant-man@tinyurl.net');
            cy.getBySel("search").type('vi');
            cy.get('.hidden > .bg-white > .w-full > :nth-child(2)').should('have.text', 'vision@jarvis.io');
            cy.getBySel("search").clear('vi');
            cy.get('.bg-white > :nth-child(4) > :nth-child(2)').should('have.text', 'hulk@smash.info');
        })
    })