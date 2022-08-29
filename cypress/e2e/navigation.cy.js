/// <reference types="cypress" />

context('Location', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('should click on the logo to navigate to the homepage', () => {
        cy.get('#home-nav').click();
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

    it('should navigate to the my contacts page', () => {
        cy.get('header').contains('My Contacts').click();
        cy.location().should((location) => {
            expect(location.href).to.eq('http://localhost:3000/Contacts');
        });
    });

    it('should change the language to Dutch', () => {
        expect(cy.get('#intro').contains('Easily manage your work and private contacts').should('exist'));
        expect(cy.get('#intro').contains('Gemakkelijk je werk en privé contacten beheren').should('not.exist'));
        cy.get('header').contains('NL').click();
        expect(cy.get('#intro').contains('Easily manage your work and private contacts').should('not.exist'));
        expect(cy.get('#intro').contains('Gemakkelijk je werk en privé contacten beheren').should('exist'));
        cy.location().should((location) => {
            expect(location.pathname).to.eq('/nl');
        });
    });

    it('[mobile] should click on the logo to navigate to the homepage', () => {
        cy.viewport('iphone-6');
        cy.get('#home-nav-mob').click();
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

    it('[mobile] should navigate to the my contacts page', () => {
        cy.viewport('iphone-6');
        cy.get('#mob-nav').click();
        cy.get('nav').contains('My Contacts').click();
        cy.location().should((location) => {
            expect(location.href).to.eq('http://localhost:3000/Contacts');
        });
    });
})