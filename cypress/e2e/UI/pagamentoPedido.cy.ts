/// <reference types="cypress" />

export { PatientSearchParameter } from '../../DataParameters/Enums/patientSearchParameter';
export { SearchBudget } from '../../DataParameters/Enums/searchBudget';
export { PaymentStatus } from '../../DataParameters/Enums/paymentStatus';
export { RecipeReceiptChannel } from '../../DataParameters/Enums/recipeReceiptChannel';
export { RecipeImportCluster } from '../../DataParameters/Enums/recipeImportCluster';
export { RecipeType } from '../../DataParameters/Enums/recipeType';
export { PaymentMethod } from '../../DataParameters/Enums/paymentMethod';
export { PendingsFilter } from '../../DataParameters/Enums/pendingsFilter';
export { RelationshipsPrescriberAttendantAndCluster } from '../../DataParameters/Enums/relationshipsPrescriberAttendantAndCluster';
export { Pendency } from '../../DataParameters/Enums/pendency';
export { TechnicalDoubtCategory } from '../../DataParameters/Enums/technicalDoubtCategory';
export { TechnicalDoubtStatus } from '../../DataParameters/Enums/technicalDoubtStatus';
export { Profile } from '../../DataParameters/Enums/profile';
export { ShippingMethod } from '../../DataParameters/Enums/shippingMethod';
export { AromaSachet } from '../../DataParameters/Enums/aromaSachet';
export { CapsuleAroma } from '../../DataParameters/Enums/capsuleAroma';
export { PriorityRecipe } from '../../DataParameters/Enums/priorityRecipe';

import { elements as el } from '../../import';
import { select } from '../../support/commands/commands';

const environment = Cypress.env('ENVIRONMENT');
const dataEnvironment = Cypress.env(environment);

describe('Tela importação de receitas.', function () {

    beforeEach(function () {
        // Você pode adicionar algo aqui se necessário
    });

    it('Deve realizar importação de Receitas e pagamento para registros pendentes', function () {

        const fazerLogin = () => {
            cy.visit(dataEnvironment.BASE_URL);
            cy.getElementAndType({ [':nth-child(1) > .form-control']: 'Ester.silvano' });
            cy.getElementAndType({ [':nth-child(2) > .form-control']: dataEnvironment.PASSWORD });
            cy.getElementAndClick(['.btn']);
        };

        const verificarAtendimentoRecente = (dataAtendimento: string): boolean => {
            let [day, month, year] = dataAtendimento.split('.');
            year = parseInt(year) < 50 ? `20${year}` : `19${year}`;
            const atendimentoDate = new Date(`${year}-${month}-${day}`);
            const currentDate = new Date();
            const diffInMilliseconds = currentDate.getTime() - atendimentoDate.getTime();
            const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);
            return diffInDays <= 5;
        };

        const verificarPagamentosPendentes = () => {
            cy.getElementAndClick(['#changelogs > .modal-dialog > .modal-content > .modal-footer > .btn']);
            cy.getElementAndClick([':nth-child(8) > :nth-child(1) > .nav-label']);
            cy.getElementAndClick(['.active > .nav-second-level > :nth-child(1) > a']);

            let atendimentosAtualizados: JQuery<HTMLElement>[] = [];
            let encontrouDataForaIntervalo = false;

            cy.get('tbody tr').filter(':has(td)').each(($row, index) => {
                if (encontrouDataForaIntervalo) return false; // Para a busca de mais datas se encontrou uma fora do intervalo

                cy.wrap($row).find('td:nth-child(2)').should('exist').then(($cell) => {
                    cy.wrap($cell).invoke('text').then((dataAtendimento: string) => {
                        if (verificarAtendimentoRecente(dataAtendimento.trim())) {
                            cy.log(`Atendimento dentro de 5 dias: ${dataAtendimento}`);
                            clicarParaAtualizarStatus($row);
                            atendimentosAtualizados.push($row); // Adicionar à lista de atualizados
                        } else {
                            encontrouDataForaIntervalo = true; // Encontrou uma data fora do intervalo de 5 dias
                        }
                    });
                });
            }).then(() => {
                if (atendimentosAtualizados.length > 0) {
                    // Chamar diretamente o loop de verificação
                    verificarStatusPagamentos(atendimentosAtualizados);
                } else {
                    cy.log('Nenhum atendimento dentro dos últimos 5 dias para atualização.');
                }
            });
        };

        const verificarStatusPagamentos = (atendimentosAtualizados: JQuery<HTMLElement>[]) => {
            let todosPagos = true;
            let encontrouNaoPago = false; // Para controlar quando encontrar o primeiro "não pago"

            Cypress._.each(atendimentosAtualizados, ($row) => {
                if (encontrouNaoPago) {
                    return false; // Interrompe o loop após encontrar o primeiro "não pago"
                }

                cy.wrap($row).find('.td-pagamentos').invoke('text').then((status: string) => {
                    if (!status.includes('Pago')) {
                        todosPagos = false;
                        encontrouNaoPago = true;
                        cy.wrap($row).find('a.visualizarFvc').click();
                        cy.url().should('include', '/atendimentos/edit');
                        realizarPagamento();
                    }
                });
            });

            // Depois que o loop terminar, verifique se todos estão pagos
            if (todosPagos) {
                cy.log('Todos os atendimentos atualizados estão pagos.');
                cy.pause(); // Pausa o fluxo se todos estiverem pagos
            }
        };


        const realizarPagamento = () => {
            cy.getElementAndClick(['.efetuar-pagamento-btn > span']);
            cy.getElementAndClick(['#metodoCartao']);
            cy.getElementAndClick(['.btn-submit']);
            cy.get('#telefone').clear().type('48991888641');
            cy.get('#email_cliente').clear().type('jose.djalma@essentia.com.br');
            cy.get('#nome_paciente').clear().type('Jose Djalma Ferreira Mendes');
            cy.get('#data_nascimento_paciente').clear().type('01/02/1988');
            cy.get('#cpf_paciente').clear().type('08239097510');
            cy.get('#rg_paciente').clear().type('6207535');
            cy.getElementAndClick(['#set-campos-endereco']);
            cy.get('#cep').clear().type('88134495');
            cy.get('#estado').select(24, { force: true });
            cy.get('#cidade').clear().type('Palhoça');
            cy.get('#bairro').clear().type('Barra do Aririu');
            cy.get('#rua').clear().type('Manoel Antonio de Souza');
            cy.get('#numero').clear().type('106');
            cy.get('#complemento').clear().type('fundos');
            cy.getElementAndClick(['#address-confirm']);
            cy.getElementAndType({ ['#nome_cartao']: 'JOSE D F MENDES' });
            cy.getElementAndType({ ['#cpf_cnpj']: '08239097510' });
            cy.getElementAndType({ ['#numero_cartao']: '5555555555554444' });
            cy.get('#validade_mes').select(1);
            cy.get('#validade_ano').select(3);
            cy.getElementAndType({ ['#cvc']: '123' });
            cy.get('#qtdeParcelas').select(1, { force: true });
            cy.getElementAndClick(['#btnProcessarPgto']);

            cy.url().should('include', '/payment');
            cy.get('.text-title').should('contain', 'PAGAMENTO CONFIRMADO');

            repetirProcesso();
        };

        const clicarParaAtualizarStatus = ($row: JQuery<HTMLElement>) => {
            cy.wrap($row).find('.getLastStatusPaymentsGPE').click();
            cy.wait(3000); // Aguarda o tempo necessário para a atualização do status
        };

        const repetirProcesso = () => {
            cy.visit(dataEnvironment.BASE_URL);
            fazerLogin();
            verificarPagamentosPendentes();
        };

        // Iniciar o fluxo com login e verificar os pagamentos pendentes
        fazerLogin();
        verificarPagamentosPendentes();
    });
});
