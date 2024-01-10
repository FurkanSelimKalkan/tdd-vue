// https://docs.cypress.io/api/table-of-contents

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Your Vue.js App')
  })
})

describe('Tasks API', () => {
  it('successfully retrieves tasks', () => {
    cy.request('http://localhost:8080/api/tasks')
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.be.an('array');
        });
  });
});


