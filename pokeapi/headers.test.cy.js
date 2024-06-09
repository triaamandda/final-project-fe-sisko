describe('Validate Header', () => {
    it('Successfully Validate content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon');
        cy.get('@pokemon').its('headers.content-type').should('include', 'application/json; charset=utf-8');
    it('Successfully Update User', () => {
        cy.get('@pokemon').its('body').should('include', 'Ditto');
    });
});
});