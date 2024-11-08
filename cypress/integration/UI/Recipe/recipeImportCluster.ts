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

const clusterTextMap: Record<RecipeCluster, string> = {
    [RecipeCluster.Select]: 'Selecionar',
    [RecipeCluster.Cluster1]: "1",
    [RecipeCluster.Cluster2]: "2",
    [RecipeCluster.Cluster3]: "3",
    [RecipeCluster.Cluster4]: "4",
    [RecipeCluster.Cluster5]: "5",
    [RecipeCluster.PediatricCluster]: "Cluster Pediátrico",
    [RecipeCluster.PrescribersCluster]: "Cluster Prescritores",
    [RecipeCluster.InjectablesServiceCluster]: "Cluster Atendimento Injetáveis",
    [RecipeCluster.TechnicalConsultationInjectablesCluster]: "Cluster Consultoria técnica Injetáveis",
    [RecipeCluster.ReceptionCluster]: "Cluster Recepção",
    [RecipeCluster.TrainingCluster]: "Cluster Treinamento",
};
function mapClusterToText(cluster: string | RecipeCluster): string {
    const clusterText = clusterTextMap[cluster as RecipeCluster];
    if (!clusterText) {
        cy.log(`Cluster não reconhecido: ${cluster}`);
        return "Cluster desconhecido";
    }
    return clusterText;
}

Given('que estou logado no sistema  para importar receitas com cluster', () => {
    cy.login(
        dataEnvironment.BASE_URL,
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

When('eu realizo a importação de uma receita com o cluster selecionado de forma aleatória', 
    () => {
    cy.importRecipe({
        channelReceiptRecipe: faker.helpers.arrayElement([
            RecipeCluster.Cluster1,
            RecipeCluster.Cluster2,
            RecipeCluster.Cluster3,
            RecipeCluster.Cluster4,
            RecipeCluster.Cluster5,
            RecipeCluster.PediatricCluster,
            RecipeCluster.PrescribersCluster,
            RecipeCluster.TechnicalConsultationInjectablesCluster,
            RecipeCluster.InjectablesServiceCluster,
            RecipeCluster.ReceptionCluster,
        ]),
    }).then((result) => {
        assert.exists(result.success, result.error);
        cy.log(`Cluster retornado da importação: ${result.cluster}`);
        cy.wrap(result.cluster).as('cluster');
    });
});

Then('os dados das receitas importadas com cluster, devem ser capturados e exibidos corretamente', () => {
    cy.get('@cluster').then((cluster) => {
        expect(cluster).to.exist;

        const clusterText = mapClusterToText(cluster);
        cy.log(`Cluster capturado da importação de receitas: ${clusterText}`);

        cy.viewRecipe(viewRecipeScreenImportRecipesElement);

        cy.get(clusterScreenViewRecipesElement)
            .invoke('text')
            .then((elementText) => {
                const trimmedText = elementText.trim();
                cy.log(`Cluster extraído da visualização de receitas: ${trimmedText}`);

                cy.log(`Comparando o cluster importado: "${clusterText}" com o cluster exibido: "${trimmedText}"`);

                expect(trimmedText, `Esperava que o texto exibido fosse igual ao cluster importado: ${clusterText}`)
                    .to.equal(clusterText);
            });
    });
});
