import { elements as el } from '../../elements';
import '../../support/commands';
import { faker } from '@faker-js/faker';
import { dataParameters, SearchRecipe } from '../../DataParameters/dataParameters'

export const {
    menuRecipes,
    menuRecipesReduced,
    prescriberRecipes,
    menuImportRecipes,
    menuManageRecipes,
    openModalRegisterRecipes,
    importPDFRecipes,
    importImageRecipes,
    removeImageRecipes,
    modalSuggestionRelationshipPrescriber,
    parameterSearchPatient,
    patientRecipes,
    channelReceiptImport,
    clusterRecipes,
    budgetistRecipes,
    responsibleForRecipe: attendantResponsibleRecipes,
    autocompleteResponsibleAttendant,
    dateReceiptRecipes,
    juntocomRecipes,
    autocompleteJuntocomRecipes,
    internalObservationRecipes,
    textInternalObservationRecipes,
    controlledmedicationRecipes,
    urgentRecipes,
    clientAlertRecipes,
    retailRecipes,
    optionTypeRecipes,
    saveRecipes,
    closeRegisterRecipes,
    editRecipe,
    recipeSearchModal,
    filterDateStartSearchRecipes,
    filterEndDateSearchRecipes,
    clusterSearch,
    recipeSearch,
    patientSearch,
    prescriberSearch,
    budgetSearch,
    lastModifierSearch,
    budgetistSearch,
    attendantResponsibleSearch,
    channelReceiptSearch,
    filterPendenciasSearch,
    filterPendenciasAll,
    pendingFilter,
    pendingFilterLinked,
    buttonSearchRecipes,
    labelSearchRecipes,
    numberRecipe,
    dateReceiptGrid,
    checkboxMarkUse,
    containerInsertUser,
    select,
    selectedUser,
    passwordRecipe,
    applyUncheckUse,
    viewRecipes,
    actions,
    tabPdfViewRecipes,
    tabOriginalViewRecipes,
    internalObservationsTabViewRecipes,
    tabInformationFcertaViewRecipes,
    rulerViewRecipes,
    closeViewRecipes,
    cloneRecipes,
    modalObservationsClone,
    clonePharmaceuticalNotes,
    deleteRecipes,
    accessPharmaceuticalObservations,
    tabAddPharmaceuticalObservations,
    passwordPharmaceuticalObservations,
    textPharmaceuticalObservations,
    closeModalPharmaceuticalObservations,
    tabDeletePharmaceuticalObservations,
    deletePharmaceuticalObservations,
    accessDoubtsTechnical,
    containerCategoryTechnicalQuestions,
    textDoubtsTechnical,
    containerCollaborators,
    responsibleAnswers,
    sendQuestionsTechnical,
    closeModalDoubtsTechnical,
    updateModalTechnicalQuestions,
    containerResponsibleResponseQuestionsTechnical,
    ResponsibleResponseQuestionsTechnical,
    responsibleCurrentResponseQuestionsTechnical,
    markDoubtsTechnicalResolved,
    deleteDoubtsTechnical,
    statusResponseQuestionsTechniques,
    textResponseQuestionsTechniques,
    sendReplyQuestionsTechnical,
    barProgressSaveRecipe,
    noMainContact,
} = el.Recipes;

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




describe('Tela importação de receitas.', function () {

    beforeEach(function () {
        // cy.login(el.Login.acess, dataParameters.env.USERADMIN, dataParameters.env.PASSWORD);
    });



    it.only('Deve confirmar order logado com perfil administrador e visualizar informações selecionadas no quadro de informações da amarelinha confirmada.', function () {
        cy.login(el.Login.acess, dataParameters.env.USER_ADMIN, dataParameters.env.PASSWORD);

        cy.getElementAndClick(menuServices, servicesInProgress);
        cy.viewOrder(el.Services.buttonView);
        cy.insertTimeTreatment('30');
        cy.confirmOrder(
            dataParameters.paymentMethod.BoletoReleaseWithoutPayment,
            dataParameters.Order.timeRepetition,
            dataParameters.Order.textObservationCashierCounter,
            dataParameters.paymentStatus.NotPayed,
            dataParameters.Order.textNoteShipping,
            dataParameters.shippingMethod.Sedex10,
            dataParameters.formattedDate,
            dataParameters.aromaSachet.Orange,
            dataParameters.capsuleAroma.Raspberry,
            dataParameters.Order.textGeneralNote
        );
        cy.get(el.Services.hopscotchConfirmedInformationBoard);
        cy.get(el.Services.hopscotchConfirmedInformationBoard);
        cy.get(el.Services.budgetHopscotchInformationBoardConfirmed);

    });



    it('Deve confirmar order logado com usuário atendente, logar com usuário distinto do primeiro, reabrir amarelinha, alterar atendente, orçamentista, backoffice, tempo de repetição, dias de tratamento, aroma sachê, aroma capsula, observações e confirmar novamente. Validar se é apresentado informações alterada no quadro de informações da amarelinha confirmada.', function () {
        cy.login(el.Login.acess, dataParameters.env.USER_ADMIN, dataParameters.env.PASSWORD);

        cy.getElementAndClick(menuServices, servicesInProgress); (el.Services.servicesInProgress);
        cy.viewOrder(el.Services.buttonView);
        cy.insertTimeTreatment('30');
        cy.confirmOrder(
            dataParameters.paymentMethod.BoletoReleaseWithoutPayment,
            dataParameters.Order.timeRepetition,
            dataParameters.Order.textObservationCashierCounter,
            dataParameters.paymentStatus.NotPayed,
            dataParameters.Order.textNoteShipping,
            dataParameters.shippingMethod.Sedex10,
            dataParameters.formattedDate,
            dataParameters.aromaSachet.Orange,
            dataParameters.capsuleAroma.Raspberry,
            dataParameters.Order.textGeneralNote
        );
        cy.get(el.Services.hopscotchConfirmedInformationBoard);
        cy.get(el.Services.hopscotchConfirmedInformationBoard);
        cy.get(el.Services.budgetHopscotchInformationBoardConfirmed);
        const captureData = (fieldCapture: string, dataCaptured: string, locationStorage: string): Cypress.Chainable<string> => {
            return cy.get(fieldCapture)
                .eq(0)
                .invoke('text')
                .then((text) => {
                    const userMatch = text.match(/\d+/);

                    if (!userMatch) {
                        throw new Error(`Usuário inválido: ${text}`);
                    }
                    const userOrder = (userMatch);
                    cy.wrap(userOrder)
                        .as('user');
                    cy.setCapturedData(dataCaptured);
                    locationStorage = dataCaptured;
                    cy.log(`Usuário não capturado`);
                });
        }

        captureData(el.Services.orderBudgetist, dataParameters.Order.budgetist, dataParameters.Order.budgetist);
        captureData(el.Services.OrderAttendant, el.Services.OrderAttendant, el.Services.OrderAttendant);
        cy.log(dataParameters.Order.budgetist);
        cy.log(el.Services.OrderAttendant);


        cy.login(el.Login.acess, dataParameters.env.USER_INCLUSAO, dataParameters.env.PASSWORD);

        cy.getElementAndClick(menuServices, servicesInProgress); (el.Services.servicesInProgress);
        cy.getElementAndClick(el.Services.showOrdersClosed);
        cy.viewOrder(el.Services.buttonView);
        cy.getElementAndClick(el.Services.reopenOrder), { timeout: 20000 };
        cy.getElementAndClick(el.Services.confirmReopenOrder);
        cy.wait(2000);
        cy.confirmOrder(
            dataParameters.paymentMethod.CartaoDebito,
            dataParameters.Order.timeRepetition,
            dataParameters.Order.textObservationCashierCounter,
            dataParameters.paymentStatus.Pago,
            dataParameters.Order.textNoteShipping,
            dataParameters.shippingMethod.SedexFloripa,
            dataParameters.formattedDate,
            dataParameters.aromaSachet.Cacau,
            dataParameters.capsuleAroma.Cacau,
            dataParameters.Order.textGeneralNote
        );
        cy.get(el.Services.hopscotchConfirmedInformationBoard);
        cy.get(el.Services.hopscotchConfirmedInformationBoard);
        cy.get(el.Services.budgetHopscotchInformationBoardConfirmed);
        captureData(el.Services.orderBudgetist, dataParameters.Order.budgetist, dataParameters.Order.budgetist);
        captureData(el.Services.OrderAttendant, dataParameters.Order.orderAttendant, dataParameters.Order.orderAttendant);
        cy.log(dataParameters.Order.budgetist);
        cy.log(dataParameters.Order.orderAttendant);

    });


    it('Deve confirmar order juntocom e visualizar dados confirmados no quadro de informações da amarelinha confirmada.', function () {
        cy.login(el.Login.acess, dataParameters.env.USER_ATENDENTE1, dataParameters.env.PASSWORD);

        cy.getElementAndClick(menuServices, servicesInProgress); (el.Services.servicesInProgress);
        cy.viewOrder(el.Services.buttonView);

    })

    it('Deve confirmar order vinculado a recipe e visualizar dados confirmados no quadro de informações da amarelinha confirmada.', function () {
        cy.login(el.Login.acess, dataParameters.env.USER_ATENDENTE1, dataParameters.env.PASSWORD);

        cy.getElementAndClick(menuServices, servicesInProgress); (el.Services.servicesInProgress);
        cy.viewOrder(el.Services.buttonView);

    })


    it('Deve confirmar order e visualizar dados confirmados no quadro de informações da amarelinha confirmada, logado com perfil farmacêutico.', function () {
        cy.login(el.Login.acess, dataParameters.env.USER_ATENDENTE1, dataParameters.env.PASSWORD);

        cy.getElementAndClick(menuServices, servicesInProgress); (el.Services.servicesInProgress);
        cy.viewOrder(el.Services.buttonView);

    })

    it('Deve confirmar order e visualizar dados confirmados no quadro de informações da amarelinha confirmada, logado com perfil recepção.', function () {
        cy.login(el.Login.acess, dataParameters.env.USER_ATENDENTE1, dataParameters.env.PASSWORD);

        cy.getElementAndClick(menuServices, servicesInProgress); (el.Services.servicesInProgress);
        cy.viewOrder(el.Services.buttonView);

    })

    it('Deve confirmar order, logado com perfil atendente.', function () {
        cy.login(el.Login.acess, dataParameters.env.USER_ATENDENTE1, dataParameters.env.PASSWORD);

        cy.getElementAndClick(menuServices, servicesInProgress); (el.Services.servicesInProgress);
        cy.viewOrder(el.Services.buttonView);

    })

    it('Deve confirmar order e visualizar dados confirmados no quadro de informações da amarelinha confirmada, logado com perfil inclusão.', function () {
        cy.login(el.Login.acess, dataParameters.env.USER_INCLUSAO, dataParameters.env.PASSWORD);

        cy.getElementAndClick(menuServices, servicesInProgress); (el.Services.servicesInProgress);
        cy.viewOrder(el.Services.buttonView);

    })




})