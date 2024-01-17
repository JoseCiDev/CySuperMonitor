/// <reference types="cypress" />

import { elements as el } from '../../../elements';
import { } from '../../../support/commands/commands';
import { faker } from '@faker-js/faker';
import { dadosParametros } from '../../../DadosParametros';
import 'cypress-wait-until';


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
    modalSugestaoRelacaoPrescritor,
    barraProgressoSalvarReceita,
    autocompleteAtendenteResponsavel

} = el.Receitas;



export const setSugestaoRelacaoPrescritor = (): void => {
    cy.wrap(null).then(() => {
        const $aliasModal = Cypress.$('.bootbox .modal-dialog .modal-content .modal-footer .btn-primary')
        if ($aliasModal.each) {
            cy.get('.bootbox .modal-dialog .modal-content .modal-footer .btn-primary')
                .as('modal')
            cy.get('@modal')
                .should('be.visible')
                .click()
        }
        else {
            cy.log('O teste será prosseguido, uma vez que a modal não foi exibida na tela.')
        }

    });
};


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
        cy.log('O teste será prosseguido, uma vez que a modal não foi exibida na tela.')
    }
    cy.get(salvarImportacao, { timeout: 20000 }).then(($elemento) => {
        cy.wrap($elemento)
            .click();
    });


    cy.url().should('contain', dadosParametros.Url.importarReceitas)
};


describe('Tela importação de receitas.', function () {

    beforeEach(function () {
        cy.login(dadosAmbiente.USER_ADMIN, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin, dadosAmbiente.BASE_URL_HOMOLOG)
            .then((result) => {
                assert.exists(result.success, result.error)
            })
    })


    it('Deve acessar importar receitas logado com perfil atendente', function () {
        cy.login(dadosAmbiente.USER_ATENDENTE1, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin, dadosAmbiente.BASE_URL_HOMOLOG)
            .then((result) => {
                assert.exists(result.success, result.error)
            })
        cy.getElementAndClick(menuReceitas, menuImportarReceitas, menuReceitasReduzido);
    })

    it('Deve acessar importar receitas logado com perfil inclusão', function () {
        // cy.login(dadosAmbiente.USER_INCLUSAO, dadosAmbiente.PASSWORD);
        cy.login(dadosAmbiente.USER_INCLUSAO, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin, dadosAmbiente.BASE_URL_HOMOLOG).then((result) => {
            assert.exists(result.success, result.error)
        });
        cy.getElementAndClick(menuReceitas, menuImportarReceitas, menuReceitasReduzido);
    })

    it('Deve acessar importar receitas logado com perfil conferência de entrada', function () {
        // cy.login(dadosAmbiente.USER_CONFENTRADA, dadosAmbiente.PASSWORD);
        cy.login(dadosAmbiente.USER_CONFENTRADA, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin, dadosAmbiente.BASE_URL_HOMOLOG).then((result) => {
            assert.exists(result.success, result.error)
        });
        cy.getElementAndClick(menuReceitas, menuImportarReceitas, menuReceitasReduzido);
    })

    it('Deve acessar importar receitas logado com perfil conferência de saída', function () {
        // cy.login(dadosAmbiente.USER_CONFSAIDA, dadosAmbiente.PASSWORD);
        cy.login(dadosAmbiente.USER_CONFSAIDA, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin, dadosAmbiente.BASE_URL_HOMOLOG).then((result) => {
            assert.exists(result.success, result.error)
        });
        cy.getElementAndClick(menuReceitas, menuImportarReceitas, menuReceitasReduzido);
    })

    it('Deve acessar importar receitas logado com perfil expedição', function () {
        // cy.login(dadosAmbiente.USER_EXPEDICAO, dadosAmbiente.PASSWORD);
        cy.login(dadosAmbiente.USER_EXPEDICAO, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin, dadosAmbiente.BASE_URL_HOMOLOG).then((result) => {
            assert.exists(result.success, result.error)
        });
        cy.getElementAndClick(menuReceitas, menuImportarReceitas, menuReceitasReduzido);
    })



    it('Deve realizar busca de Receitas filtrando por data', function () {
        // cy.login(dadosAmbiente.USER_ORCAMENTISTA, dadosAmbiente.PASSWORD);
        cy.login(dadosAmbiente.USER_ORCAMENTISTA, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin, dadosAmbiente.BASE_URL_HOMOLOG).then((result) => {
            assert.exists(result.success, result.error)
        });
        cy.getElementAndClick(menuReceitas, menuImportarReceitas);

        cy.buscarReceita({
            dataInicial: dadosParametros.Receita.dataInicial,
            dataFinal: dadosParametros.Receita.dataFinal,
            prescritor: dadosParametros.Prescritor.crmPrescritor,
        });
    });



    it('Deve realizar busca de Receitas filtrando por paciente', function () {
        cy.login(dadosAmbiente.USER_ATENDENTE1, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin, dadosAmbiente.BASE_URL_HOMOLOG)
            .then((result) => {
                assert.exists(result.success, result.error)
            })
        cy.getElementAndClick(menuReceitas, menuImportarReceitas);

        cy.buscarReceita({
            dataInicial: dadosParametros.Receita.dataInicial,
            dataFinal: dadosParametros.Receita.dataFinal,
            paciente: dadosParametros.Paciente.codigoPaciente,
        });
    });



    it('Deve realizar busca de Receitas filtrando por prescritor', function () {
        cy.login(dadosAmbiente.USER_ATENDENTE1, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin, dadosAmbiente.BASE_URL_HOMOLOG)
            .then((result) => {
                assert.exists(result.success, result.error)
            })
        cy.getElementAndClick(menuReceitas, menuImportarReceitas);


        cy.buscarReceita({
            dataInicial: dadosParametros.Receita.dataInicial,
            dataFinal: dadosParametros.Receita.dataFinal,
            prescritor: dadosParametros.Prescritor.crmPrescritor,
        });
    });

    it('Deve realizar busca de Receitas filtrando por cluster', function () {
        cy.login(dadosAmbiente.USER_ATENDENTE1, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin, dadosAmbiente.BASE_URL_HOMOLOG)
            .then((result) => {
                assert.exists(result.success, result.error)
            })
        cy.getElementAndClick(menuReceitas, menuImportarReceitas);
        cy.buscarReceita({
            dataInicial: dadosParametros.Receita.dataInicial,
            dataFinal: dadosParametros.Receita.dataFinal,
            cluster: dadosParametros.ClusterImportarReceitas.cluster1,
        });
    });

    it('Deve realizar busca de Receitas filtrando por pedido', function () {
        cy.login(dadosAmbiente.USER_ATENDENTE1, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin, dadosAmbiente.BASE_URL_HOMOLOG)
            .then((result) => {
                assert.exists(result.success, result.error)
            })
        cy.getElementAndClick(menuReceitas, menuImportarReceitas);
        cy.buscarReceita({
            dataInicial: dadosParametros.Receita.dataInicial,
            dataFinal: dadosParametros.Receita.dataFinal,
            pedido: dadosParametros.OrcamentoFilial.pedido,
            pendencia: dadosParametros.pendencia.Todos
        });
    });

    it('Deve realizar busca de Receitas filtrando por canal de recebimento', function () {
        cy.login(dadosAmbiente.USER_ATENDENTE1, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin, dadosAmbiente.BASE_URL_HOMOLOG)
            .then((result) => {
                assert.exists(result.success, result.error)
            })
        cy.getElementAndClick(menuReceitas, menuImportarReceitas);
        cy.buscarReceita({
            dataInicial: dadosParametros.Receita.dataInicial,
            dataFinal: dadosParametros.Receita.dataFinal,
            canalRecebimento: dadosParametros.canalRecebimento.WhatsappClinicaPrescritor
        });
    });

    it('Deve realizar busca de Receitas filtrando por atendente responsável', function () {
        cy.login(dadosAmbiente.USER_ATENDENTE1, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin, dadosAmbiente.BASE_URL_HOMOLOG)
            .then((result) => {
                assert.exists(result.success, result.error)
            })
        cy.getElementAndClick(menuReceitas, menuImportarReceitas);
        cy.buscarReceita({
            dataInicial: dadosParametros.Receita.dataInicial,
            dataFinal: dadosParametros.Receita.dataFinal,
            atendenteResponsavel: dadosParametros.Receita.atendenteResponsavel
        });
    });

    it('Deve realizar busca de Receitas filtrando por pendências', function () {
        cy.login(dadosAmbiente.USER_ATENDENTE1, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin, dadosAmbiente.BASE_URL_HOMOLOG)
            .then((result) => {
                assert.exists(result.success, result.error)
            })
        cy.getElementAndClick(menuReceitas, menuImportarReceitas);
        cy.buscarReceita({
            dataInicial: dadosParametros.Receita.dataInicial,
            dataFinal: dadosParametros.Receita.dataFinal,
            pendencia: dadosParametros.filtroPendentes.Pendentes
        });
    });


    //deve ser um comando customizavel - OK
    //deve começar clicando em registrar receitas e terminar clicando em ok na mensagem de importado com sucesso - ok
    //deve ter condiçoes e retornos de erro para requisitos nao atendidos
    //deve ser tudo por funcao, ex: criar/cadadastrar, editar, excluir/remover - ok
    //regras deve ficar na chamada do comando customizavel, é importante que ele seja independente
    //verificar os parametros que o comando customizado deve ter para ser independente - ok

    it('Deve realizar importação de Receitas', function () {
        //acessar registrar receitas
        cy.getElementAndClick(menuReceitas, menuImportarReceitas);
        //importar imagem
        cy.inserirArquivo('img/ReceitaJpeg(1).jpeg', importarImagemReceitas);
        //prescritor
        cy.getElementAutocompleteTypeAndClick(
            prescritorReceitas,
            dadosParametros.Receita.importacao.prescritor,
            el.Compartilhado.sugestaoAutocomplete);
        setSugestaoRelacaoPrescritor();
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
        cy.wrap(null).then(() => {
            const $aliasModal = Cypress.$(mensagemSucessoModal)
            if ($aliasModal.each) {
                cy.get(mensagemSucessoModal, { timeout: 60000 })
                    .as('modal')
                cy.get('@modal', { timeout: 60000 })
                    .invoke('removeAttr', 'readonly' || 'hidden' || 'scroll' || 'auto')
                    .click({ force: true, multiple: true, timeout: 5000 })
            }
            else {
                cy.log('O teste será prosseguido, uma vez que a modal não foi exibida na tela.')
            }
        });
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
    });



    it('Deve realizar marcação de uso nas receitas.', function () {
        cy.getElementAndClick(menuReceitas, menuImportarReceitas);

        cy.marcarUso(checkboxMarcarUso);
    });



    it('Deve visualizar receitas', function () {
        cy.getElementAndClick(menuReceitas, menuImportarReceitas, acoes);

        cy.visualizarReceita(visualizarReceitas);
    });



    it('Deve clonar receitas.', function () {
        cy.get(menuReceitas).click();
        cy.get(menuImportarReceitas).click()
        cy.get(acoes).click();

        cy.clonarReceita(clonarReceitas);
    });



    it.only('Deve excluir receitas.', function () {

        cy.getElementAndClick(menuReceitas, menuImportarReceitas, acoes);
        //    cy.pause();
        cy.excluirReceita(excluirReceitas);

        cy.getElementAndClick(mensagemSucessoModal);
    });



    // it('Deve inserir observação farmacêutica.', function () {
    //     cy.getElementAndClick(menuReceitas, menuImportarReceitas,acoes);
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