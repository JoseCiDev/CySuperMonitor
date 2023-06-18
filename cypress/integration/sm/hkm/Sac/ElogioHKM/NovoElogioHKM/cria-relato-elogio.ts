const el = require('./elements').ELEMENTS;

class NewCompliment {
    acessarRelato(){
        cy.get(el.acessreport).click();
         
    }
  
    preencherRelatoGeral(){
        cy.get(el.category).select('3');
        //cy.get(el.peculiarity).select('2');
            cy.get(el.initialresponsible).type('Adriana');
            cy.get(el.initialresponsibleHidden).invoke('attr', 'value', '1054');
            cy.get(el.cluster).select('18');
            //cy.get(el.dissatisfaction).select('1');
            cy.get(el.reportingchannel).select('2');
            //cy.get(el.valueorder).type('225000');
            cy.get(el.reportdate).type('2022-05-04');
            cy.get(el.reporttime).click().type('17:16');
            //cy.get(el.involveshormones).select('1');
            //cy.get(el.adverseeffect).select('1');
            //cy.get(el.whichadverseeffect).type('Palpitação');
            cy.get(el.descriptionreport).type('Automatizando o cadastro de relatos');  
    
        }

        preencherRelatoOrcamentoVinculado(){
            cy.get(el.linkedbudgetacess).click();
            cy.get(el.linkedbudget).type('529754').click();
            cy.get(el.linkedbudgetHidden).invoke('attr', 'value', '529754').click();
            cy.get(el.linkedbudgetadd).click();

        }

        preencherRelatoNaoConformidade(){
            cy.get(el.noncomplianceacess).click();
            cy.get(el.noncompliancewithoutorigin).click({force: true})
            cy.get(el.addnoncompliancewithoutorigin).click({ multiple: true });
            cy.get(el.noncompliancebudget).click({force: true})
            //cy.get(el.addnoncompliancebudget).click({ multiple: true });
            cy.get(el.noncomplianceattendance).click({force: true})
           // cy.get(el.addnoncomplianceattendance).click({ multiple: true });
            cy.get(el.noncompliancelaboratory).click({force: true})
           // cy.get(el.addnoncompliancelaboratory).click({ multiple: true });
            cy.get(el.noncomplianceexitconference).click({force: true})
           // cy.get(el.addnoncomplianceexitconference).click({ multiple: true });
            cy.get(el.noncomplianceexpedition).click({force: true})
           // cy.get(el.addnoncomplianceexpedition).click({ multiple: true });

        }

        preencherRelatoAnexo(){
            cy.get(el.acessattachedfiles).click();
            cy.get(el.attachedfiles).click();

        }

        // enviarRelato(){
        //     cy.get(el.register).click();  
        // }
}

export default new NewCompliment();

