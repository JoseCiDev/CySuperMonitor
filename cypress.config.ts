import { defineConfig } from "cypress";
import DatabaseConnection, { ConnectionInfo, connections } from "./cypress/support/Connections/connection";


interface CustomCypressConfig {
  projectId?: string;
  supportFolder?: string;
  viewportWidth?: number;
  viewportHeight?: number;
  includeShadowDom?: boolean;
  setupNodeEvents?: (on: Cypress.PluginEvents, config: CustomCypressConfig) => void;
}

export default defineConfig<CustomCypressConfig>({
  "projectId": "tx3tt6",
  includeShadowDom: true,
  defaultCommandTimeout: 10000,
  e2e: {
    setupNodeEvents(on, config) {
      // Registre o evento 'task' aqui
      on("task", {
        queryDB({ dbName, query }) {
          // Crie uma nova instância do DatabaseConnection dentro deste escopo
          const databaseConnection = new DatabaseConnection(connections);
          return databaseConnection.queryDB(dbName, query);
        },
      });
    },
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
    specPattern: 'cypress/**/*.{js,jsx,ts,tsx}',
    redirectionLimit: 5000,
    viewportHeight: 1280,
    viewportWidth: 1024,
    numTestsKeptInMemory: 150,
    excludeSpecPattern: [
      'cypress/support/*',
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
    video: true,
    videosFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots',
  },
});
