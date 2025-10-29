export class HomePage {
  elements = {
    bannerText: () => cy.get('[data-testid="banner-container"]'),
    addProductButton: () => cy.get('[data-testid="add-a-product-button"]'),
  };

  validateBanner() {
    this.elements
      .bannerText()
      .should(
        'contain.text',
        'ADVERTISE YOUR PRODUCT / SERVICE HERE: Contact me on X'
      );
  }

  goToAddProduct() {
    this.elements.addProductButton().click();
  }
}

export const homePage = new HomePage();
