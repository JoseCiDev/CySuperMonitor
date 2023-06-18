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
import { ELEMENTS as el } from '../integration/Sm/Hkm/Login/elements';
import { add } from 'cypress/types/lodash';
import Database from './Database/database';
import mysql from 'mysql';



Cypress.Commands.add('login', () => {
  cy.session([Cypress.env('user'), Cypress.env('password')], () => {
    cy.visit({
      url: Cypress.env('baseUrl'),
      method: 'POST'
    })
    cy.log(`Carregando ambiente  ${Cypress.env('environment') ? Cypress.env('environment') : 'local'} `)
    var enviroment = {
      homolog: 'CYPRESS_homologUser',
      prod: 'CYPRESS_prodUser',
      local: 'CYPRESS_localUser'
    }
    var selectedlogin = enviroment[Cypress.env('environment')]
    Cypress.env('user', Cypress.env(selectedlogin))
    cy.get(el.usuario)
      .should('be.visible')
      .type(Cypress.env('CYPRESS_localUser').user, { log: false })
    cy.get(el.senha)
      .should('be.visible')
      .type(Cypress.env('CYPRESS_localUser').password, { log: false })
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



Cypress.Commands.add('connectToDatabase', () => {
  const database = new Database();
  database.connect();
});


Cypress.Commands.add('queryDatabase', (query, callback) => {
  const connection = mysql.createConnection({
    host: Cypress.env('DB_HOST'),
    user: Cypress.env('DB_USER'),
    password: Cypress.env('DB_PASSWORD'),
    database: Cypress.env('DB_DATABASE')
  });
  connection.connect();
  connection.query(query, (error, results) => {
    if (error) {
      throw new Error(`Failed to execute query: ${query}\n${error}`);
    }
    connection.end();
    callback(results);
  });
});


Cypress.Commands.add('disconnectFromDatabase', () => {
  const database = new Database();
  database.disconnect();
});

