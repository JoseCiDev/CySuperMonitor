/// <reference types="cypress" />

import {
    elements as el,
    faker,
dataParameters,
    SearchRecipe,
} from '../../../import';



const environment = Cypress.env('ENVIRONMENT');
const dataEnvironment = Cypress.env(environment);

export const {
    btnModalChangelog

} = el.Shared;

export const {
    menuServices,
    servicesInProgress,
    accessWorkFlowService,
    parameterSearchBudgetElement: parameterSearchCardBudget,
    cardBudget,
    buttonLinkRecipeScreenServiceProgressElement,
    buttonUnlinkRecipeScreenServiceProgress,
    fieldLinkRecipeElement,
    budgetInProgressElement: budgetInProgressElement,
    buttonView,
    fieldSearchBudgetElement: fieldSearchBudgetElement,
    searchBranch,
    sendSearch,
    brazilian,
    stranger,
    useFcertaOriginatingTelephoneNumber,
    phoneCustomer,
    dontSendCustomerMessage,
    languageCustomer,
    cancelChatguruIntegration,
    saveNumberChatguru,
    budgetist,
    treatmentTimeModalHeader,
    standardTreatmentTime,
    cancelTimeTreatment,
    reimportFormulas,
    saveTimeTreatment,
    budgetMessageModalElement: budgetMessageModalElement,
    modalConfirmationBudgetElement: modalConfirmationBudgetElement,
    paymentMethodElement,
    chosenBudgetForConfirmation: chosenBudget,
    insertRepeatTime,
    saveDataConfirmationBudget: saveDataConfirmationBudget,
    monitoringService,
    channelConfirmationBudget: channelConfirmationBudget,
    sendEmailTracking,
    releaseBudgetForInclusionElement: noShowBudgetInclusion,
    noShowBudgetCaixa: noShowBudgetCaixa,
    observationFromCashierToCounter,
    detailedNote,
    fieldStatusPayment,
    shippingAddress,
    addressShippingSelected,
    shipmentObservation,
    fieldFormShipping,
    juntocomBudgetConfirmation: juntocomBudgetConfirmation,
    juntocomClinicaHigashi,
    promisedFieldFor,
    fieldAromasSachet,
    aromaCapsuleField,
    generalObservation,
    budgetHasRecipeElement,
    urgentBudgetElement: urgentBudgetElement,
    cancelBudgetConfirmation: cancelBudgetConfirmation,
    sendChatguruMessage,
    PreViewBudget: PreViewBudget,
    closePreViewBudget: closePreViewBudget,
    sendconfirmBudget: sendconfirmBudget,
    showAll,
    hasSpecialFormula,
    generateLinkPayment,
    relateRecipeBudget: relateRecipeBudget,
    showBudgetsClosed: showBudgetsClosed,
    reopenBudget,
    confirmReopenBudget,
    userOptions,
    openModalImportBudget,
    importBudget,
    importBranch,
    importHowNewService,
    syncBudget,
    hopscotchConfirmedInformationBoard,
    budgetHopscotchInformationBoardConfirmed,
    budgetistFrameInformationAmarelinhaConfirmed,
    inclusionFrameInformationAmarelinhaConfirmed,
    attendantHopscotchInformationBoardConfirmed,
    textFrameInformationHopscotchConfirmed,
    budgetBudgetist,
    BudgetAttendant,
    containerBudgets,

} = el.Services;



// describe('Atendimentos em Andamento', function () {
//     const environment = Cypress.env('ENVIRONMENT');
//     // Get the specific environment object based on the selected ENVIRONMENT
//     const dataEnvironment = Cypress.env(environment);


//     beforeEach(function () {
//         cy.login(dataEnvironment.USER_ADMIN, dataEnvironment.PASSWORD, el.Login.messageErrorLogin, dataEnvironment.BASE_URL_HOMOLOG)
//             .then((result) => {
//                 assert.exists(result.success, result.error)
//             })
//     });




//     it.only('Deve confirmar budget', function () {
//         cy.getElementAndClick(btnModalChangelog)
;
        
//         cy.getElementAndClick(menuServices)
;
        
//         cy.get(servicesInProgress).click({force:true});
        
//         cy.viewBudget(buttonView);
//         cy.insertTimeTreatment('30');

//     });


//     // it('Deve vincular recipe ao budget', function () {
//     //     cy.getElementAndClick(menuServices,servicesInProgress)
;(servicesInProgress);
//     //     cy.viewBudget(buttonView);
//     //     cy.linkBudgetRecipe(buttonLinkRecipeScreenServiceProgressElement, parseInt(dataParameters.Recipe.import.numberRecipe as string));
//     // });

//     it('Deve desvincular recipe ao budget', function () {
//         cy.getElementAndClick(menuServices,servicesInProgress)
;(servicesInProgress);
        
//         cy.viewBudget(buttonView);
//         cy.unlinkBudgetRecipe(buttonUnlinkRecipeScreenServiceProgress)
//     });


//     it('Deve gerar link de pagamento budget', function () {


//     });


//     it('Deve inserir file na galeria do atendimento', function () {

//     });


//     it('Deve enviar orçamento via e-mail', function () {

//     });

//     it('Deve excluir budget', function () {

//     });



// });