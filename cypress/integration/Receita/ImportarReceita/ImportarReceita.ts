/// <reference types="cypress" />

import { elements as el } from '../../../elements';
import { } from '../../../support/commands/commands';
import { faker } from '@faker-js/faker';
import { dadosParametros } from '../../../DadosParametros';
import 'cypress-wait-until';


const ambiente = Cypress.env('AMBIENTE');
const dadosAmbiente = Cypress.env(ambiente);

export const {
    btnSucessoModal,
    mensagemModal,
    okModalMensagem,
    btnmensagemModal,
    btnFalhaModal,

} = el.Compartilhado;

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
    fecharRegistrarReceitas,
    clusterReceitas,
    menuReceitasReduzido,
    checkboxMarcarUso,
    acoes,
    visualizarReceitas,


} = el.Receitas;




export const inserirObservacaoInterna = (areaTexto: string, conteudo: string, useLoremIpsum?: boolean): void => {
    if (useLoremIpsum) {
        conteudo = faker.lorem.paragraph();
    }
    cy.get(areaTexto)
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
        cy.get(okModalMensagem, { timeout: 20000 })
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
            dataInicial: dadosParametros.Receita.busca.dataInicial,
            dataFinal: dadosParametros.Receita.busca.dataFinal,
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
            dataInicial: dadosParametros.Receita.busca.dataInicial,
            dataFinal: dadosParametros.Receita.busca.dataFinal,
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
            dataInicial: dadosParametros.Receita.busca.dataInicial,
            dataFinal: dadosParametros.Receita.busca.dataFinal,
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
            dataInicial: dadosParametros.Receita.busca.dataInicial,
            dataFinal: dadosParametros.Receita.busca.dataFinal,
            cluster: dadosParametros.Receita.busca.cluster,
        });
    });

    it('Deve realizar busca de Receitas filtrando por pedido', function () {
        cy.login(dadosAmbiente.USER_ATENDENTE1, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin, dadosAmbiente.BASE_URL_HOMOLOG)
            .then((result) => {
                assert.exists(result.success, result.error)
            })
        cy.getElementAndClick(menuReceitas, menuImportarReceitas);
        cy.buscarReceita({
            dataInicial: dadosParametros.Receita.busca.dataInicial,
            dataFinal: dadosParametros.Receita.busca.dataFinal,
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
            dataInicial: dadosParametros.Receita.busca.dataInicial,
            dataFinal: dadosParametros.Receita.busca.dataFinal,
            canalRecebimento: dadosParametros.Receita.busca.dataRecebimento
        });
    });

    it('Deve realizar busca de Receitas filtrando por atendente responsável', function () {
        cy.login(dadosAmbiente.USER_ATENDENTE1, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin, dadosAmbiente.BASE_URL_HOMOLOG)
            .then((result) => {
                assert.exists(result.success, result.error)
            })
        cy.getElementAndClick(menuReceitas, menuImportarReceitas);
        cy.buscarReceita({
            dataInicial: dadosParametros.Receita.busca.dataInicial,
            dataFinal: dadosParametros.Receita.busca.dataFinal,
            atendenteResponsavel: dadosParametros.Receita.busca.atendenteResponsavel
        });
    });

    it('Deve realizar busca de Receitas filtrando por pendências', function () {
        cy.login(dadosAmbiente.USER_ATENDENTE1, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin, dadosAmbiente.BASE_URL_HOMOLOG)
            .then((result) => {
                assert.exists(result.success, result.error)
            })
        cy.getElementAndClick(menuReceitas, menuImportarReceitas);
        cy.buscarReceita({
            dataInicial: dadosParametros.Receita.busca.dataInicial,
            dataFinal: dadosParametros.Receita.busca.dataFinal,
            pendencia: dadosParametros.filtroPendentes.Pendentes
        });
    });



    it.only('Deve realizar importação de Receitas', function () {

        cy.waitModalAndClick('#changelogs > .modal-dialog > .modal-content > .modal-footer > .btn', '#changelogs > .modal-dialog > .modal-content > .modal-footer > .btn');

        cy.getElementAndClick(menuReceitas, menuImportarReceitas);

        cy.importarReceita().then((result) => {
            assert.exists(result.success, result.error)
        });
    });



    it('Deve realizar marcação de uso nas receitas.', function () {
        cy.getElementAndClick(menuReceitas, menuImportarReceitas);

        cy.marcarUso(checkboxMarcarUso, dadosParametros.Receita.busca.usuárioMarcarUso);
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



    it('Deve excluir receitas.', function () {

        cy.getElementAndClick(menuReceitas, menuImportarReceitas, acoes);

        cy.excluirReceita(excluirReceitas);

        cy.getElementAndClick(btnmensagemModal);
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