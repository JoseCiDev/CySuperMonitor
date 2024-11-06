/// <reference types="cypress" />

import {
    elements as el,
    faker,
    RecipeCluster,
    RecipeReceiptChannel,
    RecipeStatus,
    Given, When, Then,

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
    viewRecipeScreenImportRecipesElement,
    customerPhoneToViewRecipesElement,
    recipeReceiptChannelViewRecipesElement,
    clusterScreenViewRecipesElement,

} = el.Recipes;

afterEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
});

Given('que estou logado no sistema  para importar receitas com cliente alerta', () => {
    cy.login(
        dataEnvironment.BASE_URL_SM,
        dataEnvironment.USER_ATENDENTE1,
        dataEnvironment.PASSWORD,
        el.Login.messageErrorLogin
    )
        .then((result) => {
            assert.exists(result.success, result.error);
        });

    cy.document().then((doc) => {
        const $btn = doc.querySelector(btnModalChangelog) as HTMLElement
        if ($btn) {
            cy.getElementAndClick(btnModalChangelog);
        } else {
            cy.log('Modal não foi apresentada e, portanto, o teste prosseguirá.');
        }
    });

    cy.getElementAndClick(menuRecipesElement, menuImportRecipesElement);

});

When('eu realizo a importação de uma receita sinalizada como cliente alerta', () => {
    cy.importRecipe({
        clientAlert: true,
    }).then((result) => {
        assert.exists(result.success, result.error);
        cy.wrap(result.clientAlert).as('clientAlert');
    });
});

Then('os dados das receitas importadas com cliente alerta, devem ser capturados e exibidos corretamente', () => {

    cy.get('@clientAlert').then((clientAlert) => {
        expect(clientAlert).to.exist;
        cy.log(`Receita urgente importada: ${clientAlert ? 'Marcado' : 'Desmarcado'}`);
    });

});