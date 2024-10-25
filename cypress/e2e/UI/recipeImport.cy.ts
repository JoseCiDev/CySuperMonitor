/// <reference types="cypress" />

import {
    elements as el,
    faker,
    RecipeCluster,
    RecipeReceiptChannel,
    RecipeType,

} from '../../import';


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




describe('Tela importação de receitas.', function () {

    beforeEach(function () {

    })

    it('Deve realizar importação de Receitas', function () {
        cy.login(dataEnvironment.BASE_URL_SM, dataEnvironment.USER_ATENDENTE1, dataEnvironment.PASSWORD, el.Login.messageErrorLogin)
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

        cy.importRecipe({
            prescriber: '999990-SC',
            patient: 'teste pre',
            channelReceiptRecipe: RecipeReceiptChannel.Whatsapp,
            attendantResponsibleRecipes: 'Graziele Fabiane Martins Wahl',
            cluster: RecipeCluster.Cluster1,
            recipeType: RecipeType.HasRecipe,
            textNoteRecipe: faker.lorem.paragraph(),
            urgentRecipe: true,
            clientAlert: false,
            controlledMedication: false,
            customerPhone: 48991888641,
        }).then((result) => {
            assert.exists(result.success, result.error);
        });
    });
})

