/// <reference types="cypress" />

import {
    elements as el,
    faker,

} from '../import';


const environment = Cypress.env('ENVIRONMENT');
const dataEnvironment = Cypress.env(environment);

export const {
    suggestionAutocomplete,
    suggestionsAutocompleteElement,
    containerMessage,
    okModalMessage,
    btnSuccessModalElement,
    btnModalFailure,
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
    channelReceiptImport,
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
    buttonLinkRecipeScreenServiceProgressElement,

} = el.Services;




describe('Tela Atendimentos.', function () {

    beforeEach(function () {

    })

    it('Deve realizar a confirmação do orçamento', function () {
        cy.login(dataEnvironment.BASE_URL_SM, dataEnvironment.USER_ATENDENTE1, dataEnvironment.PASSWORD, el.Login.messageErrorLogin)
            .then((result) => {
                assert.exists(result.success, result.error);
            });

        cy.document().then((doc) => {
            const $btn = doc.querySelector(modalElement) as HTMLElement
            if ($btn) {
                cy.getElementAndClick(btnModalChangelog);
            } else {
                cy.log('Modal changeLog não foi apresentada, portanto, o teste prosseguirá.');
            }
        });
        
        cy.getElementAndClick(menuServices, servicesInProgress);
        
        cy.viewBudget();

        cy.selectCustomerContact();

        cy.fillOrcamentistaAndAtendente();

        cy.insertTimeTreatment();
        
        cy.confirmBudget();
    });
});