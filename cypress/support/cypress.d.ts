import { mount } from 'cypress/react'
import { dadosParametros } from '../DadosParametros'
// describe custom Cypress commands in this file

// load the global Cypress types
/// <reference types="cypress" />
// load the 3rd party command definition for cy.waitUntil()
/// <reference types="cypress-wait-until" />
// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.




interface DataHora {
  DATA_FORMATADA: string;
  HORA_FORMATADA: string;
}



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
       * @example cy.login('user', 'password')
       */
      login(USER: string, PASSWORD: string): Chainable<Element>

      /**
       * comando customizado para executar querys no banco de dados.
       * @example cy.queryDB()
       */
      queryDB(DB_NAME: string, query: string): Chainable<unknown>;

      /**
       * comando customizado para inserir arquivos.
       * @example cy.inserirArquivo('img/ReceitaJpeg(1).jpeg', el.importarImagem);
       */
      inserirArquivo(fixturePath, elementoBotao): Chainable<unknown>;

      /**
       * comando customizado para ler arquivos
       * @example cy.lerArquivo('orcamentoFilial.json')
       */
      lerArquivo(nomeArquivo: string): Chainable<any>;

      /**
        * comando customizado para acessar o menu Receitas.
        * @example cy.acessarMenuReceitas()
        */
      acessarMenuReceitas(element: string): Chainable<Element>

      /**
       * * comando customizado para acessar o menu Atendimentos.
       * @example cy.adicionaObservacaoFarmaceutica()
       */
      acessarMenuAtendimentos(element: string): Chainable<Element>

      /**
       * comando customizado para selecinar elemento e verificar se esta visivel.
       * @example cy.getVisible()
       */
      getVisible(element: string, options?: Partial<Cypress.Loggable & Cypress.Timeoutable & Cypress.Withinable>): Chainable<Subject>;

      /**
       * comando customizado para inserir Data.
       * @example cy.inserirData()
       */
      inserirData(dataAtual: Date): Chainable<DataHora>

      /**
      * comando customizado para pegar numero da receita.
      * @example cy.getReceitaNumero()
      */
      getReceitaNumero(): Chainable<number>;

      /**
      * comando customizado para setar numero da receita.
      * @example cy.setReceitaNumero()
      */
      setReceitaNumero(receitaNumero: number): Chainable<Element>;





    }
  }

}