const el = require('./elements').ELEMENTS;



/// <reference types="cypress" />
class InclusaoHKM{
  acessarorcamentoInclusao(nrorc){
    cy.visit('http://sm-hkm.local/inclusao');
    cy.get(el.numeroorcamento).type(nrorc,'{enter}');//insere o numero do orcamento e aperta enter
    cy.get(el.buscarorcamento).click();
    cy.get(el.fazerconferencia).click();
    cy.wait(1000);
  }

  fazerconferenciaInclusao(){
    cy.get(el.naopossuiobs1).click();
    cy.contains(' ORCAMENTO ').click()
    cy.get(el.opcaoorcativoincorreto).click(); 
    cy.get(el.opcaoorcativonaoselecionado).click();
    cy.get(el.opcaoorcativofaltando).click();
    cy.get(el.opcaoorcbasexarope).click();
    cy.get(el.opcaoorccalculoposologia).click();
    cy.get(el.opcaoorccapsvegetal).click();
    cy.get(el.opcaoorcconcentracaodiferente).click();
    cy.get(el.opcaoorcdosagemincorreta).click();
    cy.get(el.opcaoorcembalagem).click();
    cy.get(el.opcaoorcexcipienteerrado).click();
    cy.get(el.opcaoorcfilialincorreta).click();
    cy.get(el.opcaoorcformaincorreta).click();
    cy.get(el.formulaaberta).click();
    cy.get(el.opcaoorcformulasfaltando).click();
    cy.get(el.opcaoorcinjetavelvalidadeinferior4meses).click();
    cy.get(el.opcaoorcnomepacienteincorreto).click();
    cy.get(el.opcaoorcorcadocapsulapedecomprimido).click();
    cy.get(el.opcaoorcorcamentodiferente).click();
    cy.get(el.opcaoorcpadronizacaoprescritor).click();
    cy.get(el.opcaoorcprescritorincorreto).click();
    cy.get(el.opcaoorcqsperrado).click();
    cy.get(el.opcaoorcreceitailegivel).click();
    cy.get(el.opcaoorcsemtitulo).click();
    cy.get(el.opcaoorctempotratamentomaiorvalidade).click();
    cy.get(el.opcaoorctipocapsula).click();
    cy.get(el.opcaoorcvarejoorcadoerrado).click();
    cy.get(el.opcaoorcvarejoorcadosemprescritor).click();
    cy.get(el.opcaoorcvolumedoseerrado).click();
    cy.get(el.opcaobackoffice).click({force: true})
    cy.get(el.opcaobackclientecienteativoemfalta).click();
    cy.get(el.opcaobacknaoinformadoformulanaoatendida).click();
    cy.get(el.opcaobackorcamentoenviadoerrado).click();
    cy.get(el.opcaobackreceitavencida).click();
    cy.get(el.opcaoatdn).click();
    cy.get(el.opcaoatndaromadif).click();
    cy.get(el.opcaoatndconfformafarmaceutica).click();
    cy.get(el.opcaoatndcontroladosemreceita).click();
    cy.get(el.opcaoatndenvioenderecoerrado).click();
    cy.get(el.opcaoatndformulafechada).click();
    cy.get(el.opcaoatndformulanaoorcada).click();
    cy.get(el.opcaoatndmonitoramento).click();
    cy.get(el.opcaoatndnumrepeticaoincorreta).click();
    cy.get(el.opcaoatndpacientecrianca).click();
    cy.get(el.opcaoatndsemautorizacao).click();
    cy.get(el.opcaoatndtempodetratamento).click();
    cy.get(el.registrarconferencia).click();
    cy.wait(10000);
  }

};

export default new InclusaoHKM();