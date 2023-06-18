/// <reference types="Cypress" />
import BackofficeHKM from "../integration/Sm/Hkm/BackofficeHKM"

describe('Adicionando observacoes farmacêuticas na receita', () => {

    beforeEach(function () {
        // By default Cypress will automatically
        // clear the Local Storage prior to each
        // test which ensures no todos carry over
        // between tests.
        //
        // Go out and visit our local web server
        // before each test, which serves us the
        // TodoMVC App we want to test against
        //
        // We've set our baseUrl to be http://localhost:8888
        // which is automatically prepended to cy.visit
        //
        // https://on.cypress.io/api/visit
        cy.login('user', 'password')
        

    })

    afterEach(() => {
        // In firefox, blur handlers will fire upon navigation if there is an activeElement.
        // Since todos are updated on blur after editing,
        // this is needed to blur activeElement after each test to prevent state leakage between tests.

    })
    it('Adicionando observacoes farmacêuticas na receita pela tela Gerenciamento de Receitas', () => {
        cy.visit({
            url: Cypress.env('baseUrl'+'/receita/gerenciar'),
            method: 'POST'
        })
        cy.adicionaObservacaoFarmaceutica('senha','observacao')
    })
})