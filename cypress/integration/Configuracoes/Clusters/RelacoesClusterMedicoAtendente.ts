/// <reference types="cypress" />

import { elements as el } from '../../../elements';
import { faker } from '@faker-js/faker';
import { dadosParametros } from '../../../DadosParametros';


const ambiente = Cypress.env('AMBIENTE');
const dadosAmbiente = Cypress.env(ambiente);


export const {
    menuConfiguracoes,
    subMenuClustersGrupos,
    relacoes,
    containerFiltros,
    containerPerfil,
    buscarFiltros,
    pesquisa,
    gerenciarRelacao,
    selecionarCluster,
    containerSelecionarPrescritor,
    selecionarPrescritor,
    adicionarRelacaoAtendenteClusterPrescritor,
} = el.Configuracoes;



describe('Tela configuração de relações entre Atendentes, Clusters e Prescritores.', function () {

    beforeEach(function () {

    })


    it('Deve criar relações entre atendente selecionada, cluster e prescritor', function () {
        cy.login(dadosAmbiente.USER_ADMIN, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin)
            .then((result) => {
                assert.exists(result.success, result.error)
            })
        cy.configuraRelacaoAtendenteClusterPrescritor('json/relacaoAtendenteClusterPrescritorEstefania.json');
    })
})
