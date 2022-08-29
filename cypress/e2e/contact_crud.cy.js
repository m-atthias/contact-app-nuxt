/// <reference types="cypress" />

context('Contact Creation', () => {
   beforeEach(() => {
       cy.visit('http://localhost:3000');
   });

   it('should create a simple contact', () => {
        cy.get('#name').type('Matthias Cypress');
        cy.get('#type').select('PRIVATE');
        cy.get('#create-contact').click();
        expect(cy.get('#success-message')).to.exist;
   });

   it('should delete a simple contact', () => {
        cy.visit('http://localhost:3000/Contacts');
        cy.get('section').children('div').its('length').then((len) => {
            cy.get('section').contains('Matthias Cypress').parent().parent().find('.delete').click();
            cy.get('section').children().its('length').should('eq', len - 1);
        });
   });

   it('should create an advanced contact', () => {
    cy.get('#contact_type_advanced').parent().click();
    cy.get('#name').type('Matthias Cypress Advanced');
    cy.get('#type').select('WORK');
    cy.get('#email').type('matthias@3webapps.com');
    cy.get('#phone').type('+31612345678');
    cy.get('#create-contact').click();
    expect(cy.get('#success-message')).to.exist;
});
});