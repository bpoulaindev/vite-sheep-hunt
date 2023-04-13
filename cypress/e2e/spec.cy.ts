describe('Input component', () => {
  it('should allow the user to type in a value', () => {
    cy.visit('http://localhost:3000');
    cy.get('#input-field')
        .type('Hello, world!')
        .should('have.value', 'Hello, world!');
  });
});
