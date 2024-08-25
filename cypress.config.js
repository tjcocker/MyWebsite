const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://tim-cockerham.com',
    experimentalStudio: true,
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});