// Importa as páginas globais
import { homePage } from './pages/HomePage';
import { productPage } from './pages/ProductPage';
import { loginPage } from './pages/LoginPage';

// Expondo páginas como comandos customizados
Cypress.Commands.add('homePage', () => homePage);
Cypress.Commands.add('productPage', () => productPage);
Cypress.Commands.add('loginPage', () => loginPage);