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
/// <reference path="../cypress.d.ts" />



import { elements as el } from '../../Elements'
import { dadosParametros } from '../../DadosParametros'


const ambiente = Cypress.env('AMBIENTE');
const dadosAmbiente = Cypress.env(ambiente);



export const {
    ModalBuscaReceitas,
    filtroDataInicialBuscaReceitas,
    filtroDataFinalBuscaReceitas,
    filtroPendenciasBusca,
    botaoProcurarReceitas,
    labelProcurarReceitas,
    numeroReceitas,
    containerInserirUsuario,
    select,
    usuarioSelecionado,
    senhaReceita,
    aplicaDesmarcarUso,
    mensagemConfirmacaoModal,
    mensagemSucessoModal,
    abaPdfVisualizarReceitas,
    abaOriginalVisualizarReceitas,
    abaObservacoesInternasVisualizarReceitas,
    abaInformacoesFcertaVisualizarReceitas,
    exibirReguaVisualizarReceitas,
    fecharVisualizarReceitas,
    clonarReceitas,
    modalObservacoesClonar,
    clonarObservacoesFarmaceuticas,
    menuReceitas,
    excluirReceitas,
    abaAdicionarObservacoesFarmaceuticas,
    senhaObservacoesFarmaceuticas,
    textoObservacoesFarmaceuticas,
    fecharModalObservacoesFarmaceuticas,
    abaExcluirObservacoesFarmaceuticas,
    excluirObservacoesFarmaceuticas,
    containerCategoriaDuvidaTecnicas,
    textoDuvidasTecnicas,
    containerColaboradores,
    responsavelRespostas,
    enviarDuvidasTecnicas,
    fecharModalDuvidasTecnicas,
    acessarDuvidasTecnicas,
    containerResponsavelRespostaDuvidasTecnicas,
    ResponsavelRespostaDuvidasTecnicas,
    responsavelAtualRespostaDuvidasTecnicas,
    marcarDuvidasTecnicaResolvidas,
    excluirDuvidasTecnicas,
    statusRespostaDuvidasTecnicas,
    textoRespostaDuvidasTecnicas,
    enviarRespostaDuvidasTecnicas,
    okModalMensagem

} = el.Receitas;

export const {
    campoBuscarPedido,
    buscarFilial,
    enviarBusca,
    botaoVisualizar,
    brasileiro,
    salvarNumeroChatguru,
    botaoTempoTratamento,
    modalMensagemChatguru,
    tempoTratamentoPadrao,
    cabecalhoModalTempoTratamento,
    salvarTempoTratamento,
    modalConfirmacaoPedido,
    modalMensagemPedido,
    orcamentista,
    containerFormaPagamento,
    inserirTempoRepeticao,
    orcamentoEscolhido,
    monitoramentoAtendimento,
    salvarDadosConfirmacaoPedido,
    canalConfirmacaoPedido,
    enviarEmailRastreamento,
    naoMostrarPedidoInclusao,
    naoMostrarPedidoCaixa,
    observacaoCaixaBalcao,
    notaDetalhada,
    campoStatusPagamento,
    enderecoEnvioSelecionado,
    enderecoEnvio,
    observacaoExpedicao,
    menuAtendimentos,
    atendimentosEmAndamento,
    mostrarTodos,
    juntocomconfirmacaoPedido,
    observacaoGeral,
    PossuiReceita,
    possuiFormulaEspecial,
    preVisualizarPedido,
    fecharPreVisualizarPedido,
    enviarconfirmarPedido,
    campoFormaEnvio,
    campoprometidoPara,
    campoAromaSache,
    campoAromaCapsula,
    dispararMensagemChatguru,
    campoVincularReceita,
    relacionarReceitaPedido,
    botaoDesvincularReceitaTelaAtendimentoAndamento,
    mostrarPedidosEncerrados,
    reabrirPedido,
    confirmaReabrirPedido,
    containerPedidos,

} = el.Atendimentos;

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
    containerMensagemRelacao,
    atendenteRelacaoCriada,
    PrescritorRelacaoCriada,
    removerRelacaoSelecionada,
    pesquisaPrescritorGerenciarRelacao,
    buscaPrescritorGerenciarRelacao,
    selecionarPrescritorEncontrado,

} = el.Configuracoes;

Cypress.Commands.add('configuraRelacaoAtendenteClusterPrescritor', (nomeArquivo: string) => {
    cy.lerArquivo(nomeArquivo).then((atendenteClusterPrescritor: { atendentes: { nome: string; cluster: string; prescritores: { nome: string }[] }[] }) => {


        function mapClusterValue(clusterName: string): string {
            switch (clusterName) {
                case 'Cluster1':
                    return dadosParametros.ClusterRelacoesPrescritorAtendenteCluster.Cluster1;
                case 'Cluster2':
                    return dadosParametros.ClusterRelacoesPrescritorAtendenteCluster.Cluster2;
                case 'Cluster3':
                    return dadosParametros.ClusterRelacoesPrescritorAtendenteCluster.Cluster3;
                case 'Cluster4':
                    return dadosParametros.ClusterRelacoesPrescritorAtendenteCluster.Cluster4;
                case 'Cluster5':
                    return dadosParametros.ClusterRelacoesPrescritorAtendenteCluster.Cluster5;
                default:
                    return '';
            }
        }

        let nomeAtendenteRelacao;
        let nomePrescritorRelacao;
        const atendentes = atendenteClusterPrescritor.atendentes;

        for (const atendenteClusterPrescritor of atendentes) {
            const atendente = atendenteClusterPrescritor.nome;
            const cluster = mapClusterValue(atendenteClusterPrescritor.cluster);
            const prescritores = atendenteClusterPrescritor.prescritores;
            
            cy.getElementAndClick(menuConfiguracoes, subMenuClustersGrupos);

            for (const dadosPrescritor of prescritores) {
                const nomePrescritor = dadosPrescritor.nome;

                const criarRelacao = () => {
                    cy.getElementAndClick(relacoes);
                    cy.getElementAndClick(buscarFiltros);
                    cy.getElementAndType(pesquisa, atendente);
                    cy.getElementAndClick(gerenciarRelacao);

                    cy.getSelectOptionByValue(selecionarCluster, cluster);
                    cy.getElementAndClick(containerSelecionarPrescritor);
                    cy.get(selecionarPrescritor)
                        .type(nomePrescritor)
                        .wait(2000)
                        .type('{downarrow}{enter}');
                    cy.get(adicionarClusterPrescritorRelacaoAtendente, { timeout: 5000 })
                        .click();
                    // cy.pause();
                    cy.wait(2000);
                    cy.get(containerMensagemRelacao).should('be.visible').then(($modal) => {
                        if ($modal.text().includes('Não foi possível adicionar.')) {
                            cy.get(PrescritorRelacaoCriada).invoke('text').then((textPrescritor) => {
                                const regex = /^([^\d-]+)/;
                                let matchArray = textPrescritor.match(regex);
                                nomePrescritorRelacao = matchArray[1]

                                cy.get(atendenteRelacaoCriada).invoke('text').then((textAtendente) => {
                                    matchArray = textAtendente.match(regex);
                                    nomeAtendenteRelacao = matchArray[1];

                                    if (nomeAtendenteRelacao !== atendente) {

                                        excluirRelacao();
                                    }
                                })
                            });
                        }
                    })
                    cy.getElementAndClick(okModalMensagem);
                }
                criarRelacao();

                const excluirRelacao = () => {

                    cy.getElementAndClick(relacoes);

                    cy.get(pesquisa)
                        .type(nomeAtendenteRelacao);
                    cy.getElementAndClick(gerenciarRelacao);

                    cy.get(pesquisaPrescritorGerenciarRelacao, { timeout: 1000 })
                        .type(nomePrescritorRelacao.trim(), { timeout: 1000 });

                    cy.get(buscaPrescritorGerenciarRelacao, { timeout: 1000 })
                        .click({ timeout: 1000 });

                    cy.get(selecionarPrescritorEncontrado, { timeout: 1000 })
                        .check({ timeout: 1000 });

                    cy.get(removerRelacaoSelecionada, { timeout: 1000 })
                        .click({ timeout: 1000 });

                    cy.get(mensagemConfirmacaoModal, { timeout: 1000 })
                        .click({ timeout: 1000 });

                    // criarRelacao();
                }
            }
        }
    });
});