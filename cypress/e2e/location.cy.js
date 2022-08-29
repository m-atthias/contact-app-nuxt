/// <reference types="cypress" />

context('Location', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('should get the current URL hash', () => {
        cy.hash().should('be.empty');
    });

    it('should get window location', () => {
        cy.location().should((location) => {
            expect(location.hash).to.be.empty;
            expect(location.href).to.eq('http://localhost:3000/');
            expect(location.host).to.eq('localhost:3000');
            expect(location.hostname).to.eq('localhost');
            expect(location.origin).to.eq('http://localhost:3000');
            expect(location.pathname).to.eq('/');
            expect(location.port).to.eq('3000');
            expect(location.protocol).to.eq('http:');
            expect(location.search).to.be.empty;
        });
    });

    it('should get the current URL', () => {
        cy.url().should('eq', 'http://localhost:3000/');
    });
})