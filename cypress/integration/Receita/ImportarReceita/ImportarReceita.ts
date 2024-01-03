/// <reference types="cypress" />

import { elements as el } from '../../../elements';
import { } from '../../../support/commands/commands';
import { faker } from '@faker-js/faker';
import { dadosParametros } from '../../../DadosParametros';


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


} = el.Receitas;






export const sugestaoRelacaoPrescritor = (): void => {
    cy.get('.col-md-12 > h2', { timeout: 20000 }).then(($elemento) => {

        if ($elemento.is(':visible')) {
            cy.get(mensagemConfirmacaoModal, { timeout: 50000 })
                .click();
            cy.wait(1000);
        }
        else {
            if ($elemento.is(':visible')) {
                cy.log('Teste pode continuar.')
            }
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

    if (Cypress.$(okSucessoReceitaImportadaModal).length > 0 && Cypress.$(okSucessoReceitaImportadaModal).is(':visible')) {
        cy.getVisible(okSucessoReceitaImportadaModal, { timeout: 20000 })
            .click();
    } else {
        cy.wait(1000)
        cy.getVisible(okSucessoReceitaImportadaModal, { timeout: 20000 })
            .click();
    }
    cy.get(salvarImportacao, { timeout: 20000 }).then(($elemento) => {
        cy.wrap($elemento)
            .click();
    });


    cy.url().should('contain', dadosParametros.Url.importarReceitas)
};


describe('Tela importação de receitas.', () => {

    beforeEach(function () {
        cy.login(dadosAmbiente.USER_ADMIN, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin)
            .then((result) => {
                if (result.error) {
                    cy.log(result.error);
                } else {
                    cy.log(result.success);
                }
            })
    })


    it.only('Deve acessar importar receitas logado com perfil atendente', () => {
        cy.login(' ',' ', el.Login.mensagemErroLogin)
            .then((result) => {
                assert.exists(result.success, result.error)
            })
        cy.acessarMenuReceitas(menuReceitas);
        cy.acessarImportarReceitas(menuImportarReceitas);
        cy.getElementAndClick(menuReceitasReduzido);
    })

    it('Deve acessar importar receitas logado com perfil inclusão', () => {
        // cy.login(dadosAmbiente.USER_INCLUSAO, dadosAmbiente.PASSWORD);
        cy.login(dadosAmbiente.USER_INCLUSAO, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin).then((result) => {
            assert.exists(result.success, result.error)
        });
        cy.acessarMenuReceitas(menuReceitas);
        cy.acessarImportarReceitas(menuImportarReceitas);
        cy.getElementAndClick(menuReceitasReduzido);
    })

    it('Deve acessar importar receitas logado com perfil conferência de entrada', () => {
        // cy.login(dadosAmbiente.USER_CONFENTRADA, dadosAmbiente.PASSWORD);
        cy.login(dadosAmbiente.USER_CONFENTRADA, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin).then((result) => {
            assert.exists(result.success, result.error)
        });
        cy.acessarMenuReceitas(menuReceitas);
        cy.acessarImportarReceitas(menuImportarReceitas);
        cy.getElementAndClick(menuReceitasReduzido);
    })

    it('Deve acessar importar receitas logado com perfil conferência de saída', () => {
        // cy.login(dadosAmbiente.USER_CONFSAIDA, dadosAmbiente.PASSWORD);
        cy.login(dadosAmbiente.USER_CONFSAIDA, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin).then((result) => {
            assert.exists(result.success, result.error)
        });
        cy.acessarMenuReceitas(menuReceitas);
        cy.acessarImportarReceitas(menuImportarReceitas);
        cy.getElementAndClick(menuReceitasReduzido);
    })

    it('Deve acessar importar receitas logado com perfil expedição', () => {
        // cy.login(dadosAmbiente.USER_EXPEDICAO, dadosAmbiente.PASSWORD);
        cy.login(dadosAmbiente.USER_EXPEDICAO, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin).then((result) => {
            assert.exists(result.success, result.error)
        });
        cy.acessarMenuReceitas(menuReceitas);
        cy.acessarImportarReceitas(menuImportarReceitas);
        cy.getElementAndClick(menuReceitasReduzido);
    })



    it('Deve realizar busca de Receitas filtrando por data', () => {
        // cy.login(dadosAmbiente.USER_ORCAMENTISTA, dadosAmbiente.PASSWORD);
        cy.login(dadosAmbiente.USER_ORCAMENTISTA, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin).then((result) => {
            assert.exists(result.success, result.error)
        });
        cy.acessarMenuReceitas(menuReceitas);
        cy.acessarImportarReceitas(menuImportarReceitas);
        cy.wait(2000);
        cy.buscarReceita({
            dataInicial: dadosParametros.Receita.dataInicial,
            dataFinal: dadosParametros.Receita.dataFinal,
            prescritor: dadosParametros.Prescritor.crmPrescritor,
        });
    });



    it('Deve realizar busca de Receitas filtrando por paciente', () => {
        cy.acessarMenuReceitas(menuReceitas);
        cy.acessarImportarReceitas(menuImportarReceitas);
        cy.wait(2000);
        cy.buscarReceita({
            dataInicial: dadosParametros.Receita.dataInicial,
            dataFinal: dadosParametros.Receita.dataFinal,
            paciente: dadosParametros.Paciente.codigoPaciente,
        });
    });



    it('Deve realizar busca de Receitas filtrando por prescritor', () => {
        cy.acessarMenuReceitas(menuReceitas);

        cy.acessarImportarReceitas(menuImportarReceitas);
        cy.wait(2000);

        cy.buscarReceita({
            dataInicial: dadosParametros.Receita.dataInicial,
            dataFinal: dadosParametros.Receita.dataFinal,
            prescritor: dadosParametros.Prescritor.crmPrescritor,
        });
    });

    it('Deve realizar busca de Receitas filtrando por cluster', () => {
        cy.acessarMenuReceitas(menuReceitas);
        cy.acessarImportarReceitas(menuImportarReceitas);
        cy.wait(2000);
        cy.buscarReceita({
            dataInicial: dadosParametros.Receita.dataInicial,
            dataFinal: dadosParametros.Receita.dataFinal,
            cluster: dadosParametros.cluster.cluster1,
        });
    });

    it('Deve realizar busca de Receitas filtrando por pedido', () => {
        cy.acessarMenuReceitas(menuReceitas);
        cy.acessarImportarReceitas(menuImportarReceitas);
        cy.wait(2000);
        cy.buscarReceita({
            dataInicial: dadosParametros.Receita.dataInicial,
            dataFinal: dadosParametros.Receita.dataFinal,
            pedido: dadosParametros.OrcamentoFilial.pedido,
            pendencia: dadosParametros.pendencia.Todos
        });
    });

    it('Deve realizar busca de Receitas filtrando por canal de recebimento', () => {
        cy.acessarMenuReceitas(menuReceitas);
        cy.acessarImportarReceitas(menuImportarReceitas);
        cy.wait(2000);
        cy.buscarReceita({
            dataInicial: dadosParametros.Receita.dataInicial,
            dataFinal: dadosParametros.Receita.dataFinal,
            canalRecebimento: dadosParametros.canalRecebimento.WhatsappClinicaPrescritor
        });
    });

    it('Deve realizar busca de Receitas filtrando por atendente responsável', () => {
        cy.acessarMenuReceitas(menuReceitas);
        cy.acessarImportarReceitas(menuImportarReceitas);
        cy.wait(2000);
        cy.buscarReceita({
            dataInicial: dadosParametros.Receita.dataInicial,
            dataFinal: dadosParametros.Receita.dataFinal,
            atendenteResponsavel: dadosParametros.Receita.atendenteResponsavel
        });
    });

    it('Deve realizar busca de Receitas filtrando por pendências', () => {
        cy.acessarMenuReceitas(menuReceitas);
        cy.acessarImportarReceitas(menuImportarReceitas);
        cy.wait(2000);
        cy.buscarReceita({
            dataInicial: dadosParametros.Receita.dataInicial,
            dataFinal: dadosParametros.Receita.dataFinal,
            pendencia: dadosParametros.filtroPendentes.Pendentes
        });
    });




    it('Deve realizar importação de Receitas', () => {
        cy.acessarMenuReceitas(menuReceitas);

        cy.acessarImportarReceitas(menuImportarReceitas);
        cy.wait(2000);

        cy.getElementAndClick(abrirModalRegistrarReceitas);

        cy.inserirArquivo('img/ReceitaJpeg(1).jpeg', importarImagemReceitas);


        cy.inserirPrescritor(dadosParametros.Prescritor.crmPrescritor.toString());


        // sugestaoRelacaoPrescritor();

        cy.inserirPaciente(dadosParametros.parametroBuscaPaciente.Cdcli, dadosParametros.Paciente.codigoPaciente);

        cy.selecionarCanalRecebimento(canalRecebimentoReceitas, dadosParametros.canalRecebimento.Whatsapp);

        cy.getSelectOptionByValue(clusterReceitas, dadosParametros.cluster.cluster1)

        cy.getElementAndType(atendenteResponsavelReceitas, dadosParametros.Usuario.usuarioAtribuido)
            .wait(2000)
            .type('{downarrow}{enter}')

        cy.inserirDataUmDiaMenosDiaAtual(dataRecebimentoReceitas);

        cy.inserirTipoReceita(dadosParametros.tipoReceita.Repeticao);

        if (cy.get(mensagemSucessoModal, { timeout: 20000 })) {
            cy.get(mensagemSucessoModal, { timeout: 20000 })
                .click();
        };

        inserirObservacaoInterna(textoObservacaoInternaReceitas, '', true);

        marcarUrgente(urgenteReceitas);

        marcarClienteAlerta(clienteAlertaReceitas);

        marcarMedicamentoControlado(medicamentocontroladoReceitas);

        salvarReceita(salvarReceitas);

    });



    // it('Deve realizar marcação de uso nas receitas.', () => {
    //     cy.acessarMenuReceitas(menuReceitas);

    //     cy.acessarImportarReceitas(menuImportarReceitas);
    //     cy.wait(2000);

    //     cy.marcarUso(checkboxMarcarUso);

    //     cy.getElementAndClick(mensagemSucessoModal);
    // });



    // it('Deve visualizar receitas', () => {
    //     cy.acessarMenuReceitas(menuReceitas);

    //     cy.acessarImportarReceitas(menuImportarReceitas);
    //     cy.wait(2000);

    //     cy.getElementAndClick(acoes);
    //     cy.visualizarReceita(visualizarReceitas);
    // });



    // it('Deve clonar receitas.', () => {
    //     cy.acessarMenuReceitas(menuReceitas);

    //     cy.acessarImportarReceitas(menuImportarReceitas);
    //     cy.wait(2000);

    //     cy.getElementAndClick(acoes);
    //     cy.clonarReceita(clonarReceitas);
    // });



    // it('Deve excluir receitas.', () => {
    //     cy.acessarMenuReceitas(menuReceitas);

    //     cy.acessarImportarReceitas(menuImportarReceitas);
    //     cy.wait(2000);

    //     cy.getElementAndClick(acoes);
    //     cy.excluirReceita(excluirReceitas);

    //     cy.getElementAndClick(mensagemSucessoModal);

    // });



    // it('Deve inserir observação farmacêutica.', () => {
    //     cy.acessarMenuReceitas(menuReceitas);

    //     cy.acessarImportarReceitas(menuImportarReceitas);
    //     cy.wait(2000);

    //     cy.getElementAndClick(acoes);
    //     cy.inserirObservacaoFarmaceutica(acessarObservacoesFarmaceuticas, dadosParametros.Receita.senhaObservacaoFarmaceutica, dadosParametros.Receita.textoObservacaoFarmaceutica);
    // });



    // it('Deve excluir observação farmacêutica', () => {
    //     cy.acessarMenuReceitas(menuReceitas);

    //     cy.acessarImportarReceitas(menuImportarReceitas);
    //     cy.wait(2000);

    //     cy.getElementAndClick(acoes);
    //     cy.excluirObservacaoFarmaceutica(acessarObservacoesFarmaceuticas);

    // });



    // it('Deve criar dúvida técnica.', () => {
    //     cy.acessarMenuReceitas(menuReceitas);

    //     cy.acessarImportarReceitas(menuImportarReceitas);
    //     cy.wait(2000);

    //     cy.getElementAndClick(acoes);
    //     cy.CriarDuvidaTecnica(acessarDuvidasTecnicas, dadosParametros.categoriaDuvidaTecnica.DuvidaInterna, dadosParametros.Receita.textoDuvidaTecnica, dadosParametros.Usuario.usuarioAtribuido);

    // });



    // it('Deve atualizar modal de dúvida técnica.', () => {
    //     cy.acessarMenuReceitas(menuReceitas);

    //     cy.acessarImportarReceitas(menuImportarReceitas);
    //     cy.wait(2000);

    //     cy.getElementAndClick(acoes);
    //     cy.atualizarModalDuvidaTecnica(atualizarModalDuvidasTecnicas);
    // });



    // it('Deve alterar o responsável pela resposta da dúvida técnica ', () => {
    //     cy.acessarMenuReceitas(menuReceitas);

    //     cy.acessarImportarReceitas(menuImportarReceitas);
    //     cy.wait(2000);

    //     cy.getElementAndClick(acoes);
    //     cy.alterarResponsavelRespostaDuvidaTecnica(acessarDuvidasTecnicas, dadosParametros.Usuario.usuarioAtribuido);
    // });



    // it('Deve marcar dúvida técnica como resolvido.', () => {
    //     cy.acessarMenuReceitas(menuReceitas);

    //     cy.acessarImportarReceitas(menuImportarReceitas);
    //     cy.wait(2000);

    //     cy.getElementAndClick(acoes);
    //     cy.marcarDuvidaTecnicaResolvido(acessarDuvidasTecnicas);
    // });



    // it('Deve excluir dúvida técnica.', () => {
    //     cy.acessarMenuReceitas(menuReceitas);

    //     cy.acessarImportarReceitas(menuImportarReceitas);
    //     cy.wait(2000);

    //     cy.getElementAndClick(acoes);
    //     cy.excluirDuvidaTecnica(acessarDuvidasTecnicas);
    // });



    // it('Deve responder dúvida técnica.', () => {
    //     cy.acessarMenuReceitas(menuReceitas);

    //     cy.acessarImportarReceitas(menuImportarReceitas);
    //     cy.wait(2000);

    //     cy.getElementAndClick(acoes);
    //     cy.responderDuvidaTecnica(acessarDuvidasTecnicas, dadosParametros.statusDuvidaTecnica.AguardandoPrescritor, dadosParametros.Receita.textoRespostaDuvidaTecnica);
    // });



    // it('Deve editar receita', () => {
    //     cy.acessarMenuReceitas(menuReceitas);

    //     cy.acessarImportarReceitas(menuImportarReceitas);
    //     cy.wait(2000);

    //     cy.getElementAndClick(acoes);

    //     cy.getElementAndClick(editarReceita);
    //     cy.wait(2000)



    //     // cy.inserirTipoReceita();
    //     // cy.editarReceita('img/ReceitaJpeg(1).jpeg', importarImagemReceitas, dadosParametros.Prescritor.crmPrescritor.toString(), dadosParametros.parametroBuscaPaciente.Cdcli, dadosParametros.Paciente.codigoPaciente.toString(), dadosParametros.cluster.clusterInjetaveis.toString(), atendenteResponsavelReceitas, dadosParametros.Usuario.usuarioAtribuido,atendenteResponsavelReceitas, dadosParametros.Usuario.usuarioAtribuido,dataRecebimentoReceitas);


    // })

})