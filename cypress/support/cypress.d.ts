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
      queryDB(dbName: string, query: string): Chainable<unknown>;

      
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
// [DB TESTE]
export const DB_HOST_TESTE: string;
export const DBNAME_PRODUCTION: string;
export const DBNAME_LOCAL: string;
export const DBNAME_HOMOLOG: string;
export const FB_DBURL: string;
export const FB_DBUSER: string;
export const FB_DBPASS: string;

// [LOCAL CONNECTION]
export const LOCAL_HOST: string;
export const LOCAL_USER: string;
export const LOCAL_PASSWORD: string;
export const LOCAL_DATABASE: string;

// [HOMOLOG CONNECTION]
export const HOMOLOG_HOST: string;
export const HOMOLOG_USER: string;
export const HOMOLOG_PASSWORD: string;
export const HOMOLOG_DATABASE: string;

// [CYPRESS CLOUD CREDENTIALS]
export const PROJECT_ID: string;
export const PROJECT_KEY: string;
}
