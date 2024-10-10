const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    reporter: 'junit',
    reporterOptions: {
      mochaFile: 'reports/test-report.xml',
      outputs: true,
      testCaseSwitchClassnameAndName: true
    }
  },
});
