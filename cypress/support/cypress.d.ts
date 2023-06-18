import { mount } from 'cypress/react'
// describe custom Cypress commands in this file

// load the global Cypress types
/// <reference types="cypress" />
// load the 3rd party command definition for cy.waitUntil()
/// <reference types="cypress-wait-until" />
// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      dataCy(value: string): Chainable<Element>

      /**
       * comando customizado de login.
       * @example cy.login()
       */
      login(user: string , password: string): Chainable<Element>

      /**
       * comando customizado para adicionar observacao farmaceutica.
       * @example cy.adicionaObservacaoFarmaceutica()
       */
      adicionaObservacaoFarmaceutica(senha: string , observacao: string): Chainable<Element>

      /**
       * comando customizado para conectar no banco de dados.
       * @example cy.adicionaObservacaoFarmaceutica()
       */
      connectToDatabase(command: string, ...args: any): Chainable<Element>

      /**
       * comando customizado para executar querys no banco de dados.
       * @example cy.adicionaObservacaoFarmaceutica()
       */
      queryDatabase(command: string, ...args: any): Cypress.Chainable<any>

      /**
       * comando customizado para desconectar do banco de dados.
       * @example cy.adicionaObservacaoFarmaceutica()
       */
      disconnectFromDatabase(command: string, ...args: any): Chainable<Element>

      /**
       * describe
       * @example cy.nrorclist()
       */
      nrorclist(): { cdfil: string; nrorc: string; }[]

      /**
       * describe
       * @example ()
       */
      state():Chainable<Element>
    }
  }

}
declare module 'dotenv' {
  export const PROJECT_ID: string;
  export const PROJECT_KEY: string;
  export const BASE_URL: string;
}
