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
import { dataParameters } from '../../DataParameters/dataParameters'
import { env } from 'process';


const environment = Cypress.env('ENVIRONMENT');
const dataEnvironment = Cypress.env(environment);


import './loginCommands'
import './serviceCommands'
import './recipeCommands'
import './configurationCommandsAttendantClusterPrescriberRelationship'



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


Cypress.Commands.add('insertFile', (filePath, element, mimeType?): void => {
  cy.fixture(filePath, 'base64').then((fileContent) => {
    const name = filePath.split('/').pop();

    const blob = Cypress.Blob.base64StringToBlob(fileContent, mimeType);
    const file = new File([blob], name, { type: mimeType });

    cy.get(element).then(($element) => {
      const event = new Event('change', { bubbles: true });
      Object.defineProperty($element[0], 'files', {
        value: [file],
        writable: false,
      });
      $element[0].dispatchEvent(event);
    });
  });
});


// Cypress.Commands.add('readFile', (fileName) => {
//   const filePath = `${dataParameters.filePath}${fileName}`;
//   return cy.fixture(filePath);
// });

Cypress.Commands.add('getElementAndClick', (...elements: string[]): void => {
  elements.forEach(element => {
    cy.get(element, { timeout: 20000 }).each(($el) => {
      cy.wrap($el).click({ timeout: 20000 });
    });
  });
});

Cypress.Commands.add('getElementAndCheck', (element: string): void => {
  cy.wrap(null).then(() => {
    cy.get(element, { timeout: 20000 })
      .as('element')
      .each(($element) => {
        cy.wrap($element)
          .then($elements => {
            cy.get('@element')

            if ($elements.length > 0) {
              cy.wrap($elements.first())
                .check({ timeout: 20000, force: true });
            } else {
              cy.wrap($elements.eq(0))
                .check({ timeout: 20000, force: true });
            }
          });
      })
  })
});

Cypress.Commands.add('getElementAndType', (element: string, text?: string): void => {
  cy.wrap(null).then(() => {
    cy.get(element, { timeout: 20000 })
      .each(($input) => {
        cy.wrap($input)
          .then(() => {
            if ($input.length > 1) {
              cy.wrap($input.first())
                .clear()
                .type(text, { timeout: 1000 })
            } else {
              cy.wrap($input.eq(0))
                .clear()
                .type(text, { timeout: 1000 })
            }
          })
      })
  });
});

Cypress.Commands.add('getRadioOptionByValue', (element: string, value): void => {
  cy.get(element, { timeout: 20000 })
    .should('be.visible')
    .find(`input[type="radio"][value="${value}"]`)
    .check({ force: true })
});

Cypress.Commands.add('getSelectOptionByValue', (element: string, value: any): void => {
  cy.wrap(null).then(() => {
    cy.get(element, { timeout: 20000 })
      .each(($select) => {
        cy.wrap($select)
          .then(() => {
            if ($select.length > 0 && $select.is(':visible')) {
              cy.get(element, { timeout: 20000 })
                .select(value, { force: true })
            }

          })
      })
  });
});

Cypress.Commands.add('getElementAutocompleteTypeAndClick', (element: string, data: string | number, autocomplete: string) => {
  cy.wrap(null).then(() => {
    cy.get(element, { timeout: 240000 })
      .as('elementAlias')
      .each(($input) => {
        cy.wrap($input)
          .type(data.toString())
          .then(() => {
            if (cy.contains(autocomplete, data).as('autocompleteAlias')) {
              cy.get('@autocompleteAlias', { timeout: 240000 })
                .click({ force: true })
            }

          })
      })
  });
});

Cypress.Commands.add('waitModalAndClick', (jqueryElement: string, element: string, checkType: 'each' | 'visible') => {
  cy.wrap(null).then(() => {
    const $aliasModal = Cypress.$(jqueryElement)
    if (checkType === 'each' && !$aliasModal.each) {
      cy.log('O teste será prosseguido, uma vez que o elemento esperado não foi exibido na tela.')
    } else if (checkType === 'visible' && !Cypress.$($aliasModal).is(':visible')) {
      cy.log('O teste será prosseguido, uma vez que o elemento esperado não foi exibido na tela.')
    } else {
      cy.get(element, { timeout: 240000 })
        .as('elementAlias')
      cy.get('@elementAlias', { timeout: 240000 })
        .invoke('removeAttr', 'readonly' || 'hidden' || 'scroll' || 'auto', { force: true })
        .click({ force: true, multiple: true, timeout: 5000 })
    }
  });
})





Cypress.Commands.add('markUsage', (checkboxMarkUse: string, userMarkUsage: string): void => {
  cy.get(`${checkboxMarkUse} input[type="checkbox"]`, { timeout: 20000 }).then(($checkboxes) => {
    const totalCheckboxes = $checkboxes.length;

    cy.get(`${checkboxMarkUse} input[type="checkbox"]:checked`, { timeout: 20000 }).then(($checkedCheckboxes) => {
      const totalChecked = $checkedCheckboxes.length;

      if (totalChecked === totalCheckboxes) {
        cy.get(`${checkboxMarkUse} input[type="checkbox"]:checked`, { timeout: 20000 })
          .first()
          .uncheck();
        cy.getElementAndClick(containerInsertUser);
        cy.getElementAndType(select, userMarkUsage);
        cy.getElementAndClick(selectedUser)
        cy.getElementAndType(passwordRecipe, dataEnvironment.SENHA_RECEITA_USER);
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
      cy.getElementAndClick(btnSuccessModal);
      cy.wait(200);
      cy.getElementAndClick(modalMessage);
    });
  });
});
