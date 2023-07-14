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
  cy.visit(ambiente_selecionado.BASEURL, {
    method: 'GET'
  });

  cy.get(el.usuario)
    .should('be.visible')
    .type(ambiente_selecionado.USER, { log: false });

  cy.get(el.senha)
    .should('be.visible')
    .type(ambiente_selecionado.PASSWORD, { log: false });

  cy.get(el.btlogin)
    .should('be.visible')
    .contains('login')
    .click()
  cy.url().should('contain', ambiente_selecionado.BASEURL + 'lembretes')
})

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


Cypress.Commands.add('criarImagemFake', (nome: string, tamanho: number): void | string => {

  const caminho_arquivo = `fixtures/${nome}.jpeg`;
  const BYTES_CODIFICADOS_EM_CARACTERES = 3 / 4

  // Gerar uma imagem base64 fictícia usando a biblioteca faker
  const dados_imagem_aleatoria = faker.image.url();
  const dados_base64 = Buffer.from(dados_imagem_aleatoria, 'base64url');

  // Calcular o tamanho atual da imagem em bytes
  const tamanho_atual = Math.ceil(dados_base64.length * BYTES_CODIFICADOS_EM_CARACTERES);

  if (tamanho_atual < tamanho) {
    // Preencher o arquivo com conteúdo fictício até atingir o tamanho desejado
    const tamanho_restante = tamanho - tamanho_atual;
    const preencher_dados = faker.random.alphaNumeric(tamanho_restante);
    const arquivo_base64_prenchido = dados_base64 + preencher_dados;

    // Converter a imagem base64 em um Blob
    const blob = Cypress.Blob.base64StringToBlob(arquivo_base64_prenchido, 'image/jpeg');

    // Escrever o Blob em um arquivo usando o comando do Cypress
    cy.writeFile(caminho_arquivo, blob, 'binary');
  } else {
    // Converter a imagem base64 em um Blob
    const blob = Cypress.Blob.base64StringToBlob(dados_base64.toString('base64url'), 'image/jpeg');

    // Escrever o Blob em um arquivo usando o comando do Cypress
    cy.writeFile(caminho_arquivo, blob, 'binary');
  }

  return '';
});