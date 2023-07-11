/// <reference types="cypress" />
import { ELEMENTS } from './elements';
const el = ELEMENTS;

/*
backoffice
  em andamento
    visualizar atendimento
    fazer conferencia
  finalizados
    visualizar atendimento encerrado
*/



class Backoffice {
  acessarBackofficeEmAndamento() {
    cy.get(el.acessarbackoffice)
      .should('be.visible')
      .click();
    cy.get(el.acessarbackofficeemandamento)
      .contains('Em Andamento')
      .click({force: true})
      .url().should('eq','http://sm-hkm.docker.local:8080/backoffice')
  }

  buscarOrcamentoBackoffice() {
    cy.get(el.expandirpainelfiltrosbackoffice)
      .should('be.visible')
      .click();
    cy.get(el.filtrodatainicialreceita)
      .should('be.visible')
      .type(el.datainicialbackoffice)
      .should('');
    cy.get(el.procurarorcamentobackoffice)
      .should('be.visible')
      .click();
  }

  fazerConferenciaBackoffice() {
    var opt = opt.forEach((e: any) => {
      cy.get(e)
        .should('be.visible')
        .check()
        .should('be.checked');
    })

    cy.get(el.fazerconferencia)
      .should('be.visible')
      .click();
    cy.wait(3000)
    cy.get(el.naopossuiobs)
      .as('checkboxes')
      .should('be.visible')
      .uncheck()
      .should('not.be.checked');
    cy.get(el.opcaoorcamento)
      .should('be.visible')
      .click()
    cy.get(el.opcaoorcativoincorreto)
      .should('be.visible')
      .check()
      .should('be.checked');
    cy.get(el.opcaoorcativonaoselecionado)
      .should('be.visible')
      .check()
      .should('be.checked');
    cy.get(el.opcaoorcativofaltando)
      .should('be.visible')
      .check()
      .should('be.checked');
    cy.get(el.opcaoorcbasexarope)
      .should('be.visible')
      .check()
      .should('be.checked');
    cy.get(el.opcaoorccalculoposologia)
      .should('be.visible')
      .check()
      .should('be.checked');
    cy.get(el.opcaoorccapsvegetal)
      .should('be.visible')
      .check()
      .should('be.checked');
    cy.get(el.opcaoorcconcentracaodiferente)
      .should('be.visible')
      .check()
      .should('be.checked');
    cy.get(el.opcaoorcdosagemincorreta)
      .should('be.visible')
      .check()
      .should('be.checked');
    cy.get(el.opcaoorcembalagem)
      .should('be.visible')
      .check()
      .should('be.checked');
    cy.get(el.opcaoorcexcipienteerrado)
      .should('be.visible')
      .check()
      .should('be.checked');
    cy.get(el.opcaoorcfilialincorreta)
      .should('be.visible')
      .check()
      .should('be.checked');
    cy.get(el.opcaoorcformaincorreta)
      .should('be.visible')
      .should('be.visible')
      .check()
      .should('be.checked');
    cy.get(el.opcaoorcformulaaberta)
      .should('be.visible')
      .check()
      .should('be.checked');
    cy.get(el.opcaoorcformulasfaltando)
      .should('be.visible')
      .check()
      .should('be.checked');
    cy.get(el.opcaoorcinjetavelvalidadeinferior4meses)
      .should('be.visible')
      .check()
      .should('be.checked');
    cy.get(el.opcaoorcnomepacienteincorreto)
      .should('be.visible')
      .check()
      .should('be.checked');
    cy.get(el.opcaoorcorcadocapsulapedecomprimido)
      .should('be.visible')
      .check()
      .should('be.checked');
    cy.get(el.opcaoorcorcamentodiferente)
      .should('be.visible')
      .check()
      .should('be.checked');
    cy.get(el.opcaoorcpadronizacaoprescritor)
      .should('be.visible')
      .check()
      .should('be.checked');
    cy.get(el.opcaoorcprescritorincorreto)
      .should('be.visible')
      .check()
      .should('be.checked');
    cy.get(el.opcaoorcqsperrado)
      .should('be.visible')
      .check()
      .should('be.checked');
    cy.get(el.opcaoorcreceitailegivel)
      .should('be.visible')
      .check()
      .should('be.checked');
    cy.get(el.opcaoorcreceitasemobs)
      .should('be.visible')
      .check()
      .should('be.checked');
    cy.get(el.opcaoorcsemtitulo)
      .should('be.visible')
      .check()
      .should('be.checked');
    cy.get(el.opcaoorctempotratamentomaiorvalidade)
      .should('be.visible')
      .check()
      .should('be.checked');
    cy.get(el.opcaoorctipocapsula)
      .should('be.visible')
      .check()
      .should('be.checked');
    cy.get(el.opcaoorcvarejoorcadoerrado)
      .should('be.visible')
      .check()
      .should('be.checked');
    cy.get(el.opcaoorcvarejoorcadosemprescritor)
      .should('be.visible')
      .check()
      .should('be.checked');
    cy.get(el.opcaoorcvolumedoseerrado)
      .should('be.visible')
      .check()
      .should('be.checked');



    cy.get(el.registrarconferencia)
      .should('be.visible')
    cy.pause()
      .click();
  }

  visualizaratendimentoBackoffice() {
    cy.get(el.acessarbackoffice)
      .should('be.visible')
      .click();
    cy.get(el.acessarbackofficeemandamento)
      .should('be.visible')
      .click();
    cy.get(el.visualizar)
      .should('be.visible')
      .click()
  }


  visualizaratendimentoencerradoBackoffice() {
    cy.get(el.acessarbackoffice)
      .should('be.visible')
      .click();
    cy.get(el.acessarbackofficeencerrado)
      .should('be.visible')
      .click();
    cy.get(el.visualizar)
      .should('be.visible')
      .click()
  }
};

export default new Backoffice();