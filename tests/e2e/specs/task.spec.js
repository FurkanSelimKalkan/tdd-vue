describe('Tasks API E2E Test', () => {
    it('fetches tasks - GET', () => {
        cy.visit('http://localhost:3000/#/tasks');
        cy.get('.fetch-tasks-btn').click();

        cy.request('http://localhost:8080/api/tasks').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.a('array');
        });
    });
});
