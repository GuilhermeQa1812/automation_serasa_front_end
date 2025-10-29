export class ProductPage {
  elements = {
    nameInput: () => cy.get('#name'),
    priceInput: () => cy.get('#price'),
    dateInput: () => cy.get('#dateStocked'),
    submitButton: () => cy.get('[data-testid="submit-form"]'),
    filterInput: () => cy.xpath('//*[@id="root"]/div/div/div/div[2]/input'),
    filterButton: () => cy.get('[data-testid="filter-button"]'),
    productTable: () => cy.get('table.product-list-table tbody'),
  };

  createProduct(productName, price, date) {
    this.elements.nameInput().type(productName);
    this.elements.priceInput().type(price);
    this.elements.dateInput().type(date);
    this.elements.submitButton().click();
  }

  filterProductByName(productName) {
    this.elements.filterInput().clear().type(productName);
    this.elements.filterButton().click();
  }

  validateProductInTable(productName) {
    this.elements.productTable().contains('td', productName).should('exist');
  }
}

export const productPage = new ProductPage();
