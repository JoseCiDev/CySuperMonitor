import { elements as el } from '../../../elements';
import { faker } from '@faker-js/faker';
import { dadosParametros } from '../../../DadosParametros';


const ambiente = Cypress.env('AMBIENTE');
const dadosAmbiente = Cypress.env(ambiente);


export const acessarImportarReceitas = (importarReceitas: string): void => {
    cy.getVisible(importarReceitas)
        .contains('Importar receitas')
        .click();

    cy.url().should('contain', dadosParametros.Url.importarReceitas);
}

export const abrirModalRegistrarReceita = (registrarReceitas: string): void => {
    cy.getVisible(registrarReceitas)
        .and('have.id', 'receita_register')
        .click();
}

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
    cy.get(el.Receitas.modalSugestaoRelacaoPrescritor, { timeout: 10000 })
        .scrollIntoView()
        .click();
};

export const parametroSelecaoPaciente = (parametro, opcaoSelecaoPaciente) => {

    cy.getVisible(parametro, { timeout: 5000 })
        .and('have.id', opcaoSelecaoPaciente)
        .check()
        .should('be.checked');
};

export const inserirPaciente = (paciente: string): void => {
    (sugestaoAutocomplete: string): Cypress.Chainable<boolean> => {
        return cy.get(sugestaoAutocomplete, { timeout: 5000 }).then(($modal) => {
            return $modal.is(':visible');
        });
    }
    cy.get(paciente, { timeout: 20000 })
        .should('exist')
        .and('have.id', 'modalPacienteRec')
        .clear()
        .type(dadosParametros.Paciente.codigoPaciente.toString())
        .then(() => {
            cy.get(el.Compartilhado.sugestoesAutocomplete, { timeout: 5000 })
                .as('suggestions');
        });
    cy.wait(500)
    cy.get('@suggestions', { timeout: 5000 })
        .find(el.Compartilhado.sugestaoAutocomplete, { timeout: 5000 })
        .contains(dadosParametros.Paciente.codigoPaciente.toString())
        .then(($suggestion) => {
            if ($suggestion.length > 0) {
                cy.wrap($suggestion[0])
                    .scrollIntoView()
                    .click();
            }
        });
}

export const selecionarCanalRecebimento = (opcaoRecebimento, opcaoCanalRecebimento): void => {

    cy.get<HTMLSelectElement>(opcaoRecebimento)
        .should('be.visible')
        .and('have.id', 'modalCanalContato')
        .select(opcaoCanalRecebimento)
        .should('have.value', opcaoCanalRecebimento)
        .find('option:selected')
        .should('be.selected');
}

export const inserirDataRecebimentoReceita = () => {
    const umDiaMenos = new Date(dadosParametros.DataAtual);
    umDiaMenos.setDate(umDiaMenos.getDate() - 1);
    const dataFormatada = umDiaMenos.toISOString().slice(0, 16);
    cy.inserirData(el.Receitas.dataRecebimento, dataFormatada);
}

export const inserirTipoReceita = (tipoReceita, tipo): void => {
    cy.getVisible(tipoReceita, { timeout: 5000 })
        .check()
        .should('be.checked');
}

export const inserirObservacaoInternaReceita = (areaTexto: string, conteudo: string, useLoremIpsum?: boolean): void => {
    if (useLoremIpsum) {
        conteudo = faker.lorem.paragraph();
    }
    cy.getVisible(areaTexto)
        .should('exist')
        .clear()
        .type(conteudo)
        .should('not.be.empty');
};

export const marcarReceitaUrgente = (urgente: string): void => {
    cy.getElementAndClick(urgente)
}

export const marcarReceitaClienteAlerta = (clienteAlerta: string): void => {
    cy.getElementAndClick(clienteAlerta)
}

export const marcarReceitaMedicamentoControlado = (medicamentoControlado: string): void => {
    cy.getElementAndClick(medicamentoControlado)
}

export const salvarReceita = (salvarImportacao): void => {
    cy.getVisible(salvarImportacao, { timeout: 5000 })
        .click({ force: true });

    if (Cypress.$(el.Receitas.okSucessoReceitaImportadaModal).length > 0 && Cypress.$(el.Receitas.okSucessoReceitaImportadaModal).is(':visible')) {
        cy.getVisible(el.Receitas.okSucessoReceitaImportadaModal, { timeout: 5000 })
            .click();
    } else {
        cy.wait(5000)
        cy.getVisible(el.Receitas.okSucessoReceitaImportadaModal, { timeout: 5000 })
            .click();
    }

    cy.url().should('contain', dadosParametros.Url.importarReceitas)
}


describe('Receitas', () => {

    beforeEach(function () {
        cy.login(el.Login.entrar, dadosAmbiente.USER, dadosAmbiente.PASSWORD, dadosParametros.Url.inicio)
    })

    it('Importação de Receitas', () => {

        cy.acessarMenuReceitas(el.Receitas.menuReceitas);

        acessarImportarReceitas(el.Receitas.menuImportarReceitas);
        cy.wait(2000)

        // cy.buscarReceita('2023-01-01T10:00', '2023-10-30T10:00')

        // abrirModalRegistrarReceita(el.Receitas.abrirModalRegistrarReceita);

        // cy.inserirArquivo('img/ReceitaJpeg(1).jpeg', el.Receitas.importarImagem);

        // inserirPrescritor(el.Receitas.prescritor, el.Compartilhado.sugestaoAutocomplete);

        // parametroSelecaoPaciente(el.Receitas.parametroBuscaPaciente, dadosParametros.DadosParametros.ParametroBuscaPaciente.Cdcli);

        // inserirPaciente(el.Receitas.paciente);

        // selecionarCanalRecebimento(el.Receitas.canalRecebimento, dadosParametros.DadosParametros.CanalRecebimento.Whatsapp);

        // inserirDataRecebimentoReceita();

        // inserirTipoReceita(el.Receitas.tipoReceita, dadosParametros.DadosParametros.PossuiReceita);

        // if (cy.get(el.Receitas.modalMensagens, { timeout: 20000 })) {
        //     cy.get(el.Receitas.modalMensagens, { timeout: 20000 })
        //         .click()
        // }

        // inserirObservacaoInternaReceita(el.Receitas.textoObservacaoInternaReceita, '', true);

        // marcarReceitaUrgente(el.Receitas.urgente)

        // marcarReceitaClienteAlerta(el.Receitas.clienteAlerta)

        // marcarReceitaMedicamentoControlado(el.Receitas.medicamentocontrolado)

        // salvarReceita(el.Receitas.salvarReceita)

        // cy.marcarUso(el.Receitas.checkboxMarcarUso);

        // cy.visualizarReceita(el.Receitas.abrirModalvisualizarReceita);

        cy.getElementAndClick(el.Receitas.acoes);

        cy.clonarReceita()

    });
})




