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
import { add } from 'cypress/types/lodash';
import { Connection, ConnectionOptions } from 'mysql2/promise';
import * as mysql2 from 'mysql2/promise';
import * as mysql from 'mysql';
import * as dotenv from 'dotenv';
dotenv.config();



Cypress.Commands.add('login', () => {


  cy.session([Cypress.env('enviroment.user'), Cypress.env('enviroment.password')], () => {
    const selectedlogin = Cypress.env('enviroment').HOMOLOG_ACESS;

    cy.visit(selectedlogin.BASEURL, {
      method: 'POST'
    });

    cy.log(`Carregando ambiente ${Cypress.env('environment') ? Cypress.env('environment') : 'LOCAL_ACESS'}`);

    cy.get(el.usuario)
      .should('be.visible')
      .type(selectedlogin.user, { log: false });

    cy.get(el.senha)
      .should('be.visible')
      .type(selectedlogin.password, { log: false });

    cy.get(el.btlogin)
      .should('be.visible')
      .contains('login')

      .click()
    cy.url().should('contain', process.env.DB_HOST_TESTE)
  },
    {
      validate() {
        cy.request(process.env.DB_HOST_TESTE + '/lembretes').its('status').should('eq', 200)
      }
    })
})



Cypress.Commands.add('queryDB', (dbName: string, query: string): Cypress.Chainable<unknown> => {
  const params = { dbName, query }; // Criando objeto com as propriedades necessárias

  return cy.task("queryDB", params)
    .then((result: unknown) => {
      // Faça algo com o resultado da consulta
      return result;
    });
});
