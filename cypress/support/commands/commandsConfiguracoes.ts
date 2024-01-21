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



import { elements as el } from '../../elements'
import { dadosParametros } from '../../DadosParametros'


const ambiente = Cypress.env('AMBIENTE');
const dadosAmbiente = Cypress.env(ambiente);


export const {
    btnSucessoModal,
    mensagemModal,
    okModalMensagem,
    btnmensagemModal,
    btnFalhaModal,

} = el.Compartilhado;

export const {
    ModalBuscaReceitas,
    filtroDataInicialBuscaReceitas,
    filtroDataFinalBuscaReceitas,
    filtroPendenciasBusca,
    botaoProcurarReceitas,
    labelProcurarReceitas,
    numeroReceita,
    containerInserirUsuario,
    select,
    usuarioSelecionado,
    senhaReceita,
    aplicaDesmarcarUso,
    abaPdfVisualizarReceitas,
    abaOriginalVisualizarReceitas,
    abaObservacoesInternasVisualizarReceitas,
    abaInformacoesFcertaVisualizarReceitas,
    reguaVisualizarReceitas,
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
    canalRecebimentoBusca,
    clusterBusca,
    receitaBusca,
    pacienteBusca,
    prescritorBusca,
    orcamentoBusca,
    ultimoModificadorBusca,
    orcamentistaBusca,
    atendenteResponsavelBusca,
    prescritorReceitas,
    pacienteReceitas,
    canalRecebimentoImportacao,
    atendenteResponsavelReceitas,
    menuImportarReceitas,
    importarImagemReceitas,
    abrirModalRegistrarReceitas,
    textoObservacaoInternaReceitas,
    urgenteReceitas,
    clienteAlertaReceitas,
    medicamentocontroladoReceitas,
    dataRecebimentoReceitas,
    barraProgressoSalvarReceita,
    salvarReceitas,
    modalSugestaoRelacaoPrescritor,
    varejoReceitas,
    dataRecebimentoGrid,
    fecharRegistrarReceitas,
    clusterReceitas,
    menuReceitasReduzido,
    checkboxMarcarUso,
    acoes,
    visualizarReceitas,


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
    adicionarRelacaoAtendenteClusterPrescritor,
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
                    return dadosParametros.clusterRelacoesPrescritorAtendenteCluster.Cluster1;
                case 'Cluster2':
                    return dadosParametros.clusterRelacoesPrescritorAtendenteCluster.Cluster2;
                case 'Cluster3':
                    return dadosParametros.clusterRelacoesPrescritorAtendenteCluster.Cluster3;
                case 'Cluster4':
                    return dadosParametros.clusterRelacoesPrescritorAtendenteCluster.Cluster4;
                case 'Cluster5':
                    return dadosParametros.clusterRelacoesPrescritorAtendenteCluster.Cluster5;
                default:
                    throw new Error('Cluster que procura não está cadastrado.');
            }
        }

        let nomeAtendenteRelacao: string;
        let nomePrescritorRelacao: string;
        const atendentes = atendenteClusterPrescritor.atendentes;

        for (const atendenteClusterPrescritor of atendentes) {
            const atendente: string = atendenteClusterPrescritor.nome;
            const cluster: string = mapClusterValue(atendenteClusterPrescritor.cluster);
            const prescritores = atendenteClusterPrescritor.prescritores;

            cy.getElementAndClick(
                menuConfiguracoes,
                subMenuClustersGrupos,
                relacoes,
                buscarFiltros
            );

            cy.getElementAndType(pesquisa, atendente);

            cy.getElementAndClick(gerenciarRelacao);

            for (const dadosPrescritor of prescritores) {
                const nomePrescritor = dadosPrescritor.nome;
                const criarRelacao = (): void => {
                    cy.getSelectOptionByValue(selecionarCluster, cluster);
                    cy.log(cluster)
                    cy.getElementAndClick(containerSelecionarPrescritor);

                    cy.get(selecionarPrescritor)
                        .type(nomePrescritor)
                        .wait(2000)
                        .type('{downarrow}{enter}', { timeout: 5000 });
                    cy.log(nomePrescritor)

                    cy.get(adicionarRelacaoAtendenteClusterPrescritor, { timeout: 5000 })
                        .click({ timeout: 5000 });
                    cy.get(containerMensagemRelacao)
                        .should('be.visible')
                        .then(($modal) => {
                            const messages = [
                                'Adicionado com sucesso!',
                            ];
                            for (const successMessage of messages) {
                                if (cluster.length < 1 && $modal.text().includes(successMessage)) {
                                    throw new Error(`Erro: Cluster ou prescritor não selecionado, mas mensagem "${successMessage}" apresentada.`);
                                }
                            }
                            if ($modal.text().includes('Não foi possível adicionar.')) {
                                cy.get(PrescritorRelacaoCriada)
                                    .invoke('text')
                                    .then((textPrescritor) => {
                                        const regex = /^([^\d-]+)/;
                                        let matchArray = textPrescritor.match(regex);
                                        nomePrescritorRelacao = matchArray[1]

                                        cy.get(atendenteRelacaoCriada)
                                            .invoke('text')
                                            .then((textAtendente) => {
                                                matchArray = textAtendente.match(regex);
                                                nomeAtendenteRelacao = matchArray[1];

                                                if (nomeAtendenteRelacao !== atendente) {
                                                    cy.getElementAndClick(okModalMensagem), { timeout: 10000 };
                                                    excluirRelacao();
                                                    cy.getElementAndClick(
                                                        relacoes,
                                                        buscarFiltros
                                                    );
                                                    cy.getElementAndType(pesquisa, atendente);
                                                    cy.getElementAndClick(gerenciarRelacao);
                                                }
                                                else {
                                                    cy.getElementAndClick(okModalMensagem), { timeout: 10000 };
                                                }
                                            })
                                    });
                            }
                            else {
                                cy.getElementAndClick(okModalMensagem), { timeout: 10000 };
                            }
                        })
                }
                criarRelacao();

                const excluirRelacao = (): void => {
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

                    cy.get(btnSucessoModal, { timeout: 1000 })
                        .click({ timeout: 1000 });

                    cy.getElementAndClick(
                        okModalMensagem,
                        relacoes,
                        buscarFiltros
                    ), { timeout: 10000 };

                    cy.getElementAndType(pesquisa, atendente);

                    cy.getElementAndClick(gerenciarRelacao);

                    criarRelacao();
                }
            }
        }
    });
    return cy.wrap({ success: 'Configuração realizado com sucesso.' });
});

