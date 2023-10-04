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
/// <reference path="./cypress.d.ts" />



// import Database from './Database/database';
import { elements as el } from '../elements'
import { dadosParametros } from '../DadosParametros'



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


Cypress.Commands.add('login', (entrar: string, usuario: string, senha: string, url: string): void => {
  const ambiente = Cypress.env('AMBIENTE');
  const dadosAmbiente = Cypress.env(ambiente);

  cy.session('login', () => {
    cy.visit(dadosAmbiente.BASEURL);

    cy.getElementAndType(el.CustomCommands.login, usuario), { log: false }

    cy.getElementAndType(el.CustomCommands.senha, senha), { log: false }

    cy.getElementAndClick(entrar)

    cy.url()
      .should('contain', url);



    cy.request({
      method: 'POST',
      url: url,
      body: {
        username: dadosAmbiente.USERADMIN,
        password: dadosAmbiente.PASSWORD,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);

      Cypress.env('authToken', response.body.authToken);
      Cypress.env('userId', response.body.userId);
      Cypress.env('userPassword', response.body.userPassword);

      console.log('authToken:', Cypress.env('authToken'));
      console.log('userId:', Cypress.env('userId'));
      console.log('userPassword:', Cypress.env('userPassword'));

    });

  });
  cy.visit(dadosAmbiente.BASEURL + '/lembretes');
});



// Cypress.Commands.add('queryDB', (dbName: string, query: string) => {
//   const params: QueryParams = { dbName, query };
//   // Retorna um objeto Cypress.Chainable envolvendo o resultado da tarefa
//   return cy.task<unknown>('queryDB', params).then((result: unknown) => {
//     // Encadeie asserções ou ações adicionais usando cy.wrap()
//     return cy.wrap(result);
//   });
// });



Cypress.Commands.add('inserirArquivo', (caminhoFixture, importarImagem): void => {
  cy.fixture(caminhoFixture, 'base64').then((conteudo_arquivo) => {
    const nome = caminhoFixture.split('/').pop(); // Extract the file name from the fixture path
    const mimeType = 'image/jpeg';

    const blob = Cypress.Blob.base64StringToBlob(conteudo_arquivo, mimeType);
    const file = new File([blob], nome, { type: mimeType });

    cy.get(importarImagem).then(($input) => {
      const event = new Event('change', { bubbles: true });
      Object.defineProperty($input[0], 'files', {
        value: [file],
        writable: false,
      });
      $input[0].dispatchEvent(event);
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






Cypress.Commands.add('getElementAndClick', (elemento: string): void => {

  cy.get(elemento, { timeout: 20000 })
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
});



Cypress.Commands.add('getElementAndCheck', (elemento: string): void => {
  cy.get(elemento, { timeout: 20000 })
    .as('element')
    .then($elements => {
      cy.get('@element')
        .invoke('removeAttr', 'readonly' || 'hidden' || 'scroll' || 'auto')

      if ($elements.length > 0) {
        cy.wrap($elements.first())
          .check({ timeout: 20000, force: true });
      } else {
        cy.wrap($elements.eq(0))
          .check({ timeout: 20000, force: true });
      }
      cy.get('@element')
        .invoke('attr', 'readonly' || 'hidden' || 'scroll' || 'auto');
    });

});



Cypress.Commands.add('getElementAndType', (elemento: string, texto: string): void => {
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



Cypress.Commands.add('marcarUso', (checkboxMarcarUso: string): void => {

  cy.get(`${checkboxMarcarUso} input[type="checkbox"]:checked`, { timeout: 20000 }).then(($checkedCheckboxes) => {
    const totalChecked = $checkedCheckboxes.length;

    if (totalChecked === 0) {
      // Se nenhum checkbox estiver marcado, marque o primeiro disponível
      cy.get(`${checkboxMarcarUso} input[type="checkbox"]:not(:checked)`, { timeout: 20000 })
        .first()
        .check();

      // Pode adicionar ações adicionais aqui, se necessário
      cy.wait(200);
      cy.getElementAndClick(mensagemConfirmacaoModal);
      cy.wait(200);
      cy.getElementAndClick(mensagemSucessoModal);
    } else {
      // Se já houver algum checkbox marcado, prossiga com a lógica existente
      cy.get(`${checkboxMarcarUso} input[type="checkbox"]:checked`, { timeout: 20000 })
        .first()
        .uncheck();
      cy.getElementAndClick(containerInserirUsuario), { timeout: 20000 };
      cy.getElementAndType(select, dadosParametros.Receita.usuárioMarcarUso), { timeout: 20000 };
      cy.getElementAndClick(usuarioSelecionado)
      cy.getElementAndType(senhaReceita, dadosAmbiente.SENHA_RECEITA_USER);
      cy.getElementAndClick(aplicaDesmarcarUso);
      cy.getElementAndClick(mensagemSucessoModal);
      cy.get(`${checkboxMarcarUso} input[type="checkbox"]:not(:checked)`, { timeout: 20000 })
        .first()
        .check();

      cy.wait(200);
      cy.getElementAndClick(mensagemConfirmacaoModal);
      cy.wait(200);
      cy.getElementAndClick(mensagemSucessoModal);
    }
  });
});



