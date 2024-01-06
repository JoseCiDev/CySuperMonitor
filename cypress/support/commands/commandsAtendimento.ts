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
import { env } from 'process';



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

  
  
  Cypress.Commands.add('inserirTempoTratamento', (tempoTratamento: string) => {
    cy.getElementAndClick(botaoTempoTratamento);
    cy.wait(2000);
    cy.getElementAndType(tempoTratamentoPadrao, tempoTratamento.toString());
    cy.getElementAndClick(cabecalhoModalTempoTratamento)
    cy.getElementAndClick(salvarTempoTratamento);
    cy.getVisible(modalConfirmacaoPedido)
  })
  
  
  Cypress.Commands.add('confirmarPedido', (
    formaPagamentoSelecionada,
    tempoRepeticao: number,
    textoObservacaoCaixaBalcao: string,
    statusPagamento: string,
    textoObservacaoExpedicao: string,
    formaEnvio: string,
    prometidoPara: string,
    aromaSache: string,
    aromaCapsula: string,
    textoObservacaoGeral: string,
  ): void => {
  
    cy.getElementAndClick(modalConfirmacaoPedido), { timeout: 20000 };
  
    cy.getSelectOptionByValue(containerFormaPagamento, formaPagamentoSelecionada);
    cy.getElementAndCheck(orcamentoEscolhido);
    cy.getElementAndType(inserirTempoRepeticao, tempoRepeticao.toString());
    // cy.getElementAndCheck(monitoramentoAtendimento);
    cy.getElementAndClick(salvarDadosConfirmacaoPedido), { timeout: 20000 };
  
    cy.getElementAndType(observacaoCaixaBalcao, textoObservacaoCaixaBalcao), { timeout: 20000 };
    cy.getElementAndCheck(notaDetalhada);
    cy.getElementAndCheck(statusPagamento);
    cy.getElementAndClick(enderecoEnvio);
    cy.getElementAndType(observacaoExpedicao, textoObservacaoExpedicao)
    cy.getSelectOptionByValue(campoFormaEnvio, formaEnvio), { timeout: 20000 }
  
    // cy.getElementAndType(juntocom, juntocomPedido);
    //   .wait(500)
    //   .type('{downarrow}{enter}')
    cy.getElementAndType(campoprometidoPara, prometidoPara)
      .type('{enter}')
      .type('{enter}');
    cy.getSelectOptionByValue(campoAromaSache, aromaSache);
    cy.getSelectOptionByValue(campoAromaCapsula, aromaCapsula);
    cy.getElementAndType(observacaoGeral, textoObservacaoGeral);
    cy.getElementAndCheck(PossuiReceita);
    cy.getElementAndCheck(possuiFormulaEspecial), { timeout: 20000 };
    cy.getElementAndCheck(dispararMensagemChatguru), { timeout: 20000 };
  
  
    cy.getElementAndClick(preVisualizarPedido), { timeout: 20000 };
    cy.getElementAndClick(fecharPreVisualizarPedido), { timeout: 20000 };
    cy.getElementAndClick(enviarconfirmarPedido), { timeout: 20000 };
  
  });
  
  
  Cypress.Commands.add('vincularPedidoReceita', (botaoVincular: string, numeroReceita: number): void => {
    cy.getElementAndClick(botaoVincular);
    cy.get(campoVincularReceita, { timeout: 20000 })
      .type(numeroReceita.toString(), { timeout: 20000 })
      .wait(2000)
      .type('{downarrow}{enter}', { timeout: 20000 });
    cy.getElementAndClick(relacionarReceitaPedido);
    cy.getElementAndClick(mensagemConfirmacaoModal)
      .wait(2000);
    cy.getElementAndClick(mensagemSucessoModal);
  })
  
  
  
  Cypress.Commands.add('desvincularPedidoReceita', (botaoDesvincular: string) => {
    cy.getElementAndClick(botaoDesvincular);
    cy.getElementAndClick(mensagemConfirmacaoModal)
      .wait(2000);
    cy.getElementAndClick(mensagemSucessoModal);
  })
  
  
  
  Cypress.Commands.add('alterarUsuariosPedido', (orcamentista: string, atendente: string) => {
  
  })