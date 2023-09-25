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
import { ELEMENTS as el } from '../elements'
import * as mysql from 'mysql';
import { faker } from '@faker-js/faker';
import * as dotenv from 'dotenv';
import { dadosParametros } from '../DadosParametros'
import { defineConfig } from "cypress";



Cypress.Commands.add('login', () => {
  const ambiente = Cypress.env('AMBIENTE');

  // Get the specific environment object based on the selected AMBIENTE
  const dadosAmbiente = Cypress.env(ambiente);

  // Visita a página de login
  cy.visit(dadosAmbiente.BASEURL).then(() => {
    // Realiza o login
    window.localStorage.setItem('authToken', 'authToken');
    cy.get(el.usuario)
      .type(dadosAmbiente.USER, { log: false });
    cy.getVisible(el.senha)
      .type(dadosAmbiente.PASSWORD, { log: false });

    cy.getVisible(el.entrar)
      .contains('login')
      .click();

    cy.url().should('contain', `${dadosAmbiente.BASEURL}lembretes`);
  });
});



// Cypress.Commands.add('queryDB', (dbName: string, query: string) => {
//   const params: QueryParams = { dbName, query };
//   // Retorna um objeto Cypress.Chainable envolvendo o resultado da tarefa
//   return cy.task<unknown>('queryDB', params).then((result: unknown) => {
//     // Encadeie asserções ou ações adicionais usando cy.wrap()
//     return cy.wrap(result);
//   });
// });



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
  cy.getVisible(el.receitas)
    .contains('Receitas')
    .and('have.class', 'nav-label')
    .click();
});



Cypress.Commands.add('acessarMenuAtendimentos', () => {
  cy.get('#side-menu > li:nth-child(8)')
    .trigger('mouseover') // Aciona o evento de mouseover no elemento pai para exibir o elemento a
    .find('a[href="/atendimentos/page/1/"]')
    .eq(0) // Seleciona o primeiro elemento <a> encontrado
    .click({ force: true }); // Clica no item "Atendimentos"
});



Cypress.Commands.add('lerArquivo', (nomeArquivo) => {
  // Construa o caminho completo para o arquivo na pasta fixtures
  const caminhoArquivo = `${dadosParametros.DadosParametros.caminhoArquivo}${nomeArquivo}`;

  // Faça a leitura do arquivo
  return cy.fixture(caminhoArquivo);
});




Cypress.Commands.add('getVisible', (element, options) => {
  const defaultOptions = { timeout: 20000 };
  const combinedOptions = { ...defaultOptions, ...options };
  return cy.get(element, combinedOptions).should('be.visible');
});



Cypress.Commands.add("inserirData", (dataAtual: Date = new Date()) => {
  // Obtém os componentes individuais da data e hora
  const ano: number = dataAtual.getFullYear();
  const mes: string = String(dataAtual.getMonth() + 1).padStart(2, '0');
  const dia: string = String(dataAtual.getDate()).padStart(2, '0');
  const hora: string = String(dataAtual.getHours()).padStart(2, '0');
  const minutos: string = String(dataAtual.getMinutes()).padStart(2, '0');
  const segundos: string = String(dataAtual.getSeconds()).padStart(2, '0');

  // Formata a data e hora no formato desejado
  const DATA_FORMATADA: string = `${ano}-${mes}-${dia}`;
  const HORA_FORMATADA: string = `${hora}:${minutos}:${segundos}`;

  // Retorna um objeto contendo a data e hora formatadas
  return cy.wrap({ DATA_FORMATADA, HORA_FORMATADA })
});



Cypress.Commands.add('getReceitaNumero', () => {
  return cy.wrap(dadosParametros.DadosParametros.Receita.numeroReceita); // Return a Chainable<number> using cy.wrap()
});



Cypress.Commands.add('setReceitaNumero', (numero) => {
  dadosParametros.DadosParametros.Receita.numeroReceita = numero;
});