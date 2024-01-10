/// <reference types="cypress" />

import { elements as el } from '../../../elements';
import { } from '../../../support/commands/commands';
import { faker } from '@faker-js/faker';
import { dadosParametros } from '../../../DadosParametros';


const ambiente = Cypress.env('AMBIENTE');
const dadosAmbiente = Cypress.env(ambiente);


export const {
    dataRecebimentoReceitas,
    okModalMensagem,
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
    modalSugestaoRelacaoPrescritor


} = el.Receitas;


export const sugestaoRelacaoPrescritor = (): void => {
    // Usar um alias para a modal
    const $modalSRP = Cypress.$('.bootbox .modal-dialog .modal-content .modal-footer .btn-primary')
    $modalSRP;
    cy.get('.bootbox .modal-dialog .modal-content .modal-footer .btn-primary')
        .should('be.visible')
        .as('modal');

    // Usar o comando then para acessar o alias e verificar se a modal é visível
    cy.get('@modal').then(($modal) => {
        if (!$modal.is(':visible')) {
            cy.log('Teste irá continuar porque a modal não foi apresentada em tela.');
        } else {
            // Usar o comando click diretamente no alias
            cy.get('@modal').click();
        }
    });
};


// export const sugestaoRelacaoPrescritor = (): void => {
//     // Obter o elemento usando Cypress.$
//     const $modalSRP = Cypress.$('.bootbox .modal-dialog .modal-content .modal-footer .btn-primary');

//     // Verificar se o elemento foi encontrado
//     if ($modalSRP.length > 0) {
//         // Criar um alias para o elemento usando cy.wrap
//         cy.wrap($modalSRP).as('modal');

//         // Usar o comando then para acessar o alias e verificar se a modal é visível
//         cy.get('@modal').then(($modal) => {
//             if (!$modal.is(':visible')) {
//                 cy.log('Teste irá continuar porque a modal não foi apresentada em tela.');
//             } else {
//                 // Usar o comando click diretamente no alias
//                 cy.get('@modal').click();
//             }
//         });
//     } else {
//         cy.log('O elemento não foi encontrado. Teste irá continuar.');
//     }
// };


export const inserirObservacaoInterna = (areaTexto: string, conteudo: string, useLoremIpsum?: boolean): void => {
    if (useLoremIpsum) {
        conteudo = faker.lorem.paragraph();
    }
    cy.getVisible(areaTexto)
        .should('exist')
        .clear()
        .type(conteudo)
        .should('not.be.empty');
};

export const marcarUrgente = (urgente: string): void => {
    cy.getElementAndClick(urgente)
};

export const marcarClienteAlerta = (clienteAlerta: string): void => {
    cy.getElementAndClick(clienteAlerta)
};

export const marcarMedicamentoControlado = (medicamentoControlado: string): void => {
    cy.getElementAndClick(medicamentoControlado)
};

export const salvarReceita = (salvarImportacao): void => {
    cy.get(salvarImportacao, { timeout: 20000 })
        .click({ force: true });

    if (Cypress.$(okModalMensagem).length > 0 && Cypress.$(okModalMensagem).is(':visible')) {
        cy.getVisible(okModalMensagem, { timeout: 20000 })
            .click();
    } else {
        cy.log('Teste irá continuar porque a modal não foi apresentada em tela.')
    }
    cy.get(salvarImportacao, { timeout: 20000 }).then(($elemento) => {
        cy.wrap($elemento)
            .click();
    });


    cy.url().should('contain', dadosParametros.Url.importarReceitas)
};


describe('Tela importação de receitas.', function () {

    beforeEach(function () {

    })


    // it('Deve acessar importar receitas logado com perfil atendente', function () {
    //     cy.login(dadosAmbiente.USER_ATENDENTE1, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin)
    //         .then((result) => {
    //             assert.exists(result.success, result.error)
    //         })
    //     cy.getElementAndClick(menuReceitas, menuImportarReceitas, menuReceitasReduzido);
    // })

    // it('Deve acessar importar receitas logado com perfil inclusão', function () {
    //     // cy.login(dadosAmbiente.USER_INCLUSAO, dadosAmbiente.PASSWORD);
    //     cy.login(dadosAmbiente.USER_INCLUSAO, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin).then((result) => {
    //         assert.exists(result.success, result.error)
    //     });
    //     cy.getElementAndClick(menuReceitas, menuImportarReceitas, menuReceitasReduzido);
    // })

    // it('Deve acessar importar receitas logado com perfil conferência de entrada', function () {
    //     // cy.login(dadosAmbiente.USER_CONFENTRADA, dadosAmbiente.PASSWORD);
    //     cy.login(dadosAmbiente.USER_CONFENTRADA, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin).then((result) => {
    //         assert.exists(result.success, result.error)
    //     });
    //     cy.getElementAndClick(menuReceitas, menuImportarReceitas, menuReceitasReduzido);
    // })

    // it('Deve acessar importar receitas logado com perfil conferência de saída', function () {
    //     // cy.login(dadosAmbiente.USER_CONFSAIDA, dadosAmbiente.PASSWORD);
    //     cy.login(dadosAmbiente.USER_CONFSAIDA, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin).then((result) => {
    //         assert.exists(result.success, result.error)
    //     });
    //     cy.getElementAndClick(menuReceitas, menuImportarReceitas, menuReceitasReduzido);
    // })

    // it('Deve acessar importar receitas logado com perfil expedição', function () {
    //     // cy.login(dadosAmbiente.USER_EXPEDICAO, dadosAmbiente.PASSWORD);
    //     cy.login(dadosAmbiente.USER_EXPEDICAO, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin).then((result) => {
    //         assert.exists(result.success, result.error)
    //     });
    //     cy.getElementAndClick(menuReceitas, menuImportarReceitas, menuReceitasReduzido);
    // })



    // it.only('Deve realizar busca de Receitas filtrando por data', function () {
    //     // cy.login(dadosAmbiente.USER_ORCAMENTISTA, dadosAmbiente.PASSWORD);
    //     cy.login(dadosAmbiente.USER_ORCAMENTISTA, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin).then((result) => {
    //         assert.exists(result.success, result.error)
    //     });
    //     cy.getElementAndClick(menuReceitas, menuImportarReceitas);

    //     cy.buscarReceita({
    //         dataInicial: dadosParametros.Receita.dataInicial,
    //         dataFinal: dadosParametros.Receita.dataFinal,
    //         prescritor: dadosParametros.Prescritor.crmPrescritor,
    //     });
    // });



    // it('Deve realizar busca de Receitas filtrando por paciente', function () {
    //     cy.login(dadosAmbiente.USER_ATENDENTE1, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin)
    //         .then((result) => {
    //             assert.exists(result.success, result.error)
    //         })
    //     cy.getElementAndClick(menuReceitas, menuImportarReceitas);

    //     cy.buscarReceita({
    //         dataInicial: dadosParametros.Receita.dataInicial,
    //         dataFinal: dadosParametros.Receita.dataFinal,
    //         paciente: dadosParametros.Paciente.codigoPaciente,
    //     });
    // });



    // it('Deve realizar busca de Receitas filtrando por prescritor', function () {
    //     cy.login(dadosAmbiente.USER_ATENDENTE1, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin)
    //         .then((result) => {
    //             assert.exists(result.success, result.error)
    //         })
    //     cy.getElementAndClick(menuReceitas, menuImportarReceitas);


    //     cy.buscarReceita({
    //         dataInicial: dadosParametros.Receita.dataInicial,
    //         dataFinal: dadosParametros.Receita.dataFinal,
    //         prescritor: dadosParametros.Prescritor.crmPrescritor,
    //     });
    // });

    // it('Deve realizar busca de Receitas filtrando por cluster', function () {
    //     cy.login(dadosAmbiente.USER_ATENDENTE1, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin)
    //         .then((result) => {
    //             assert.exists(result.success, result.error)
    //         })
    //     cy.getElementAndClick(menuReceitas, menuImportarReceitas);
    //     cy.buscarReceita({
    //         dataInicial: dadosParametros.Receita.dataInicial,
    //         dataFinal: dadosParametros.Receita.dataFinal,
    //         cluster: dadosParametros.ClusterImportarReceitas.cluster1,
    //     });
    // });

    // it('Deve realizar busca de Receitas filtrando por pedido', function () {
    //     cy.login(dadosAmbiente.USER_ATENDENTE1, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin)
    //         .then((result) => {
    //             assert.exists(result.success, result.error)
    //         })
    //     cy.getElementAndClick(menuReceitas, menuImportarReceitas);
    //     cy.buscarReceita({
    //         dataInicial: dadosParametros.Receita.dataInicial,
    //         dataFinal: dadosParametros.Receita.dataFinal,
    //         pedido: dadosParametros.OrcamentoFilial.pedido,
    //         pendencia: dadosParametros.pendencia.Todos
    //     });
    // });

    // it('Deve realizar busca de Receitas filtrando por canal de recebimento', function () {
    //     cy.login(dadosAmbiente.USER_ATENDENTE1, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin)
    //         .then((result) => {
    //             assert.exists(result.success, result.error)
    //         })
    //     cy.getElementAndClick(menuReceitas, menuImportarReceitas);
    //     cy.buscarReceita({
    //         dataInicial: dadosParametros.Receita.dataInicial,
    //         dataFinal: dadosParametros.Receita.dataFinal,
    //         canalRecebimento: dadosParametros.canalRecebimento.WhatsappClinicaPrescritor
    //     });
    // });

    // it('Deve realizar busca de Receitas filtrando por atendente responsável', function () {
    //     cy.login(dadosAmbiente.USER_ATENDENTE1, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin)
    //         .then((result) => {
    //             assert.exists(result.success, result.error)
    //         })
    //     cy.getElementAndClick(menuReceitas, menuImportarReceitas);
    //     cy.buscarReceita({
    //         dataInicial: dadosParametros.Receita.dataInicial,
    //         dataFinal: dadosParametros.Receita.dataFinal,
    //         atendenteResponsavel: dadosParametros.Receita.atendenteResponsavel
    //     });
    // });

    // it('Deve realizar busca de Receitas filtrando por pendências', function () {
    //     cy.login(dadosAmbiente.USER_ATENDENTE1, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin)
    //         .then((result) => {
    //             assert.exists(result.success, result.error)
    //         })
    //     cy.getElementAndClick(menuReceitas, menuImportarReceitas);
    //     cy.buscarReceita({
    //         dataInicial: dadosParametros.Receita.dataInicial,
    //         dataFinal: dadosParametros.Receita.dataFinal,
    //         pendencia: dadosParametros.filtroPendentes.Pendentes
    //     });
    // });




    it.only('Deve realizar importação de Receitas', function () {
        cy.login(dadosAmbiente.USER_ADMIN, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin)
            .then((result) => {
                assert.exists(result.success, result.error)
            })

        cy.getElementAndClick(menuReceitas, menuImportarReceitas, abrirModalRegistrarReceitas);

        cy.inserirArquivo('img/ReceitaJpeg(1).jpeg', importarImagemReceitas);

        cy.get(prescritorReceitas).as('prescritorReceitas')
        cy.get('@prescritorReceitas')
            .type(dadosParametros.Prescritor.crmPrescritor)
        cy.get(el.Compartilhado.sugestaoAutocomplete).as('sugestaoAutocomplete')
        cy.get('@sugestaoAutocomplete')
            .click();

        sugestaoRelacaoPrescritor();

        cy.getElementAndCheck(dadosParametros.parametroBuscaPaciente.Cdcli);

        // cy.get(pacienteReceitas).as('pacienteReceitas')
        // cy.get('@pacienteReceitas')
        //     .type(dadosParametros.Paciente.codigoPaciente)
        //     .type('{downarrow}{enter}');

        cy.get(pacienteReceitas).as('pacienteReceitas')
        cy.get('@pacienteReceitas')
            .type(dadosParametros.Paciente.codigoPaciente)
        cy.get('body > div:nth-child(324)').as('sugestaoAutocomplete')
        cy.get('@sugestaoAutocomplete')
            .click({force:true});
        cy.pause();

        cy.getSelectOptionByValue(canalRecebimentoReceitas, dadosParametros.canalRecebimento.Whatsapp);

        cy.getSelectOptionByValue(clusterReceitas, dadosParametros.ClusterImportarReceitas.cluster1)

        cy.getElementAndType(atendenteResponsavelReceitas, dadosParametros.Usuario.usuarioAtribuido)
            // .wait(2000)
            .as('elementType')
        cy.get('@elementType')
            .type('{downarrow}{enter}')

        cy.inserirDataUmDiaMenosDiaAtual(dataRecebimentoReceitas);

        cy.getElementAndCheck(dadosParametros.tipoReceita.Repeticao);

        if (Cypress.$(okModalMensagem).length > 0 && Cypress.$(okModalMensagem).is(':visible')) {
            cy.getVisible(okModalMensagem, { timeout: 20000 })
                .click();
        } else {
            cy.log('Teste pode continuar porque a modal não foi apresentada em tela.')
        }

        cy.getElementAndType(textoObservacaoInternaReceitas, '');

        cy.getElementAndCheck(urgenteReceitas, clienteAlertaReceitas, medicamentocontroladoReceitas);

        cy.getElementAndClick(salvarReceitas);

    });



    // it('Deve realizar marcação de uso nas receitas.', function () {
    //     cy.acessarMenuReceitas(menuReceitas);

    //     cy.acessarImportarReceitas(menuImportarReceitas);
    //     

    //     cy.marcarUso(checkboxMarcarUso);

    //     cy.getElementAndClick(mensagemSucessoModal);
    // });



    // it('Deve visualizar receitas', function () {
    //     cy.acessarMenuReceitas(menuReceitas);

    //     cy.acessarImportarReceitas(menuImportarReceitas);
    //     

    //     cy.getElementAndClick(acoes);
    //     cy.visualizarReceita(visualizarReceitas);
    // });



    // it('Deve clonar receitas.', function () {
    //     cy.acessarMenuReceitas(menuReceitas);

    //     cy.acessarImportarReceitas(menuImportarReceitas);
    //     

    //     cy.getElementAndClick(acoes);
    //     cy.clonarReceita(clonarReceitas);
    // });



    // it('Deve excluir receitas.', function () {
    //     cy.acessarMenuReceitas(menuReceitas);

    //     cy.acessarImportarReceitas(menuImportarReceitas);
    //     

    //     cy.getElementAndClick(acoes);
    //     cy.excluirReceita(excluirReceitas);

    //     cy.getElementAndClick(mensagemSucessoModal);

    // });



    // it('Deve inserir observação farmacêutica.', function () {
    //     cy.acessarMenuReceitas(menuReceitas);

    //     cy.acessarImportarReceitas(menuImportarReceitas);
    //     

    //     cy.getElementAndClick(acoes);
    //     cy.inserirObservacaoFarmaceutica(acessarObservacoesFarmaceuticas, dadosParametros.Receita.senhaObservacaoFarmaceutica, dadosParametros.Receita.textoObservacaoFarmaceutica);
    // });



    // it('Deve excluir observação farmacêutica', function () {
    //     cy.acessarMenuReceitas(menuReceitas);

    //     cy.acessarImportarReceitas(menuImportarReceitas);
    //     

    //     cy.getElementAndClick(acoes);
    //     cy.excluirObservacaoFarmaceutica(acessarObservacoesFarmaceuticas);

    // });



    // it('Deve criar dúvida técnica.', function () {
    //     cy.acessarMenuReceitas(menuReceitas);

    //     cy.acessarImportarReceitas(menuImportarReceitas);
    //     

    //     cy.getElementAndClick(acoes);
    //     cy.CriarDuvidaTecnica(acessarDuvidasTecnicas, dadosParametros.categoriaDuvidaTecnica.DuvidaInterna, dadosParametros.Receita.textoDuvidaTecnica, dadosParametros.Usuario.usuarioAtribuido);

    // });



    // it('Deve atualizar modal de dúvida técnica.', function () {
    //     cy.acessarMenuReceitas(menuReceitas);

    //     cy.acessarImportarReceitas(menuImportarReceitas);
    //     

    //     cy.getElementAndClick(acoes);
    //     cy.atualizarModalDuvidaTecnica(atualizarModalDuvidasTecnicas);
    // });



    // it('Deve alterar o responsável pela resposta da dúvida técnica ', function () {
    //     cy.acessarMenuReceitas(menuReceitas);

    //     cy.acessarImportarReceitas(menuImportarReceitas);
    //     

    //     cy.getElementAndClick(acoes);
    //     cy.alterarResponsavelRespostaDuvidaTecnica(acessarDuvidasTecnicas, dadosParametros.Usuario.usuarioAtribuido);
    // });



    // it('Deve marcar dúvida técnica como resolvido.', function () {
    //     cy.acessarMenuReceitas(menuReceitas);

    //     cy.acessarImportarReceitas(menuImportarReceitas);
    //     

    //     cy.getElementAndClick(acoes);
    //     cy.marcarDuvidaTecnicaResolvido(acessarDuvidasTecnicas);
    // });



    // it('Deve excluir dúvida técnica.', function () {
    //     cy.acessarMenuReceitas(menuReceitas);

    //     cy.acessarImportarReceitas(menuImportarReceitas);
    //     

    //     cy.getElementAndClick(acoes);
    //     cy.excluirDuvidaTecnica(acessarDuvidasTecnicas);
    // });



    // it('Deve responder dúvida técnica.', function () {
    //     cy.acessarMenuReceitas(menuReceitas);

    //     cy.acessarImportarReceitas(menuImportarReceitas);
    //     

    //     cy.getElementAndClick(acoes);
    //     cy.responderDuvidaTecnica(acessarDuvidasTecnicas, dadosParametros.statusDuvidaTecnica.AguardandoPrescritor, dadosParametros.Receita.textoRespostaDuvidaTecnica);
    // });



    // it('Deve editar receita', function () {
    //     cy.acessarMenuReceitas(menuReceitas);

    //     cy.acessarImportarReceitas(menuImportarReceitas);
    //     

    //     cy.getElementAndClick(acoes);

    //     cy.getElementAndClick(editarReceita);
    //     cy.wait(2000)



    //     // cy.inserirTipoReceita();
    //     // cy.editarReceita('img/ReceitaJpeg(1).jpeg', importarImagemReceitas, dadosParametros.Prescritor.crmPrescritor.toString(), dadosParametros.parametroBuscaPaciente.Cdcli, dadosParametros.Paciente.codigoPaciente.toString(), dadosParametros.cluster.clusterInjetaveis.toString(), atendenteResponsavelReceitas, dadosParametros.Usuario.usuarioAtribuido,atendenteResponsavelReceitas, dadosParametros.Usuario.usuarioAtribuido,dataRecebimentoReceitas);


    // })

})