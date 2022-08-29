/// <reference types="cypress" />

context('Contact Creation', () => {
   beforeEach(() => {
       cy.visit('http://localhost:3000');
   });
   
   it('should trigger an invalid email message', () => {
        cy.get('#contact_type_advanced').parent().click();
        cy.get('#name').type('Example Cypress');
        cy.get('#type').select('WORK');
        cy.get('#email').type('wrong email format');
        cy.get('#phone').type('_31612345678');
        expect('.input-error').to.exist;
        expect(cy.get('.input-error').contains('Please enter a valid email.').should('exist'));
   });

   it('should trigger an invalid phone message', () => {
    cy.get('#contact_type_advanced').parent().click();
    cy.get('#name').type('Example Cypress');
    cy.get('#type').select('WORK');
    cy.get('#email').type('example@example.com');
    cy.get('#phone').type('2432432432432432');
    cy.get('#create-contact').click();
    expect('.input-error').to.exist;
    expect(cy.get('.input-error').contains('Please enter a valid phone number.').should('exist'));
});

   it('should create a simple contact', () => {
        cy.get('#name').type('Example Cypress');
        cy.get('#type').select('PRIVATE');
        cy.get('#create-contact').click();        
        expect(cy.get('.v-toast__item--success')).to.exist;
   });

   it('should delete a simple contact', () => {
        cy.visit('http://localhost:3000/Contacts');        
        cy.get('section').children('div').its('length').then((len) => {
            cy.get('section').contains('Example Cypress').parent().parent().find('.delete').click();
            cy.get('section').children().its('length').should('eq', len + 1);
        });
   });

   it('should create an advanced contact', () => {
    cy.get('#contact_type_advanced').parent().click();
    cy.get('#name').type('Example Cypress Advanced');
    cy.get('#type').select('WORK');
    cy.get('#email').type('example@example.com');
    cy.get('#phone').type('+31612345678');
    cy.get('#create-contact').click();
    expect(cy.get('.v-toast__item--success')).to.exist;
});
});