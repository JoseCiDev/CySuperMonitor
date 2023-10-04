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
  importarImagemReceitas,
  modalSugestaoRelacaoPrescritor,
  parametroBuscaPaciente,
  pacienteReceitas,
  canalRecebimentoReceitas,
  clusterReceitas,
  juntocomReceitas,
  opcaoTipoReceitas,
  prescritorReceitas,
  clusterBusca,
  canalRecebimentoBusca,
  receitaBusca,
  pacienteBusca,
  prescritorBusca,
  orcamentoBusca,
  ultimoModificadorBusca,
  orcamentistaBusca,
  atendenteResponsavelBusca,
  filtroPendenciasBusca,
  botaoBuscarReceitas,
  labelProcurarReceitas,
  numeroReceitas,
  ModalBuscaReceitas,
  filtroDataInicialBuscaReceitas,
  filtroDataFinalBuscaReceitas,

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



Cypress.Commands.add('acessarMenuReceitas', (receitas: string): void => {
  cy.getElementAndClick(receitas)
    .contains('Receitas')
    .and('have.class', 'nav-label')
});



Cypress.Commands.add('acessarImportarReceitas', (importarReceitas: string): void => {
  cy.getElementAndClick(importarReceitas);
})



Cypress.Commands.add('acessarGerenciarReceitas', (gerenciarReceitas: string): void => {
  cy.getElementAndClick(gerenciarReceitas);
})



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



Cypress.Commands.add('inserirData', (campoData: string, data: string): void => {
  cy.get(campoData)
    .type(data, { timeout: 1000 })
    .should('have.value', data);
});



Cypress.Commands.add('inserirPrescritor', (dadosPrescritor: string): void => {
  cy.get(prescritorReceitas)
    .should('have.id', 'modalMedicoRec')
    .clear()
    .type(dadosPrescritor)
    .then(() => {
      cy.get(el.Compartilhado.sugestaoAutocomplete)
        .as('suggestion');
      cy.get('@suggestion')
        .then(($elemento) => {
          cy.wrap($elemento)
            .invoke('attr', 'style', 'display: block')
            .should('be.visible')
            .eq(0)
            .click({ force: true });
        });
    })
    .should('contain', dadosParametros.Prescritor.crmPrescritor);
  // cy.get(modalSugestaoRelacaoPrescritor, { timeout: 20000 })
  //   .scrollIntoView()
  //   .click();
})


Cypress.Commands.add('inserirPaciente', (ParametroBuscaPaciente: string, paciente: string): void => {
  cy.getVisible(parametroBuscaPaciente, { timeout: 20000 })
    .and('have.id', ParametroBuscaPaciente)
    .check()
    .should('be.checked');

  (sugestaoAutocomplete: string): Cypress.Chainable<boolean> => {
    return cy.get(sugestaoAutocomplete, { timeout: 20000 }).then(($modal) => {
      return $modal.is(':visible');
    });
  }
  cy.get(pacienteReceitas, { timeout: 20000 })
    .should('exist')
    .and('have.id', 'modalPacienteRec')
    .clear()
    .type(paciente)
    .then(() => {
      cy.get(el.Compartilhado.sugestoesAutocomplete, { timeout: 20000 })
        .as('suggestions');
    });
  cy.wait(1000)
  cy.get('@suggestions', { timeout: 20000 })
    .find(el.Compartilhado.sugestaoAutocomplete, { timeout: 20000 })
    .contains(paciente)
    .then(($suggestion) => {
      if ($suggestion.length > 0) {
        cy.wrap($suggestion[0])
          .scrollIntoView()
          .click();
      }
    });
});



Cypress.Commands.add('inserirDataUmDiaMenosDiaAtual', (campoData: string) => {
  const umDiaMenos = new Date(dadosParametros.dataAtual);
  umDiaMenos.setDate(umDiaMenos.getDate() - 1);
  const dataFormatadaDiaAnterior = umDiaMenos.toISOString().slice(0, 16);
  cy.inserirData(campoData, dataFormatadaDiaAnterior);
})



Cypress.Commands.add('selecionarCanalRecebimento', (canalRecebimentoReceitas: string, canalRecebimento: string): void => {
  cy.get<HTMLSelectElement>(canalRecebimentoReceitas)
    .and('have.id', 'modalCanalContato')
    .select(canalRecebimento)
    .should('have.value', canalRecebimento)
    .find('option:selected')
    .should('be.selected');
})



Cypress.Commands.add('selecionarCluster', (cluster: string): void => {
  cy.getSelectOptionByValue(clusterReceitas, cluster), { timeout: 20000 };
})



// Cypress.Commands.add('inserirTipoReceita', (tipoReceita): void => {
//   cy.get(opcaoTipoReceitas, { timeout: 20000 })
//   .check(`input[name="receita_tipo"][value="${tipoReceita}"]`)
//   .should('be.checked');


// })

Cypress.Commands.add('inserirTipoReceita', (tipoReceita): void => {
  const tipoSelecionado = `input[name="receita_tipo"][value="${tipoReceita}"]`;

  cy.get(opcaoTipoReceitas, { timeout: 20000 })
    .find(tipoSelecionado)
    .should('be.visible')
    .check()
    .should('be.checked');
});





Cypress.Commands.add('buscarReceita', (
  {
  dataInicial,
  dataFinal,
  pendencia,
  cluster,
  canalRecebimento,
  receita,
  paciente,
  prescritor,
  pedido,
  ultimoModificador,
  orcamentista,
  atendenteResponsavel,
}
): void => {

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

  cy.getElementAndClick(ModalBuscaReceitas), { timeout: 20000 };
  cy.wait(2000);
  cy.inserirData(filtroDataInicialBuscaReceitas, dataInicial);
  cy.inserirData(filtroDataFinalBuscaReceitas, dataFinal);

  pendencia

  if (cluster) {
    cy.getElementAndType(clusterBusca, dadosParametros.cluster.cluster1)
      .type('enter{}');
  }

  if (canalRecebimento) {
    cy.getSelectOptionByValue(canalRecebimentoBusca, dadosParametros.canalRecebimento.WhatsappClinicaPrescritor);
  }

  if (receita) {
    cy.getElementAndType(receitaBusca, dadosParametros.Receita.numeroReceita.toString());
  }

  if (paciente) {
    cy.get(pacienteBusca, { timeout: 20000 })
      .type(dadosParametros.Paciente.codigoPaciente.toString(), { timeout: 20000 })
      .type('{downarrow}{enter}');
  }

  if (prescritor) {
    cy.getElementAndType(prescritorBusca, dadosParametros.Prescritor.crmPrescritor.toString())
      .type('{downarrow}{enter}');
  }

  if (pedido) {
    cy.getElementAndType(orcamentoBusca, dadosParametros.OrcamentoFilial.pedido.toString())
      .type('{downarrow}{enter}');
  }

  if (ultimoModificador) {
    cy.getElementAndType(ultimoModificadorBusca, dadosParametros.Usuario.usuarioAtribuido.toString())
      .type('{downarrow}{enter}');
  }

  if (orcamentista) {
    cy.getElementAndType(orcamentistaBusca, dadosParametros.Usuario.usuarioAtribuido.toString())
      .type('{downarrow}{enter}');
  }

  if (atendenteResponsavel) {
    cy.getElementAndType(atendenteResponsavelBusca, dadosParametros.Usuario.usuarioAtribuido.toString())
      .type('{downarrow}{enter}');
  }

  cy.getElementAndClick(botaoBuscarReceitas);
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



// Cypress.Commands.add('editarReceita', (imagem, botaoImportarImagemReceitas, dadosPrescritor, parametroBuscaPaciente, dadosPaciente, canalRecebimentoReceitas, canalRecebimento, cluster, campoAtribuicao, usuario, campoData, ValorJuntoCom) => {
//   cy.inserirArquivo(imagem, botaoImportarImagemReceitas);
//   cy.inserirPrescritor(dadosPrescritor);
//   cy.inserirPaciente(parametroBuscaPaciente, dadosPaciente);
//   cy.selecionarCanalRecebimento(canalRecebimentoReceitas, canalRecebimento);
//   cy.selecionarCluster(cluster);

//   cy.getElementAndType(campoAtribuicao, usuario)
//     .wait(3000)
//     .type('{downarrow}{enter}');

//   cy.inserirDataUmDiaMenosDiaAtual(campoData);

//   cy.get(juntocomReceitas, { timeout: 20000 })
//     .type(dadosParametros.Receita.ValorJuntoCom, { timeout: 1000 })
//     .wait(3000)
//     .type('{downarrow}{enter}');




// })





Cypress.Commands.add('acessarAtendimentosEmAndamento', (): void => {
  cy.getVisible(menuAtendimentos)
    .trigger('mouseover')
    .click();

  cy.get(atendimentosEmAndamento)
    .click({ force: true });
});



// Cypress.Commands.add('visualizarPedido', (botaoVisualizar: string): void => {
//   cy.lerArquivo('orcamentoFilial.json').then((orcamentoFilial) => {
//     dadosParametros.OrcamentoFilial.pedido = orcamentoFilial[0].numeroOrcamento;
//     dadosParametros.OrcamentoFilial.filial = orcamentoFilial[0].numeroFilial;

//     // Helper function to search for the budget and return a boolean indicating success
//     const buscarPedido = (pedido: number, filial: number) => {
//       cy.get(campoBuscarPedido, { timeout: 20000 })
//         .clear()
//         .type(pedido.toString())
//         .should('have.value', pedido);

//       cy.getVisible(buscarFilial, { timeout: 5000 })
//         .clear()
//         .type(filial.toString())
//         .should('have.value', filial);

//       cy.getElementAndClick(mostrarTodos);
//       cy.getElementAndClick(enviarBusca);

//       return cy.get(botaoVisualizar).first().then(($element) => $element.length > 0);

//     };
//     buscarPedido(dadosParametros.OrcamentoFilial.pedido,dadosParametros.OrcamentoFilial.filial);

//   });
// });

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
