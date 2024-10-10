/// <reference types="cypress" />

describe('Web App Tests', () => {
  it('Page Navagation Tests', () => {
    cy.visit('https://nextjs-dashboard-liard-mu-62.vercel.app/')
    cy.get('.flex-col > .__className_712214').should('have.text', 'Welcome  to my Next.js web app! This is a work in progress.');
    cy.get('span').click();
    cy.get('h1 > b').should('have.text', 'Welcome!');
    cy.get('[href="/dashboard"] > span').click();
    cy.get(':nth-child(1) > .flex > .ml-2').should('have.text', 'Collected');
    cy.get('[href="/dashboard/invoices"]').click();
    cy.get('.flex-grow > :nth-child(1) > :nth-child(1) > .__className_712214').should('have.text', 'Invoices');
    cy.get('.hidden > .bg-white > :nth-child(2) > :nth-child(2)').should('have.text', 'thanos@thanos.info');
    cy.get('[href="/dashboard/customers"]').click();
    cy.get('.divide-y > :nth-child(1) > :nth-child(2)').should('have.text', 'ant-man@tinyurl.net');
    cy.get('[href="/dashboard/contact"] > .hidden').click();
    cy.get('[href="mailto:tim@tim-cockerham.com"] > span').should('be.visible');
  })

  it('Edit Invoice Test', function () {
    cy.visit('https://nextjs-dashboard-liard-mu-62.vercel.app/dashboard/invoices');
    cy.get('.flex-grow > :nth-child(1) > :nth-child(1) > .__className_712214').should('have.text', 'Invoices');
    cy.get('.h-10 > .hidden').should('have.text', 'Create Invoice');
    cy.get('.hidden > .bg-white > :nth-child(1) > :nth-child(2)').should('have.text', 'quill@gotg.org');
    cy.get('.bg-white > :nth-child(1) > :nth-child(3)').should('have.text', '$19.88');
    cy.get(':nth-child(1) > :nth-child(6) > .flex > a.rounded-md > .w-5').click();
    cy.get('.flex-grow').click();
    cy.get('#amount').clear();
    cy.get('#amount').type('500');
    cy.get('#pending').check();
    cy.get('.bg-blue-500').should('have.text', 'Edit Invoice');
    cy.get('.bg-blue-500').click('center');

    cy.visit('https://nextjs-dashboard-liard-mu-62.vercel.app/dashboard/invoices');
      cy.get('.bg-white > :nth-child(1) > :nth-child(3)').should('have.text', '$500.00');
    })

    it('Delete Invoice Test', function () {
      cy.visit('https://nextjs-dashboard-liard-mu-62.vercel.app/dashboard/invoices');
      cy.get(':nth-child(1) > :nth-child(6) > .flex > form > .rounded-md > .w-5').click();
      cy.get('.bg-white > :nth-child(1) > :nth-child(3)').should('not.have.text', '$500.00');
    })

    it('Create Invoice Test', function () {
      cy.visit('https://nextjs-dashboard-liard-mu-62.vercel.app/dashboard/invoices');
      cy.get('.h-10 > .hidden').click();
      cy.get('#customer').select('d6e15727-9fe1-4961-8c5b-ea44a9bd81aa');
      cy.get('#amount').clear('1');
      cy.get('#amount').type('19.88');
      cy.get('#paid').check();
      cy.get('.bg-blue-500').click();
      cy.visit('https://nextjs-dashboard-liard-mu-62.vercel.app/dashboard/invoices');
      cy.get('.bg-white > :nth-child(1) > :nth-child(3)').should('have.text', '$19.88');
    })

    it('Invoice Search Test', function () {
      cy.visit('https://nextjs-dashboard-liard-mu-62.vercel.app/dashboard/invoices');
      cy.get('.-space-x-px > [href="/dashboard/invoices?page=2"]').click();
      cy.get('.hidden > .bg-white > :nth-child(2) > :nth-child(2)').should('have.text', 'ant-man@tinyurl.net');
      cy.get('.peer').clear('v');
      cy.get('.peer').type('vi');
      cy.get('.hidden > .bg-white > .w-full > :nth-child(2)').should('have.text', 'vision@jarvis.io');
      cy.get('.peer').clear('v');
      cy.get('.bg-white > :nth-child(4) > :nth-child(2)').should('have.text', 'hulk@smash.info');
    })

    it('Customer Search Test', function () {
      cy.visit('https://nextjs-dashboard-liard-mu-62.vercel.app/dashboard/customers');
      cy.get('.divide-y > :nth-child(1) > :nth-child(2)').should('have.text', 'ant-man@tinyurl.net');
      cy.get('.peer').type('spi');
      cy.get('.divide-y > :nth-child(1) > :nth-child(2)').should('have.text', 'tobey@friendly-neighborhood.org');
      cy.get('.divide-y > :nth-child(1) > :nth-child(2)').should('not.have.text', 'ant-man@tinyurl.net');
      cy.get('.peer').clear('spi');
      cy.get('.divide-y > :nth-child(3) > :nth-child(2)').should('have.text', 'cap@us.gov');
      cy.get('.divide-y > :nth-child(1) > :nth-child(2)').should('not.have.text', 'tobey@friendly-neighborhood.org');
  
  })
})
