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
    interface Chainable<Subject = any> {
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
      geraFixture(): { imagem: string,nome: string; caminho: string; }[]

      /**
       * describe
       * @example ()
       */
      state():Chainable<Element>

      /**
     * Simula a digitação de texto com suporte a eventos de teclado.
     *
     * @param text O texto a ser digitado.
     * @param options Opções adicionais para a digitação.
     *
     * @example
     * cy.get('input').realType('Hello, World!');
     */
    realType(text: string, options?: Partial<TypeOptions>): Chainable<Subject>;
    }
  }

}