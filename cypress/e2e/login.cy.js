// login.cy.js


describe('Login Tests for Practice Test Automation', () => {
  beforeEach(() => {
    // Visit the login page before each test
    cy.visit('https://practicetestautomation.com/practice-test-login/');
  });


  context('Valid Login', () => {
    it('should successfully log in with valid credentials', () => {
      // Enter valid username and password
      cy.get('#username').type('student');
      cy.get('#password').type('Password123');
     
      // Click the login button
      cy.get('#submit').click();
     
      // Verify successful login by checking the URL and presence of logout button
      cy.url().should('include', '/logged-in-successfully/');
      cy.get('li').should('contain', 'Log out');
    });
  });


  context('Invalid Login', () => {
    it('should display error message with invalid username', () => {
      // Enter invalid username and valid password
      cy.get('#username').type('invaliduser');
      cy.get('#password').type('Password123');
     
      // Click the login button
      cy.get('#submit').click();
     
      // Verify error message is displayed
      cy.get('.show.invalid-feedback').should('contain', 'Your username is invalid!');
    });


    it('should display error message with invalid password', () => {
      // Enter valid username and invalid password
      cy.get('#username').type('student');
      cy.get('#password').type('invalidpassword');
     
      // Click the login button
      cy.get('#submit').click();
     
      // Verify error message is displayed
      cy.get('.show.invalid-feedback').should('contain', 'Your password is invalid!');
    });


    it('should display error message with invalid username and password', () => {
      // Enter invalid username and password
      cy.get('#username').type('invaliduser');
      cy.get('#password').type('invalidpassword');
     
      // Click the login button
      cy.get('#submit').click();
     
      // Verify error message is displayed
      cy.get('.show.invalid-feedback').should('contain', 'Your username is invalid!');
    });
  });
});
