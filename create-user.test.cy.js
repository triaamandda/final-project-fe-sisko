describe('Create New User', () => {
    it('Successfully Create New User', () => {
        var user = {
            "name": "Amanda",
            "job": "TE Engineer"
        }

        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201)
            expect(response.body).to.have.property('name', user.name)
            expect(response.body).to.have.property('job', user.job)
        })
    });
});