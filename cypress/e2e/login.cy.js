
describe('Practice Test Login', () => {
  beforeEach(() => {
    // Visit login page
    cy.visit('https://practicetestautomation.com/practice-test-login/');
  });

  it('should allow a user to login with valid credentials', () => {
    // Enter valid username and password
    cy.get('#username').type('student');
    cy.get('#password').type('Password123');
    
    // Click login button
    cy.get('#submit').click();
    
    // Assertion: Verify successful login, URL contains "logged-in-successfully"
    cy.url().should('include', 'logged-in-successfully');
    
    // Assertion: Verify success message is displayed
    cy.get('.post-title').should('contain', 'Logged In Successfully');
    
    // Assertion: Verify "Log out" button exists
    cy.get('.wp-block-button__link').should('contain', 'Log out');
  });

  it('should show an error message with invalid password', () => {
    // Enter valid username but wrong password
    cy.get('#username').type('student');
    cy.get('#password').type('WrongPassword');
    
    // Click login button
    cy.get('#submit').click();
    
    // Assertion: Verify error message is displayed
    cy.get('#error').should('be.visible').and('contain', 'Your password is invalid!');
  });
});
