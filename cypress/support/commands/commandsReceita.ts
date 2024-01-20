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
import { CheckAndThrowError, dadosParametros } from '../../DadosParametros'


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
    // btnSucessoModal,
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
    okModalMensagem,
    btnmensagemModal,
    fecharRegistrarReceitas,
    clusterReceitas,

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



Cypress.Commands.add('setDadoCapturado', (orcamentistaPedido: string): void => {
    dadosParametros.Pedido.orcamentista = orcamentistaPedido;
});


Cypress.Commands.add('capturarNumeroReceita', (elementNumeroReceita: string) => {
    const tentativas: number = 10
    if (tentativas === 0) {
        throw new Error(`Número de tentativas excedido. Não foi possível capturar o número da receita.`);
    }

    return cy.wrap(null).then(() => {
        const $element = Cypress.$(elementNumeroReceita);

        if ($element.length > 0) {
            const texto = $element.text();
            const numeroReceitaMatch = texto.match(/\d+/);

            if (!numeroReceitaMatch) {
                throw new Error(`Valor capturado não contém números válidos: ${texto}`);
            }
            const numeroReceita = parseInt(numeroReceitaMatch[0], 10);

            dadosParametros.Receita.importacao.numeroReceita = numeroReceita;
            dadosParametros.Receita.busca.numeroReceita = numeroReceita;

            cy.log(`Número da Receita Capturado para busca: ${dadosParametros.Receita.busca.numeroReceita}
            Número da Receita Capturado para importação: ${dadosParametros.Receita.importacao.numeroReceita}`);
        }
    });

})


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

    cy.capturarNumeroReceita(numeroReceita);

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

        cy.capturarNumeroReceita(numeroReceita);
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

    cy.capturarNumeroReceita(numeroReceita);

    buscarReceitaComParametros(params)
});




Cypress.Commands.add('visualizarReceita', (abrirModalvisualizarReceita: string,): void => {
    cy.getElementAndClick(
        abrirModalvisualizarReceita,
        abaPdfVisualizarReceitas,
        abaOriginalVisualizarReceitas,
        abaObservacoesInternasVisualizarReceitas,
        abaInformacoesFcertaVisualizarReceitas,
        reguaVisualizarReceitas,
        reguaVisualizarReceitas,
        fecharVisualizarReceitas
    )
});



Cypress.Commands.add('clonarReceita', (clonarReceita: string): void => {
    cy.get(clonarReceita)
        .click();
    cy.wait(1000);
    cy.then(() => {
        cy.get(modalObservacoesClonar, { timeout: 20000 }).then(($elemento) => {

            if (!$elemento.is(':visible')) {
                cy.getElementAndClick(btnmensagemModal);
            }
            else {
                if (dadosParametros.Receita.busca.clonarObservacaoFarmaceutica) {
                    cy.getElementAndClick(btnmensagemModal);
                }
                if (!dadosParametros.Receita.busca.clonarObservacaoFarmaceutica) {
                    cy.get(clonarObservacoesFarmaceuticas, { timeout: 20000 })
                        .uncheck();
                    cy.getElementAndClick(btnmensagemModal);
                }
            }
            cy.getElementAndClick(btnmensagemModal);
        });
    });
});



Cypress.Commands.add('excluirReceita', (excluir: string): void => {
    cy.get(':nth-child(1) > .actions-fa > .dropdown > .dropdown-menu > .list-group > .delete-receita', { timeout: 50000 })
        .eq(0)
        .click({ force: true });
    cy.get(btnmensagemModal, { timeout: 50000 })
        .click();
    cy.get(mensagemModal, { timeout: 50000 })
        .click();
});



Cypress.Commands.add('inserirObservacaoFarmaceutica', (acessarObservacoesFarmaceuticas: string, senhaReceita: string, textoObservacao: string): void => {
    cy.getElementAndClick(acessarObservacoesFarmaceuticas);
    cy.getElementAndClick(abaAdicionarObservacoesFarmaceuticas);
    cy.getElementAndType(senhaObservacoesFarmaceuticas, senhaReceita);
    cy.getElementAndType(textoObservacoesFarmaceuticas, textoObservacao);
    cy.getElementAndClick('#modal_receita_add_obs');
    cy.getElementAndClick(btnmensagemModal);
    cy.wait(1000);
    cy.get(mensagemModal, { timeout: 60000 })
        .click();
    cy.getElementAndClick(fecharModalObservacoesFarmaceuticas);
});



Cypress.Commands.add('excluirObservacaoFarmaceutica', (acessarObservacoesFarmaceuticas: string): void => {
    cy.getElementAndClick(acessarObservacoesFarmaceuticas);
    cy.getElementAndClick(abaExcluirObservacoesFarmaceuticas);
    cy.getElementAndClick(excluirObservacoesFarmaceuticas);
    cy.getElementAndClick(btnmensagemModal);
    cy.wait(1000);
    cy.get(mensagemModal, { timeout: 60000 })
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
    cy.getElementAndClick(btnmensagemModal);
    cy.getElementAndClick(mensagemModal);
    cy.getElementAndClick(fecharModalDuvidasTecnicas);
    cy.getElementAndClick(mensagemModal);
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
//           cy.log('O novo responsável é o mesmo que o atual.');
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
//     cy.getElementAndClick(mensagemModal);
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
    cy.getElementAndClick(mensagemModal);
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
            cy.getElementAndClick(btnmensagemModal);
            cy.wait(1000);
            cy.getElementAndClick(mensagemModal);
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
    cy.getElementAndClick(btnmensagemModal);
    cy.wait(1000);
    cy.getElementAndClick(mensagemModal);
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

    cy.getElementAndClick(btnmensagemModal);
    cy.getElementAndClick(mensagemModal);
    cy.getElementAndClick(fecharModalDuvidasTecnicas);
    cy.getElementAndClick(mensagemModal);
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
//por que esta selecionando urgente mesmo sendo false?
//verificar estrutura de parametros
Cypress.Commands.add('importarReceita', (
    arquivo?: Object,
    prescritor?: string | number,
    parametroBuscaPaciente?: string,
    paciente?: string | number,
    canalRecebimento?: string,
    atendenteResponsavel?: string,
    dataRecebimento?: Date,
    tipoReceita?: string,
    textoObservacaoInterna?: string,
    urgenteReceitas?: string,
    clienteAlerta?: string,
    medicamentoControlado?: string) => {

    cy.getElementAndClick(abrirModalRegistrarReceitas);

    cy.inserirArquivo(dadosParametros.Receita.importacao.arquivo, importarImagemReceitas);

    cy.getElementAutocompleteTypeAndClick(
        prescritorReceitas,
        dadosParametros.Receita.importacao.prescritor,
        el.Compartilhado.sugestaoAutocomplete);
    cy.waitModalAndClick(modalSugestaoRelacaoPrescritor, modalSugestaoRelacaoPrescritor);

    cy.getElementAndCheck(dadosParametros.Receita.importacao.parametroBuscaPaciente);
    cy.getElementAutocompleteTypeAndClick(
        pacienteReceitas,
        dadosParametros.Receita.importacao.paciente,
        el.Compartilhado.sugestaoAutocomplete);

    cy.getSelectOptionByValue(canalRecebimentoImportacao, dadosParametros.Receita.importacao.canalRecebimentoReceita);

    cy.wrap(null).then(() => {
        const $aliasAtendenteResponsavel = cy.get(atendenteResponsavelReceitas);
        $aliasAtendenteResponsavel.invoke('val').then((atendenteResponsavel) => {
            const atendenteResponsavelString = String(atendenteResponsavel).trim();
            if (atendenteResponsavelString !== '') {
                cy.log('O teste será prosseguido, pois um atendente responsável já foi designado.');
            } else {
                cy.getElementAutocompleteTypeAndClick(
                    atendenteResponsavelReceitas,
                    dadosParametros.Receita.importacao.atendenteResponsavel,
                    el.Receitas.autocompleteAtendenteResponsavel);
            }
        })
    });

    cy.wrap(null).then(() => {
        cy.get(dataRecebimentoReceitas)
            .each(($input) => {
                cy.wrap($input)
                    .then(() => {
                        if ($input.length > 1) {
                            cy.wrap($input.first())
                                .clear()
                                .type(dadosParametros.Receita.importacao.dataRecebimento, { timeout: 1000 })
                        } else {
                            cy.wrap($input.eq(0))
                                .clear()
                                .type(dadosParametros.Receita.importacao.dataRecebimento, { timeout: 1000 })
                        }
                    })
            })
    });

    cy.wrap(null).then(() => {
        cy.get(clusterReceitas)
            .each(($select) => {
                cy.wrap($select)
                    .then(() => {
                        const $clusterValue = String($select.val())

                        if ($clusterValue.length > 0) {
                            cy.log('O teste seguirá, pois o cluster já foi selecionado.')
                        }
                        cy.get(clusterReceitas)
                            .select(dadosParametros.Receita.importacao.cluster)
                    })
            })
    });

    cy.wrap(null).then(() => {
        cy.get(`input[name="receita_tipo"][value="${dadosParametros.Receita.importacao.tipoReceita}"]`)
            .each(($input) => {
                cy.wrap($input)
                    .then(() => {
                        if ($input.length > 0) {
                            cy.wrap($input.first())
                                .check({ timeout: 20000, force: true });
                        } else {
                            cy.wrap($input.eq(0))
                                .check({ timeout: 20000, force: true });
                        }
                    })
            })
    })

    cy.wrap(null).then(() => {
        const $aliasModal = Cypress.$(btnmensagemModal, { timeout: 2000 });
        if ($aliasModal.is(':visible')) {
            cy.log('O teste será prosseguido, uma vez que o elemento esperado não foi exibido na tela.');
        } else {
            cy.get('.bootbox-body', { timeout: 60000 })
                .as('mensagemModal')
                .then(($modals) => {
                    $modals.each((index, $modal) => {
                        cy.wrap($modal)
                            .then(($modal) => {
                                const mensagemModal = $modal.text();
                                if (mensagemModal.includes('Ocorreu um erro ao processar a solicitação. Por favor, tente novamente mais tarde.')) {
                                    throw new Error('Lamentamos informar que ocorreu uma falha de comunicação com o servidor em nuvem responsável pelo armazenamento das receitas. Por favor, verifique a aplicação para obter mais informações.');
                                } else {
                                    cy.wait(200);
                                    cy.get(btnmensagemModal, { timeout: 60000 })
                                        .click({ force: true, multiple: true, timeout: 5000 });
                                }
                            });
                    });
                });
        }
    });

    cy.wrap(null).then(() => {
        cy.get(textoObservacaoInternaReceitas)
            .each(($element) => {
                cy.wrap($element)
                    .then(() => {
                        if ($element.length > 1) {
                            cy.wrap($element.first())
                                .clear({})
                                .type(dadosParametros.Receita.importacao.textoObservacaoReceita, { timeout: 1000 })
                        } else {
                            cy.wrap($element.eq(0))
                                .clear()
                                .type(dadosParametros.Receita.importacao.textoObservacaoReceita, { timeout: 1000 })
                        }
                    })
            })
    })

    cy.getElementAndCheck(el.Receitas.urgenteReceitas)
   
    cy.getElementAndCheck(el.Receitas.clienteAlertaReceitas)
  
    cy.getElementAndCheck(el.Receitas.medicamentocontroladoReceitas)

    const message: CheckAndThrowError[] = [
        {
            condition: Cypress.$(importarImagemReceitas).val() !== null && Cypress.$(importarImagemReceitas).val() !== '',
            errorMessage: 'Por favor, faça a importação de uma imagem de receita.',
        },
        {
            condition: Cypress.$(prescritorReceitas).val() !== null && Cypress.$(prescritorReceitas).val() !== '',
            errorMessage: 'Por favor, relacione um médico a esta receita.',
        },
        {
            condition: Cypress.$(pacienteReceitas).val() !== null && Cypress.$(pacienteReceitas).val() !== '',
            errorMessage: 'Por favor, relacione um paciente a esta receita.',
        },
        {
            condition: Cypress.$(atendenteResponsavel).val() !== null && Cypress.$(atendenteResponsavel).val() !== '',
            errorMessage: 'Por favor, relacione um atendente responsável a esta receita.',
        },
        {
            condition: Cypress.$(canalRecebimentoImportacao).val() !== null && Cypress.$(canalRecebimentoImportacao).val() !== '',
            errorMessage: 'Por favor, escolha um canal de contato.',
        },
        {
            condition: Cypress.$(dataRecebimentoReceitas).val() !== null && Cypress.$(dataRecebimentoReceitas).val() !== '',
            errorMessage: 'Por favor, defina uma data de recebimento da receita.',
        },
        {
            condition: Cypress.$(`input[name="receita_tipo"][value="${dadosParametros.Receita.importacao.tipoReceita}"]`).val() !== null && Cypress.$(`input[name="receita_tipo"][value="${dadosParametros.Receita.importacao.tipoReceita}"]`).val() !== '',
            errorMessage: 'Por favor, defina qual o tipo da receita.',
        },
        {
            condition: Cypress.$(clusterReceitas).val() !== null && Cypress.$(clusterReceitas).val() !== '',
            errorMessage: 'Por favor, escolha um cluster.',
        },
    ]
    const checkAndThrowError = (params: CheckAndThrowError[], defaultMessage: string) => {
        const successMessage = 'Sucesso! Uma nova receita foi gerada...'
        for (const { condition, errorMessage } of params) {
            if (condition && errorMessage === defaultMessage || !condition && successMessage === defaultMessage) {
                throw new Error(`${errorMessage}`);
            } else {
                return cy.wrap({ success: 'A importação da receita foi concluída com êxito.' })
            }
        }
    }

    cy.wrap(null).then(() => {
        cy.get(salvarReceitas)
            .each(($input) => {
                cy.wrap($input)
                    .then(() => {

                        cy.get(salvarReceitas, { timeout: 10000 })
                            .click({ timeout: 200 });
                    })
            })
    });

    const $progressBar = cy.get(barraProgressoSalvarReceita).as('barraProgressoSalvarReceita')
        .then(() => {
            if (!Cypress.$($progressBar).is(':visible')) {
                cy.get(mensagemModal, { timeout: 60000 })
                    .should('be.visible')
                    .as('mensagemModalAlias')
                    .then(($modal) => {
                        const mensagemModal = $modal.text();
                        checkAndThrowError(message, mensagemModal);
                    }),

                cy.getElementAndClick(okModalMensagem);
                
                if (Cypress.$(fecharRegistrarReceitas).is(':visible')) {
                    cy.getElementAndClick(fecharRegistrarReceitas);
                }
                cy.getElementAndClick(dataRecebimentoGrid, dataRecebimentoGrid)

                cy.capturarNumeroReceita(numeroReceita);
            } else {
                cy.get('@barraProgressoSalvarReceita', { timeout: 60000 })
                throw new Error('Solicitamos a gentileza de verificar o status da importação de receitas, uma vez que o processo ainda não foi concluído após 60 segundos. Agradecemos sua atenção.')
            }


        })
})

