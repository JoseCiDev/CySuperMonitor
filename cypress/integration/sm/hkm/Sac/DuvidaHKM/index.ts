const el = require('./elements').ELEMENTS;

class NewDoubt {
    acessarRelato(){
        cy.get(el.acessreport).click();
         
    }
  
    preencherRelatoGeral(){
        cy.get(el.category).select('2');
        cy.get(el.initialresponsible).clear();
        cy.get(el.initialresponsible).type('Adriana{downarrow}{enter}');
        cy.wait(3000);
        cy.get(el.initialresponsible).type('{downarrow}{enter}');
        cy.get(el.initialresponsibleHidden).invoke('attr', 'value', '1054');
        cy.get(el.cluster).select(1);
        cy.get(el.reportingchannel).select(2);
        cy.get(el.valueorder).type('148300');
        cy.get(el.reportdate).click({force: true});
        cy.get(el.reporttime).type('16:16');
        cy.get(el.descriptionreport).type('Automatizando o cadastro de Dúvidas');  
        }

        preencherRelatoOrcamentoVinculado(){
            cy.get(el.linkedbudgetacess).click();
            cy.get(el.linkedbudget).type('529755{downarrow}{enter}');
            cy.wait(3000);
            cy.get(el.linkedbudget).type('{downarrow}{enter}');
            cy.get(el.sumbudget).click();
        }

        preencherRelatoNaoConformidade(){
            cy.get(el.noncomplianceacess).click();
            cy.get(el.noncompliancewithoutorigin).type('Alteração{downarrow}{downarrow}{enter}');
            cy.wait(1000);
            cy.get(el.noncompliancewithoutorigin).type('Erro{downarrow}{enter}');
            cy.wait(1000);
            cy.get(el.noncompliancewithoutorigin).type('Valor{downarrow}{enter}');
        }

        preencherRelatoAnexo(){
            cy.get(el.accessattachments).click();
            cy.pause();
        }

        enviarRelato(){
            cy.get(el.register).click({force: true});
            cy.wait(5000);
            cy.get(el.okregister).click();
        }
}

export default new NewDoubt(); 