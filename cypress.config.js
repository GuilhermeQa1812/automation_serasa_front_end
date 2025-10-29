const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://commitquality.com/',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      // Configurações adicionais se precisar
    },
  },
});
