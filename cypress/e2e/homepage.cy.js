describe('Homepage', () => {
    it('should load the homepage and display the correct content', () => {
      cy.visit('http://localhost:3000/');
  
      // Check for the logo
      cy.get('p').contains('ClassyStore').should('exist');
  
      // Check for navigation links
      cy.get('a').contains('Home').should('exist');
      cy.get('a').contains('About Us').should('exist');
      cy.get('a').contains('Contact').should('exist');
  
      // Check for the cart and wishlist links
      cy.get('a').contains('Cart').should('exist');
      cy.get('a').contains('Wishlist').should('exist');
    });
  });