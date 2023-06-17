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
import { ELEMENTS as el } from '../integration/sm/hkm/LoginHKM/elements';



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
    cy.url().should('contain', 'http://192.168.0.66:999/lembretes')
  },
    {
      validate() {
        cy.request('http://192.168.0.66:999/lembretes').its('status').should('eq', 200)
      }
    })
})

