/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

import {
    elements as el,
    faker,
    RecipeCluster,
    RecipeReceiptChannel,
    RecipeType,

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




// describe('Tela importação de receitas.', function () {

//     beforeEach(function () {

//     })

//     it('Deve realizar importação de Receitas com imagens em pdf', function () {
//         cy.login(dataEnvironment.BASE_URL_SM, dataEnvironment.USER_ATENDENTE1, dataEnvironment.PASSWORD, el.Login.messageErrorLogin)
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

//         cy.importRecipe({
//             file: 'img/recipeExample.pdf',
//             prescriber: '999990-SC',
//             patient: '618484',
//             channelReceiptRecipe: RecipeReceiptChannel.Whatsapp,
//             attendantResponsibleRecipes: 'Graziele Fabiane Martins Wahl',
//             cluster: RecipeCluster.Cluster1,
//             recipeType: RecipeType.HasRecipe,
//             textNoteRecipe: faker.lorem.paragraph(),
//             urgentRecipe: true,
//             clientAlert: true,
//             controlledMedication: true,
//             customerPhone: 48991888641,
//         }).then((result) => {
//             assert.exists(result.success, result.error);
//         });
//     });
// });





/*

importar receita pdf => finalizar com sucesso
importar receita jpg => finalizar com sucesso
importar receita prescritor => definir prescritor aleatorio e conferir depois de importar
importar receita paciente => definir paciente aleatorio e conferir depois de importar
importar receita nao é o contato principal => informar o contato principal e conferir depois de importar
importar receita sem contato principal => informar sem contato principal e conferir depois de importar
importar receita canal de recebimento => informar canal de recebimento e conferir depois de importar
importar receita cluster => informar cluster e conferir depois de importar
importar receita medicamento controlado => informar medicamento controlado e conferir depois de importar
importar receita urgente => informar urgente e conferir depois de importar
importar receita cliente alerta => informar cliente alerta e conferir depois de importar

*/

Given('que estou logado no sistema', () => {
    cy.login(dataEnvironment.BASE_URL_SM, dataEnvironment.USER_ATENDENTE1, dataEnvironment.PASSWORD, el.Login.messageErrorLogin)
        .then((result) => {
            assert.exists(result.success, result.error);
        });

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

When('eu realizo a importacao de uma receita', () => {
    cy.importRecipe({
        file: 'img/recipeExample.pdf',
        prescriber: '999990-SC',
        patient: '618484',
        channelReceiptRecipe: RecipeReceiptChannel.Whatsapp,
        attendantResponsibleRecipes: 'Graziele Fabiane Martins Wahl',
        cluster: RecipeCluster.Cluster1,
        recipeType: RecipeType.HasRecipe,
        textNoteRecipe: faker.lorem.paragraph(),
        urgentRecipe: true,
        clientAlert: true,
        controlledMedication: true,
        customerPhone: 48991888641,
    }).then((result) => {
        assert.exists(result.success, result.error);
    });
});

Then('a receita deve ser importada com sucesso', () => {
    cy.get('.alert-success')
        .should('be.visible')
        .and('contain', 'Importação realizada com sucesso');
});
