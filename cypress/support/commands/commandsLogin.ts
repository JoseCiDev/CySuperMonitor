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
import { ValidationResult, dadosParametros } from '../../DadosParametros'
import { env } from 'process';


const ambiente = Cypress.env('AMBIENTE');
const dadosAmbiente = Cypress.env(ambiente);


import './commandsAtendimento'
import './commandsReceita'


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


Cypress.Commands.add('login', (usuario: string, senha: string, elementError: string) => {

  cy.log('Iniciando login...');
  cy.visit(dadosAmbiente.BASE_URL);

  cy.get(el.Login.usuario, { timeout: 10000 })
    .each(($input) => {
      cy.wrap($input)
        .type(usuario)
        .then(() => {
          const $userValue = String($input.val());
          const $elementError = Cypress.$(elementError);

          if ($userValue.length < 1 && !$elementError.is(':visible')) {
            throw new Error('Usuário não foi inserido, porém não é apresentado mensagem ao usuário.');
          };

          if (!$userValue || $userValue.length === 0 && !$elementError.is(':visible')) {
            throw new Error('Há digitos que não foram preenchidos, porém não é apresentado mensagem ao usuário.');
          };
        });
    });

  cy.get(el.Login.senha, { timeout: 10000 })
    .each(($input) => {
      cy.wrap($input)
        .type(senha)
        .then(() => {
          const passwordValue = String($input.val());
          const $elementError = Cypress.$(elementError);

          if (senha.length < 1 && !$elementError.is(':visible')) {
            throw new Error('Senha não foi inserida, porém não é apresentado mensagem ao usuário.');
          };

          if (!passwordValue || passwordValue.length === 0 && !$elementError.is(':visible')) {
            throw new Error('Alguns dígitos não foram preenchidos, porém não é apresentada mensagem de erro ao usuário.');
          };

          cy.getElementAndClick(el.Login.entrar);

          cy.get(elementError)
            .invoke('text')

            .then((text) => {
              if (text.includes('Usuário ou senha inválidos')) {
                throw new Error('Usuário ou senha incorretos. Tente novamente.');
              }
            });
        });

      const $elementErrorUsuario = Cypress.$(el.Login.usuario)
        .prop('prop', 'validationMessage')
        .prop((text) => {
          expect(text).to.contain('Preencha este campo.');
        });
      const $elementErrorSenha = Cypress.$(el.Login.senha)
        .prop('prop', 'validationMessage')
        .prop((text) => {
          expect(text).to.contain('Preencha este campo.');
        });
      if ($elementErrorUsuario) {
        throw new Error('Usuário ou senha incorretos. Tente novamente.');
      };
      if ($elementErrorSenha) {
        throw new Error('Campo senha não está preenchido.');
      };

    });
  return cy.wrap({ success: 'Login realizado com sucesso.' });
});