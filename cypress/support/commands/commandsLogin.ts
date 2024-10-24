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
  chosenBudgetForConfirmation,
  insertRepeatTime,
  saveDataConfirmationBudget,
  monitoringService,
  channelConfirmationBudget,
  sendEmailTracking,
  releaseBudgetForInclusionElement,
  noShowBudgetCaixa,
  observationFromCashierToCounter,
  detailedNote,
  fieldStatusPayment,
  shippingAddress,
  addressShippingSelected,
  shipmentObservation,
  fieldFormShipping,
  juntocomBudgetConfirmation,
  juntocomClinicaHigashi,
  promisedFieldFor,
  fieldAromasSachet,
  aromaCapsuleField,
  generalObservation,
  budgetHasRecipeElement,
  urgentBudgetElement,
  cancelBudgetConfirmation,
  sendChatguruMessage,
  PreViewBudget,
  closePreViewBudget,
  sendconfirmBudget,
  showAll,
  hasSpecialFormula,
  generateLinkPayment,
  relateRecipeBudget,
  showBudgetsClosed,
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


Cypress.Commands.add('login', (
  baseUrl: string,
  user: string,
  password: string,
  elementError?: string
) => {
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