/// <reference path="../cypress.d.ts" />


import './commandsLogin';
import './commandsRecipe';
import './commandsService';
import './commandsConfigurationAttendantClusterPrescriberRelationship';

import {
  elements as el,
  ElementTypeAndValueOpcional,
  ElementControl,
} from '../../import'

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
  insertTreatmentTime,
  standardTreatmentTime,
  cancelTimeTreatment,
  reimportFormulas,
  saveTimeTreatment,
  budgetMessageModalElement,
  modalConfirmationBudgetElement,
  paymentMethodElement,
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


Cypress.Commands.add('insertFile', (element, filePath): void => {
  cy.fixture(filePath, 'base64').then((fileContent) => {
    const fileName = filePath.split('/').pop();
    const mimeType = 'image/jpeg';
    const blob = Cypress.Blob.base64StringToBlob(fileContent, mimeType);
    const file = new File([blob], fileName, { type: mimeType });

    cy.get(element)
      .then(($element) => {
        const event = new Event('change', { bubbles: true });
        Object.defineProperty($element[0], 'files', {
          value: [file],
          writable: false,
        });
        $element[0].dispatchEvent(event);
      });
  });
});

Cypress.Commands.add('getElementAndClick', (...elements: string[]): void => {
  elements.forEach(element => {
    cy.get(element, { timeout: 20000 })
      .then($elements => {
        if ($elements.length > 0) {
          cy.wrap($elements.first())
            .click({ force: true });
        }
      });
  });
});

Cypress.Commands.add('getElementAndCheck', (elements: ElementTypeAndValueOpcional): void => {
  elements.forEach(({ element, value }) => {
    cy.get(element, { timeout: 20000 })
      .then($elements => {
        if ($elements.length > 0) {
          cy.wrap($elements.first())
            .check(value, { force: true });
        }
      });
  })
});

Cypress.Commands.add('getElementAndType', (elements: { [key: string]: string }): void => {
  cy.wrap(null).then(() => {
    Object.entries(elements).forEach(([element, text]) => {
      cy.get(element, { timeout: 20000 })
        .each(($input) => {
          cy.wrap($input)
            .then(() => {
              cy.wrap($input.first())
                .clear({ force: true })
                .type(text, { timeout: 1000 })
            })
            .invoke('val')
            .then(val => {
              if (!val) {
                return cy.wrap({ error: 'Field is empty after typing' });
              }
            });
        })
    });
  });
});

Cypress.Commands.add('getRadioOptionByValue', (elements: ElementControl): void => {
  elements.forEach(({ element, value }) => {
    cy.get(element, { timeout: 20000 })
      .should('be.visible')
      .find(`input[type="radio"][value="${value}"]`)
      .check({ force: true });
  });
});

Cypress.Commands.add('getSelectOptionByValue', (elements: ElementTypeAndValueOpcional): void => {
  elements.forEach(({ element, value }) => {
    cy.get(element, { timeout: 20000 })
      .then(($select) => {
        if ($select.length > 0 && $select.is(':visible')) {
          cy.wrap($select).select(value, { force: true });
        } else {
          throw new Error(`Elemento ${element} não encontrado ou não visível.`);
        }
      });
  });
});

Cypress.Commands.add('getElementAutocompleteTypeAndClick', (elements: { [key: string]: string }, autocompleteSelector: string) => {
  Object.entries(elements).forEach(([element, text]) => {
    cy.get(element, { timeout: 20000 })
      .clear()
      .type(text)
      .then(() => {
        cy.get(autocompleteSelector, { timeout: 20000 })
          .should('be.visible')
          .first()
          .click({ force: true });
      });
  });
});

Cypress.Commands.add('waitModalAndClick', (jqueryElement: string, element: string) => {
  const $aliasModal = Cypress.$(jqueryElement);

  if ($aliasModal.length === 0) {
    cy.log('O teste será prosseguido, uma vez que o elemento esperado não foi exibido na tela.');
  } else {
    cy.get(element, { timeout: 60000 })
      .as('elementAlias')
      .invoke('removeAttr', 'readonly')
      .invoke('removeAttr', 'hidden')
      .click({ force: true, multiple: true, timeout: 5000 });
  }
});

Cypress.Commands.add('markUsage', (checkboxMarkUse: string, userMarkUsage: string): void => {
  cy.get(`${checkboxMarkUse} input[type="checkbox"]`, { timeout: 20000 })
    .then(($checkboxes) => {
      const totalCheckboxes = $checkboxes.length;

      cy.get(`${checkboxMarkUse} input[type="checkbox"]:checked`, { timeout: 20000 })
        .then(($checkedCheckboxes) => {
          const totalChecked = $checkedCheckboxes.length;

          if (totalChecked === totalCheckboxes) {
            cy.get(`${checkboxMarkUse} input[type="checkbox"]:checked`, { timeout: 20000 })
              .first()
              .uncheck();
            cy.getElementAndClick(containerInsertUser);
            cy.getElementAndType({ [select]: userMarkUsage });
            cy.getElementAndClick(selectedUser)
            cy.getElementAndType({ [passwordRecipe]: dataEnvironment.SENHA_RECEITA_USER });
            cy.getElementAndClick(applyUncheckUse);
            cy.getElementAndClick(modalMessage);
            cy.get(`${checkboxMarkUse} input[type="checkbox"]:not(:checked)`, { timeout: 20000 })
              .first()
              .check();
          }
          else {
            cy.get(`${checkboxMarkUse} input[type="checkbox"]:not(:checked)`, { timeout: 20000 })
              .first()
              .check();
          };

          cy.wait(200);
          cy.getElementAndClick(btnSuccessModalElement);
          cy.wait(200);
          cy.getElementAndClick(modalMessage);
        });
    });
});
