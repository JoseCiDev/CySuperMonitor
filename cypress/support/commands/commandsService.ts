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
  parameterSearchBudget: parameterSearchCardBudget,
  cardBudget,
  buttonLinkRecipeScreenServiceProgress,
  buttonUnlinkRecipeScreenServiceProgress,
  fieldLinkRecipe,
  budgetInProgress: budgetInProgress,
  buttonView,
  fieldSearchBudget: fieldSearchBudget,
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
  budgetMessageModal: budgetMessageModal,
  modalConfirmationBudget: modalConfirmationBudget,
  containerPaymentMethod,
  chosenBudget,
  insertRepeatTime,
  saveDataConfirmationBudget: saveDataConfirmationBudget,
  monitoringService,
  channelConfirmationBudget: channelConfirmationBudget,
  sendEmailTracking,
  noShowBudgetInclusion: noShowBudgetInclusion,
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
  hasRecipe,
  urgentBudget: urgentBudget,
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


Cypress.Commands.add('insertTimeTreatment', (timeTreatment: string) => {
  cy.getElementAndClick([buttonTimeTreatment]);
  cy.wait(2000);
  cy.getElementAndType({[standardTreatmentTime]: timeTreatment.toString()});
  cy.getElementAndClick([treatmentTimeModalHeader])
  cy.getElementAndClick([saveTimeTreatment]);
  cy.get(modalConfirmationBudget)
})


Cypress.Commands.add('confirmBudget', (
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

  cy.getElementAndClick([modalConfirmationBudget]), { timeout: 20000 };

  cy.getSelectOptionByValue([{[containerPaymentMethod]: SelectedPaymentMethod}]);
  
  cy.getElementAndCheck([{element:chosenBudget},]);
  cy.getElementAndCheck([{element:dataParameters.Recipe.import.parameterSearchPatient },]);
  cy.getElementAndType({[insertRepeatTime]: timeRepetition.toString()});
  // cy.getElementAndCheck([{element:monitoramentoAtendimento},]);
  cy.getElementAndClick([saveDataConfirmationBudget]), { timeout: 20000 };

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

  cy.getElementAndClick([PreViewBudget]), { timeout: 20000 };
  cy.getElementAndClick([closePreViewBudget]), { timeout: 20000 };
  cy.getElementAndClick([sendconfirmBudget]), { timeout: 20000 };

});


Cypress.Commands.add('linkBudgetRecipe', (buttonLink: string, numberRecipe: number): void => {
  cy.getElementAndClick([buttonLink]);
  cy.get(fieldLinkRecipe, { timeout: 20000 })
    .type(numberRecipe.toString(), { timeout: 20000 })
    .wait(2000)
    .type('{downarrow}{enter}', { timeout: 20000 });
  cy.getElementAndClick([relateRecipeBudget]);
  cy.getElementAndClick([btnSuccessModal])
    .wait(2000);
  cy.getElementAndClick([modalMessage]);
})



Cypress.Commands.add('unlinkBudgetRecipe', (buttonUnlink: string) => {
  cy.getElementAndClick([buttonUnlink]);
  cy.getElementAndClick([btnSuccessModal])
    .wait(2000);
  cy.getElementAndClick([modalMessage]);;
})



Cypress.Commands.add('changeUsersBudget', (budgetist: string, attendant: string) => {

})