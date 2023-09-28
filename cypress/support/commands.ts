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
  ModalBuscaReceita,
  filtroDataInicialBuscaReceita,
  filtroDataFinalBuscaReceita,
  filtroPendenciasBuscaReceita,
  botaoProcurar,
  labelProcurarReceita,
  numeroReceita,
  containerInserirUsuario,
  selectUsuario,
  usuarioSelecionado,
  senhaReceita,
  aplicaDesmarcarUso,
  mensagemAcaoRealizadaSucesso,
  mensagemConfirmacaoModal,
  mensagemSucessoMarcadoUso,
  abaPdfVisualizarReceita,
  abaOriginalVisualizarReceita,
  abaObservacoesInternasVisualizarReceita,
  abaInformacoesFcertaVisualizarReceita,
  exibirReguaVisualizarReceita,
  fecharVisualizarReceita,
  clonarReceita,
  modalObservacoesClonar,
  clonarObservacoesFarmaceuticas,
  menuReceitas,
  excluirReceita,

} = el.Receitas;


Cypress.Commands.add('login', (entrar: string, usuario: string, senha: string, url: string): void => {
  const ambiente = Cypress.env('AMBIENTE');
  const dadosAmbiente = Cypress.env(ambiente);

  cy.session('login', () => {

    cy.visit(dadosAmbiente.BASEURL);

    cy.getVisible(el.CustomCommands.login)
      .type(usuario, { log: false });

    cy.getVisible(el.CustomCommands.senha)
      .type(senha, { log: false });

    cy.getVisible(el.CustomCommands.entrar)
      .contains('login')
      .click();

    cy.url()
      .should('contain', url);

    cy.request({
      method: 'POST',
      url: url,
      body: {
        username: dadosAmbiente.USER,
        password: dadosAmbiente.PASSWORD,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);

      // Use Cypress.env para armazenar os dados na sessão do Cypress
      Cypress.env('authToken', response.body.authToken);
      Cypress.env('userId', response.body.userId);
      Cypress.env('userPassword', response.body.userPassword);

      // Use o console.log para verificar se os dados foram armazenados corretamente
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



Cypress.Commands.add('acessarMenuReceitas', (receitas): void => {
  cy.getVisible(receitas)
    .contains('Receitas')
    .and('have.class', 'nav-label')
    .click();
});



Cypress.Commands.add('acessarMenuAtendimentos', (atendimentos): void => {
  cy.getVisible(atendimentos)
    .trigger('mouseover')
    .find(dadosParametros.Url.atendimentos)
    .eq(0)
    .click({ force: true });
});



Cypress.Commands.add('lerArquivo', (nomeArquivo) => {
  const caminhoArquivo = `${dadosParametros.CaminhoArquivo}${nomeArquivo}`;
  return cy.fixture(caminhoArquivo);
});



Cypress.Commands.add('getVisible', (elemento, options) => {
  const defaultOptions = { timeout: 20000 };
  const combinedOptions = { ...defaultOptions, ...options };
  return cy.get(elemento, combinedOptions)
    .should('be.visible');
});



Cypress.Commands.add('getReceitaNumero', (numeroReceita): void => {
  dadosParametros.Receita.numeroReceita = numeroReceita;
});



Cypress.Commands.add('setReceitaNumero', (numeroReceita): void => {
  dadosParametros.Receita.numeroReceita = numeroReceita;
});



Cypress.Commands.add('inserirData', (campoData: string, dataAtual?: string): void => {
  cy.getVisible(campoData)
    .type(dataAtual, { timeout: 1000 })
    .should('have.value', dataAtual);
});



Cypress.Commands.add('buscarReceita', (dataInicial: string, dataFinal: string): void => {
  const abrirModalBuscaReceita = (modalBuscaReceita: string): void => {
    cy.getVisible(modalBuscaReceita, { timeout: 10000 })
      .click({ force: true })
      .should('have.id', 'centerHeadFilter')
  };



  const selecionarFiltroPendencias = (filtroPendencias: string, opcao): void => {
    cy.getVisible(filtroPendencias, { timeout: 5000 })
      .select(opcao)
      .should('have.value', opcao)
      .find('option:selected')
      .should('be.selected');
  };



  const procurarReceita = (botaoProcurar: string, labelProcurarReceita: string): void => {
    cy.get(botaoProcurar)
      .contains(labelProcurarReceita)
      .click()
  };



  const capturarNumeroReceita = (numeroReceita: string): Cypress.Chainable<string> => {
    return cy.getVisible(numeroReceita)
      .eq(0)
      .invoke('text')
      .then((texto) => {
        const numeroReceitaMatch = texto.match(/\d+/);

        if (numeroReceitaMatch) {
          const numeroReceita = parseInt(numeroReceitaMatch[0], 10);
          cy.wrap(numeroReceita)
            .as('numeroReceita');
          cy.setReceitaNumero(numeroReceita);
          dadosParametros.Receita.numeroReceita = numeroReceita;
          cy.log(`Número da Receita Capturado: ${dadosParametros.Receita.numeroReceita}`);
        } else {
          throw new Error(`Valor capturado não contém números válidos: ${texto}`);
        }

      });
  };



  abrirModalBuscaReceita(ModalBuscaReceita);
  cy.wait(2000);

  cy.inserirData(filtroDataInicialBuscaReceita, dataInicial);

  cy.inserirData(filtroDataFinalBuscaReceita, dataFinal);

  selecionarFiltroPendencias(filtroPendenciasBuscaReceita, dadosParametros.FiltroPendentes.Pendentes);

  procurarReceita(botaoProcurar, labelProcurarReceita);

  capturarNumeroReceita(numeroReceita);
});



Cypress.Commands.add('getElementAndClick', (elemento: string): void => {

  cy.get(elemento, { timeout: 10000 })
    .as('element')
    .then($elements => {

      if ($elements.length > 0) {
        cy.wrap($elements.first())
          .click({ timeout: 10000, force: true });
      } else {
        cy.wrap($elements.eq(0))
          .click({ timeout: 10000, force: true });
      }

    });
});



Cypress.Commands.add('getElementAndCheck', (elemento: string): void => {
  cy.get(elemento, { timeout: 10000 })
    .as('element')
    .then($elements => {
      cy.get('@element')
        .invoke('removeAttr', 'readonly' || 'hidden' || 'scroll' || 'auto')

      if ($elements.length > 0) {
        cy.wrap($elements.first())
          .check({ timeout: 10000, force: true });
      } else {
        cy.wrap($elements.eq(0))
          .check({ timeout: 10000, force: true });
      }
      cy.get('@element')
        .invoke('attr', 'readonly' || 'hidden' || 'scroll' || 'auto');
    });

});



Cypress.Commands.add('getElementAndType', (elemento: string, texto?: string): void => {
  if (typeof texto !== 'string') {
    throw new Error('O texto a ser escrito deve ser uma string.');
  }
  cy.get(elemento, { timeout: 10000 })
    .should('be.visible')
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
  cy.get(elemento, { timeout: 10000 })
    .should('be.visible')
    .find(`input[type="radio"][value="${value}"]`)
    .check({ force: true })
});



Cypress.Commands.add('getSelectOptionByValue', (elemento: string, value): void => {
  cy.get(elemento, { timeout: 10000 })
    .should('be.visible')
    .select(value, { force: true })
});



Cypress.Commands.add('marcarUso', (checkboxMarcarUso: string): void => {
  // Encontre todos os checkboxes dentro do elemento especificado
  cy.get(`${checkboxMarcarUso} input[type="checkbox"]`, { timeout: 10000 }).then(($checkboxes) => {
    const totalCheckboxes = $checkboxes.length;

    cy.get(`${checkboxMarcarUso} input[type="checkbox"]:checked`, { timeout: 10000 }).then(($checkedCheckboxes) => {
      const totalChecked = $checkedCheckboxes.length;

      if (totalChecked === totalCheckboxes) {
        cy.get(`${checkboxMarcarUso} input[type="checkbox"]:checked`, { timeout: 10000 })
          .first()
          .uncheck();
        cy.getElementAndClick(containerInserirUsuario);
        cy.getElementAndType(selectUsuario, 'adm');
        cy.getElementAndClick(usuarioSelecionado)
        cy.getElementAndType(senhaReceita, dadosAmbiente.SENHA_RECEITA_USER);
        cy.getElementAndClick(aplicaDesmarcarUso);
        cy.getElementAndClick(mensagemAcaoRealizadaSucesso);
        cy.get(`${checkboxMarcarUso} input[type="checkbox"]:not(:checked)`, { timeout: 10000 })
          .first()
          .check();
      }

      else {
        cy.get(`${checkboxMarcarUso} input[type="checkbox"]:not(:checked)`, { timeout: 10000 })
          .first()
          .check();
      };

      cy.wait(200);
      cy.getElementAndClick(mensagemConfirmacaoModal);
      cy.wait(200);
      cy.getElementAndClick(mensagemSucessoMarcadoUso);
    });
  });
});



Cypress.Commands.add('visualizarReceita', (abrirModalvisualizarReceita: string,): void => {
  cy.getElementAndClick(abrirModalvisualizarReceita)

  cy.getElementAndClick(abaPdfVisualizarReceita)

  cy.getElementAndClick(abaOriginalVisualizarReceita)

  cy.getElementAndClick(abaObservacoesInternasVisualizarReceita)

  cy.getElementAndClick(abaInformacoesFcertaVisualizarReceita)

  cy.getElementAndClick(exibirReguaVisualizarReceita);

  cy.getElementAndClick(exibirReguaVisualizarReceita);

  cy.getElementAndClick(fecharVisualizarReceita)
})



Cypress.Commands.add('clonarReceita', (clonarReceita: string): void => {
  cy.getElementAndClick(clonarReceita);
  cy.wait(1000);
  cy.then(() => {
    cy.get(modalObservacoesClonar, { timeout: 10000 }).then(($elemento) => {

      if (!$elemento.is(':visible')) {
        cy.getElementAndClick(mensagemConfirmacaoModal);
        cy.wait(500);
      }
      else {
        if (dadosParametros.Receita.clonarObservacaoFarmaceutica) {
          cy.getElementAndClick(mensagemConfirmacaoModal);
          cy.wait(500);
        } else if (!dadosParametros.Receita.clonarObservacaoFarmaceutica) {
          cy.get(clonarObservacoesFarmaceuticas, { timeout: 10000 })
            .uncheck();
          cy.getElementAndClick(mensagemConfirmacaoModal);
          cy.wait(500);
        }

      }
      cy.getElementAndClick(mensagemConfirmacaoModal)
    });
  });
});

Cypress.Commands.add('excluirReceita', (excluir: string): void => {
  cy.getElementAndClick(excluir);
  cy.wait(200);
  cy.getElementAndClick(mensagemConfirmacaoModal);
  cy.wait(200);
  cy.getElementAndClick(mensagemAcaoRealizadaSucesso);
})








/*
marcar uso CC**
visualizar receita CC**
  pdf
    download
  original
    download todas imagens
  observacoes internas
  informacoes formula certa
  exibir regua
  esconder regua
  fechar

clonar receita CC
  clonar observacao boolean if botao de clonar presente clonar observacao true senao false [id="clonar-observacoes"]
  (botao confirmacao clonagem)
  (botao sucesso receita clonada)
  1203

Excluir CC


  editar receita CC
observacoes farmaceuticas CC
duvidas tecnicas CC

*/