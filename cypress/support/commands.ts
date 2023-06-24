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
<<<<<<< HEAD
import { ELEMENTS as el } from '../integration/Sm/Hkm/Login/elements';
import { add } from 'cypress/types/lodash';
// import Database from './Database/database';
<<<<<<< HEAD
import mysql from 'mysql';
=======
import { ELEMENTS as el } from '../integration/Login/elements';
import { add } from 'cypress/types/lodash';
// import Database from './Database/database';
import { Connection, ConnectionOptions } from 'mysql2/promise';
import * as mysql2 from 'mysql2/promise';
=======
import * as mysql from 'mysql';
>>>>>>> feature/ECD-3
import * as dotenv from 'dotenv';
dotenv.config();
>>>>>>> feature/ECD-2



Cypress.Commands.add('login', () => {
<<<<<<< HEAD
  cy.session([Cypress.env('user'), Cypress.env('password')], () => {
    cy.visit({
      url: process.env.DB_HOST_TESTE,
=======
  cy.session([Cypress.env('enviroment.user'), Cypress.env('enviroment.password')], () => {
    const selectedlogin = Cypress.env('enviroment').HOMOLOG_ACESS;

    cy.visit(selectedlogin.BASEURL, {
>>>>>>> feature/ECD-2
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
<<<<<<< HEAD
      .click()
    cy.url().should('contain', process.env.DB_HOST_TESTE)
  },
    {
      validate() {
        cy.request(process.env.DB_HOST_TESTE + '/lembretes').its('status').should('eq', 200)
      }
    })
})



// Cypress.Commands.add('connectToDatabase', () => {
//   const database = new Database();
//   database.connect();
// });


// Cypress.Commands.add('queryDatabase', (query, callback) => {
//   const connection = mysql.createConnection({
//     host: Cypress.env('DB_HOST'),
//     user: Cypress.env('DB_USER'),
//     password: Cypress.env('DB_PASSWORD'),
//     database: Cypress.env('DB_DATABASE')
//   });
//   connection.connect();
//   connection.query(query, (error, results) => {
//     if (error) {
//       throw new Error(`Failed to execute query: ${query}\n${error}`);
//     }
//     connection.end();
//     callback(results);
//   });
// });


// Cypress.Commands.add('disconnectFromDatabase', () => {
//   const database = new Database();
//   database.disconnect();
// });

=======
      .click();
    
    cy.url().should('contain', Cypress.env('enviroment').HOMOLOG_ACESS.BASEURL + 'lembretes');
  },
  {
    validate() {
      cy.request(Cypress.env('enviroment').HOMOLOG_ACESS.BASEURL + 'lembretes')
        .then((response) => {
          expect(response.status).to.equal(200);
        });
    }
  });
});
<<<<<<< HEAD
>>>>>>> feature/ECD-2
=======


Cypress.Commands.add('queryDB', (dbName: string, query: string): Cypress.Chainable<unknown> => {
  const params = { dbName, query }; // Criando objeto com as propriedades necessárias

  return cy.task("queryDB", params)
    .then((result: unknown) => {
      // Faça algo com o resultado da consulta
      return result;
    });
});
>>>>>>> feature/ECD-3
