import { DatabaseConnection } from "./cypress/support/Connections/connection";
import { defineConfig } from "cypress";

interface CustomCypressConfig {
  projectId?: string;
  supportFolder?: string;
  viewportWidth?: number;
  viewportHeight?: number;
  includeShadowDom?: boolean;
  setupNodeEvents?: (
    on: Cypress.PluginEvents,
    config: CustomCypressConfig
  ) => void;
}

export default defineConfig<CustomCypressConfig>({
  projectId: process.env.PROJECT_KEY,
  viewportWidth: 1600,
  viewportHeight: 1280,
  includeShadowDom: true,

  setupNodeEvents(on, config) {
    on("task", {
      // destructure the argument into the individual fields
      queryDB({ dbName, query }) {
        const dataBase = new DatabaseConnection();
        return dataBase.queryDB(dbName, query);
      },
    });
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
