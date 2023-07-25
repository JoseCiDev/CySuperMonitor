// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="Cypress" />
/// <reference path="./cypress.d.ts" />



// import Database from './Database/database';
import { ELEMENTS as el } from '../integration/elements'
import * as mysql from 'mysql';
import { faker } from '@faker-js/faker';
import * as dotenv from 'dotenv';
import { OpcoesValidas } from './cypress';



Cypress.Commands.add('login', () => {
  const ambiente = Cypress.env('AMBIENTE');

  // Get the specific environment object based on the selected AMBIENTE
  const dadosAmbiente = Cypress.env(ambiente);

  // Visita a página de login
  cy.visit(dadosAmbiente.BASEURL).then(() => {
    // Realiza o login
    window.localStorage.setItem('authToken', 'authToken');
    cy.get(el.usuario)
      .should('be.visible')
      .type(dadosAmbiente.USER, { log: false });
    cy.get(el.senha)
      .should('be.visible')
      .type(dadosAmbiente.PASSWORD, { log: false });

    cy.get(el.entrar)
      .should('be.visible')
      .contains('login')
      .click();

    cy.url().should('contain', `${dadosAmbiente.BASEURL}lembretes`);
  });
});


interface QueryParams {
  dbName: string;
  query: string;
}
Cypress.Commands.add('queryDB', (dbName: string, query: string) => {
  const params: QueryParams = { dbName, query };

  // Retorna um objeto Cypress.Chainable envolvendo o resultado da tarefa
  return cy.task<unknown>('queryDB', params).then((result: unknown) => {
    // Encadeie asserções ou ações adicionais usando cy.wrap()
    return cy.wrap(result);
  });
});



Cypress.Commands.add('inserirArquivo', (fixturePath, elementoBotao) => {
  cy.fixture(fixturePath, 'base64').then((conteudo_arquivo) => {
    const nome = fixturePath.split('/').pop(); // Extract the file name from the fixture path
    const mimeType = 'image/jpeg';

    const blob = Cypress.Blob.base64StringToBlob(conteudo_arquivo, mimeType);
    const file = new File([blob], nome, { type: mimeType });

    cy.get(elementoBotao).then(($input) => {
      const event = new Event('change', { bubbles: true });
      Object.defineProperty($input[0], 'files', {
        value: [file],
        writable: false,
      });
      $input[0].dispatchEvent(event);
    });
  });
});



Cypress.Commands.add('acessarMenuReceitas', () => {
  cy.get(el.receitas)
    .should('be.visible')
    .contains('Receitas')
    .and('have.class', 'nav-label')
    .click();
});



Cypress.Commands.add('acessarMenuAtendimentos', () => {
  cy.get(el.receitas)
    .should('be.visible')
    .contains('Receitas')
    .and('have.class', 'nav-label')
    .click();
});