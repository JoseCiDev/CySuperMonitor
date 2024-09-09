/// <reference types="cypress" />


export { PatientSearchParameter } from '../../DataParameters/Enums/patientSearchParameter';
export { SearchBudget } from '../../DataParameters/Enums/searchBudget';
export { PaymentStatus } from '../../DataParameters/Enums/paymentStatus';
export { RecipeReceiptChannel } from '../../DataParameters/Enums/recipeReceiptChannel';
export { RecipeImportCluster } from '../../DataParameters/Enums/recipeImportCluster';
export { RecipeType } from '../../DataParameters/Enums/recipeType';
export { PaymentMethod } from '../../DataParameters/Enums/paymentMethod';
// export { BudgetClosingChannel } from '../../DataParameters/Enums/budgetClosingChannel';
export { PendingsFilter } from '../../DataParameters/Enums/pendingsFilter';
export { RelationshipsPrescriberAttendantAndCluster } from '../../DataParameters/Enums/relationshipsPrescriberAttendantAndCluster';
export { Pendency } from '../../DataParameters/Enums/pendency';
export { TechnicalDoubtCategory } from '../../DataParameters/Enums/technicalDoubtCategory';
export { TechnicalDoubtStatus } from '../../DataParameters/Enums/technicalDoubtStatus';
export { Profile } from '../../DataParameters/Enums/profile';
export { ShippingMethod } from '../../DataParameters/Enums/shippingMethod';
export { AromaSachet } from '../../DataParameters/Enums/aromaSachet';
export { CapsuleAroma } from '../../DataParameters/Enums/capsuleAroma';
// export { BudgetHasRecipe } from './DataParameters/Enums/budgetHasRecipe';
export { PriorityRecipe } from '../../DataParameters/Enums/priorityRecipe';

import {
    elements as el,


} from '../../import';
import { select } from '../../support/commands/commands';


const environment = Cypress.env('ENVIRONMENT');
const dataEnvironment = Cypress.env(environment);




describe('Tela importação de receitas.', function () {

    beforeEach(function () {

    })

    it('Deve realizar importação de Receitas', function () {
        // cy.login(dataEnvironment.USER_ADMIN, dataEnvironment.PASSWORD, el.Login.messageErrorLogin, dataEnvironment.BASE_URL)
        //     .then((result) => {
        //         assert.exists(result.success, result.error)
        //     })

        cy.visit(dataEnvironment.BASE_URL)
        cy.getElementAndType({ [':nth-child(1) > .form-control']: 'Ester.silvano' });
        cy.getElementAndType({ [':nth-child(2) > .form-control']: dataEnvironment.PASSWORD });
        cy.getElementAndClick(['.btn']);

        cy.getElementAndClick(['#changelogs > .modal-dialog > .modal-content > .modal-footer > .btn']);
        cy.getElementAndClick([':nth-child(8) > :nth-child(1) > .nav-label']);
        cy.getElementAndClick(['.active > .nav-second-level > :nth-child(1) > a']);

        // cy.get('#page-wrapper > div.wrapper.wrapper-content.animated.fadeInRight > div > div > table > tbody > tr:nth-child(3) > td.td-pagamentos > span')
        // cy.pause();
        // cy.getElementAndClick([':nth-child(2) > :nth-child(8) > .visualizarFvc > .fa']);
        // Captura todas as linhas da tabela
        cy.get('table tbody tr').each(($row, index) => {
            // Seletor para o status de pagamento na linha atual
            const paymentSelector = `table tbody tr:nth-child(${index + 1}) > td.td-pagamentos > span`;
            // Seletor para o botão de ação correspondente na linha atual
            const actionSelector = `table tbody tr:nth-child(${index + 1}) > td:nth-child(8) > .visualizarFvc > .fa`;

            // Verifica o status de pagamento
            cy.get(paymentSelector).then(($status) => {
                if ($status.text().includes('Pago')) {
                    // Se o status for "Pago", clica no botão correspondente
                    cy.log(`Pagamento encontrado como "Pago" na linha ${index + 1}. Clicando no botão.`);
                    cy.get(actionSelector).click({ force: true });
                } else {
                    cy.log(`Status de pagamento não é "Pago" na linha ${index + 1}. Nenhuma ação realizada.`);
                }
            });
        });


        cy.get('.self-checkout-wrapper > a')
            .invoke('attr', 'href')  // Captura o valor do href
            .then((href) => {
                // Verifica se o href não está vazio e redireciona o Cypress para o novo URL
                if (href) {
                    cy.visit(href);
                } else {
                    throw new Error('Link não contém URL válido.');
                }
            });

        cy.getElementAndClick(['.efetuar-pagamento-btn > span']);
        // cy.pause();
        cy.getElementAndClick(['.efetuar-pagamento-btn > span']);

        cy.getElementAndType({ ['#telefone']: '48991888641' });
        cy.getElementAndClick(['#set-campos-endereco']);
        cy.getElementAndType({ ['#numero']: '106' });
        cy.getElementAndClick(['#address-confirm']);
        cy.getElementAndType({ ['#nome_cartao']: 'JOSE D F MENDES' });
        cy.getElementAndType({ ['#cpf_cnpj']: '08239097510' });
        cy.getElementAndType({ ['#numero_cartao']: '5555555555554444' });

        cy.get('#validade_mes').select(1)

        cy.get('#validade_ano').select(3)

        cy.getElementAndType({ ['#cvc']: '123' });

        cy.get('#qtdeParcelas').select(1, { force: true })

        cy.getElementAndClick(['#btnProcessarPgto']);

    });

})