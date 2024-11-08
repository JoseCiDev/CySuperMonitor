/// <reference types="cypress" />

import {
    elements as el,
    faker,
    Given, When, Then
} from '../../../../import';


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
    cloneRecipeElement,

} = el.Recipes;




// describe('Clonagem de receitas.', function () {

//     beforeEach(function () {

//     })

//     it('Deve clonar receitas a partir da tela de importação de receitas', function () {
//         cy.login(dataEnvironment.BASE_URL, dataEnvironment.USER_ATENDENTE1, dataEnvironment.PASSWORD, el.Login.messageErrorLogin)
//             .then((result) => {
//                 assert.exists(result.success, result.error);
//             });


//         cy.document().then((doc) => {
//             const $btn = doc.querySelector(btnModalChangelog) as HTMLElement
//             if ($btn) {
//                 cy.getElementAndClick(btnModalChangelog);
//             } else {
//                 cy.log('Modal não foi apresentada e, portanto, o teste prosseguirá.');
//             }
//         });

//         cy.getElementAndClick(menuRecipesElement, menuImportRecipesElement);

//         cy.searchRecipe();

//         cy.cloneRecipe(cloneRecipeElement);
//     });
// });




Given('que o usuário está logado no sistema de receitas', () => {
    cy.login(dataEnvironment.BASE_URL, dataEnvironment.USER_ATENDENTE1, dataEnvironment.PASSWORD, el.Login.messageErrorLogin)
        .then((result) => {
            assert.exists(result.success, result.error);
        });
});

Given('que estou na tela de importação de receitas', () => {
    cy.document().then((doc) => {
        const $btn = doc.querySelector(btnModalChangelog) as HTMLElement;
        if ($btn) {
            cy.getElementAndClick(btnModalChangelog);
        } else {
            cy.log('Modal não foi apresentada e, portanto, o teste prosseguirá.');
        }
    });

    cy.getElementAndClick(menuRecipesElement, menuImportRecipesElement);
});

When('eu busco uma receita específica', () => {
    cy.searchRecipe();
});

When('seleciono a opção de clonar a receita', () => {
    cy.cloneRecipe(cloneRecipeElement);
});

Then('a receita deve ser clonada com sucesso', () => {
    cy.get('.alert-success')
        .should('be.visible')
        .and('contain', 'Receita clonada com sucesso');
});

Then('a receita clonada deve aparecer na lista de receitas importadas', () => {
    cy.get('.recipe-list')
        .should('contain', 'Receita Clonada');
});
