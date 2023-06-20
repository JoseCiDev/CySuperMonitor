const el = require('./elements').ELEMENTS;



/// <reference types="cypress" />
class ConferenciaEntradaHKM{
  acessarorcamentoConferenciaEntrada(nrorc){
    cy.visit('http://sm-hkm.local/conferencia-entrada/conferencia-entrada/page/1');
    cy.get(el.numeroorcamento).type(nrorc,'{enter}');//insere o numero do orcamento e aperta enter
    cy.get(el.buscarorcamento).click();
    cy.get(el.fazerconferencia).click();
    cy.wait(1000);
  }

  fazerconferenciaConferenciaEntrada(){
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
    cy.get(el.opcaoorcformulaaberta).click();
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

    cy.get(el.opcaoinclusao).click();
    cy.get(el.opcaoinclusaofaltoucarimbo).click();
    cy.get(el.opcaoinclusaofichahorarioerrado).click();
    cy.get(el.opcaoinclusaofichasemcarimbo).click();
    cy.get(el.opcaoinclusaoformnaofoiinclusa).click();
    cy.get(el.opcaoinclusaonaoaddinfos).click();
    cy.get(el.opcaoinclusaonaoescaneouanexo).click();
    cy.get(el.opcaoinclusaonaoveiorotulo).click();
    cy.get(el.opcaoinclusaorotulocortado).click();
    cy.get(el.opcaoinclusaorotulonaoestapadrao).click();
    cy.get(el.opcaoinclusaorotuloaromaincorreto).click();
    cy.get(el.opcaoinclusaorotuloativoerrado).click();
    cy.get(el.opcaoinclusaorotuloativoforapadrao).click();
    cy.get(el.opcaoinclusaorotuloconcentracaoerrada).click();
    cy.get(el.opcaoinclusaorotuloerroortografia).click();
    cy.get(el.opcaoinclusaorotulofaltainformacao).click();
    cy.get(el.opcaoinclusaorotulopacientenomeerrado).click();
    cy.get(el.opcaoinclusaorotuloposologiaerrada).click();
    cy.get(el.opcaoinclusaorotuloprescritorincorreto).click();
    cy.get(el.opcaoinclusaorotulosqperrado).click();
    cy.get(el.opcaoinclusaorotulotituloformula).click();
    cy.get(el.opcaoinclusaorotulousoerrado).click();
    cy.get(el.opcaoinclusaorotulovalidadeerrada).click();
    cy.get(el.opcaoinclusaorotulovolumeerrado).click();
    cy.get(el.opcaoinclusaorotulotrocado).click();

    cy.get(el.opcaoconfentrada).click();
    cy.get(el.opcaoconfentralteracaoincorretaorcamento).click();
    cy.get(el.opcaoconfentrfichasemcarimbo).click();
    cy.get(el.opcaoconfentrforcouerradonaficha).click();
    cy.get(el.opcaoconfentrnaoaddobsnaficha).click();
    cy.get(el.opcaoconfentrnaoalterourotulo).click();
    cy.get(el.opcaoconfentrnaocolocouobsfcerta).click();
    cy.get(el.opcaoconfentrnaoveiocapsulacorreta).click();
    cy.get(el.opcaoconfentrobsnareceita).click();
    cy.get(el.opcaoinclusaorotulovolumeerrado).click();

    cy.get(el.opcaolab).click();
    cy.get(el.opcaolabblisterforapadrao).click();
    cy.get(el.opcaolabcapsincorreta).click();
    cy.get(el.opcaolabembalagemincorreta).click();
    cy.get(el.opcaolabequivocoinfoqtd).click();
    cy.get(el.opcaolabfaltainfoficha).click();
    cy.get(el.opcaolabfaltouetiquetas).click();
    cy.get(el.opcaolabfaltouseringa).click();
    cy.get(el.opcaolabfichapesagemsemass).click();
    cy.get(el.opcaolabfrascovazando).click();
    cy.get(el.opcaolabinfocapsilegivel).click();
    cy.get(el.opcaolabuniformidadecaps).click();

    cy.get(el.opcaoconfsaida).click();
    cy.get(el.opcaoconfsaidachocogomafurou).click();
    cy.get(el.opcaoconfsaidafracopotequebrou).click();

    cy.get(el.opcaoexpedicao).click();
    cy.get(el.opcaoexpedicaonaoenviadoformula).click();

    cy.get(el.registrarconferencia).click();
    cy.wait(10000);
  }

};

export default new ConferenciaEntradaHKM();