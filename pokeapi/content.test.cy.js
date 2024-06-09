// <reference types="cypress" />
describe('Testing Pokemon abilities', () => {
  it('should verify the "limber" ability', () => {
    cy.request('GET', 'https://pokeapi.co/api/v2/ability/7/').then((response) => {
        const { name } = response.body;

    cy.request('GET', 'https://pokeapi.co/api/v2/ability/7/').then((response) => {
        expect(name).to.eq('limber');
      });
  });
});
});