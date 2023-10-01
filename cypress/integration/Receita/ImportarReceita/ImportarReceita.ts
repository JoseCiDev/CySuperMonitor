import { elements as el } from '../../../elements';
import { } from '../../../support/commands';
import { faker } from '@faker-js/faker';
import { dadosParametros } from '../../../DadosParametros';


const ambiente = Cypress.env('AMBIENTE');
const dadosAmbiente = Cypress.env(ambiente);


export const {
    dataRecebimentoReceitas,
    okSucessoReceitaImportadaModal,
    menuReceitas,
    menuImportarReceitas,
    abrirModalRegistrarReceitas,
    importarImagemReceitas,
    prescritorReceitas,
    parametroBuscaPaciente,
    pacienteReceitas,
    canalRecebimentoReceitas,
    tipoReceitas,
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
    mensagemSucessoModal,


} = el.Receitas;


export const acessarImportarReceitas = (importarReceitas: string): void => {
    cy.getVisible(importarReceitas)
        .contains('Importar receitas')
        .click();

    cy.url().should('contain', dadosParametros.Url.importarReceitas);
};

export const inserirPrescritor = (modalSugestaoRelacaoPrescritor, sugestaoAutocomplete): void => {
    cy.get(modalSugestaoRelacaoPrescritor)
        .should('have.id', 'modalMedicoRec')
        .clear()
        .type(dadosParametros.Prescritor.crmPrescritor.toString())
        .then(() => {
            cy.get(sugestaoAutocomplete)
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
    cy.get(modalSugestaoRelacaoPrescritor, { timeout: 20000 })
        .scrollIntoView()
        .click();
};

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

export const parametroSelecaoPaciente = (parametro, opcaoSelecaoPaciente): void => {

    cy.getVisible(parametro, { timeout: 20000 })
        .and('have.id', opcaoSelecaoPaciente)
        .check()
        .should('be.checked');
};

export const inserirPaciente = (paciente: string): void => {
    (sugestaoAutocomplete: string): Cypress.Chainable<boolean> => {
        return cy.get(sugestaoAutocomplete, { timeout: 20000 }).then(($modal) => {
            return $modal.is(':visible');
        });
    }
    cy.get(paciente, { timeout: 20000 })
        .should('exist')
        .and('have.id', 'modalPacienteRec')
        .clear()
        .type(dadosParametros.Paciente.codigoPaciente.toString())
        .then(() => {
            cy.get(el.Compartilhado.sugestoesAutocomplete, { timeout: 20000 })
                .as('suggestions');
        });
    cy.wait(1000)
    cy.get('@suggestions', { timeout: 20000 })
        .find(el.Compartilhado.sugestaoAutocomplete, { timeout: 20000 })
        .contains(dadosParametros.Paciente.codigoPaciente.toString())
        .then(($suggestion) => {
            if ($suggestion.length > 0) {
                cy.wrap($suggestion[0])
                    .scrollIntoView()
                    .click();
            }
        });
};

export const selecionarCanalRecebimento = (opcaoRecebimento, opcaoCanalRecebimento): void => {
    cy.get<HTMLSelectElement>(opcaoRecebimento)
        .should('be.visible')
        .and('have.id', 'modalCanalContato')
        .select(opcaoCanalRecebimento)
        .should('have.value', opcaoCanalRecebimento)
        .find('option:selected')
        .should('be.selected');
};

export const inserirDataRecebimento = () => {
    const umDiaMenos = new Date(dadosParametros.dataAtual);
    umDiaMenos.setDate(umDiaMenos.getDate() - 1);
    const dataFormatada = umDiaMenos.toISOString().slice(0, 16);
    cy.inserirData(dataRecebimentoReceitas, dataFormatada);
};

export const inserirTipoReceita = (tipoReceita, tipo): void => {
    cy.getVisible(tipoReceita, { timeout: 20000 })
        .check()
        .should('be.checked');
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
        cy.login(el.Login.entrar, dadosAmbiente.USER, dadosAmbiente.PASSWORD, dadosParametros.Url.inicio)
    });


    it('Deve realizar busca de Receitas', () => {
        cy.acessarMenuReceitas(menuReceitas);

        acessarImportarReceitas(menuImportarReceitas);
        cy.wait(2000);

        cy.buscarReceita('2023-01-01T10:00', '2023-10-30T10:00');
    });



    it('Deve realizar importação de Receitas', () => {
        cy.acessarMenuReceitas(menuReceitas);

        acessarImportarReceitas(menuImportarReceitas);
        cy.wait(2000);

        cy.getElementAndClick(abrirModalRegistrarReceitas);

        cy.inserirArquivo('img/ReceitaJpeg(1).jpeg', importarImagemReceitas);

        inserirPrescritor(prescritorReceitas, el.Compartilhado.sugestaoAutocomplete);

        sugestaoRelacaoPrescritor();

        parametroSelecaoPaciente(parametroBuscaPaciente, dadosParametros.parametroBuscaPaciente.Cdcli);

        inserirPaciente(pacienteReceitas);

        selecionarCanalRecebimento(canalRecebimentoReceitas, dadosParametros.canalRecebimento.Whatsapp);

        inserirDataRecebimento();

        inserirTipoReceita(tipoReceitas, dadosParametros.PossuiReceita);

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



    it('Deve realizar marcação de uso nas receitas.', () => {
        cy.acessarMenuReceitas(menuReceitas);

        acessarImportarReceitas(menuImportarReceitas);
        cy.wait(2000);

        cy.marcarUso(checkboxMarcarUso);

        cy.getElementAndClick(mensagemSucessoModal);
    });



    it('Deve visualizar receitas', () => {
        cy.acessarMenuReceitas(menuReceitas);

        acessarImportarReceitas(menuImportarReceitas);
        cy.wait(2000);

        cy.getElementAndClick(acoes);
        cy.visualizarReceita(visualizarReceitas);
    });



    it('Deve clonar receitas.', () => {
        cy.acessarMenuReceitas(menuReceitas);

        acessarImportarReceitas(menuImportarReceitas);
        cy.wait(2000);

        cy.getElementAndClick(acoes);
        cy.clonarReceita(clonarReceitas);
    });



    it('Deve excluir receitas.', () => {
        cy.acessarMenuReceitas(menuReceitas);

        acessarImportarReceitas(menuImportarReceitas);
        cy.wait(2000);

        cy.getElementAndClick(acoes);
        cy.excluirReceita(excluirReceitas);

        cy.getElementAndClick(mensagemSucessoModal);

    });



    it('Deve inserir observação farmacêutica.', () => {
        cy.acessarMenuReceitas(menuReceitas);

        acessarImportarReceitas(menuImportarReceitas);
        cy.wait(2000);

        cy.getElementAndClick(acoes);
        cy.inserirObservacaoFarmaceutica(acessarObservacoesFarmaceuticas, dadosParametros.Receita.senhaObservacaoFarmaceutica, dadosParametros.Receita.textoObservacaoFarmaceutica);
    });



    it('Deve excluir observação farmacêutica', () => {
        cy.acessarMenuReceitas(menuReceitas);

        acessarImportarReceitas(menuImportarReceitas);
        cy.wait(2000);

        cy.getElementAndClick(acoes);
        cy.excluirObservacaoFarmaceutica(acessarObservacoesFarmaceuticas);

    });



    it('Deve criar dúvida técnica.', () => {
        cy.acessarMenuReceitas(menuReceitas);

        acessarImportarReceitas(menuImportarReceitas);
        cy.wait(2000);

        cy.getElementAndClick(acoes);
        cy.CriarDuvidaTecnica(acessarDuvidasTecnicas, dadosParametros.categoriaDuvidaTecnica.DuvidaInterna, dadosParametros.Receita.textoDuvidaTecnica, dadosParametros.Receita.responsavelRespostaDuvidaTecnica);

    });



    it('Deve atualizar modal de dúvida técnica.', () => {
        cy.acessarMenuReceitas(menuReceitas);

        acessarImportarReceitas(menuImportarReceitas);
        cy.wait(2000);

        cy.getElementAndClick(acoes);
        cy.atualizarModalDuvidaTecnica(atualizarModalDuvidasTecnicas);
    });



    it('Deve alterar o responsável pela resposta da dúvida técnica ', () => {
        cy.acessarMenuReceitas(menuReceitas);

        acessarImportarReceitas(menuImportarReceitas);
        cy.wait(2000);

        cy.getElementAndClick(acoes);
        cy.alterarResponsavelRespostaDuvidaTecnica(acessarDuvidasTecnicas, dadosParametros.Receita.responsavelRespostaDuvidaTecnica);
    });



    it('Deve marcar dúvida técnica como resolvido.', () => {
        cy.acessarMenuReceitas(menuReceitas);

        acessarImportarReceitas(menuImportarReceitas);
        cy.wait(2000);

        cy.getElementAndClick(acoes);
        cy.marcarDuvidaTecnicaResolvido(acessarDuvidasTecnicas);
    });



    it('Deve excluir dúvida técnica.', () => {
        cy.acessarMenuReceitas(menuReceitas);

        acessarImportarReceitas(menuImportarReceitas);
        cy.wait(2000);

        cy.getElementAndClick(acoes);
        cy.excluirDuvidaTecnica(acessarDuvidasTecnicas);
    });



    it('Deve responder dúvida técnica.', () => {
        cy.acessarMenuReceitas(menuReceitas);

        acessarImportarReceitas(menuImportarReceitas);
        cy.wait(2000);

        cy.getElementAndClick(acoes);
        cy.responderDuvidaTecnica(acessarDuvidasTecnicas, dadosParametros.statusDuvidaTecnica.AguardandoPrescritor, dadosParametros.Receita.textoRespostaDuvidaTecnica);
    });

})