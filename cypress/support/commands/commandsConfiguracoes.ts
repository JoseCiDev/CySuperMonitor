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
    okSucessoModalMensagem

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

} = el.Configuracoes;

Cypress.Commands.add('configuraRelacaoAtendenteClusterPrescritor', () => {
    cy.lerArquivo('json/relacaoAtendenteClusterPrescritor.json').then((arquivoSelecionado: Record<string, { nome: string }[]>) => {

        const atendentes = Object.keys(arquivoSelecionado);
        
        for (const atendente of atendentes) {
            const prescritores = arquivoSelecionado[atendente];

            //acessar relacoes
            cy.getElementAndClick(menuConfiguracoes);
            cy.getElementAndClick(subMenuClustersGrupos);
            cy.getElementAndClick(relacoes);

            cy.pause();

            //filtrar resultados => todos cluster, todos perfis e buscar
            cy.getElementAndClick(containerFiltros);
            cy.getSelectOptionByValue(containerPerfil, dadosParametros.perfil.Todos);
            cy.getElementAndClick(buscarFiltros);


            cy.pause();

            //buscar atendente e clicar em gerenciar
            cy.getElementAndType(pesquisa, '')
            cy.getElementAndClick(gerenciarRelacao);


            cy.pause();

            for (const dadosPrescritor of prescritores) {
                const nomePrescritor = dadosPrescritor.nome;

                //selecionar cluster, selecionar prescritor, clicar em adicionar e clicar em ok
                cy.getSelectOptionByValue(selecionarCluster, dadosParametros.ClusterRelacoesPrescritorAtendenteCluster.Cluster3);
                cy.getElementAndClick(containerSelecionarPrescritor);
                cy.getElementAndType(selecionarPrescritor, nomePrescritor)
                    .type('{enter}');

                cy.pause();

                cy.getElementAndClick(okSucessoModalMensagem);
                //repetir processo até terminar lista de prescritores
            }

        }

    })
});