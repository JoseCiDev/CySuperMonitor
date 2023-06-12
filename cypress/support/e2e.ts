// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:

// load the global Cypress types
/// <reference types="cypress" />
// load the 3rd party command definition for cy.waitUntil()
/// <reference types="cypress-wait-until" />

// load https://github.com/NoriSte/cypress-wait-until
// which adds "cy.waitUntil" command
// note that this 3rd party module includes TypeScript "types"
// file that correctly adds "waitUntil" to the Cypress Chainer namespace
// require('cypress-wait-until')

Cypress.on('uncaught:exception', (err, runnable) => {
  // we expect a 3rd party library error with message 'socket not defined'
  // and don't want to fail the test so we return false
  if (err.message.includes('socket is not defined')) {
    return false  
  }
  // we still want to ensure there are no other unexpected
  // errors, so we let them fail the test
  if (err.message.includes('ERR_EMPTY_RESPONSE')) {
    // cy.responseApiSocket()  
    return false
  }
})

  
  

    
  