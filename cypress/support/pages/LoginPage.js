export class LoginPage {
  elements = {
    usernameInput: () => cy.get('[data-testid="username-textbox"]'),
    passwordInput: () => cy.get('[data-testid="password-textbox"]'),
    loginButton: () => cy.get('[data-testid="login-button"]'),
    errorMessage: () => cy.xpath('//*[@id="root"]/div/div/div/form/div[3]'),
    errorMessageVoid: () => cy.xpath('//*[@id="root"]/div/div/div/form/div[3]'),
  };

  fillUsername(username) {
    if (username) this.elements.usernameInput().type(username);
  }

  fillPassword(password) {
    if (password) this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginButton().click();
  }

  validateErrorMessage() {
    this.elements.errorMessage()
      .should('be.visible')
      .and('contain.text', 'Please enter a username and password');
  }

  validateErrorMessageVoid(){
    this.elements.errorMessageVoid()
      .should('be.visible')
      .and('contain.text', 'Invalid username or password');
  }
}

export const loginPage = new LoginPage();
