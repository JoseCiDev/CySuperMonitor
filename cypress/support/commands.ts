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
// @ts-check
///<reference path="./cypress.d.ts" />


// import Database from './Database/database';
import { ELEMENTS as el } from '../integration/Login/elements';
import * as mysql from 'mysql';
import { faker } from '@faker-js/faker';
import * as dotenv from 'dotenv';
dotenv.config();





Cypress.Commands.add('login', () => {
  const ambiente_selecionado = Cypress.env('enviroment').HOMOLOG_ACESS

  cy.session[ambiente_selecionado.USER, ambiente_selecionado.PASSWORD], () => {
    cy.visit({
      method: 'GET',
      url: ambiente_selecionado.BASEURL,
    }).then(() => {
      window.localStorage.setItem('authToken', 'authToken');
      cy.get(el.usuario)
        .should('be.visible')
        .type(ambiente_selecionado.USER, { log: false });
      cy.get(el.senha)
        .should('be.visible')
        .type(ambiente_selecionado.PASSWORD, { log: false });

      cy.get(el.btlogin)
        .should('be.visible')
        .contains('login')
        .click();

      cy.url().should('contain', ambiente_selecionado.BASEURL + 'lembretes');
    });
  }
  cy.visit({
    method: 'GET',
    url: ambiente_selecionado.BASEURL,
  })
  cy.get(el.usuario)
    .should('be.visible')
    .type(ambiente_selecionado.USER, { log: false });
  cy.get(el.senha)
    .should('be.visible')
    .type(ambiente_selecionado.PASSWORD, { log: false });

  cy.get(el.btlogin)
    .should('be.visible')
    .contains('login')
    .click();

  cy.url().should('contain', ambiente_selecionado.BASEURL + 'lembretes');
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



