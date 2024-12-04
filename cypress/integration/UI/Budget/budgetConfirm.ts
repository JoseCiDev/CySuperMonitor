/// <reference types="cypress" />

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

} from '../../../import';


const environment = Cypress.env('ENVIRONMENT');
const dataEnvironment = Cypress.env(environment);

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

} = el.Recipes;

export const {
    menuServices,
    servicesInProgress,
    buttonLinkRecipeScreenServiceProgressElement,

} = el.Services;


Given('que o usuário está logado', () => {
    cy.login(dataEnvironment.BASE_URL, dataEnvironment.USER_ATENDENTE1, dataEnvironment.PASSWORD, el.Login.messageErrorLogin)
        .then((result) => {
            assert.exists(result.success, result.error);
        });
});

When('eu acessar a tela de atendimentos em andamento', () => {

    cy.document().then((doc) => {
        const $btn = doc.querySelector(modalElement);
        if ($btn) {
            cy.getElementAndClick(btnModalChangelog);
        } else {
            cy.log('Modal changeLog não foi apresentada, portanto, o teste prosseguirá.');
        }
    });

});

When('visualizar um orçamento disponível', () => {

    cy.viewBudget();

});

When('selecionar o contato', () => {

    cy.selectCustomerContact();

});

When('informar os dados do orçamentista e do atendente', () => {

    cy.fillOrcamentistaAndAtendente();

});

When('configurar o tempo de tratamento desejado', () => {

    cy.insertTimeTreatment();

});

When('vincular receita ao pedido', () => {

    // cy.linkRecipe({
    //     from: 'attendance',
    // });

    cy.log('x');
});

Then('confirmarei o pedido', () => {
    cy.confirmBudget().then((orderData) => {
        cy.wrap(orderData).as('confirmedBudgetData');
    });
});

Then('os dados fornecidos na confirmação devem ser exibidos corretamente', () => {
    cy.get('@confirmedBudgetData').then((orderData) => {
        cy.log('Dados confirmados:', orderData);

        expect(orderData.success).to.be.true;
    });
});
