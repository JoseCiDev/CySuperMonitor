
import {
    BudgetConfirmationPatientSearchParameter,
    SearchBudget,
    BudgetConfirmationPaymentStatus,
    RecipeReceiptChannel,
    RecipeCluster,
    RecipeStatus,
    BudgetConfirmationPaymentMethod,
    RelationshipsPrescriberAttendantAndCluster,
    TechnicalDoubtCategory,
    TechnicalDoubtResponseStatus,
    Profile,
    BudgetConfirmationShippingMethod,
    BudgetConfirmationAromaSachet,
    BudgetConfirmationCapsuleAroma,
    RecipePendingFilter,
    elements as el,
    dataParameters,
    Given, When, Then

} from '../../../../import';

export const {
    suggestionAutocomplete,
    suggestionsAutocompleteElement,
    containerMessage,
    okModalMessage,
    btnSuccessModalElement,
    btnModalFailureElement,
    modalMessage,
    btnModalMessage,
    btnModalChangelog,
    modalElement,

} = el.Shared;

export const {
    menuRecipesElement,
    prescriberRecipes,
    menuImportRecipesElement,
    menuManageRecipes,
    openModalRegisterRecipes,
    importPDFRecipes,
    importImageRecipes,
    removeImageRecipes,
    modalSuggestionRelationshipPrescriber,
    parameterSearchPatient,
    patientRecipeElement,
    channelReceiptImportElement,
    clusterRecipes,
    budgetistRecipes,
    responsibleForRecipeElement,
    dateReceiptRecipes,
    juntocomRecipes,
    autocompleteJuntocomRecipes,
    internalObservationRecipes,
    textInternalObservationRecipes,
    controlledmedicationRecipeElement,
    urgentRecipeElement,
    clientAlertRecipeElement,
    retailRecipeElement,
    saveRecipes,
    closeRegisterRecipes,
    editRecipe,
    recipeSearchModal,
    filterDateStartSearchRecipesElement,
    filterEndDateSearchRecipesElement,
    clusterSearchElement,
    recipeSearchElement,
    patientSearchElement,
    prescriberSearchElement,
    searchBudgetScreenRecipesElement,
    lastModifierSearchElement,
    budgetistSearchElement,
    attendantResponsibleSearchElement,
    channelReceiptSearchElement,
    filterPendenciasSearchElement,
    filterPendenciasAll,
    pendingFilter,
    pendingFilterLinked,
    buttonSearchRecipesElement,
    labelSearchRecipes,
    numberRecipeElement,
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
    recipeCodeColumnElement,
    lastModifiedColumn,

} = el.Recipes;

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
    insertTreatmentTime,
    standardTreatmentTime,
    cancelTimeTreatment,
    reimportFormulas,
    saveTimeTreatment,
    budgetMessageModalElement,
    modalConfirmationBudgetElement,
    paymentMethodElement,
    chosenBudgetForConfirmation,
    insertRepeatTime,
    saveDataConfirmationBudget,
    monitoringService,
    channelConfirmationBudget,
    sendEmailTracking,
    releaseBudgetForInclusionElement,
    noShowBudgetCaixa,
    observationFromCashierToCounter,
    detailedNote,
    fieldStatusPayment,
    shippingAddress,
    addressShippingSelected,
    shipmentObservation,
    fieldFormShipping,
    juntocomBudgetConfirmation,
    juntocomClinicaHigashi,
    promisedFieldFor,
    fieldAromasSachet,
    aromaCapsuleField,
    generalObservation,
    budgetHasRecipeElement,
    urgentBudgetElement,
    cancelBudgetConfirmation,
    sendChatguruMessage,
    PreViewBudget,
    closePreViewBudget,
    sendconfirmBudget,
    showAll,
    hasSpecialFormula,
    generateLinkPayment,
    relateRecipeBudget,
    showBudgetsClosed,
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
    homeMenuElement,
    searchBudgetByBranchElement,
    searchAllBudgetsElement,
    searchButtonElement,
    paymentSelectorInput,
    updateSelectorStatusInput,
    viewSelectorInput,
    releaseBudgetCashierElement,
    cashierObservationElement,
    detailedSaleElement,
    expeditionObservationElement,
    shippingMethodElement,
    promisedToElement,
    aromaSachetElement,
    capsuleAromaElement,
    generalObservationElement,
    sendAutomaticBudgetConfirmationMessageElement,
    recipeElementAvailableForLinkingElement,
    modalToLinkRecipeElement,
    linkedRecipeProgressBarElement,
    closeModalLinkRecipeElement,
    feedbackMessageElement,
    expandSideMenuElement,
    successfullyLinkedRecipesProgressBarElement,
    modalLinkRecipeElement,
    telephoneContactConfigurationModalElement,
    insertCustomerContactPhoneNumberElement,
    serviceBudgeterElement,
    customerServiceAttendantElement,
    setUpPhoneContactElement,
    savePhoneContactNumberElement,
    confirmInsertionCustomerTelephoneContactElement,

} = el.Services;

export const {

    settingsMenu,
    subMenuClustersGroups,
    relations,
    containerFilters,
    containerProfile,
    searchFilters,
    search,
    manageRelationship,
    selectCluster,
    containerSelectPrescriber,
    selectPrescriber,
    addAttendantClusterPrescriberRelationship,
    containerMessageRelationship,
    createdRelationshipAttendant,
    prescriberRelationshipCreated,
    removeSelectedRelationship,
    SearchPrescriberManageRelationship,
    searchPrescriberRelationshipManage,
    selectPrescriberFound,
} = el.Settings;

const environment = Cypress.env('ENVIRONMENT');
const dataEnvironment = Cypress.env(environment);

// describe('Clientes realizam pagamentos de pedidos e informam dados.', function () {

//     beforeEach(function () {
//     });

//     it('Validar pagamento de pedido, atualização do status e consistência dos dados fornecidos', function () {
//         cy.login(dataEnvironment.BASE_URL, dataEnvironment.USER_ADMIN, dataEnvironment.PASSWORD, el.Login.messageErrorLogin)
//             .then((result) => {
//                 assert.exists(result.success, result.error);
//             });

//         cy.document().then((doc) => {
//             const $btn = doc.querySelector(modalElement) as HTMLElement
//             if ($btn) {
//                 cy.getElementAndClick(btnModalChangelog);
//             } else {
//                 cy.log('Modal changeLog não foi apresentada, portanto, o teste prosseguirá.');
//             }
//         });

//         cy.getElementAndClick(menuServices, servicesInProgress);

//         cy.viewBudget();

//         cy.selectCustomerContact();

//         cy.fillOrcamentistaAndAtendente();

//         cy.insertTimeTreatment();

//         cy.log('Iniciando pagamento...');
//         cy.payBudget().then((paymentData) => {
//             cy.log('Pagamento concluído, iniciando login...');

//             cy.login(dataEnvironment.BASE_URL, dataEnvironment.USER_ADMIN, dataEnvironment.PASSWORD, el.Login.messageErrorLogin)
//                 .then((result) => {
//                     assert.exists(result.success, result.error);
//                 });

//             cy.validatePaymentData(paymentData);
//         });
//     });
// });

Given('que o usuário está logado no sistema', () => {
    cy.login(dataEnvironment.BASE_URL, dataEnvironment.USER_ATENDENTE1, dataEnvironment.PASSWORD, el.Login.messageErrorLogin)
        .then((result) => {
            assert.exists(result.success, result.error);
        });
});

When('visualizar o orçamento', () => {
    cy.document().then((doc) => {
        const $btn = doc.querySelector(modalElement);
        if ($btn) {
            cy.getElementAndClick(btnModalChangelog);
        } else {
            cy.log('Modal changeLog não foi apresentada, portanto, o teste prosseguirá.');
        }
    });

    cy.getElementAndClick(menuServices, servicesInProgress);

    cy.viewBudget();
});

When('selecionar o contato do cliente', () => {
    cy.selectCustomerContact();
});

When('preencher os dados da orçamentista e atendente', () => {
    cy.fillOrcamentistaAndAtendente();
});

When('inserir o tempo de tratamento', () => {
    cy.insertTimeTreatment();
});

Then('é realizado o pagamento do orçamento', () => {
    cy.log('Iniciando pagamento...');
    cy.payBudget().then((paymentData) => {
        cy.wrap(paymentData).as('paymentData');
    });

});

Then('o sistema valida os dados do pagamento', () => {
    cy.get('@paymentData').then((paymentData) => {
        cy.log('Pagamento concluído, iniciando validação...');
        cy.login(dataEnvironment.BASE_URL, dataEnvironment.USER_ATENDENTE1, dataEnvironment.PASSWORD, el.Login.messageErrorLogin)
            .then((result) => {
                assert.exists(result.success, result.error);
            });

        cy.validatePaymentData(paymentData);
    });
});