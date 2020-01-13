

describe('Homepage', function() {
  beforeEach(function () {
    cy.visit('http://localhost:8080')
  })
  it('display standard offers if customer is of type standard', function() {
    cy.get('#form select').select('standard')
    cy.get('#form').submit()
    cy.get('#results ul').should('have.text', 'Offer 1')
  })
  it('display premium offers if customer is of type premium', function() {
    cy.get('#form select').select('premium')
    cy.get('#form').submit()
    cy.get('#results ul').should('have.text', 'Offer 2, Offer 7, Offer 82')
  })
});

