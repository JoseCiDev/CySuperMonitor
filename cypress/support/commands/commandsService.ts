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
  dataParameters,
  SearchRecipe,

} from '../../import';


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


Cypress.Commands.add('insertTimeTreatment', (timeTreatment: string) => {
  cy.getElementAndClick([buttonTimeTreatment]);
  cy.wait(2000);
  cy.getElementAndType({[standardTreatmentTime]: timeTreatment.toString()});
  cy.getElementAndClick([treatmentTimeModalHeader])
  cy.getElementAndClick([saveTimeTreatment]);
  cy.get(modalConfirmationOrder)
})


Cypress.Commands.add('confirmOrder', (
  SelectedPaymentMethod,
  timeRepetition: number,
  buttonViewtextObservationCashierCounter: string,
  paymentStatus: string,
  textNoteShipping: string,
  shippingMethod: string,
  promisedTo: string,
  aromaSachet: string,
  capsuleAroma: string,
  textGeneralNote: string,
): void => {

  cy.getElementAndClick([modalConfirmationOrder]), { timeout: 20000 };

  cy.getSelectOptionByValue([{[containerPaymentMethod]: SelectedPaymentMethod}]);
  
  cy.getElementAndCheck([{element:chosenBudget},]);
  cy.getElementAndCheck([{element:dataParameters.Recipe.import.parameterSearchPatient },]);
  cy.getElementAndType({[insertRepeatTime]: timeRepetition.toString()});
  // cy.getElementAndCheck([{element:monitoramentoAtendimento},]);
  cy.getElementAndClick([saveDataConfirmationOrder]), { timeout: 20000 };

  cy.getElementAndType({[observationFromCashierToCounter]: buttonViewtextObservationCashierCounter});{ timeout: 20000 };
  cy.getElementAndCheck([{element:detailedNote},]);
  cy.getElementAndCheck([{element:paymentStatus},]);
  cy.getElementAndClick([shippingAddress]);
  cy.getElementAndType({[shipmentObservation]: textNoteShipping});
  cy.getSelectOptionByValue([{[fieldFormShipping]: shippingMethod}]);{ timeout: 20000 }

  // cy.getElementAndType({[juntocom]: juntocomOrçamento});
  //   .wait(500)
  //   .type('{downarrow}{enter}')
  cy.getElementAndType({[promisedFieldFor]: promisedTo})
    .type('{enter}')
    .type('{enter}');
  cy.getSelectOptionByValue([{[fieldAromasSachet]: aromaSachet}]);;
  cy.getSelectOptionByValue([{[aromaCapsuleField]: capsuleAroma}]);;
  cy.getElementAndType({[generalObservation]: textGeneralNote});
  cy.getElementAndCheck([{element:hasRecipe},]);
  cy.getElementAndCheck([{element:hasSpecialFormula},]), { timeout: 20000 };
  cy.getElementAndCheck([{element:sendChatguruMessage},]), { timeout: 20000 };

  cy.getElementAndClick([PreViewOrder]), { timeout: 20000 };
  cy.getElementAndClick([closePreViewOrder]), { timeout: 20000 };
  cy.getElementAndClick([sendconfirmOrder]), { timeout: 20000 };

});


Cypress.Commands.add('linkOrderRecipe', (buttonLink: string, numberRecipe: number): void => {
  cy.getElementAndClick([buttonLink]);
  cy.get(fieldLinkRecipe, { timeout: 20000 })
    .type(numberRecipe.toString(), { timeout: 20000 })
    .wait(2000)
    .type('{downarrow}{enter}', { timeout: 20000 });
  cy.getElementAndClick([relateRecipeOrder]);
  cy.getElementAndClick([btnSuccessModal])
    .wait(2000);
  cy.getElementAndClick([modalMessage]);
})



Cypress.Commands.add('unlinkOrderRecipe', (buttonUnlink: string) => {
  cy.getElementAndClick([buttonUnlink]);
  cy.getElementAndClick([btnSuccessModal])
    .wait(2000);
  cy.getElementAndClick([modalMessage]);;
})



Cypress.Commands.add('changeUsersOrder', (budgetist: string, attendant: string) => {

})