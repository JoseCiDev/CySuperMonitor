/// <reference types="Cypress" />

import { DatabaseConnection } from './cypress/support/Connections/connection'
import { defineConfig } from 'cypress'
import mysql from 'mysql'
// import crossEnv from 'cross-env';
import * as dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  projectId: process.env.PROJECT_KEY,
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    viewportWidth: 1600,
    viewportHeight: 1280,
    includeShadowDom: true,
    setupNodeEvents(on, config) {
      on('task', {
        // destructure the argument into the individual fields
        queryDB({ dbName, query }) {
          const dataBase = new DatabaseConnection()
          return dataBase.queryDB(dbName, query)
        },
      })
    },
  },
})