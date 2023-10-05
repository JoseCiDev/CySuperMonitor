/// <reference types="cypress" />
import { elements as el } from '../elements';
import { faker } from '@faker-js/faker';
import { ConnectionInfo } from "../support/Connections/connection";
import { connections } from "../support/Connections/connection";
import { defineConfig } from "cypress";
import { dadosParametros } from '../DadosParametros';




describe('Vincular Receitas e Orçamentos', () => {
    const ambiente = Cypress.env('AMBIENTE');
    const dadosAmbiente = Cypress.env(ambiente);


    beforeEach(function () {
        

    });



    it('Vinculando receitas e orçamentos pela tela de fluxo de pedidos.', () => {
        cy.acessarMenuAtendimentos(el.atendimentos);



        // const acessarAtendimentoEmAndamento = (element: string): void => {
        //     cy.get(element)
        //         .contains('a', 'Em andamento', { timeout: 10000 })
        //         .click({ force: true });
        // }
        // acessarAtendimentoEmAndamento(el.pedidoEmAndamento);



        const acessarFluxoDeTrabalhoAtendimento = (element: string): void => {
            cy.get(element)
                .first()
                .contains('Fluxo de trabalho')
                .click({ force: true });
            cy.url().should('contain', dadosAmbiente.BASEURL + 'atendimentos/workflow');
        }
        acessarFluxoDeTrabalhoAtendimento(el.acessarFluxoDeTrabalhoAtendimento);



        const selecionarParametroBuscaCardOrcamento = (parametroBuscaCardOrcamento: string, opcaopParametroBuscaCardOrcamento: string, opcao): void => {
            cy.getVisible(parametroBuscaCardOrcamento)
                .click();
            cy.contains(opcaopParametroBuscaCardOrcamento, opcao)
                .click();
        };
        selecionarParametroBuscaCardOrcamento(el.parametroBuscaCardOrcamento, el.opcaopParametroBuscaCardOrcamento, dadosParametros.DadosParametros.OpcaoParametroBuscaCardOrcamento.VincularReceita);



        const selecionarCardOrcamento = (element: string): void => {
            cy.getVisible(element)
                .click()
        }
        selecionarCardOrcamento(el.cardOrcamento);



        const vincularReceitaOrcamento = async (element: string, numeroReceitaCapturado: number): Promise<void> => {
            cy.getVisible(element)
                .type(numeroReceitaCapturado.toString())
                .then(() => {
                    cy.getVisible(element)
                        .should('have.value', numeroReceitaCapturado);
                });
            vincularReceitaOrcamento(el.vincularReceitaCardOrcamento, numeroReceitaCapturado);
        };

    })
})
/*

acessar atendimentos;
acessar em andamento, fluxo de trabalho;
clicar em vincular receita;
aguardar ate barra de load carregar;
clicar em card de pedido;
inserir numero receita;
selecionar autocomplete;
clicar em relacionar;
clicar em ok no aviso;
aguardar load;
clicar em ok mensagem vinculado com sucesso;
guardar valor de orçamento importado em variavel;


*/









