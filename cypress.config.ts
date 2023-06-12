/// <reference types="Cypress" />


import cypress, { defineConfig } from 'cypress'
import * as dotenv from 'dotenv';
// import crossEnv from 'cross-env';
dotenv.config();


// export default 
export default defineConfig({
  // The rest of the Cypress config options go here...
  projectId: '39itwu',
  e2e: {
    viewportWidth: 1600,
    viewportHeight: 1280,
    includeShadowDom:true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
})
