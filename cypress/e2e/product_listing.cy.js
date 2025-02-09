describe('Product Listing', () => {
    it('should display a list of products', () => {
      cy.visit('http://localhost:3000/');
  
      // Check for product cards
      cy.get('.grid').should('exist');
      cy.get('.grid > div').should('have.length.greaterThan', 0);
  
      // Check for product details
      cy.get('.grid > div').first().within(() => {
        cy.get('h2').should('exist'); // Product name
        cy.get('p').should('exist');  // Product price
      });
    });
  });