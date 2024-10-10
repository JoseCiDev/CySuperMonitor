// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference path="../cypress.d.ts" />


import {
  elements as el,
  faker,

  SearchRecipe,
  mount,
  validateEmail,
  validatePassword,
  checkInput,
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
  patientRecipes,
  channelReceiptImport,
  clusterRecipes,
  budgetistRecipes,
  responsibleForRecipeElement,
  autocompleteResponsibleAttendant,
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

export const {
  menuServices,
  servicesInProgress,
  accessWorkFlowService,
  parameterSearchBudgetElement,
  cardBudget,
  buttonLinkRecipeScreenServiceProgressElement,
  buttonUnlinkRecipeScreenServiceProgress,
  fieldLinkRecipeElement,
  budgetInProgressElement,
  buttonView,
  fieldSearchBudgetElement,
  searchBranch,
  sendSearch,
  brazilian,
  stranger,
  useFcertaOriginatingTelephoneNumber,
  phoneCustomer,
  dontSendCustomerMessage,
  languageCustomer,
  cancelChatguruIntegration,
  saveNumberChatguru,
  budgetist,
  treatmentTimeModalHeader,
  standardTreatmentTime,
  cancelTimeTreatment,
  reimportFormulas,
  saveTimeTreatment,
  budgetMessageModalElement,
  modalConfirmationBudgetElement,
  chosenBudgetForConfirmation: chosenBudget,
  insertRepeatTime,
  saveDataConfirmationBudget: saveDataConfirmationBudget,
  monitoringService,
  channelConfirmationBudget: channelConfirmationBudget,
  sendEmailTracking,
  releaseBudgetForInclusionElement: noShowBudgetInclusion,
  noShowBudgetCaixa: noShowBudgetCaixa,
  observationFromCashierToCounter,
  detailedNote,
  fieldStatusPayment,
  shippingAddress,
  addressShippingSelected,
  shipmentObservation,
  fieldFormShipping,
  juntocomBudgetConfirmation: juntocomBudgetConfirmation,
  juntocomClinicaHigashi,
  promisedFieldFor,
  fieldAromasSachet,
  aromaCapsuleField,
  generalObservation,
  budgetHasRecipeElement,
  urgentBudgetElement: urgentBudgetElement,
  cancelBudgetConfirmation: cancelBudgetConfirmation,
  sendChatguruMessage,
  PreViewBudget: PreViewBudget,
  closePreViewBudget: closePreViewBudget,
  sendconfirmBudget: sendconfirmBudget,
  showAll,
  hasSpecialFormula,
  generateLinkPayment,
  relateRecipeBudget: relateRecipeBudget,
  showBudgetsClosed: showBudgetsClosed,
  reopenBudget,
  confirmReopenBudget,
  userOptions,
  openModalImportBudget,
  importBudget,
  importBranch,
  importHowNewService,
  syncBudget,
  hopscotchConfirmedInformationBoard,
  budgetHopscotchInformationBoardConfirmed,
  budgetistFrameInformationAmarelinhaConfirmed,
  inclusionFrameInformationAmarelinhaConfirmed,
  attendantHopscotchInformationBoardConfirmed,
  textFrameInformationHopscotchConfirmed,
  budgetBudgetist,
  BudgetAttendant,
  containerBudgets,

} = el.Services;

export const {

  settingsMenu,
  subMenuClustersGroups,
  relations,
  containerFilters,
  containerProfile,
  searchFilters,
  search,
  manageRelationship,
  selectCluster,
  containerSelectPrescriber,
  selectPrescriber,
  addAttendantClusterPrescriberRelationship,
  containerMessageRelationship,
  createdRelationshipAttendant,
  prescriberRelationshipCreated,
  removeSelectedRelationship,
  SearchPrescriberManageRelationship,
  searchPrescriberRelationshipManage,
  selectPrescriberFound,
} = el.Settings;


Cypress.Commands.add('login', (baseUrl: string, user: string, password: string, elementError?: string) => {
  cy.log('Iniciando login...');
  cy.visit(baseUrl);

  cy.get(el.Login.user, { timeout: 10000 })
    .each(($input) => {
      cy.wrap($input)
        .type(String(user), { log: false })
        .should('have.value', user, { log: false })
    });

  cy.get(el.Login.password, { timeout: 10000 })
    .each(($input) => {
      cy.wrap($input)
        .type(String(password), { log: false })
        .should('have.value', password, { log: false })
    });

  cy.getElementAndClick(el.Login.acess)
    .then(() => {
      cy.get('body')
        .then(($body) => {
          if ($body.find(elementError).length > 0) {
            cy.get(elementError)
              .then(($modal) => {
                const messageModal = $modal.text().trim();
                if (messageModal.includes('Usuário ou password inválidos')) {
                  return cy.wrap({ error: 'Foi informado usuário ou senha incorretos na aplicação' });
                }
                if (messageModal.includes('The password field is required.')) {
                  return cy.wrap({ error: 'Foi inserida uma senha incorreta na aplicação ou não foi fornecida nenhuma senha na aplicação.' });
                }
              });
          } else {
            console.log('Element not found');
          }
        });
    });

  return cy.wrap({ success: 'Login realizado com sucesso.' });
});