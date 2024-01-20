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
import { env } from 'process';


const ambiente = Cypress.env('AMBIENTE');
const dadosAmbiente = Cypress.env(ambiente);


import '../commands/commandsLogin'
import '../commands/commandsAtendimento'
import '../commands/commandsReceita'
import '../commands/commandsConfiguracoes'



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
  btnSucessoModal,
  mensagemModal,
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

} = el.Receitas;

export const {
  campoBuscarPedido,
  buscarFilial,
  enviarBusca,
  botaoVisualizar,
  brasileiro,
  salvarNumeroChatguru,
  botaoTempoTratamento,
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


Cypress.Commands.add('inserirArquivo', (filePath, element): void => {
  cy.fixture(filePath, 'base64').then((conteudo_arquivo) => {
    const nome = filePath.split('/').pop(); // Extract the file name from the fixture path
    const mimeType = 'image/jpeg';

    const blob = Cypress.Blob.base64StringToBlob(conteudo_arquivo, mimeType);
    const file = new File([blob], nome, { type: mimeType });

    cy.get(element).then(($element) => {
      const event = new Event('change', { bubbles: true });
      Object.defineProperty($element[0], 'files', {
        value: [file],
        writable: false,
      });
      $element[0].dispatchEvent(event);
    });
  });
});




Cypress.Commands.add('lerArquivo', (nomeArquivo) => {
  const caminhoArquivo = `${dadosParametros.caminhoArquivo}${nomeArquivo}`;
  return cy.fixture(caminhoArquivo);
});



Cypress.Commands.add('getVisible', (elemento, options) => {
  const defaultOptions = { timeout: 20000 };
  const combinedOptions = { ...defaultOptions, ...options };
  return cy.get(elemento, combinedOptions)
    .should('be.visible');
});



Cypress.Commands.add('inserirData', (campoData: string, data: string): void => {
  cy.get(campoData)
    .type(data, { timeout: 1000 })
    .should('have.value', data);
});






Cypress.Commands.add('inserirDataUmDiaMenosDiaAtual', (campoData: string) => {
  const umDiaMenos = new Date(dadosParametros.dataAtual);
  umDiaMenos.setDate(umDiaMenos.getDate() - 1);
  const dataFormatadaDiaAnterior = umDiaMenos.toISOString().slice(0, 16);
  cy.inserirData(campoData, dataFormatadaDiaAnterior);
})






Cypress.Commands.add('getElementAndClick', (...elements: string[]): void => {
  elements.forEach(element => {
    cy.get(element, { timeout: 20000 })
      .as('element')
      .then($elements => {

        if ($elements.length > 0) {
          cy.wrap($elements.first())
            .click({ timeout: 20000, force: true });
        } else {
          cy.wrap($elements.eq(0))
            .click({ timeout: 20000, force: true });
        }

      });
  })
});

Cypress.Commands.add('getElementAndCheck', (element: string): void => {
  cy.wrap(null).then(() => {
    cy.get(element, { timeout: 20000 })
      .as('element')
      .each(($element) => {
        cy.wrap($element)
          .then($elements => {
            cy.get('@element')

            if ($elements.length > 0) {
              cy.wrap($elements.first())
                .check({ timeout: 20000, force: true });
            } else {
              cy.wrap($elements.eq(0))
                .check({ timeout: 20000, force: true });
            }
          });
      })
  })
});



Cypress.Commands.add('getElementAndType', (elemento: string, texto?: string): void => {
  if (typeof texto !== 'string') {
    throw new Error('O texto a ser escrito deve ser uma string.');
  }
  cy.get(elemento, { timeout: 20000 })
    .then($elements => {

      if ($elements.length > 1) {
        cy.wrap($elements.first())
          .clear()
          .type(texto, { timeout: 1000 })
      } else {
        cy.wrap($elements.eq(0))
          .clear()
          .type(texto, { timeout: 1000 })
      }

    });
});



Cypress.Commands.add('getRadioOptionByValue', (elemento: string, value): void => {
  cy.get(elemento, { timeout: 20000 })
    .should('be.visible')
    .find(`input[type="radio"][value="${value}"]`)
    .check({ force: true })
});



Cypress.Commands.add('getSelectOptionByValue', (elemento: string, value: any): void => {
  cy.get(elemento, { timeout: 20000 })
    .select(value, { force: true })
});



Cypress.Commands.add('marcarUso', (checkboxMarcarUso: string, usuarioMarcarUso: string): void => {
  cy.get(`${checkboxMarcarUso} input[type="checkbox"]`, { timeout: 20000 }).then(($checkboxes) => {
    const totalCheckboxes = $checkboxes.length;

    cy.get(`${checkboxMarcarUso} input[type="checkbox"]:checked`, { timeout: 20000 }).then(($checkedCheckboxes) => {
      const totalChecked = $checkedCheckboxes.length;

      if (totalChecked === totalCheckboxes) {
        cy.get(`${checkboxMarcarUso} input[type="checkbox"]:checked`, { timeout: 20000 })
          .first()
          .uncheck();
        cy.getElementAndClick(containerInserirUsuario);
        cy.getElementAndType(select, usuarioMarcarUso);
        cy.getElementAndClick(usuarioSelecionado)
        cy.getElementAndType(senhaReceita, dadosAmbiente.SENHA_RECEITA_USER);
        cy.getElementAndClick(aplicaDesmarcarUso);
        cy.getElementAndClick(mensagemModal);
        cy.get(`${checkboxMarcarUso} input[type="checkbox"]:not(:checked)`, { timeout: 20000 })
          .first()
          .check();
      }
      else {
        cy.get(`${checkboxMarcarUso} input[type="checkbox"]:not(:checked)`, { timeout: 20000 })
          .first()
          .check();
      };

      cy.wait(200);
      cy.getElementAndClick(btnSucessoModal);
      cy.wait(200);
      cy.getElementAndClick(mensagemModal);
    });
  });
});

Cypress.Commands.add('getElementAutocompleteTypeAndClick', (element: string, data: string | number, autocomplete: string) => {
  cy.get(element)
    .as('elementAlias')
    .type(data.toString())
    .then(() => {
      cy.contains(autocomplete, data)
        .as('autocompleteAlias')
        .click({ force: true })
    });
});

Cypress.Commands.add('waitModalAndClick', (jqueryElement: string, element: string) => {
  cy.wrap(null).then(() => {
    const $aliasModal = Cypress.$(jqueryElement)
    if (!$aliasModal.each) {
      cy.log('O teste será prosseguido, uma vez que o elemento esperado não foi exibido na tela.')

    }
    else {
      cy.get(element, { timeout: 60000 })
        .as('elementAlias')
      cy.get('@elementAlias', { timeout: 60000 })
        .invoke('removeAttr', 'readonly' || 'hidden' || 'scroll' || 'auto', { force: true })
        .click({ force: true, multiple: true, timeout: 5000 })
    }
  });
})