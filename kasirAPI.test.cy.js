describe('Get kasir-api.belajarqa.com/ List', () => {
    it('Verify the list kasir-api.belajarqa.com will displayed', () => {
        cy.request({
            method: 'GET',
            url: 'https://kasir-api.belajarqa.com'
        }).as('kasir-api.belajarqa.com')
        cy.get('@kasir-api.belajarqa.com').its('status').should('equal', 200)
    });
});