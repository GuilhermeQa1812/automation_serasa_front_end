import { loginPage } from '../support/pages/LoginPage';

describe('Testes de Login - Commit Quality', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('Deve exibir mensagem de erro ao tentar logar com ambos os campos vazios', () => {
    loginPage.clickLogin();
    loginPage.validateErrorMessage();
  });

  it('Deve exibir mensagem de erro ao tentar logar com usuário preenchido e senha vazia', () => {
    loginPage.fillUsername('usuarioTeste');
    loginPage.clickLogin();
    loginPage.validateErrorMessage();
  });

  it('Deve exibir mensagem de erro ao tentar logar com usuário vazio e senha preenchida', () => {
    loginPage.fillPassword('senha123');
    loginPage.clickLogin();
    loginPage.validateErrorMessage();
  });

  it('Deve exibir mensagem de erro ao tentar logar com ambos os campos inválidos', () => {
    loginPage.fillUsername('usuarioInvalido');
    loginPage.fillPassword('senhaErrada');
    loginPage.clickLogin();
    loginPage.validateErrorMessageVoid();
  });
});
