const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://nextjs-dashboard-liard-mu-62.vercel.app",
    experimentalStudio: true,
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      require('@bahmutov/cy-grep/src/plugin')(config);
      return config;
    },

    env: {
      grepFilterSpecs: false,
      grepOmitFiltered: true,
    //  grepIntegrationFolder: '../../',
    },

    reporter: 'junit',
    reporterOptions: {
      mochaFile: 'reports/test-report.xml',
      outputs: true,
      testCaseSwitchClassnameAndName: true
    }
  },
});
