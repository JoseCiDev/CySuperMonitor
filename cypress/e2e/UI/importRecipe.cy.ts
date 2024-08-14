/// <reference types="cypress" />

import {
    elements as el,
    faker,

} from '../../import';


const environment = Cypress.env('ENVIRONMENT');
const dataEnvironment = Cypress.env(environment);

export const {
    suggestionAutocomplete,
    suggestionsAutocomplete,
    containerMessage,
    okModalMessage,
    btnSuccessModal,
    btnModalFailure,
    modalMessage,
    btnModalMessage,
    btnModalChangelog,

} = el.Shared;

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




describe('Tela importação de receitas.', function () {

    beforeEach(function () {

    })

    it('Deve realizar importação de Receitas', function () {
        cy.login(dataEnvironment.USER_ADMIN, dataEnvironment.PASSWORD, el.Login.messageErrorLogin, dataEnvironment.BASE_URL)
            .then((result) => {
                assert.exists(result.success, result.error)
            })

        // cy.document().then((doc) => {
        //     const $btn = doc.querySelector('.modal-footer > .btn') as HTMLElement
        //     if ($btn) {
        //         cy.getElementAndClick([btnModalChangelog]);
        //     } else {
        //         cy.log('Informativo de Changelog não foi apresentado e, portanto, o teste prosseguirá.');
        //     }
        // });

        // cy.get(menuRecipes, { timeout: 60000 }).click({ force: true })

        // cy.get(menuImportRecipes, { timeout: 60000 }).click({ force: true });
        // cy.importRecipe().then((result) => {
        //     assert.exists(result.success, result.error)
        // });
    });

})

