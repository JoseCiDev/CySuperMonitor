///home/jose/projetos/CySuperMonitor/cypress.config.ts
import { defineConfig } from "cypress";
import webpack from "@cypress/webpack-preprocessor";
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';


async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.ts$/,
              exclude: [/node_modules/],
              use: [
                {
                  loader: "ts-loader",
                },
              ],
            },
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    }),
  );

  return config;
}


export default defineConfig({
  projectId: "iwkf6s",
  includeShadowDom: true,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 120000,
  responseTimeout: 30000,
  waitForAnimations: false,
  numTestsKeptInMemory: 5,
  experimentalMemoryManagement: true,
  e2e: {
    chromeWebSecurity: false,
    watchForFileChanges: true,
    setupNodeEvents,
    // baseUrl: 'http://192.168.0.66:9202/',
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/**/*.{js,jsx,ts,tsx,feature}',
    redirectionLimit: 5000,
    viewportHeight: 1280,
    viewportWidth: 1024,
    numTestsKeptInMemory: 1,
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
      'cypress/support/Connections/*',
      'cypress/DataParameters/Enums/*',
      'cypress/DataParameters/Interfaces/*',
      'cypress/DataParameters/Types/*',
    ],
    video: true,
    screenshotOnRunFailure: true,
    videosFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots',
  },
});
