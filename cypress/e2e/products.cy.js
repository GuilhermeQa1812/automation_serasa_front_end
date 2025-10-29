import { homePage } from '../support/pages/HomePage';
import { productPage } from '../support/pages/ProductPage';

describe('Fluxo completo de produtos - Commit Quality', () => {
  const productName = `Produto Cypress ${Date.now()}`;
  const price = '25';
  const date = '2021-02-01';

  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve validar o texto do banner na tela inicial', () => {
    homePage.validateBanner();
  });

  it('Deve adicionar um novo produto com sucesso e validar pelo filtro', () => {
    homePage.goToAddProduct();
    productPage.createProduct(productName, price, date);
    productPage.validateProductInTable(productName);
    productPage.filterProductByName(productName);

  });


});
