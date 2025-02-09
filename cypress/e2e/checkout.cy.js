describe('Checkout', () => {
    it('should complete the checkout process', () => {
      cy.visit('http://localhost:3000/checkout');

  
      // Fill out the checkout form
      cy.get('input[name="name"]').type('John Doe');
      cy.get('input[name="email"]').type('john.doe@example.com');
      cy.get('input[name="address"]').type('123 Main St');
      cy.get('input[name="city"]').type('New York');
      cy.get('input[name="state"]').type('NY');
      cy.get('input[name="zip"]').type('10001');
  
      // Place the order
      cy.get('button').contains('Place Order').click();

    });
  });