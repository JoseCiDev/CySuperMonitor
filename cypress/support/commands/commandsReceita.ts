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
    canalRecebimentoReceitas,
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



Cypress.Commands.add('setDadoCapturado', (orcamentistaPedido: string): void => {
    dadosParametros.Pedido.orcamentista = orcamentistaPedido;
});



Cypress.Commands.add('setReceitaNumero', (numeroReceita): void => {
    dadosParametros.Receita.busca.numeroReceita = numeroReceita;
});


Cypress.Commands.add('buscarReceita', (
    params?: {
        dataInicial?: string,
        dataFinal?: string,
        pendencia?: string,
        cluster?: string,
        canalRecebimento?: string,
        receita?: number,
        paciente?: string,
        prescritor?: string,
        pedido?: number,
        ultimoModificador?: string,
        orcamentista?: string,
        atendenteResponsavel?: string
    }): void => {

    const capturarNumeroReceita = (numeroReceita: string, tentativas: number = 10) => {
        if (tentativas === 0) {
            throw new Error(`Número de tentativas excedido. Não foi possível capturar o número da receita.`);
        }

        return cy.wrap(null).then(() => {
            const $element = Cypress.$(numeroReceita);

            if ($element.length > 0) {
                const texto = $element.text();
                const numeroReceitaMatch = texto.match(/\d+/);

                if (!numeroReceitaMatch) {
                    throw new Error(`Valor capturado não contém números válidos: ${texto}`);
                }
                const numeroReceita = parseInt(numeroReceitaMatch[0], 10);

                cy.wrap(numeroReceita).as('numeroReceita');
                cy.setReceitaNumero(numeroReceita);
                cy.log(`Número da Receita Capturado: ${dadosParametros.Receita.busca.numeroReceita}`);
            }
            capturarNumeroReceita(numeroReceita, tentativas - 1);
        });
    };

    const buscarReceitaComParametros = (params?: {
        dataInicial?: string,
        dataFinal?: string,
        pendencia?: string,
        cluster?: string,
        canalRecebimento?: string,
        receita?: number,
        paciente?: string,
        prescritor?: string,
        pedido?: number,
        ultimoModificador?: string,
        orcamentista?: string,
        atendenteResponsavel?: string
    }) => {
        cy.getElementAndClick(botaoProcurarReceitas);

        capturarNumeroReceita(numeroReceitas);
    };

    cy.get(ModalBuscaReceitas, { timeout: 20000 })
        .as('ModalBuscaReceitas')
    cy.get('@ModalBuscaReceitas')
        .click();
    cy.getElementAndType(filtroDataInicialBuscaReceitas, params.dataInicial);
    cy.getElementAndType(filtroDataFinalBuscaReceitas, params.dataFinal);

    if (params.cluster) {
        cy.get(clusterBusca)
            .type(params.cluster)
            .type('{downarrow}')
            .type('{enter}');
    }

    if (params.pendencia) {
        cy.getSelectOptionByValue(filtroPendenciasBusca, params.pendencia);
    }

    if (params.canalRecebimento) {
        cy.getSelectOptionByValue(canalRecebimentoBusca, params.canalRecebimento);
    }

    if (params.receita) {
        cy.getElementAndType(receitaBusca, params.receita.toString());
    }

    if (params.paciente) {
        cy.get(pacienteBusca, { timeout: 20000 })
            .type(params.paciente.toString(), { timeout: 20000 })
            .wait(3000)
            .type('{downarrow}')
            .type('{enter}');
    }

    if (params.prescritor) {
        cy.getElementAndType(prescritorBusca, params.prescritor.toString())
            .wait(3000)
            .type('{downarrow}')
            .type('{enter}');
    }

    if (params.pedido) {
        cy.getElementAndType(orcamentoBusca, params.pedido.toString())
            .wait(3000)
            .type('{downarrow}')
            .type('{enter}');
    }

    if (params.ultimoModificador) {
        cy.getElementAndType(ultimoModificadorBusca, params.ultimoModificador.toString())
            .type('{downarrow}')
            .type('{enter}');
    }

    if (params.orcamentista) {
        cy.getElementAndType(orcamentistaBusca, params.orcamentista.toString())
            .type('{downarrow}')
            .type('{enter}');
    }

    if (params.atendenteResponsavel) {
        cy.getElementAndType(atendenteResponsavelBusca, params.atendenteResponsavel.toString())
            .wait(3000)
            .type('{downarrow}')
            .type('{enter}');
    }

    cy.getElementAndClick(botaoProcurarReceitas);

    capturarNumeroReceita(numeroReceitas);

    buscarReceitaComParametros(params)
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
    cy.get(clonarReceita)
        .click();
    cy.wait(1000);
    cy.then(() => {
        cy.get(modalObservacoesClonar, { timeout: 20000 }).then(($elemento) => {

            if (!$elemento.is(':visible')) {
                cy.getElementAndClick(mensagemConfirmacaoModal);
            }
            else {
                if (dadosParametros.Receita.busca.clonarObservacaoFarmaceutica) {
                    cy.getElementAndClick(mensagemConfirmacaoModal);
                }
                if (!dadosParametros.Receita.busca.clonarObservacaoFarmaceutica) {
                    cy.get(clonarObservacoesFarmaceuticas, { timeout: 20000 })
                        .uncheck();
                    cy.getElementAndClick(mensagemConfirmacaoModal);
                }
            }
            cy.getElementAndClick(mensagemConfirmacaoModal);
        });
    });
});



Cypress.Commands.add('excluirReceita', (excluir: string): void => {
    cy.get(':nth-child(1) > .actions-fa > .dropdown > .dropdown-menu > .list-group > .delete-receita', { timeout: 50000 })
        .eq(0)
        .click({ force: true });
    cy.get(mensagemConfirmacaoModal, { timeout: 50000 })
        .click();
    cy.get(mensagemSucessoModal, { timeout: 50000 })
        .click();
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



// Cypress.Commands.add('atualizarModalDuvidaTecnica', (atualizar: string): void => {
//     cy.getElementAndClick(acessarDuvidasTecnicas);
//     cy.getElementAndClick(atualizar)
//         .should('have.attr', 'disabled');
//     cy.get(atualizar, { timeout: 20000 }).then(($elemento) => {

//         if (!$elemento.is(':disabled')) {
//             cy.log('Já pode atualizar a modal.')
//         }
//         cy.wait(8000);
//         cy.getElementAndClick(fecharModalDuvidasTecnicas);
//     });
// });

Cypress.Commands.add('atualizarModalDuvidaTecnica', (atualizar: string): void => {
    cy.getElementAndClick(acessarDuvidasTecnicas);

    cy.get(atualizar)
        .should('not.be.disabled')
        .as('botaoAtualizar')
        .click();

    cy.getElementAndClick('@botaoAtualizar', fecharModalDuvidasTecnicas);
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

//   if (responsavelRespostaDuvidaTecnica === dadosParametros.Receita.responsavelAtualRespostaDuvidaTecnica) {
//     cy.log('O novo responsável é o mesmo que o atual');
//     
//   } 
//    cy.get(containerResponsavelRespostaDuvidasTecnicas, { timeout: 20000 })
//       .click();
//     cy.get(responsavelRespostas, { timeout: 20000 })
//       .type(`${responsavelRespostaDuvidaTecnica}{enter}`);
//     cy.wait(1000);
//     cy.getElementAndClick(mensagemSucessoModal);
//     cy.getElementAndClick(fecharModalDuvidasTecnicas);
//   
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
        cy.log('Excelente! Todas as questões técnicas foram solucionadas. Não há necessidade de alterar o responsável pela resposta.');
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
                if (nome !== dadosParametros.Receita.busca.responsavelAtualRespostaDuvidaTecnica) {
                    dadosParametros.Receita.busca.responsavelAtualRespostaDuvidaTecnica = nome;
                } else {
                    cy.log('O novo responsável é o mesmo que o atual');
                }
            } else {
                cy.log('Nome não encontrado');
            }
        });

    if (responsavelRespostaDuvidaTecnica === dadosParametros.Receita.busca.responsavelAtualRespostaDuvidaTecnica) {
        cy.log('O novo responsável é o mesmo que o atual');

    }
    cy.get(containerResponsavelRespostaDuvidasTecnicas, { timeout: 20000 })
        .click();
    cy.get(responsavelRespostas, { timeout: 20000 })
        .type(`${responsavelRespostaDuvidaTecnica}{enter}`);
    cy.getElementAndClick(mensagemSucessoModal);
    cy.getElementAndClick(fecharModalDuvidasTecnicas);
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
                return;
            }

            $duvida.find('button.resolveDuvT').first().click();
            cy.wait(1000);
            cy.getElementAndClick(mensagemConfirmacaoModal);
            cy.wait(1000);
            cy.getElementAndClick(mensagemSucessoModal);
            cy.wait(1000);
            cy.log(`Dúvida técnica ${index + 1} marcada como resolvida.`);
            cy.getElementAndClick(fecharModalDuvidasTecnicas);

            duvidaResolvida = true;
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




Cypress.Commands.add('buscarPedido', (pedido: number, filial: number) => {

    cy.get(campoBuscarPedido, { timeout: 20000 })
        .clear()
        .type(pedido.toString())
        .should('have.value', pedido);

    cy.getVisible(buscarFilial, { timeout: 5000 })
        .clear()
        .type(filial.toString())
        .should('have.value', filial);

    cy.getElementAndClick(mostrarTodos);

});

Cypress.Commands.add('reabrirPedido', (pedido: number, filial: number) => {
    cy.buscarPedido(pedido, filial);

    cy.getElementAndClick(mostrarPedidosEncerrados);
    cy.getElementAndClick(enviarBusca);
    cy.getElementAndClick(botaoVisualizar);

    cy.getElementAndClick(reabrirPedido);
    cy.getElementAndClick(confirmaReabrirPedido);
    cy.getElementAndClick(modalMensagemPedido);
})

Cypress.Commands.add('visualizarPedido', (botaoVisualizar): void => {
    cy.lerArquivo('orcamentoFilial.json').then((orcamentoFilial) => {
        // Assuming orcamentoFilial is an array of objects with properties numeroOrcamento and numeroFilial
        let todosPedidosUsados = true;
        let pedidoVisualizado = false;

        for (const orcamento of orcamentoFilial) {
            const pedido = orcamento.numeroOrcamento;
            const filial = orcamento.numeroFilial;

            cy.buscarPedido(pedido, filial);
            cy.getElementAndClick(enviarBusca);

            cy.get(containerPedidos).then($element => {
                if ($element.length < 2) {
                    // Execute o código dentro desta condição somente se o elemento não for visível
                    cy.reabrirPedido(pedido, filial)
                }
                else {
                    todosPedidosUsados = false;
                    cy.getElementAndClick(botaoVisualizar);
                    pedidoVisualizado;
                }

                if (pedidoVisualizado = true) {
                    return false;
                };
            });

            if (pedidoVisualizado = true) {
                break;
            };

        }

        if (todosPedidosUsados) {
            throw new Error('Todos os números de pedidos já foram usados.')
        };

    });
});


Cypress.Commands.add('importarReceita', (
    arquivo: Object,
        prescritor: string | number,
        parametroBuscaPaciente: ParametroBuscaPaciente,
        paciente: string | number,
        canalRecebimento: CanalRecebimentoReceita,
        atendenteResponsavel: string,
        dataRecebimento: Date,
        tipoReceita: string,
        textoObservacaoInterna: string,
        urgenteReceitas: MarcacoesReceita,
        clienteAlerta: MarcacoesReceita,
        medicamentoControlado: MarcacoesReceita) => {
    //acessar registrar receitas
    cy.getElementAndClick(abrirModalRegistrarReceitas);
    //importar imagem
    cy.inserirArquivo(arquivo, importarImagemReceitas);
    //prescritor
    cy.getElementAutocompleteTypeAndClick(
        prescritorReceitas,
        dadosParametros.Receita.importacao.prescritor, 
        el.Compartilhado.sugestaoAutocomplete);
    cy.waitModalAndClick(modalSugestaoRelacaoPrescritor, modalSugestaoRelacaoPrescritor);
    //paciente
    cy.getElementAndCheck(dadosParametros.Receita.importacao.parametroBuscaPaciente);
    // cy.get(pacienteReceitas)
    //     .as('pacienteReceitas')
    // cy.get('@pacienteReceitas')
    //     .type(dadosParametros.Paciente.codigoPaciente)
    // cy.contains('.autocomplete-suggestion', dadosParametros.Paciente.codigoPaciente)
    //     .as('sugestaoAutocompletePaciente')
    // cy.get('@sugestaoAutocompletePaciente')
    //     .click({ force: true });
    cy.getElementAutocompleteTypeAndClick(
        pacienteReceitas,
        dadosParametros.Receita.importacao.paciente,
        el.Compartilhado.sugestaoAutocomplete);
    //canal de recebimento
    cy.getSelectOptionByValue(canalRecebimentoReceitas, dadosParametros.Receita.importacao.canalRecebimentoReceita);
    //atendente responsavel
    cy.wrap(null).then(() => {
        const $aliasAtendenteResponsavel = cy.get(atendenteResponsavelReceitas)
        $aliasAtendenteResponsavel.invoke('val').then((atendenteResponsavel) => {
            const atendenteResponsavelString = String(atendenteResponsavel).trim()
            if (atendenteResponsavelString !== '') {
                cy.log('O teste será prosseguido, pois um atendente responsável já foi designado.');
            } else {
                // cy.get(atendenteResponsavelReceitas)
                //     .as('atendenteResponsavelReceitas');
                // cy.get('@atendenteResponsavelReceitas')
                //     .type(dadosParametros.Receita.atendenteResponsavel)
                //     .get(`body > div:nth-child(327) > div`)
                //     .as('sugestaoAutocompleteAtendenteResponsavel')
                //     .get('@sugestaoAutocompleteAtendenteResponsavel')
                //     .click();
                cy.getElementAutocompleteTypeAndClick(
                    atendenteResponsavelReceitas,
                    dadosParametros.Receita.importacao.atendenteResponsavel,
                    el.Receitas.autocompleteAtendenteResponsavel);
            }
        })
    });
    //data de recebimento
    cy.getElementAndType(dataRecebimentoReceitas, dadosParametros.Receita.importacao.dataRecebimento)
    //tipo
    cy.getElementAndCheck(`input[name="receita_tipo"][value="${dadosParametros.Receita.importacao.tipoReceita}"]`);
    //modal receita ja importada
    cy.wait(1000);
    // cy.wrap(null).then(() => {
    //     const $aliasModal = Cypress.$(mensagemSucessoModal)
    //     if ($aliasModal.each) {
    //         cy.get(mensagemSucessoModal)
    //             .as('modal')
    //         cy.get('@modal')
    //             .invoke('removeAttr', 'readonly' || 'hidden' || 'scroll' || 'auto')
    //             .click({ force: true, multiple: true, timeout: 5000 })
    //     }
    //     else {
    //         cy.log('O teste será prosseguido, uma vez que a modal não foi exibida na tela.')
    //     }
    // });
    cy.waitModalAndClick(mensagemSucessoModal, mensagemSucessoModal)
    //obs
    cy.getElementAndType(textoObservacaoInternaReceitas, dadosParametros.Receita.importacao.textoObservacaoReceita);
    //urgente cliente alerta medicamento controlado
    cy.getElementAndCheck(dadosParametros.Receita.importacao.urgenteReceitas);
    cy.getElementAndCheck(dadosParametros.Receita.importacao.clienteAlerta);
    cy.getElementAndCheck(dadosParametros.Receita.importacao.medicamentoControlado);
    //save
    cy.getElementAndClick(salvarReceitas);
    //barra progresso e modal de importacao com sucesso
    const $progressBar = cy.get(barraProgressoSalvarReceita)
        .then(() => {
            if (!Cypress.$($progressBar).is(':visible')) {
                // Captura o botão OK na modal
                cy.get(mensagemSucessoModal, { timeout: 50000 })
                    .as('modal');
                cy.get('@modal').click();
            } else {
                cy.log('A barra de carregamento ainda está visível.');
            }
        })
})

