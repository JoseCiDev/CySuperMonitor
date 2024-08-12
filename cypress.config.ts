///home/jose/projetos/CySuperMonitor/cypress.config.ts
import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import webpack from "@cypress/webpack-preprocessor";


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
    })
  );

  return config;
}

export default defineConfig({
  projectId: "iwkf6s",
  includeShadowDom: true,
  defaultCommandTimeout: 10000,
  viewportHeight: 1280,
  viewportWidth: 1024,
  e2e: {
    setupNodeEvents,
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
    specPattern: '/**/*.{js,jsx,ts,tsx,feature}',
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
      'cypress/support/Connections/*',
      'cypress/DataParameters/Enums/*',
      'cypress/DataParameters/Interfaces/*',
      'cypress/DataParameters/Types/*',
    ],
    video: false,
    screenshotOnRunFailure: true,
    videosFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots',
  },
});
