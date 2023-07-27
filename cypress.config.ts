import { defineConfig } from "cypress";
import DatabaseConnection, { ConnectionInfo, connections } from "./cypress/support/Connections/connection";
import * as dotenv from "dotenv";


interface CustomCypressConfig {
  projectId?: string;
  supportFolder?: string;
  viewportWidth?: number;
  viewportHeight?: number;
  includeShadowDom?: boolean;
  setupNodeEvents?: (on: Cypress.PluginEvents, config: CustomCypressConfig) => void;
}

export default defineConfig<CustomCypressConfig>({
  // projectId: Cypress.env.PROJECT_KEY,
  viewportWidth: 1600,
  viewportHeight: 1280,
  includeShadowDom: true,

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
  },
});
