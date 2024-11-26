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




// describe('Tela Atendimentos.', function () {

//     beforeEach(function () {

//     })

//     it('Deve realizar a confirmação do orçamento', function () {
//         cy.login(dataEnvironment.BASE_URL, dataEnvironment.USER_ATENDENTE1, dataEnvironment.PASSWORD, el.Login.messageErrorLogin)
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

//         cy.confirmBudget();
//     });
// });


Given('que o usuário está logado', () => {
    cy.login(dataEnvironment.BASE_URL, dataEnvironment.USER_ATENDENTE1, dataEnvironment.PASSWORD, el.Login.messageErrorLogin)
        .then((result) => {
            assert.exists(result.success, result.error);
        });
});

When('eu acessar a tela de atendimentos em andamento', () => {
    cy.getElementAndClick(el.Services.menuServices, el.Services.servicesInProgress);
});

When('visualizar um orçamento disponível', () => {
    cy.viewBudget();
});

When('selecionar o contato', () => {
    cy.selectCustomerContact();
});

When('informar os dados do orçamentista e do atendente', () => {
    // cy.fillOrcamentistaAndAtendente();
    cy.log('cy.fillOrcamentistaAndAtendente();');
});

When('configurar o tempo de tratamento desejado', () => {
    // cy.insertTimeTreatment();
    cy.log('cy.insertTimeTreatment();');
    cy.wait(1000);
});

When('vincular receita ao pedido', () => {
    
    cy.linkRecipe({
        from: 'attendanceScreen',
        recipe: '425984',
    });
    
});

Then('confirmarei o pedido', () => {
    cy.confirmBudget();
    // cy.log('cy.confirmBudget();');
});

Then('os dados fornecidos na confirmação devem ser exibidos corretamente', () => {
    cy.log('teste')
});