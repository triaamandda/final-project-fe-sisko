describe('Update User', () => {
    it('Successfully Update User', () => {
        var user = {
            "name": "Tria Amanda",
            "job": "Test Engineer"
        }
        cy.request('PUT', 'https://reqres.in/api/users/2', user).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.name).to.eq(user.name)
        })
    });
});