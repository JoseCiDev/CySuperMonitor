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
    parameterSearchCardOrder,
    cardBudget,
    buttonLinkRecipeScreenServiceProgress,
    buttonUnlinkRecipeScreenServiceProgress,
    fieldLinkRecipe,
    orderInProgress,
    buttonView,
    fieldSearchOrder,
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
    buttonTimeTreatment,
    standardTreatmentTime,
    cancelTimeTreatment,
    reimportFormulas,
    saveTimeTreatment,
    orderMessageModal,
    modalConfirmationOrder,
    containerPaymentMethod,
    chosenBudget,
    insertRepeatTime,
    saveDataConfirmationOrder,
    monitoringService,
    channelConfirmationOrder,
    sendEmailTracking,
    noShowOrderInclusion,
    noShowOrderCaixa,
    observationFromCashierToCounter,
    detailedNote,
    fieldStatusPayment,
    shippingAddress,
    addressShippingSelected,
    shipmentObservation,
    fieldFormShipping,
    juntocomOrderConfirmation,
    juntocomClinicaHigashi,
    promisedFieldFor,
    fieldAromasSachet,
    aromaCapsuleField,
    generalObservation,
    hasRecipe,
    urgentOrder,
    cancelOrderConfirmation,
    sendChatguruMessage,
    PreViewOrder,
    closePreViewOrder,
    sendconfirmOrder,
    showAll,
    hasSpecialFormula,
    generateLinkPayment,
    relateRecipeOrder,
    showOrdersClosed,
    reopenOrder,
    confirmReopenOrder,
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
    orderBudgetist,
    OrderAttendant,
    containerOrders,

} = el.Services;



describe('Atendimentos em Andamento', function () {
    const environment = Cypress.env('ENVIRONMENT');
    // Get the specific environment object based on the selected ENVIRONMENT
    const dataEnvironment = Cypress.env(environment);


    beforeEach(function () {
        cy.login(dataEnvironment.USER_ADMIN, dataEnvironment.PASSWORD, el.Login.messageErrorLogin, dataEnvironment.BASE_URL_HOMOLOG)
            .then((result) => {
                assert.exists(result.success, result.error)
            })
    });




    it.only('Deve confirmar order', function () {
        cy.getElementAndClick([btnModalChangelog]);
        
        cy.getElementAndClick([menuServices]);
        
        cy.get(servicesInProgress).click({force:true});
        
        cy.viewOrder(buttonView);
        cy.insertTimeTreatment('30');

    });


    it('Deve vincular recipe ao order', function () {
        cy.getElementAndClick([menuServices,servicesInProgress]);(servicesInProgress);
        cy.viewOrder(buttonView);
        cy.linkOrderRecipe(buttonLinkRecipeScreenServiceProgress, parseInt(dataParameters.Recipe.import.numberRecipe as string));
    });

    it('Deve desvincular recipe ao order', function () {
        cy.getElementAndClick([menuServices,servicesInProgress]);(servicesInProgress);
        
        cy.viewOrder(buttonView);
        cy.unlinkOrderRecipe(buttonUnlinkRecipeScreenServiceProgress)
    });


    it('Deve gerar link de pagamento order', function () {


    });


    it('Deve inserir file na galeria do atendimento', function () {

    });


    it('Deve enviar orçamento via e-mail', function () {

    });

    it('Deve excluir order', function () {

    });



});