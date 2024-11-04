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

const channelReceiptTextMap: Record<RecipeReceiptChannel, string> = {
  [RecipeReceiptChannel.Select]: 'Selecionar',
  [RecipeReceiptChannel.Whatsapp]: 'Whatsapp',
  [RecipeReceiptChannel.Email]: 'Email',
  [RecipeReceiptChannel.InjectablesWhatsapp]: 'Injetáveis Whatsapp', // Corrigido com acento
  [RecipeReceiptChannel.EasyHealth]: 'Easy Health',
  [RecipeReceiptChannel.MedX]: 'MedX',
  [RecipeReceiptChannel.Visitation]: 'Visitação',
  [RecipeReceiptChannel.InPersonCounter]: 'Balcão/Pessoalmente',
  [RecipeReceiptChannel.WhatsappPrescriberClinic]: 'Whatsapp clinica/prescritor', // Corrigido com acento
  [RecipeReceiptChannel.EmailPrescriberClinic]: 'Email clinica/prescritor',
  [RecipeReceiptChannel.InjectablesEmail]: 'Injetáveis E-mail',
  [RecipeReceiptChannel.InjectablesEasyHealth]: 'Injetáveis EasyHealth',
};
function mapChannelReceiptToText(channelValue: RecipeReceiptChannel | number): string {
  const channelText = channelReceiptTextMap[channelValue as RecipeReceiptChannel];
  return channelText || '';
}

Given('que estou logado no sistema  para importar receitas com canal de recebimento', () => {
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

When('eu realizo a importação de uma receita com o canal de recebimento selecionado de forma aleatória', () => {
  cy.importRecipe({
    channelReceiptRecipe: faker.helpers.arrayElement([
      RecipeReceiptChannel.Whatsapp,
      RecipeReceiptChannel.Email,
      RecipeReceiptChannel.InjectablesWhatsapp,
      RecipeReceiptChannel.EasyHealth,
      RecipeReceiptChannel.MedX,
      RecipeReceiptChannel.Visitation,
      RecipeReceiptChannel.InPersonCounter,
      RecipeReceiptChannel.WhatsappPrescriberClinic,
      RecipeReceiptChannel.EmailPrescriberClinic,
      RecipeReceiptChannel.InjectablesEmail,
      RecipeReceiptChannel.InjectablesEasyHealth,
    ]),
  }).then((result) => {
    assert.exists(result.success, result.error);
    cy.wrap(result.channelReceiptRecipe).as('channelReceiptRecipe');
  });
});

Then('os dados das receitas importadas com canal de recebimento, devem ser capturados e exibidos corretamente', () => {
  cy.get('@channelReceiptRecipe').then((channelReceiptRecipe) => {
    expect(channelReceiptRecipe).to.exist;

    const channelReceiptText = mapChannelReceiptToText(channelReceiptRecipe);
    cy.log(`Canal de recebimento armazenado como número: ${channelReceiptRecipe}`);
    cy.log(`Nome do canal de recebimento mapeado: ${channelReceiptText}`);

    cy.viewRecipe(viewRecipeScreenImportRecipesElement);

    cy.get(recipeReceiptChannelViewRecipesElement)
      .invoke('text')
      .then((elementText) => {
        const trimmedText = elementText.trim();
        cy.log(`Canal de recebimento exibido na interface: ${trimmedText}`);
        
        expect(trimmedText).to.equal(channelReceiptText);
      });
  });
});