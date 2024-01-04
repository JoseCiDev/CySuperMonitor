/// <reference types="cypress" />

import { elements as el } from '../../../Elements';
import { faker } from '@faker-js/faker';
import { dadosParametros } from '../../../DadosParametros';


const ambiente = Cypress.env('AMBIENTE');
const dadosAmbiente = Cypress.env(ambiente);


export const {
    dataRecebimentoReceitas,
    okSucessoModalMensagem,
    menuReceitas,
    menuReceitasReduzido,
    menuImportarReceitas,
    abrirModalRegistrarReceitas,
    importarImagemReceitas,
    prescritorReceitas,
    parametroBuscaPaciente,
    pacienteReceitas,
    canalRecebimentoReceitas,
    opcaoTipoReceitas,
    textoObservacaoInternaReceitas,
    urgenteReceitas,
    clienteAlertaReceitas,
    medicamentocontroladoReceitas,
    checkboxMarcarUso,
    acoes,
    visualizarReceitas,
    clonarReceitas,
    excluirReceitas,
    acessarObservacoesFarmaceuticas,
    acessarDuvidasTecnicas,
    atualizarModalDuvidasTecnicas,
    mensagemConfirmacaoModal,
    salvarReceitas,
    editarReceita,
    mensagemSucessoModal,
    atendenteResponsavelReceitas,
    juntocomReceitas,
    clusterReceitas,
    menuGerenciarReceitas,
} = el.Receitas;

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
    adicionarClusterPrescritorRelacaoAtendente,
} = el.Configuracoes;



describe('Tela importação de receitas.', () => {

    beforeEach(function () {

    })


    it('Deve criar relações entre atendente selecionada, cluster e prescritor', () => {
        cy.login(dadosAmbiente.USER_ATENDENTE1, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin)
            .then((result) => {
                assert.exists(result.success, result.error)
            })
        cy.configuraRelacaoAtendenteClusterPrescritor()

    })


})




