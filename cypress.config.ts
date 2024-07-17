import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";

export default defineConfig({
  projectId: "iwkf6s",
  includeShadowDom: true,
  defaultCommandTimeout: 10000,
  viewportHeight: 1280,
  viewportWidth: 1024,
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler());
      return config;
    },
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
    specPattern: 'cypress/**/*.{js,jsx,ts,tsx}',
    redirectionLimit: 5000,
    numTestsKeptInMemory: 15,
    experimentalMemoryManagement: true,
    excludeSpecPattern: [
      'cypress/support/*',
      'cypress/support/commands',
      'cypress/DataParameters/*',
      'cypress/DataParameters/Enums/*',
      'cypress/elements.ts',
      'cypress/reports/*',
      'cypress/reports/html/*',
      'cypress/reports/html/assets/*',
      'cypress/reports/.jsons/*',
      'cypress/plugins/*',
      'cypress/support/Connections/*'
    ],
    video: false,
    screenshotOnRunFailure: true,
    videosFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots',
  },
});
