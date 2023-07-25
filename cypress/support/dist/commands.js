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
            .should('be.visible')
            .type(dadosAmbiente.USER, { log: false });
        cy.get(elements_1.ELEMENTS.senha)
            .should('be.visible')
            .type(dadosAmbiente.PASSWORD, { log: false });
        cy.get(elements_1.ELEMENTS.entrar)
            .should('be.visible')
            .contains('login')
            .click();
        cy.url().should('contain', dadosAmbiente.BASEURL + "lembretes");
    });
});
Cypress.Commands.add('acessarMenuReceitas', function () {
    cy.get(elements_1.ELEMENTS.receitas)
        .should('be.visible')
        .contains('Receitas')
        .and('have.class', 'nav-label')
        .click();
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
Cypress.Commands.add('aguardarModal', function (opcao) {
    var acao = opcao.acao;
    var actions = {
        Cancel: function () {
            cy.get(elements_1.ELEMENTS.cancel_modal_mensagens, { timeout: 20000 })
                .then(function ($modal) {
                if ($modal.is(':visible')) {
                    cy.wrap($modal)
                        .should('have.class', 'btn btn-secondary pull-left')
                        .click();
                }
                else {
                    console.log('Modal not visible');
                    // Outras ações relacionadas ao modal não estando visível
                }
            });
        },
        Ok: function () {
            cy.get(elements_1.ELEMENTS.ok_modal_mensagens, { timeout: 20000 })
                .then(function ($modal) {
                if ($modal.is(':visible')) {
                    cy.wrap($modal).should('have.class', 'btn btn-primary')
                        .click();
                }
                else {
                    console.log('Modal not visible');
                    // Outras ações relacionadas ao modal não estando visível
                }
            });
        }
    };
    var acaoSelecionada = actions[acao];
    if (acaoSelecionada) {
        acaoSelecionada();
    }
    else {
        // Código para opções inválidas ou desconhecidas
        console.log('Opção inválida');
        // Outras ações relacionadas a opções inválidas
    }
});
