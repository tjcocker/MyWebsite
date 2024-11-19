/// <reference types="cypress" />

    describe('Customers Search Test', () => {
        it('Can Search Customers', { tags: ['@customers'] }, () => {
            cy.visit('/dashboard/customers');
            cy.get('.divide-y > :nth-child(1) > :nth-child(2)').should('have.text', 'ant-man@tinyurl.net');
            cy.getBySel("search").type('spi');
            cy.get('.divide-y > :nth-child(1) > :nth-child(2)').should('have.text', 'tobey@friendly-neighborhood.org');
            cy.get('.divide-y > :nth-child(1) > :nth-child(2)').should('not.have.text', 'ant-man@tinyurl.net');
            cy.getBySel("search").clear('spi');
            cy.get('.divide-y > :nth-child(3) > :nth-child(2)').should('have.text', 'cap@us.gov');
            cy.get('.divide-y > :nth-child(1) > :nth-child(2)').should('not.have.text', 'tobey@friendly-neighborhood.org');
        })
    })