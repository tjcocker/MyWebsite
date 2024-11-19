const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://nextjs-dashboard-liard-mu-62.vercel.app",
    experimentalStudio: true,
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      config.env = config.env || {};
      require('@cypress/grep/src/plugin')(config);
      return config;
    },

    env: {
      grepFilterSpecs: true,
      grepOmitFiltered: true,
      grepIntegrationFolder: '../../',
    },

    reporter: 'junit',
    reporterOptions: {
      mochaFile: 'reports/test-report.xml',
      outputs: true,
      testCaseSwitchClassnameAndName: true
    }
  },
});
