"use strict";
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
// import Database from './Database/database';
var elements_1 = require("../integration/elements");
Cypress.Commands.add('login', function () {
    var ambiente = Cypress.env('AMBIENTE');
    // Get the specific environment object based on the selected AMBIENTE
    var dadosAmbiente = Cypress.env(ambiente);
    // Visita a página de login
    cy.visit(dadosAmbiente.BASEURL).then(function () {
        // Realiza o login
        window.localStorage.setItem('authToken', 'authToken');
        cy.get(elements_1.ELEMENTS.usuario)
            .type(dadosAmbiente.USER, { log: false });
        cy.getVisible(elements_1.ELEMENTS.senha)
            .type(dadosAmbiente.PASSWORD, { log: false });
        cy.getVisible(elements_1.ELEMENTS.entrar)
            .contains('login')
            .click();
        cy.url().should('contain', dadosAmbiente.BASEURL + "lembretes");
    });
});
Cypress.Commands.add('queryDB', function (dbName, query) {
    var params = { dbName: dbName, query: query };
    // Retorna um objeto Cypress.Chainable envolvendo o resultado da tarefa
    return cy.task('queryDB', params).then(function (result) {
        // Encadeie asserções ou ações adicionais usando cy.wrap()
        return cy.wrap(result);
    });
});
Cypress.Commands.add('inserirArquivo', function (fixturePath, elementoBotao) {
    cy.fixture(fixturePath, 'base64').then(function (conteudo_arquivo) {
        var nome = fixturePath.split('/').pop(); // Extract the file name from the fixture path
        var mimeType = 'image/jpeg';
        var blob = Cypress.Blob.base64StringToBlob(conteudo_arquivo, mimeType);
        var file = new File([blob], nome, { type: mimeType });
        cy.get(elementoBotao).then(function ($input) {
            var event = new Event('change', { bubbles: true });
            Object.defineProperty($input[0], 'files', {
                value: [file],
                writable: false
            });
            $input[0].dispatchEvent(event);
        });
    });
});
Cypress.Commands.add('acessarMenuReceitas', function () {
    cy.getVisible(elements_1.ELEMENTS.receitas)
        .contains('Receitas')
        .and('have.class', 'nav-label')
        .click();
});
Cypress.Commands.add('acessarMenuAtendimentos', function () {
    cy.get('#side-menu > li:nth-child(8)')
        .trigger('mouseover') // Aciona o evento de mouseover no elemento pai para exibir o elemento a
        .find('a[href="/atendimentos/page/1/"]')
        .eq(0) // Seleciona o primeiro elemento <a> encontrado
        .click({ force: true }); // Clica no item "Atendimentos"
});
Cypress.Commands.add('lerArquivo', function (Path) {
    return cy.fixture(Path);
});
Cypress.Commands.add('getVisible', function (element, options) {
    var defaultOptions = { timeout: 20000 };
    var combinedOptions = __assign(__assign({}, defaultOptions), options);
    return cy.get(element, combinedOptions).should('be.visible');
});
Cypress.Commands.add("inserirData", function (dataAtual) {
    if (dataAtual === void 0) { dataAtual = new Date(); }
    // Obtém os componentes individuais da data e hora
    var ano = dataAtual.getFullYear();
    var mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    var dia = String(dataAtual.getDate()).padStart(2, '0');
    var hora = String(dataAtual.getHours()).padStart(2, '0');
    var minutos = String(dataAtual.getMinutes()).padStart(2, '0');
    var segundos = String(dataAtual.getSeconds()).padStart(2, '0');
    // Formata a data e hora no formato desejado
    var DATA_FORMATADA = ano + "-" + mes + "-" + dia;
    var HORA_FORMATADA = hora + ":" + minutos + ":" + segundos;
    // Retorna um objeto contendo a data e hora formatadas
    return cy.wrap({ DATA_FORMATADA: DATA_FORMATADA, HORA_FORMATADA: HORA_FORMATADA });
});
var receitaNumero;
Cypress.Commands.add('getReceitaNumero', function () {
    return cy.wrap(receitaNumero); // Return a Chainable<number> using cy.wrap()
});
Cypress.Commands.add('setReceitaNumero', function (numero) {
    receitaNumero = numero;
});
