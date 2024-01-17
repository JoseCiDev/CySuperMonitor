import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "tx3tt6",
  includeShadowDom: true,
  defaultCommandTimeout: 10000,
  viewportHeight: 1280,
  viewportWidth: 1024,
  e2e: {
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
    specPattern: 'cypress/**/*.{js,jsx,ts,tsx}',
    redirectionLimit: 5000,
    numTestsKeptInMemory: 15,
    experimentalMemoryManagement : true,
    excludeSpecPattern: [
      'cypress/support/*',
      'cypress/support/commands',
      'cypress/DadosParametros.ts',
      'cypress/elements.ts',
      'cypress/reports/*',
      'cypress/reports/html/*',
      'cypress/reports/html/assets/*',
      'cypress/reports/.jsons/*',
      'dist',
      'cypress/dist/*',
      'cypress/integration/dist/*',
      'cypress/integration/Atendimento/PedidoEmAndamento/dist/*',
      'cypress/plugins/*',
      'cypress/support/Connections/*'
    ],
    video: false,
    screenshotOnRunFailure:true,
    videosFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots',
  },
});
