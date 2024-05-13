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
/// <reference types="Cypress" />
/// <reference path="../cypress.d.ts" />



import { elements as el } from '../../elements'
import { ValidationResult, dataParameters } from '../../DataParameters/dataParameters'
import { env } from 'process';


const environment = Cypress.env('ENVIRONMENT');
const dataEnvironment = Cypress.env(environment);


import './serviceCommands'
import './recipeCommands'


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
  optionTypeRecipes,
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
  parameterSearchCardOrder,
  cardBudget,
  buttonLinkRecipeScreenServiceProgress,
  buttonUnlinkRecipeScreenServiceProgress,
  fieldLinkRecipe,
  orderInProgress,
  buttonView,
  fieldSearchOrder,
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
  buttonTimeTreatment,
  standardTreatmentTime,
  cancelTimeTreatment,
  reimportFormulas,
  saveTimeTreatment,
  orderMessageModal,
  modalConfirmationOrder,
  containerPaymentMethod,
  chosenBudget,
  insertRepeatTime,
  saveDataConfirmationOrder,
  monitoringService,
  channelConfirmationOrder,
  sendEmailTracking,
  noShowOrderInclusion,
  noShowOrderCaixa,
  observationFromCashierToCounter,
  detailedNote,
  fieldStatusPayment,
  shippingAddress,
  addressShippingSelected,
  shipmentObservation,
  fieldFormShipping,
  juntocomOrderConfirmation,
  juntocomClinicaHigashi,
  promisedFieldFor,
  fieldAromasSachet,
  aromaCapsuleField,
  generalObservation,
  hasRecipe,
  urgentOrder,
  cancelOrderConfirmation,
  sendChatguruMessage,
  PreViewOrder,
  closePreViewOrder,
  sendconfirmOrder,
  showAll,
  hasSpecialFormula,
  generateLinkPayment,
  relateRecipeOrder,
  showOrdersClosed,
  reopenOrder,
  confirmReopenOrder,
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
  orderBudgetist,
  OrderAttendant,
  containerOrders,

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


Cypress.Commands.add('login', (user: string, password: string, elementError: string, baseUrl: string) => {

  cy.log('Iniciando login...');
  cy.visit(baseUrl);

  cy.get(el.Login.user, { timeout: 10000 })
    .each(($input) => {
      cy.wrap($input)
        .type(user)
        .then(() => {
          const $userValue = String($input.val());
          const $elementError = Cypress.$(elementError);

          if ($userValue.length < 1 && !$elementError.is(':visible')) {
            throw new Error('Usuário não foi inserido, porém não é apresentado mensagem ao usuário.');
          };

          if (!$userValue || $userValue.length === 0 && !$elementError.is(':visible')) {
            throw new Error('Há digitos que não foram preenchidos, porém não é apresentado mensagem ao usuário.');
          };
        });
    });

  cy.get(el.Login.password, { timeout: 10000 })
    .each(($input) => {
      cy.wrap($input)
        .type(password)
        .then(() => {
          const passwordValue = String($input.val());
          const $elementError = Cypress.$(elementError);

          if (password.length < 1 && !$elementError.is(':visible')) {
            throw new Error('Senha não foi inserida, porém não é apresentado mensagem ao usuário.');
          };

          if (!passwordValue || passwordValue.length === 0 && !$elementError.is(':visible')) {
            throw new Error('Alguns dígitos não foram preenchidos, porém não é apresentada mensagem de erro ao usuário.');
          };

          cy.getElementAndClick(el.Login.acess);

          cy.get(elementError, { timeout: 60000 })
            .invoke('text')

            .then((text) => {
              if (text.includes('Usuário ou password inválidos')) {
                throw new Error('Usuário ou password incorretos. Tente novamente.');
              }
            });
        });

      const $UserErrorElement = Cypress.$(el.Login.user)
        .prop('prop', 'validationMessage')
        .prop((text) => {
          expect(text).to.contain('Preencha este campo.');
        });
      const $passwordErrorElement = Cypress.$(el.Login.password)
        .prop('prop', 'validationMessage')
        .prop((text) => {
          expect(text).to.contain('Preencha este campo.');
        });
      if ($UserErrorElement) {
        throw new Error('Usuário ou password incorretos. Tente novamente.');
      };
      if ($passwordErrorElement) {
        throw new Error('Campo password não está preenchido.');
      };

    });
  return cy.wrap({ success: 'Login realizado com sucesso.' });
});