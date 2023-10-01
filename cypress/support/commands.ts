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
  ModalBuscaReceitas,
  filtroDataInicialBuscaReceitas,
  filtroDataFinalBuscaReceitas,
  filtroPendenciasBuscaReceitas,
  botaoProcurar,
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
  const caminhoArquivo = `${dadosParametros.caminhoArquivo}${nomeArquivo}`;
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
    cy.getVisible(modalBuscaReceita, { timeout: 20000 })
      .click({ force: true })
      .should('have.id', 'centerHeadFilter')
  };

  const selecionarFiltroPendencias = (filtroPendencias: string, opcao): void => {
    cy.getVisible(filtroPendencias, { timeout: 20000 })
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

  abrirModalBuscaReceita(ModalBuscaReceitas);
  cy.wait(2000);

  cy.inserirData(filtroDataInicialBuscaReceitas, dataInicial);

  cy.inserirData(filtroDataFinalBuscaReceitas, dataFinal);

  selecionarFiltroPendencias(filtroPendenciasBuscaReceitas, dadosParametros.filtroPendentes.Pendentes);

  procurarReceita(botaoProcurar, labelProcurarReceitas);

  capturarNumeroReceita(numeroReceitas);
});



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



Cypress.Commands.add('getElementAndType', (elemento: string, texto?: string): void => {
  if (typeof texto !== 'string') {
    throw new Error('O texto a ser escrito deve ser uma string.');
  }
  cy.get(elemento, { timeout: 20000 })
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
  cy.get(elemento, { timeout: 20000 })
    .should('be.visible')
    .find(`input[type="radio"][value="${value}"]`)
    .check({ force: true })
});



Cypress.Commands.add('getSelectOptionByValue', (elemento: string, value: any): void => {
  cy.get(elemento, { timeout: 20000 })
    .should('be.visible')
    .select(value, { force: true })
});



Cypress.Commands.add('marcarUso', (checkboxMarcarUso: string): void => {
  cy.get(`${checkboxMarcarUso} input[type="checkbox"]`, { timeout: 20000 }).then(($checkboxes) => {
    const totalCheckboxes = $checkboxes.length;

    cy.get(`${checkboxMarcarUso} input[type="checkbox"]:checked`, { timeout: 20000 }).then(($checkedCheckboxes) => {
      const totalChecked = $checkedCheckboxes.length;

      if (totalChecked === totalCheckboxes) {
        cy.get(`${checkboxMarcarUso} input[type="checkbox"]:checked`, { timeout: 20000 })
          .first()
          .uncheck();
        cy.getElementAndClick(containerInserirUsuario);
        cy.getElementAndType(select, dadosParametros.Receita.usuárioMarcarUso);
        cy.getElementAndClick(usuarioSelecionado)
        cy.getElementAndType(senhaReceita, dadosAmbiente.SENHA_RECEITA_USER);
        cy.getElementAndClick(aplicaDesmarcarUso);
        cy.getElementAndClick(mensagemSucessoModal);
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
      cy.getElementAndClick(mensagemConfirmacaoModal);
      cy.wait(200);
      cy.getElementAndClick(mensagemSucessoModal);
    });
  });
});



Cypress.Commands.add('visualizarReceita', (abrirModalvisualizarReceita: string,): void => {
  cy.getElementAndClick(abrirModalvisualizarReceita)

  cy.getElementAndClick(abaPdfVisualizarReceitas)

  cy.getElementAndClick(abaOriginalVisualizarReceitas)

  cy.getElementAndClick(abaObservacoesInternasVisualizarReceitas)

  cy.getElementAndClick(abaInformacoesFcertaVisualizarReceitas)

  cy.getElementAndClick(exibirReguaVisualizarReceitas);

  cy.getElementAndClick(exibirReguaVisualizarReceitas);

  cy.getElementAndClick(fecharVisualizarReceitas)
});



Cypress.Commands.add('clonarReceita', (clonarReceita: string): void => {
  cy.getElementAndClick(clonarReceita);
  cy.wait(1000);
  cy.then(() => {
    cy.get(modalObservacoesClonar, { timeout: 20000 }).then(($elemento) => {

      if (!$elemento.is(':visible')) {
        cy.getElementAndClick(mensagemConfirmacaoModal);
        cy.wait(1000);
      }
      else {
        if (dadosParametros.Receita.clonarObservacaoFarmaceutica) {
          cy.getElementAndClick(mensagemConfirmacaoModal);
          cy.wait(1000);
        } else if (!dadosParametros.Receita.clonarObservacaoFarmaceutica) {
          cy.get(clonarObservacoesFarmaceuticas, { timeout: 20000 })
            .uncheck();
          cy.getElementAndClick(mensagemConfirmacaoModal);
          cy.wait(1000);
        }

      }
      cy.getElementAndClick(mensagemConfirmacaoModal);
    });
  });
});



Cypress.Commands.add('excluirReceita', (excluir: string): void => {
  cy.getElementAndClick(excluir);
  cy.wait(200);
  cy.getElementAndClick(mensagemConfirmacaoModal);
  cy.wait(200);
  cy.getElementAndClick(mensagemSucessoModal);
});



Cypress.Commands.add('inserirObservacaoFarmaceutica', (acessarObservacoesFarmaceuticas: string, senhaReceita: string, textoObservacao: string): void => {
  cy.getElementAndClick(acessarObservacoesFarmaceuticas);
  cy.getElementAndClick(abaAdicionarObservacoesFarmaceuticas);
  cy.getElementAndType(senhaObservacoesFarmaceuticas, senhaReceita);
  cy.getElementAndType(textoObservacoesFarmaceuticas, textoObservacao);
  cy.getElementAndClick('#modal_receita_add_obs');
  cy.getElementAndClick(mensagemConfirmacaoModal);
  cy.wait(1000);
  cy.get(mensagemSucessoModal, { timeout: 60000 })
    .click();
  cy.getElementAndClick(fecharModalObservacoesFarmaceuticas);
});



Cypress.Commands.add('excluirObservacaoFarmaceutica', (acessarObservacoesFarmaceuticas: string): void => {
  cy.getElementAndClick(acessarObservacoesFarmaceuticas);
  cy.getElementAndClick(abaExcluirObservacoesFarmaceuticas);
  cy.getElementAndClick(excluirObservacoesFarmaceuticas);
  cy.getElementAndClick(mensagemConfirmacaoModal);
  cy.wait(1000);
  cy.get(mensagemSucessoModal, { timeout: 60000 })
    .click();
  cy.getElementAndClick(fecharModalObservacoesFarmaceuticas);
});



Cypress.Commands.add('CriarDuvidaTecnica', (acessarDuvidasTecnicas: string, categoria: string, texto: string, responsavelRespostaDuvidaTecnica: string): void => {
  cy.getElementAndClick(acessarDuvidasTecnicas);
  cy.getElementAndClick(containerCategoriaDuvidaTecnicas);
  cy.get(select, { timeout: 20000 })
    .type(`${categoria}{enter}`);
  cy.getElementAndType(textoDuvidasTecnicas, texto);
  cy.getElementAndClick(containerColaboradores);
  cy.get(responsavelRespostas, { timeout: 20000 })
    .type(`${responsavelRespostaDuvidaTecnica}{enter}`);
  cy.getElementAndClick(enviarDuvidasTecnicas);
  cy.getElementAndClick(mensagemConfirmacaoModal);
  cy.getElementAndClick(mensagemSucessoModal);
  cy.getElementAndClick(fecharModalDuvidasTecnicas);
  cy.getElementAndClick(mensagemSucessoModal);
});



Cypress.Commands.add('atualizarModalDuvidaTecnica', (atualizar: string): void => {
  cy.getElementAndClick(acessarDuvidasTecnicas);
  cy.getElementAndClick(atualizar)
    .should('have.attr', 'disabled');
  cy.get(atualizar, { timeout: 20000 }).then(($elemento) => {

    if ($elemento.is(':disabled')) {
      cy.wait(8000);
    }
    else {
      cy.log('Já pode atualizar a modal.')
    }

    cy.getElementAndClick(fecharModalDuvidasTecnicas);
  });
});



// Cypress.Commands.add('alterarResponsavelRespostaDuvidaTecnica', (acessarDuvidasTecnicas: string, responsavelRespostaDuvidaTecnica: string): void => {
//   cy.getElementAndClick(acessarDuvidasTecnicas);

//   let nome;
//   cy.get(responsavelAtualRespostaDuvidasTecnicas, { timeout: 20000 })
//     .should('exist')
//     .invoke('attr', 'title')
//     .then((title) => {
//       const matches = title.match(/\d+ - (.+?) \(.+?\)/);

//       if (matches && matches.length > 1) {
//         nome = matches[1];
//         cy.log(nome);
//         if (nome !== dadosParametros.Receita.responsavelAtualRespostaDuvidaTecnica) {
//           dadosParametros.Receita.responsavelAtualRespostaDuvidaTecnica = nome;
//         } else {
//           cy.log('O novo responsável é o mesmo que o atual');
//         }
//       } else {
//         cy.log('Nome não encontrado');
//       }
//     });

//   if (responsavelRespostaDuvidaTecnica !== dadosParametros.Receita.responsavelAtualRespostaDuvidaTecnica) {
//     cy.get(containerResponsavelRespostaDuvidasTecnicas, { timeout: 20000 })
//       .click();
//     cy.get(responsavelRespostas, { timeout: 20000 })
//       .type(`${responsavelRespostaDuvidaTecnica}{enter}`);
//     cy.wait(1000);
//     cy.getElementAndClick(mensagemSucessoModal);
//     cy.getElementAndClick(fecharModalDuvidasTecnicas);
//   } else {
//     cy.log('O novo responsável é o mesmo que o atual');
//   }
// });



Cypress.Commands.add('alterarResponsavelRespostaDuvidaTecnica', (acessarDuvidasTecnicas: string, responsavelRespostaDuvidaTecnica: string): void => {
  cy.getElementAndClick(acessarDuvidasTecnicas);

  let todasResolvidas = true;

  // Verifica se todas as dúvidas técnicas estão resolvidas
  cy.get('#chatDuvTec .groupContainer').each(($duvida) => {
    const resolvido = $duvida.find('i.fa.fa-check').length > 0;

    if (!resolvido) {
      todasResolvidas = false;
      return false; // Saímos do loop, pois encontramos uma dúvida não resolvida
    }
  });

  if (todasResolvidas) {
    cy.log('Maravilha!! Todas as dúvidas técnicas estão resolvidas. Não é necessário alterar o responsável da resposta.');
    return; // Saímos da função se todas estiverem resolvidas
  }

  let nome;
  cy.get(responsavelAtualRespostaDuvidasTecnicas, { timeout: 20000 })
    .should('exist')
    .invoke('attr', 'title')
    .then((title) => {
      const matches = title.match(/\d+ - (.+?) \(.+?\)/);

      if (matches && matches.length > 1) {
        nome = matches[1];
        cy.log(nome);
        if (nome !== dadosParametros.Receita.responsavelAtualRespostaDuvidaTecnica) {
          dadosParametros.Receita.responsavelAtualRespostaDuvidaTecnica = nome;
        } else {
          cy.log('O novo responsável é o mesmo que o atual');
        }
      } else {
        cy.log('Nome não encontrado');
      }
    });

  if (responsavelRespostaDuvidaTecnica !== dadosParametros.Receita.responsavelAtualRespostaDuvidaTecnica) {
    cy.get(containerResponsavelRespostaDuvidasTecnicas, { timeout: 20000 })
      .click();
    cy.get(responsavelRespostas, { timeout: 20000 })
      .type(`${responsavelRespostaDuvidaTecnica}{enter}`);
    cy.wait(1000);
    cy.getElementAndClick(mensagemSucessoModal);
    cy.getElementAndClick(fecharModalDuvidasTecnicas);
  } else {
    cy.log('O novo responsável é o mesmo que o atual');
  }
});




Cypress.Commands.add('marcarDuvidaTecnicaResolvido', (acessarDuvidasTecnicas: string): void => {
  cy.getElementAndClick(acessarDuvidasTecnicas);

  let duvidaResolvida = false;
  cy.get('#chatDuvTec', { timeout: 20000 }).then(() => {
    cy.get('.groupContainer').each(($duvida, index) => {

      if (duvidaResolvida) {
        return false;
      }
      const resolvido = $duvida.find('i.fa.fa-check').length > 0;

      if (resolvido) {
        cy.log(`Dúvida técnica ${index + 1} está resolvida.`);
      } else {
        $duvida.find('button.resolveDuvT').first().click();
        cy.wait(1000);
        cy.getElementAndClick(mensagemConfirmacaoModal);
        cy.wait(1000);
        cy.getElementAndClick(mensagemSucessoModal);
        cy.wait(1000);
        cy.log(`Dúvida técnica ${index + 1} marcada como resolvida.`);
        cy.getElementAndClick(fecharModalDuvidasTecnicas);

        duvidaResolvida = true;
      }
    });
  });
});




Cypress.Commands.add('excluirDuvidaTecnica', (acessarDuvidasTecnicas: string) => {
  cy.getElementAndClick(acessarDuvidasTecnicas);
  cy.get(excluirDuvidasTecnicas)
    .click()
  cy.getElementAndClick(mensagemConfirmacaoModal);
  cy.wait(1000);
  cy.getElementAndClick(mensagemSucessoModal);
  cy.wait(1000);
  cy.log(`Dúvida técnica excluída com sucesso.`);
  cy.getElementAndClick(fecharModalDuvidasTecnicas);
});



Cypress.Commands.add('responderDuvidaTecnica', (acessarDuvidasTecnicas: string, status: string, texto: string) => {
  cy.getElementAndClick(acessarDuvidasTecnicas);

  cy.get(statusRespostaDuvidasTecnicas, { timeout: 20000 })
    .first()
    .select(status);

  cy.getElementAndType(textoRespostaDuvidasTecnicas, texto);
  cy.get(enviarRespostaDuvidasTecnicas, { timeout: 20000 })
    .first()
    .click();

  cy.getElementAndClick(mensagemConfirmacaoModal);
  cy.getElementAndClick(mensagemSucessoModal);
  cy.getElementAndClick(fecharModalDuvidasTecnicas);
  cy.getElementAndClick(mensagemSucessoModal);
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

clonar receita CC**
  clonar observacao boolean if botao de clonar presente clonar observacao true senao false [id="clonar-observacoes"]
  (botao confirmacao clonagem)
  (botao sucesso receita clonada)
  1203

Excluir CC**

adicionar observacoes farmaceuticas CC**
  acessarObservacoesFarmaceuticas
  senhaReceita
  textoObservacao

excluir observacoes farmaceuticas CC**

duvidas tecnicas CC
  acessarDuvidasTecnicas
    criar duvidas tecnicas**
      categoria
      textoDuvidaTecnica
      colaborador
      enviar

    atualizar modal dúvidas tecnicas**
      clicar botao atualizar
      aguardar perder disabled

    alterar responsavel pela resposta da duvida tecnica**
      clicar no select
      capturar campo e digitar novo resposavel pela resposta da duvida tecnica
      apertar enter
      confirmar novo responsavel clicando em ok
      ok na mensagem que informa sucesso na alteração

    marcar como resolvido**
      clicar marcar como resolvido
      confirmar que deseja marcar como resolvido clicando em ok
      ok na mensagem que informa sucesso na alteração
      verifica se duvida ficou resolvida
    excluir duvida tecnica**
      clicar em excluir**
      confirmar que deseja excluir clicando em ok
       ok na mensagem que informa sucesso na alteração
    responder duvida tecnica**
      selecionar status
      inserir texto
      enviar resposta

editar receita CC      


*/