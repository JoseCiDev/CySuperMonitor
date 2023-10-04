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



// import Database from './Database/database';
import { elements as el } from '../../elements'
import { dadosParametros } from '../../DadosParametros'




const ambiente = Cypress.env('AMBIENTE');
const dadosAmbiente = Cypress.env(ambiente);


export const {
  dataRecebimentoReceitas,
  okSucessoReceitaImportadaModal,
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
  containerInserirUsuario,
  select,
  usuarioSelecionado,
  senhaReceita,
  aplicaDesmarcarUso,


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
  statusPagamento,
  enderecoEnvioSelecionado,
  enderecoEnvio,
  observacaoExpedicao,
  menuAtendimentos,
  atendimentosEmAndamento,
  mostrarTodos,
  juntocom,
  observacaoGeral,
  PossuiReceita,
  possuiFormulaEspecial,
  preVisualizarPedido,
  fecharPreVisualizarPedido,
  confirmarPedido,
  campoFormaEnvio,
  campoprometidoPara,
  campoAromaSache,
  campoAromaCapsula,
  dispararMensagemChatguru,
  campoVincularReceita,
  relacionarReceitaPedido,
  botaoDesvincularReceitaTelaAtendimentoAndamento,

} = el.Atendimentos;


Cypress.Commands.add('acessarAtendimentosEmAndamento', (): void => {
  cy.getVisible(menuAtendimentos)
    .trigger('mouseover')
    .click();

  cy.get(atendimentosEmAndamento)
    .click({ force: true });
});


Cypress.Commands.add('visualizarPedido', (botaoVisualizar: string): void => {
  cy.lerArquivo('orcamentoFilial.json').then((orcamentoFilial) => {
    // Assuming orcamentoFilial is an array of objects with properties numeroOrcamento and numeroFilial

    // Helper function to search for the budget and return a boolean indicating success
    const buscarPedido = (pedido: number, filial: number) => {
      cy.get(campoBuscarPedido, { timeout: 20000 })
        .clear()
        .type(pedido.toString())
        .should('have.value', pedido);

      cy.getVisible(buscarFilial, { timeout: 5000 })
        .clear()
        .type(filial.toString())
        .should('have.value', filial);

      cy.getElementAndClick(mostrarTodos);
      cy.getElementAndClick(enviarBusca);

      return cy.get(botaoVisualizar)
        .first()

        .click();
    };

    // Iterate through the array of orcamentoFilial objects
    let pedidoEncontrado = false;
    for (const orcamento of orcamentoFilial) {
      const pedido = orcamento.numeroOrcamento;
      const filial = orcamento.numeroFilial;

      // Use the buscarPedido function to search for the current budget
      if (buscarPedido(pedido, filial)) {
        // If the budget is found, set the flag to true and break out of the loop
        pedidoEncontrado = true;
        break;
      }
    }

    // If no budget is found, log a message
    if (!pedidoEncontrado) {
      cy.log('Nenhum orçamento encontrado.');
    }
  });
});




Cypress.Commands.add('inserirTempoTratamento', (tempoTratamento: number) => {
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
  cy.getElementAndClick(confirmarPedido), { timeout: 20000 };

});


Cypress.Commands.add('vincularReceitaPedido', (botaoVincular: string, numeroReceita: number): void => {
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



Cypress.Commands.add('desvincularReceitaPedido', (botaoDesvincular: string) => {
  cy.getElementAndClick(botaoDesvincular);
  cy.getElementAndClick(mensagemConfirmacaoModal)
    .wait(2000);
  cy.getElementAndClick(mensagemSucessoModal);
})
