describe('Login Via API', () => {
    it('Successfully logs in a new user', () => {
        const user = {
            "username": "username",
            "password": "password"
        };

        // Make a POST request to create a new user
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).to.equal(201);
            expect(response.body).to.have.property('id'); // Assuming the response contains an 'id' field
            // Other assertions related to the response data can be added here

            // Set a cookie (if needed)
            cy.setCookie('cookie_1', 'your_cookie_value_here');

            // Visit a specific page (e.g., the main page)
            cy.visit('https://reqres.in/#!/main');

            // Additional test steps (interactions, assertions) can be added here
        });
    });
});