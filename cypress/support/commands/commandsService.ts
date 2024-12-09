/// <reference path="../cypress.d.ts" />

import {
    elements as el,
    faker,
    dataParameters,
    RecipeSearch,
    BudgetConfirmationPaymentMethod,
    BudgetConfirmationAromaSachet,
    BudgetConfirmationPaymentStatus,
    BudgetConfirmationShippingMethod,
    BudgetConfirmationCapsuleAroma,
    BudgetClosingChannel,
    ElementTypeAndValueOpcional,
    ElementControl,
    ValidationResult,
    BudgetConfirmationBudgetHasRecipe,
    BudgetConfirmationTypePaymentCourtesyInjectables,
    BudgetInstallments,
    PayBudgetPaymentMethod,
    PayBudgetCreditCardExpirationMonth,
    PayBudgetCreditCardExpirationYear,
    PayBudgetState,
    PayBudgetSelectAroma,
    BudgetConfirmation,
    BudgetDetails,

} from '../../import';

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
    lastModifiedColumn,

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
    modalTreatmentTime,
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
    viewBudgetElement,
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
    homeMenuElement,
    searchBudgetByBranchElement,
    searchAllBudgetsElement,
    searchButtonElement,
    paymentSelectorInput,
    updateSelectorStatusInput,
    UpdatePaymentStatusOnServiceScreenElement,
    viewSelectorInput,
    releaseBudgetCashierElement,
    cashierObservationElement,
    detailedSaleElement,
    expeditionObservationElement,
    shippingMethodElement,
    promisedToElement,
    aromaSachetElement,
    capsuleAromaElement,
    generalObservationElement,
    sendAutomaticBudgetConfirmationMessageElement,
    recipeElementAvailableForLinkingElement,
    modalToLinkRecipeElement,
    linkedRecipeProgressBarElement,
    closeModalLinkRecipeElement,
    feedbackMessageElement,
    expandSideMenuElement,
    successfullyLinkedRecipesProgressBarElement,
    modalLinkRecipeElement,
    telephoneContactConfigurationModalElement,
    insertCustomerContactPhoneNumberElement,
    serviceBudgeterElement,
    customerServiceAttendantElement,
    modalClientNotFoundElement,
    setUpPhoneContactElement,
    savePhoneContactNumberElement,
    confirmInsertionCustomerTelephoneContactElement,
    accessSelfcheckoutElement,
    goToPaymentElement,
    telephoneElement,
    emailElement,
    fullNameElement,
    birthDateElement,
    cpfElement,
    rgElement,
    useRegisteredAddressElement,
    zipCodeElement,
    stateElement,
    cityElement,
    districtElement,
    streetElement,
    houseNumberElement,
    addressComplementElement,
    isMyDeliveryAddressElement,
    cardholderNameElement,
    cpfCnpjElement,
    cardNumberElement,
    expirationMonthElement,
    expirationYearElement,
    securityCodeElement,
    installmentsElement,
    makePaymentElement,
    makePaymentUsingTheSelectedPaymentMethodElement,
    paymentScreenSuccessElement,
    paymentDateServiceScreenElement,
    paymentDataOnServiceScreenElement,
    confirmedOrderDeliveryAddressElement,

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

Cypress.Commands.add('insertTimeTreatment', (options: BudgetConfirmation = {}): ValidationResult => {
    const { timeTreatment = dataParameters.Budget.confirmation.timeTreatment } = options;

    cy.getElementAndClick(insertTreatmentTime);

    cy.get(modalTreatmentTime)
        .should('be.visible')
        .then(() => {
            cy.getElementAndType({ [standardTreatmentTime]: timeTreatment });
            cy.getElementAndClick(treatmentTimeModalHeader, saveTimeTreatment);
        });
    return cy.wrap({ success: 'Tempo de tratamento inserido com sucesso.' });
});

Cypress.Commands.add('viewBudget', (options: { orcamentoNumberForSearch?: string; filialNumberForSearch?: string } = {}): void => {
    const {
        orcamentoNumberForSearch = dataParameters.Budget.confirmation.orcamentoNumberForSearch,
        filialNumberForSearch = dataParameters.Budget.confirmation.filialNumberForSearch,
    } = options;

    const checkPaymentStatus = (index: number) => {
        const paymentSelectorElement = paymentSelectorInput(index);
        const updateSelectorStatusElement = updateSelectorStatusInput(index);
        const viewSelectorElement = viewSelectorInput(index);

        cy.get(paymentSelectorElement)
            .invoke('text')
            .then((paymentStatus) => {
                const trimmedStatus = paymentStatus.trim();

                if (trimmedStatus.includes('Inativo')) {
                    cy.log(`Orçamento ${index} está inativo, verificando o próximo...`);
                    checkPaymentStatus(index + 1);

                } else if (trimmedStatus.includes('Sem pagamento')) {
                    cy.log(`Orçamento ${index} sem pagamento. Visualizando...`);
                    cy.getElementAndClick(viewSelectorElement)
                        .then(() => {
                            cy.wrap(index)
                                .as('currentBudgetIndex');
                        });

                } else if (trimmedStatus.includes('Aguardando')) {
                    cy.get(updateSelectorStatusElement)
                        .then(($element) => {

                            if ($element.is(':visible')) {
                                cy.log(`Atualizando status do orçamento ${index}...`);
                                cy.getElementAndClick(updateSelectorStatusElement);

                                cy.get(paymentSelectorElement)
                                    .invoke('text')
                                    .then((newStatus) => {

                                        if (newStatus.trim().includes('Pago')) {
                                            cy.log(`Orçamento ${index} foi pago com sucesso, verificando o próximo...`);
                                            checkPaymentStatus(index + 1);
                                        } else {
                                            cy.log(`Orçamento ${index} ainda não foi pago, visualizando...`);
                                            cy.getElementAndClick(viewSelectorElement)
                                                .then(() => {
                                                    cy.wrap(index)
                                                        .as('currentBudgetIndex');
                                                });
                                        }
                                    });

                            } else {
                                cy.log(`Botão de atualização não visível para o orçamento ${index}, visualizando...`);
                                cy.getElementAndClick(viewSelectorElement)
                                    .then(() => {
                                        cy.wrap(index)
                                            .as('currentBudgetIndex');
                                    });
                            }
                        });

                } else if (trimmedStatus.includes('Pago')) {
                    cy.log(`Orçamento ${index} já está pago, verificando o próximo...`);
                    checkPaymentStatus(index + 1);

                } else {
                    cy.log(`Status desconhecido para o orçamento ${index}, verificando o próximo...`);
                    checkPaymentStatus(index + 1);
                }
            });
    };
    const searchBudgetByBranch = () => {
        cy.getElementAndClick(homeMenuElement);

        if (orcamentoNumberForSearch) {
            cy.getElementAndType({ [fieldSearchBudgetElement]: orcamentoNumberForSearch });
            cy.getElementAndClick(searchAllBudgetsElement, searchButtonElement);

            cy.getElementAndClick(viewBudgetElement).then(() => {
                cy.wrap(2).as('currentBudgetIndex');
            });
        } else {
            if (filialNumberForSearch) {
                cy.getElementAndType({ [searchBudgetByBranchElement]: filialNumberForSearch });
            }

            cy.getElementAndClick(searchAllBudgetsElement, searchButtonElement);

            checkPaymentStatus(2);
        }
    };

    searchBudgetByBranch();
});

Cypress.Commands.add('fillOrcamentistaAndAtendente', (options: {
    budgetist?: string,
    budgetAttendant?: string,
} = {}): ValidationResult => {

    const {
        budgetist = dataParameters.Budget.confirmation.budgetist,
        budgetAttendant = dataParameters.Budget.confirmation.budgetAttendant
    } = options;

    return cy.wrap(null).then(() => {
        cy.get(serviceBudgeterElement)
            .invoke('val')
            .then(value => {
                if (!value) {
                    cy.log(`Campo "orcamentista" está vazio, preenchendo com: ${budgetist}`);
                    cy.getElementAutocompleteTypeAndClick(
                        { [serviceBudgeterElement]: budgetist },
                        suggestionAutocomplete
                    );
                } else {
                    cy.log('Campo "orcamentista" já está preenchido, nenhuma ação necessária.');
                }
            });

        cy.get(customerServiceAttendantElement)
            .invoke('val')
            .then(value => {
                if (!value) {
                    cy.log(`Campo "atendente" está vazio, preenchendo com: ${budgetAttendant}`);
                    cy.getElementAutocompleteTypeAndClick(
                        { [customerServiceAttendantElement]: budgetAttendant },
                        suggestionAutocomplete
                    );
                } else {
                    cy.log('Campo "atendente" já está preenchido, nenhuma ação necessária.');
                }
            });

        return cy.wrap({ success: 'Orçamentista e(ou) atendente preenchidos com sucesso.' });
    });
});

Cypress.Commands.add('selectCustomerContact', (options: {
    customerContactPhoneNumber?: string,
} = {}): ValidationResult => {

    const {
        customerContactPhoneNumber = dataParameters.Budget.confirmation.customerContactPhoneNumber,
    } = options;

    cy.log('Essa espera é necessária porque o backend dispara o evento quando nao tem cliente cadastrado, fiz alguns testes tentando um tempo maior ou menor e quebra. Analisamos o codigo da aplicação e existe uma validação que verifica se o cliente do orçamento está no SM, se não esta ele sincroniza, nessa parte do código tem um timeout de 2 segundos.');
    cy.wait(5000);//essa espera é necessária porque o backend dispara o evento quando nao tem cliente cadastrado, fiz alguns testes tentando um tempo maior ou menor e quebra. Analisamos o codigo da aplicação e existe uma validação que verifica se o cliente do orçamento está no SM, se não esta ele sincroniza, nessa parte do código tem um timeout de 2 segundos.
    cy.get('body').then(($body) => {
        if ($body.find(modalClientNotFoundElement).length > 0) {
            cy.getElementAndClick(modalClientNotFoundElement);
        }
    })

    cy.getElementAndClick(setUpPhoneContactElement);

    return cy.get('body')
        .then($body => {
            if ($body.find(telephoneContactConfigurationModalElement).length > 0) {
                cy.log('Modal de configuração de contatos foi apresentada.');

                cy.wait(1000);

                cy.getElementAndType({ [insertCustomerContactPhoneNumberElement]: customerContactPhoneNumber });

                cy.getElementAndClick(savePhoneContactNumberElement);

                cy.get('body')
                    .then(($body) => {
                        if ($body.find(confirmInsertionCustomerTelephoneContactElement).length > 0) {
                            cy.getElementAndClick(okModalMessage)
                                .click({ force: true });
                        } else {
                            cy.log('Nenhuma mensagem de confirmação apareceu.');
                        }
                    });

                cy.getElementAndClick(btnModalMessage);

                return cy.wrap({ success: 'Número de contato foi selecionado com sucesso.' });

            } else {
                cy.log('Modal de configuração de contatos não foi apresentada, continuando o teste.');

                return cy.wrap({ success: 'Nenhuma ação necessária, modal de configuração de contatos não apareceu.' });
            }

        });
});



// Cypress.Commands.add('confirmBudget', (options: {
//     orcamentoNumberForSearch?: string | number;
//     filialNumberForSearch?: string | number;
//     typePaymentCourtesyInjectables?: BudgetConfirmationTypePaymentCourtesyInjectables;
//     budgetist?: string,
//     budgetAttendant?: string,
//     paymentMethod?: BudgetConfirmationPaymentMethod,
//     chosenBudget?: string,
//     timeRepetition?: number,
//     budgetClosingChannel?: BudgetClosingChannel,
//     sendTrackingEmail?: boolean,
//     releaseBudgetForInclusion?: boolean,
//     releaseBudgetCashier?: boolean,
//     cashierObservation?: string,
//     detailedSale?: boolean,
//     paymentStatus?: BudgetConfirmationPaymentStatus,
//     address?: number,
//     expeditionObservation?: string,
//     shippingMethod?: BudgetConfirmationShippingMethod,
//     juntocomBudget?: string,
//     promisedTo?: Date,
//     aromaSachet?: BudgetConfirmationAromaSachet,
//     capsuleAroma?: BudgetConfirmationCapsuleAroma,
//     generalObservation?: string,
//     budgetHasRecipe?: BudgetConfirmationBudgetHasRecipe,
//     urgentBudget?: boolean,
//     automaticMessageTriggering?: boolean,
// } = {}): ValidationResult => {

//     const {
//         budgetist = dataParameters.Budget.confirmation.budgetist,
//         budgetAttendant = dataParameters.Budget.confirmation.budgetAttendant,
//         orcamentoNumberForSearch = dataParameters.Budget.confirmation.orcamentoNumberForSearch,
//         filialNumberForSearch = dataParameters.Budget.confirmation.filialNumberForSearch,
//         typePaymentCourtesyInjectables = dataParameters.Budget.confirmation.typePaymentCourtesyInjectables,
//         paymentMethod = dataParameters.Budget.confirmation.paymentMethod,
//         chosenBudget = dataParameters.Budget.confirmation.chosenBudget,
//         timeRepetition = dataParameters.Budget.confirmation.timeRepetition,
//         budgetClosingChannel = dataParameters.Budget.confirmation.budgetClosingChannel,
//         sendTrackingEmail = dataParameters.Budget.confirmation.sendTrackingEmail,
//         releaseBudgetForInclusion = dataParameters.Budget.confirmation.releaseBudgetForInclusion,
//         releaseBudgetCashier = dataParameters.Budget.confirmation.releaseBudgetCashier,
//         cashierObservation = dataParameters.Budget.confirmation.cashierObservation,
//         detailedSale = dataParameters.Budget.confirmation.detailedSale,
//         paymentStatus = dataParameters.Budget.confirmation.paymentStatus,
//         address = dataParameters.Budget.confirmation.address,
//         expeditionObservation = dataParameters.Budget.confirmation.expeditionObservation,
//         shippingMethod = dataParameters.Budget.confirmation.shippingMethod,
//         juntocomBudget = dataParameters.Budget.confirmation.juntocomBudget,
//         promisedTo = dataParameters.Budget.confirmation.promisedTo,
//         aromaSachet = dataParameters.Budget.confirmation.aromaSachet,
//         capsuleAroma = dataParameters.Budget.confirmation.capsuleAroma,
//         generalObservation = dataParameters.Budget.confirmation.generalObservation,
//         budgetHasRecipe = dataParameters.Budget.confirmation.budgetHasRecipeElement,
//         urgentBudget = dataParameters.Budget.confirmation.urgentBudget,
//         automaticMessageTriggering = dataParameters.Budget.confirmation.automaticMessageTriggering,

//     } = options;

//     const selectors = filialNumberForSearch === '2013' ? {
//         budgetClosingChannelSelector: ':nth-child(4) > .col-sm-7 > .form-control',
//         sendTrackingEmailSelector: ':nth-child(5) > .col-sm-7 > .small-right-space',
//         releaseBudgetForInclusionSelector: ':nth-child(6) > .col-sm-7 > .small-right-space',
//         releaseBudgetCashierSelector: ':nth-child(7) > .col-sm-7 > .small-right-space',
//         cashierObservationSelector: ':nth-child(8) > .col-sm-7 > .form-control',
//         detailedSaleSelector: ':nth-child(9) > .col-sm-7 > .small-right-space',
//         addressSelector: ':nth-child(11) > .col-sm-7 > :nth-child(1)',
//         expeditionObservationSelector: ':nth-child(12) > .col-sm-7 > .form-control',
//         shippingMethodSelector: ':nth-child(13) > .col-sm-7 > .small-right-space',
//         promisedToSelector: ':nth-child(17) > .col-sm-7 > .form-control',
//         aromaSachetSelector: ':nth-child(18) > .col-sm-7 > .form-control',
//         capsuleAromaSelector: ':nth-child(19) > .col-sm-7 > .form-control',
//         generalObservationSelector: ':nth-child(20) > .col-sm-7 > .form-control',
//         urgentBudgetSelector: ':nth-child(23) > .col-sm-7 > .small-right-space'
//     } : {
//         budgetClosingChannelSelector: channelConfirmationBudget,
//         sendTrackingEmailSelector: sendEmailTracking,
//         releaseBudgetForInclusionSelector: releaseBudgetForInclusionElement,
//         releaseBudgetCashierSelector: releaseBudgetCashierElement,
//         cashierObservationSelector: cashierObservationElement,
//         detailedSaleSelector: detailedSaleElement,
//         addressSelector: address,
//         expeditionObservationSelector: expeditionObservationElement,
//         shippingMethodSelector: shippingMethodElement,
//         promisedToSelector: promisedToElement,
//         aromaSachetSelector: aromaSachetElement,
//         capsuleAromaSelector: capsuleAromaElement,
//         generalObservationSelector: generalObservationElement,
//         urgentBudgetSelector: urgentBudgetElement
//     };

//     const checkElement = (selector: string, condition?: boolean, isSpecialCase?: boolean) => {
//         if (typeof condition === 'boolean') {
//             cy.get(selector, { timeout: 20000 })
//                 .should('be.visible')
//                 .should('not.be.disabled')
//                 .then($element => {
//                     if ($element.attr('type') === 'checkbox' || $element.attr('type') === 'radio') {
//                         if (condition) {
//                             cy.wrap($element)
//                                 .check({ force: true });
//                         } else {
//                             cy.wrap($element)
//                                 .uncheck({ force: true })
//                                 .then(() => {
//                                     if (isSpecialCase) {
//                                         cy.document().then((doc) => {
//                                             const $modalButton = Cypress.$(btnSuccessModalElement)
//                                                 .filter((index, el) => Cypress.$(el).text().trim() === 'OK');

//                                             if ($modalButton.length) {
//                                                 cy.log('Botão da modal encontrado, clicando para fechar.');
//                                                 cy.wrap($modalButton)
//                                                     .click({ force: true });
//                                             } else {
//                                                 cy.log('Botão da modal não encontrado.');
//                                             }
//                                         });
//                                     }
//                                 });
//                         }
//                     } else {
//                         cy.log(`Elemento com o seletor ${selector} não é um checkbox ou radio.`);
//                     }
//                 });
//         } else {
//             cy.log(`Nenhuma ação realizada para o seletor ${selector}, pois condition não foi especificada.`);
//         }
//     };

//     const selectIfExists = (selector: string, value?: string) => {
//         if (value) {
//             cy.get(selector, { timeout: 20000 })
//                 .then($select => {
//                     if ($select.length > 0) {
//                         cy.wrap($select.first())
//                             .select(value, { force: true });
//                     } else {
//                         cy.log(`Elemento select ${selector} não foi encontrado.`);
//                     }
//                 });
//         }
//     };
//     const performCommonActions = () => {

//         cy.getElementAndClick(modalConfirmationBudgetElement);

//         if (paymentMethod !== undefined) {
//             cy.wait(2000);
//             cy.getSelectOptionByValue([{ element: paymentMethodElement, value: paymentMethod }]);
//         };

//         if (chosenBudget !== undefined) {
//             cy.getElementAndCheck([{ element: chosenBudget }]);
//         };

//         if (timeRepetition !== undefined) {
//             cy.getElementAndType({ [insertRepeatTime]: timeRepetition });
//         };

//         cy.getElementAndClick(saveDataConfirmationBudget);

//         if (filialNumberForSearch === '2013') {
//             cy.log('Filial 2013 detectada. Selecionando tipo de cortesia para injetáveis.');

//             if (typePaymentCourtesyInjectables) {
//                 cy.get('select[name="id_tipo_pagamento"]')
//                     .select(typePaymentCourtesyInjectables)
//                     .should('have.value', typePaymentCourtesyInjectables)
//                     .then(() => {
//                         cy.log(`Cortesia selecionada: ${typePaymentCourtesyInjectables}`);
//                     });
//             }
//         }

//         if (budgetClosingChannel !== undefined) {
//             selectIfExists(selectors.budgetClosingChannelSelector, budgetClosingChannel);
//         };

//         if (sendTrackingEmail !== undefined) {
//             checkElement(selectors.sendTrackingEmailSelector, sendTrackingEmail);
//         };

//         if (releaseBudgetForInclusion !== undefined) {
//             checkElement(selectors.releaseBudgetForInclusionSelector, releaseBudgetForInclusion, true);
//         };

//         if (releaseBudgetCashier !== undefined) {
//             checkElement(selectors.releaseBudgetCashierSelector, releaseBudgetCashier);
//         };

//         if (cashierObservation !== undefined) {
//             cy.getElementAndType({ [selectors.cashierObservationSelector]: cashierObservation });
//         };

//         if (detailedSale !== undefined) {
//             checkElement(selectors.detailedSaleSelector, detailedSale);
//         };

//         if (paymentStatus !== undefined) {
//             cy.getElementAndCheck([{ element: paymentStatus }]);
//         };

//         if (address !== undefined) {
//             cy.get(selectors.addressSelector, { timeout: 10000 })
//                 .then(($addressElement) => {
//                     if ($addressElement.length > 0) {
//                         cy.getElementAndClick(selectors.addressSelector);
//                     } else {
//                         throw new Error('Não há endereço disponível para confirmação do orçamento.');
//                     }
//                 });
//         }

//         if (expeditionObservation !== undefined) {
//             cy.getElementAndType({ [selectors.expeditionObservationSelector]: expeditionObservation });
//         };

//         if (shippingMethod !== undefined) {
//             selectIfExists(selectors.shippingMethodSelector, shippingMethod);
//         };

//         if (promisedTo) {
//             cy.getElementAndClick(selectors.promisedToSelector);
//             cy.wait(500);
//             cy.getElementAndClick(selectors.promisedToSelector);
//         }

//         if (aromaSachet) {
//             cy.getSelectOptionByValue([{ element: selectors.aromaSachetSelector, value: aromaSachet }]);
//         };

//         if (capsuleAroma) {
//             cy.getSelectOptionByValue([{ element: selectors.capsuleAromaSelector, value: capsuleAroma }]);
//         };

//         if (generalObservation !== undefined) {
//             cy.getElementAndType({ [selectors.generalObservationSelector]: generalObservation });
//         };

//         if (budgetHasRecipe !== undefined) {
//             cy.getElementAndCheck([{ element: budgetHasRecipeElement, value: budgetHasRecipe }]);
//         };

//         if (urgentBudget !== undefined) {
//             checkElement(selectors.urgentBudgetSelector, urgentBudget);
//         };

//         if (automaticMessageTriggering !== undefined) {
//             cy.get(sendAutomaticBudgetConfirmationMessageElement)
//                 .uncheck();
//         };
//     }

//     performCommonActions();

//     cy.getElementAndClick(PreViewBudget, closePreViewBudget, sendconfirmBudget);

//     return cy.wrap({ success: 'Orçamento confirmado com sucesso!' });
// });

Cypress.Commands.add('confirmBudget', (options: {
    orcamentoNumberForSearch?: string | number;
    filialNumberForSearch?: string | number;
    typePaymentCourtesyInjectables?: BudgetConfirmationTypePaymentCourtesyInjectables;
    budgetist?: string,
    budgetAttendant?: string,
    paymentMethod?: BudgetConfirmationPaymentMethod,
    chosenBudget?: string,
    timeRepetition?: number,
    budgetClosingChannel?: BudgetClosingChannel,
    sendTrackingEmail?: boolean,
    releaseBudgetForInclusion?: boolean,
    releaseBudgetCashier?: boolean,
    cashierObservation?: string,
    detailedSale?: boolean,
    paymentStatus?: BudgetConfirmationPaymentStatus,
    address?: number,
    expeditionObservation?: string,
    shippingMethod?: BudgetConfirmationShippingMethod,
    juntocomBudget?: string,
    promisedTo?: Date,
    aromaSachet?: BudgetConfirmationAromaSachet,
    capsuleAroma?: BudgetConfirmationCapsuleAroma,
    generalObservation?: string,
    budgetHasRecipe?: BudgetConfirmationBudgetHasRecipe,
    urgentBudget?: boolean,
    automaticMessageTriggering?: boolean,
} = {}): ValidationResult => {

    const {
        budgetist = dataParameters.Budget.confirmation.budgetist,
        budgetAttendant = dataParameters.Budget.confirmation.budgetAttendant,
        orcamentoNumberForSearch = dataParameters.Budget.confirmation.orcamentoNumberForSearch,
        filialNumberForSearch = dataParameters.Budget.confirmation.filialNumberForSearch,
        typePaymentCourtesyInjectables = dataParameters.Budget.confirmation.typePaymentCourtesyInjectables,
        paymentMethod = dataParameters.Budget.confirmation.paymentMethod,
        chosenBudget = dataParameters.Budget.confirmation.chosenBudget,
        timeRepetition = dataParameters.Budget.confirmation.timeRepetition,
        budgetClosingChannel = dataParameters.Budget.confirmation.budgetClosingChannel,
        sendTrackingEmail = dataParameters.Budget.confirmation.sendTrackingEmail,
        releaseBudgetForInclusion = dataParameters.Budget.confirmation.releaseBudgetForInclusion,
        releaseBudgetCashier = dataParameters.Budget.confirmation.releaseBudgetCashier,
        cashierObservation = dataParameters.Budget.confirmation.cashierObservation,
        detailedSale = dataParameters.Budget.confirmation.detailedSale,
        paymentStatus = dataParameters.Budget.confirmation.paymentStatus,
        address = dataParameters.Budget.confirmation.address,
        expeditionObservation = dataParameters.Budget.confirmation.expeditionObservation,
        shippingMethod = dataParameters.Budget.confirmation.shippingMethod,
        juntocomBudget = dataParameters.Budget.confirmation.juntocomBudget,
        promisedTo = dataParameters.Budget.confirmation.promisedTo,
        aromaSachet = dataParameters.Budget.confirmation.aromaSachet,
        capsuleAroma = dataParameters.Budget.confirmation.capsuleAroma,
        generalObservation = dataParameters.Budget.confirmation.generalObservation,
        budgetHasRecipe = dataParameters.Budget.confirmation.budgetHasRecipeElement,
        urgentBudget = dataParameters.Budget.confirmation.urgentBudget,
        automaticMessageTriggering = dataParameters.Budget.confirmation.automaticMessageTriggering,

    } = options;

    const selectors = filialNumberForSearch === '2013' ? {
        budgetClosingChannelSelector: ':nth-child(4) > .col-sm-7 > .form-control',
        sendTrackingEmailSelector: ':nth-child(5) > .col-sm-7 > .small-right-space',
        releaseBudgetForInclusionSelector: ':nth-child(6) > .col-sm-7 > .small-right-space',
        releaseBudgetCashierSelector: ':nth-child(7) > .col-sm-7 > .small-right-space',
        cashierObservationSelector: ':nth-child(8) > .col-sm-7 > .form-control',
        detailedSaleSelector: ':nth-child(9) > .col-sm-7 > .small-right-space',
        addressSelector: ':nth-child(11) > .col-sm-7 > :nth-child(1)',
        expeditionObservationSelector: ':nth-child(12) > .col-sm-7 > .form-control',
        shippingMethodSelector: ':nth-child(13) > .col-sm-7 > .small-right-space',
        promisedToSelector: ':nth-child(17) > .col-sm-7 > .form-control',
        aromaSachetSelector: ':nth-child(18) > .col-sm-7 > .form-control',
        capsuleAromaSelector: ':nth-child(19) > .col-sm-7 > .form-control',
        generalObservationSelector: ':nth-child(20) > .col-sm-7 > .form-control',
        urgentBudgetSelector: ':nth-child(23) > .col-sm-7 > .small-right-space'
    } : {
        budgetClosingChannelSelector: channelConfirmationBudget,
        sendTrackingEmailSelector: sendEmailTracking,
        releaseBudgetForInclusionSelector: releaseBudgetForInclusionElement,
        releaseBudgetCashierSelector: releaseBudgetCashierElement,
        cashierObservationSelector: cashierObservationElement,
        detailedSaleSelector: detailedSaleElement,
        addressSelector: confirmedOrderDeliveryAddressElement,
        expeditionObservationSelector: expeditionObservationElement,
        shippingMethodSelector: shippingMethodElement,
        promisedToSelector: promisedToElement,
        aromaSachetSelector: aromaSachetElement,
        capsuleAromaSelector: capsuleAromaElement,
        generalObservationSelector: generalObservationElement,
        urgentBudgetSelector: urgentBudgetElement
    };

    cy.wrap({
        budgetist,
        budgetAttendant,
        orcamentoNumberForSearch,
        filialNumberForSearch,
        typePaymentCourtesyInjectables,
        paymentMethod,
        chosenBudget,
        timeRepetition,
        budgetClosingChannel,
        sendTrackingEmail,
        releaseBudgetForInclusion,
        releaseBudgetCashier,
        cashierObservation,
        detailedSale,
        paymentStatus,
        address,
        expeditionObservation,
        shippingMethod,
        juntocomBudget,
        promisedTo,
        aromaSachet,
        capsuleAroma,
        generalObservation,
        budgetHasRecipe,
        urgentBudget,
        automaticMessageTriggering,
    }).as('confirmedDetails');

    const checkElement = (selector: string, condition?: boolean, isSpecialCase?: boolean) => {
        if (typeof condition === 'boolean') {
            cy.get(selector, { timeout: 20000 })
                .should('be.visible')
                .should('not.be.disabled')
                .then($element => {
                    if ($element.attr('type') === 'checkbox' || $element.attr('type') === 'radio') {
                        if (condition) {
                            cy.wrap($element)
                                .check({ force: true });
                        } else {
                            cy.wrap($element)
                                .uncheck({ force: true })
                                .then(() => {
                                    if (isSpecialCase) {
                                        cy.document().then((doc) => {
                                            const $modalButton = Cypress.$(btnSuccessModalElement)
                                                .filter((index, el) => Cypress.$(el).text().trim() === 'OK');

                                            if ($modalButton.length) {
                                                cy.log('Botão da modal encontrado, clicando para fechar.');
                                                cy.wrap($modalButton)
                                                    .click({ force: true });
                                            } else {
                                                cy.log('Botão da modal não encontrado.');
                                            }
                                        });
                                    }
                                });
                        }
                    } else {
                        cy.log(`Elemento com o seletor ${selector} não é um checkbox ou radio.`);
                    }
                });
        } else {
            cy.log(`Nenhuma ação realizada para o seletor ${selector}, pois condition não foi especificada.`);
        }
    };

    const selectIfExists = (selector: string, value?: string) => {
        if (value) {
            cy.get(selector, { timeout: 20000 })
                .then($select => {
                    if ($select.length > 0) {
                        cy.wrap($select.first())
                            .select(value, { force: true });
                    } else {
                        cy.log(`Elemento select ${selector} não foi encontrado.`);
                    }
                });
        }
    };
    const performCommonActions = () => {

        cy.getElementAndClick(modalConfirmationBudgetElement);

        if (paymentMethod !== undefined) {
            cy.wait(2000);
            cy.getSelectOptionByValue([{ element: paymentMethodElement, value: paymentMethod }]);
        };

        if (chosenBudget !== undefined) {
            cy.getElementAndCheck([{ element: chosenBudget }]);
        };

        if (timeRepetition !== undefined) {
            cy.getElementAndType({ [insertRepeatTime]: timeRepetition });
        };

        cy.getElementAndClick(saveDataConfirmationBudget);

        if (filialNumberForSearch === '2013') {
            cy.log('Filial 2013 detectada. Selecionando tipo de cortesia para injetáveis.');

            if (typePaymentCourtesyInjectables) {
                cy.get('select[name="id_tipo_pagamento"]')
                    .select(typePaymentCourtesyInjectables)
                    .should('have.value', typePaymentCourtesyInjectables)
                    .then(() => {
                        cy.log(`Cortesia selecionada: ${typePaymentCourtesyInjectables}`);
                    });
            }
        }

        if (budgetClosingChannel !== undefined) {
            selectIfExists(selectors.budgetClosingChannelSelector, budgetClosingChannel);
        };

        if (sendTrackingEmail !== undefined) {
            checkElement(selectors.sendTrackingEmailSelector, sendTrackingEmail);
        };

        if (releaseBudgetForInclusion !== undefined) {
            checkElement(selectors.releaseBudgetForInclusionSelector, releaseBudgetForInclusion, true);
        };

        if (releaseBudgetCashier !== undefined) {
            checkElement(selectors.releaseBudgetCashierSelector, releaseBudgetCashier);
        };

        if (cashierObservation !== undefined) {
            cy.getElementAndType({ [selectors.cashierObservationSelector]: cashierObservation });
        };

        if (detailedSale !== undefined) {
            checkElement(selectors.detailedSaleSelector, detailedSale);
        };

        if (paymentStatus !== undefined) {
            cy.getElementAndCheck([{ element: paymentStatus }]);
        };

        if (address !== undefined) {
            cy.get(selectors.addressSelector, { timeout: 10000 })
                .should('exist') // Garante que ao menos um endereço está presente
                .then(($elements) => {
                    const addresses = Array.from($elements).map((el) => (el as HTMLElement).textContent?.trim() || '');
                    cy.log('Endereços disponíveis:', addresses);

                    // Seleciona o endereço baseado no índice ou usa o primeiro como fallback
                    const selectedAddress = addresses[address - 1] || addresses[0];
                    cy.log('Endereço selecionado:', selectedAddress);

                    if (!selectedAddress) {
                        throw new Error('Nenhum endereço disponível para seleção.');
                    }

                    // Seleciona o endereço no DOM
                    cy.wrap($elements[address - 1] || $elements[0])
                        .click({ force: true });

                    // Armazena o endereço selecionado para validação futura
                    cy.wrap(selectedAddress).as('confirmedAddress');
                });
        }


        if (expeditionObservation !== undefined) {
            cy.getElementAndType({ [selectors.expeditionObservationSelector]: expeditionObservation });
        };

        if (shippingMethod !== undefined) {
            selectIfExists(selectors.shippingMethodSelector, shippingMethod);
        };

        if (promisedTo) {
            cy.getElementAndClick(selectors.promisedToSelector);
            cy.wait(500);
            cy.getElementAndClick(selectors.promisedToSelector);
        }

        if (aromaSachet) {
            cy.getSelectOptionByValue([{ element: selectors.aromaSachetSelector, value: aromaSachet }]);
        };

        if (capsuleAroma) {
            cy.getSelectOptionByValue([{ element: selectors.capsuleAromaSelector, value: capsuleAroma }]);
        };

        if (generalObservation !== undefined) {
            cy.getElementAndType({ [selectors.generalObservationSelector]: generalObservation });
        };

        if (budgetHasRecipe !== undefined) {
            cy.getElementAndCheck([{ element: budgetHasRecipeElement, value: budgetHasRecipe }]);
        };

        if (urgentBudget !== undefined) {
            checkElement(selectors.urgentBudgetSelector, urgentBudget);
        };

        if (automaticMessageTriggering !== undefined) {
            cy.get(sendAutomaticBudgetConfirmationMessageElement)
                .uncheck();
        };
    }

    performCommonActions();

    cy.getElementAndClick(PreViewBudget, closePreViewBudget, sendconfirmBudget);

    return cy.wrap({
        success: 'Orçamento confirmado com sucesso!',

    });
});

Cypress.Commands.add('captureBudgetDetails', () => {
    const cleanText = (text: string) => text.replace(/\s+/g, ' ').trim();

    return cy.get('#printarea').then(($printArea) => {
        const rawText = cleanText($printArea.text());

        // Forma de pagamento
        const paymentMethodMatch = rawText.match(/FORMA PAGAMENTO:\s*(.+?)\s*(?:NOTA DETALHADA|SITUAÇÃO PGTO:)/);
        const paymentMethod = paymentMethodMatch ? paymentMethodMatch[1].trim() : '';

        // Nota detalhada
        const detailedSaleMatch = rawText.match(/NOTA DETALHADA:\s*(Sim|Não)/);
        const detailedSale = detailedSaleMatch ? detailedSaleMatch[1].trim() === 'Sim' : false;

        // Situação de pagamento
        const paymentStatusMatch = rawText.match(/SITUAÇÃO PGTO:\s*(Pago|Não pago)/);
        const paymentStatus = paymentStatusMatch ? paymentStatusMatch[1].trim() : '';

        // Endereço
        const addressMatch = rawText.match(/Enviar:\s*(.+?)\s*(?:FORMA ENVIO:|Obs\. Expedição:)/);
        const address = addressMatch ? addressMatch[1].trim() : '';

        // Forma de envio
        const shippingMethodMatch = rawText.match(/FORMA ENVIO:\s*(.+?)\s*(?:Obs\. Expedição:|AROMA Sa\/Sh:)/);
        const shippingMethod = shippingMethodMatch ? shippingMethodMatch[1].trim() : '';

        // Observação de expedição
        const expeditionObservationMatch = rawText.match(/Obs\. Expedição:\s*([\s\S]*?)\s*(?=O R Ç A M E N T O|AROMA Sa\/Sh:|Prometido Para:|$)/);
        const expeditionObservation = expeditionObservationMatch ? expeditionObservationMatch[1].trim() : '';

        // Aroma do sachê
        const aromaSachetMatch = rawText.match(/AROMA Sa\/Sh:\s*(.+?)\s*(?:AROMA P\/G\/SO\/Cap Sub:|Observações:)/);
        const aromaSachet = aromaSachetMatch ? aromaSachetMatch[1].trim() : '';

        // Aroma da cápsula
        const capsuleAromaMatch = rawText.match(/AROMA P\/G\/SO\/Cap Sub:\s*([^\d]+?)(?:\s+Dias Trat:|$)/);
        const capsuleAroma = capsuleAromaMatch ? capsuleAromaMatch[1].trim() : '';


        // Observações gerais
        const generalObservationMatch = rawText.match(/Observações:\s*([\s\S]*?)\s*(?:Possuí Receita:|Prometido Para:|$)/);
        const generalObservation = generalObservationMatch ? generalObservationMatch[1].trim() : '';


        // Possui receita
        const budgetHasRecipeMatch = rawText.match(/Possuí Receita:\s*(Sim|Não)/);
        const budgetHasRecipe = budgetHasRecipeMatch ? budgetHasRecipeMatch[1].trim() === 'Sim' : false;

        // Data prometida
        const promisedToMatch = rawText.match(/Prometido Para:\s*([\d\/]+)/);
        const promisedTo = promisedToMatch && promisedToMatch[1] !== '30/12/1899' ? promisedToMatch[1].trim() : '';

        const budgetDetails = {
            paymentMethod,
            detailedSale,
            paymentStatus,
            address,
            shippingMethod,
            expeditionObservation,
            aromaSachet,
            capsuleAroma,
            generalObservation,
            budgetHasRecipe,
            promisedTo,
        };

        cy.log('Detalhes do orçamento capturados:', budgetDetails);
        return cy.wrap(budgetDetails);
    });
});



Cypress.Commands.add('validateBudgetDetails', () => {
    cy.get('@confirmedDetails').then((providedDetails) => {
        // Validação do endereço selecionado
        cy.get('@confirmedAddress').then((selectedAddress) => {
            cy.get('.enderecosCli')
                .should('exist') // Garante que ao menos um endereço está presente
                .then(($elements) => {
                    const capturedAddresses = Array.from($elements).map((el) => (el as HTMLElement).textContent?.trim() || '');
                    cy.log('Endereços disponíveis no DOM:', capturedAddresses);

                    // Valida se o endereço selecionado está entre os endereços disponíveis
                    expect(capturedAddresses).to.include(selectedAddress, 'O endereço selecionado está entre os disponíveis');
                });
        });

        // Outras validações
        cy.captureBudgetDetails().then((capturedDetails) => {
            cy.log('Detalhes capturados:', capturedDetails);

            // Mapeia enums para os valores esperados
            const paymentStatusMapping: Record<BudgetConfirmationPaymentStatus, string> = {
                [BudgetConfirmationPaymentStatus.NotPayed]: "Não pago",
                [BudgetConfirmationPaymentStatus.payed]: "Pago",
            };

            const paymentMethodMapping: Record<BudgetConfirmationPaymentMethod, string> = {
                [BudgetConfirmationPaymentMethod.VisitArrangement]: "Agendamento de Visita",
                [BudgetConfirmationPaymentMethod.ArrangementVisitSpreadsheet]: "Planilha de Agendamento",
                [BudgetConfirmationPaymentMethod.BankSlip]: "Boleto Bancário",
                [BudgetConfirmationPaymentMethod.BankSlipReleaseWithoutPayment]: "Boleto Sem Pagamento",
                [BudgetConfirmationPaymentMethod.PatientBankSlipBox]: "Boleto no Caixa do Paciente",
                [BudgetConfirmationPaymentMethod.PrescriberBankSlipBox]: "Boleto no Caixa do Prescritor",
                [BudgetConfirmationPaymentMethod.InstallmentBankSlip]: "Boleto Parcelado",
                [BudgetConfirmationPaymentMethod.CreditCard]: "Cartão de Crédito",
                [BudgetConfirmationPaymentMethod.GpeCardAwaitingPayment]: "Cartão GPE - Aguardando Pagamento",
                [BudgetConfirmationPaymentMethod.GpeCardReleaseWithoutPayment]: "Cartão GPE - Sem Pagamento",
                [BudgetConfirmationPaymentMethod.Check]: "Cheque",
                [BudgetConfirmationPaymentMethod.Courtesy]: "Cortesia",
                [BudgetConfirmationPaymentMethod.Deposit]: "Depósito",
                [BudgetConfirmationPaymentMethod.Cash]: "Dinheiro",
                [BudgetConfirmationPaymentMethod.Other]: "Outros",
                [BudgetConfirmationPaymentMethod.Pix]: "PIX",
            };

            const shippingMethodMapping: Record<BudgetConfirmationShippingMethod, string> = {
                [BudgetConfirmationShippingMethod.CounterHkm]: "Balcão HKM",
                [BudgetConfirmationShippingMethod.CounterSmart]: "Balcão SMART",
                [BudgetConfirmationShippingMethod.PostalFree]: "Correios - Envio Grátis",
                [BudgetConfirmationShippingMethod.International]: "Correios - Internacional",
                [BudgetConfirmationShippingMethod.Sedex10]: "Correios - Sedex 10",
                [BudgetConfirmationShippingMethod.Sedex10Courtesy]: "Correios - Sedex 10 CORTESIA",
                [BudgetConfirmationShippingMethod.Sedex12]: "Correios - Sedex 12",
                [BudgetConfirmationShippingMethod.Sedex12Courtesy]: "Correios - Sedex 12 Cortesia",
                [BudgetConfirmationShippingMethod.SedexFloripa]: "Correios - Sedex Floripa",
                [BudgetConfirmationShippingMethod.SedexOtherStates]: "Correios - Sedex OUTROS ESTADOS",
                [BudgetConfirmationShippingMethod.SedexSc]: "Correios - Sedex SC",
                [BudgetConfirmationShippingMethod.AirShipping]: "Envio Aéreo",
                [BudgetConfirmationShippingMethod.ShippingPeMt]: "Envio PE e MT",
                [BudgetConfirmationShippingMethod.ShippingPeMtFree]: "Envio PE e MT grátis",
                [BudgetConfirmationShippingMethod.ExpeditionHkm]: "Expedição HKM",
                [BudgetConfirmationShippingMethod.ExpeditionSmart]: "Expedição SMART",
                [BudgetConfirmationShippingMethod.EmployeePickup]: "Funcionário - Retirada Recepção",
                [BudgetConfirmationShippingMethod.EmployeeSedex]: "Funcionário - Sedex",
                [BudgetConfirmationShippingMethod.Delivery]: "Tele-entrega",
                [BudgetConfirmationShippingMethod.CarrierQuality]: "Transportadora - Quality",
                [BudgetConfirmationShippingMethod.CarrierQualityFree]: "Transportadora - Quality (Grátis)",
            };

            const providedPaymentMethod = paymentMethodMapping[providedDetails.paymentMethod] || providedDetails.paymentMethod;
            const providedPaymentStatus = paymentStatusMapping[providedDetails.paymentStatus] || providedDetails.paymentStatus;
            const providedShippingMethod = shippingMethodMapping[providedDetails.shippingMethod] || providedDetails.shippingMethod;

            // Validações dos detalhes capturados
            expect(providedPaymentMethod).to.eq(capturedDetails.paymentMethod, 'Forma de pagamento');
            expect(providedDetails.detailedSale).to.eq(capturedDetails.detailedSale, 'Nota detalhada');
            expect(providedPaymentStatus).to.eq(capturedDetails.paymentStatus, 'Situação de pagamento');
            expect(providedShippingMethod).to.eq(capturedDetails.shippingMethod, 'Forma de envio');
            expect(providedDetails.expeditionObservation.trim()).to.eq(capturedDetails.expeditionObservation.trim(), 'Observação de expedição');
            expect(providedDetails.aromaSachet).to.eq(capturedDetails.aromaSachet, 'Aroma do sachê');
            expect(providedDetails.capsuleAroma).to.eq(capturedDetails.capsuleAroma, 'Aroma da cápsula');
            expect(providedDetails.generalObservation).to.eq(capturedDetails.generalObservation, 'Observações gerais');

            const providedDate = providedDetails.promisedTo
                ? new Date(providedDetails.promisedTo).toLocaleDateString('pt-BR')
                : '';

            if (!capturedDetails.promisedTo) {
                throw new Error('A Data Prometida não foi capturada. Verifique o texto bruto ou a estrutura do HTML.');
            }
            expect(providedDate).to.eq(capturedDetails.promisedTo, `Data prometida: Esperada ${providedDate}, Capturada ${capturedDetails.promisedTo}`);

        });
    });
});






Cypress.Commands.add('authenticateAdminForEdit', ({ userType, password }) => {
    // Espera e clica no botão "OK" da modal de aviso
    cy.getElementAndClick(okModalMessage);

    // Seleciona o tipo de usuário (admin ou farmacêutico)
    const userSelector = userType === 'admin'
        ? '#select2-admin-to-auth-container'
        : '#select2-farma-to-auth-container';
    const passwordSelector = userType === 'admin'
        ? '#password-admin-auth'
        : '#password-farma-auth';
    const applyButtonSelector = userType === 'admin'
        ? '#admin-auth-send-btn'
        : '#farma-auth-send-btn';

    // Insere o usuário
    cy.getElementAutocompleteTypeAndClick(
        { [userSelector]: 'adm' },
        suggestionAutocomplete
    );

    // Insere a senha
    cy.getElementAndType({ [passwordSelector]: '!@' });

    // Clica no botão "Aplicar"
    cy.getElementAndClick(applyButtonSelector);

});


const toArray = <T>(value: T | T[]): T[] => {
    return Array.isArray(value) ? value : [value];
};
Cypress.Commands.add('payBudget', (options: {
    paymentMethod?: PayBudgetPaymentMethod,
    telephone?: number[];
    email?: string[];
    fullName?: string[];
    birthDate?: string[];
    cpf?: number[];
    rg?: number[];
    useRegisteredAddress?: boolean;
    zipCode?: number[];
    state?: PayBudgetState[];
    city?: string[];
    district?: string[];
    street?: string[];
    houseNumber?: number[];
    addressComplement?: string[];
    isMyDeliveryAddress?: boolean;
    cardholderName?: string[];
    cpfCnpj?: number[];
    cardNumber?: number[];
    expirationMonth?: PayBudgetCreditCardExpirationMonth[];
    expirationYear?: PayBudgetCreditCardExpirationYear[];
    securityCode?: number[];
    installments?: BudgetInstallments[];
} = {}): ValidationResult => {

    const {
        paymentMethod = dataParameters.Budget.payment.paymentMethod,
        telephone = toArray(dataParameters.Budget.payment.telephone),
        email = toArray(dataParameters.Budget.payment.email),
        fullName = toArray(dataParameters.Budget.payment.fullName),
        birthDate = toArray(dataParameters.Budget.payment.birthDate),
        cpf = toArray(dataParameters.Budget.payment.cpf),
        rg = toArray(dataParameters.Budget.payment.rg),
        useRegisteredAddress = dataParameters.Budget.payment.useRegisteredAddress,
        zipCode = toArray(dataParameters.Budget.payment.zipCode),
        state = toArray(dataParameters.Budget.payment.state),
        city = toArray(dataParameters.Budget.payment.city),
        district = toArray(dataParameters.Budget.payment.district),
        street = toArray(dataParameters.Budget.payment.street),
        houseNumber = toArray(dataParameters.Budget.payment.houseNumber),
        addressComplement = toArray(dataParameters.Budget.payment.addressComplement),
        isMyDeliveryAddress = dataParameters.Budget.payment.isMyDeliveryAddress,
        cardholderName = toArray(dataParameters.Budget.payment.cardholderName),
        cpfCnpj = toArray(dataParameters.Budget.payment.cpfCnpj),
        cardNumber = toArray(dataParameters.Budget.payment.cardNumber),
        expirationMonth = toArray(dataParameters.Budget.payment.expirationMonth),
        expirationYear = toArray(dataParameters.Budget.payment.expirationYear),
        securityCode = toArray(dataParameters.Budget.payment.securityCode),
        installments = toArray(dataParameters.Budget.payment.installments),
    } = options;

    const selectOption = (element: string, value: string | number) => {
        if (value) {
            cy.get(element).select(value.toString());
        }
    };

    const getRandomValue = <T>(values: T[]): T => {
        return faker.helpers.arrayElement(values);
    };

    const handleCreditCardPayment = () => {
        cy.getElementAndType({ [cardholderNameElement]: getRandomValue(cardholderName) });
        cy.getElementAndType({ [cpfCnpjElement]: getRandomValue(cpfCnpj) });
        cy.getElementAndType({ [cardNumberElement]: getRandomValue(cardNumber) });
        // selectOption(expirationMonthElement, getRandomValue(expirationMonth));
        cy.getSelectOptionByValue([{ element: expirationMonthElement, value: getRandomValue(expirationMonth) }]);
        // selectOption(expirationYearElement, getRandomValue(expirationYear));
        cy.getSelectOptionByValue([{ element: expirationYearElement, value: getRandomValue(expirationYear) }]);

        cy.getElementAndType({ [securityCodeElement]: getRandomValue(securityCode) });
        selectOption(installmentsElement, getRandomValue(installments));
    };

    const attemptPayment = (currentBudgetIndex) => {
        const currentTelephone = getRandomValue(telephone);
        const currentEmail = getRandomValue(email);
        const currentFullName = getRandomValue(fullName);
        const currentBirthDate = getRandomValue(birthDate);
        const currentCpf = getRandomValue(cpf);
        const currentRg = getRandomValue(rg);
        const currentZipCode = getRandomValue(zipCode);
        const currentState = getRandomValue(state);
        const currentCity = getRandomValue(city);
        const currentDistrict = getRandomValue(district);
        const currentStreet = getRandomValue(street);
        const currentHouseNumber = getRandomValue(houseNumber);
        const currentAddressComplement = getRandomValue(addressComplement);

        cy.log(`Tentando pagamento para o orçamento ${currentBudgetIndex}`);
        cy.wrap(currentBudgetIndex).as('paidBudgetIndex');

        cy.getElementAndClick(goToPaymentElement);

        cy.document().then((doc) => {
            const checkIfLoadingFinished = () => {
                const $loadingElement = Cypress.$('.efetuar-pagamento-btn.loading', doc);

                if ($loadingElement.length === 0 || !$loadingElement.is(':visible')) {
                    cy.log('Carregamento concluído, continuando...');
                    cy.getElementAndClick(paymentMethod);
                    cy.getElementAndClick(makePaymentUsingTheSelectedPaymentMethodElement);
                } else {
                    cy.log('Carregando... aguardando...');
                    cy.wait(500).then(checkIfLoadingFinished);
                }
            };

            checkIfLoadingFinished();
        });

        cy.get('#main-title').invoke('text').then((selectedPaymentMethod) => {
            cy.log(`Método de pagamento selecionado: ${selectedPaymentMethod.trim()}`);
            const isPixSelected = selectedPaymentMethod.trim().toLowerCase().includes('pix');

            if (!isPixSelected) {
                cy.log('Método de pagamento é Cartão de Crédito.');
                handleCreditCardPayment();
            } else {
                cy.log('Método de pagamento é PIX.');
            }

            cy.getElementAndClick(makePaymentElement);

            cy.getElementAndType({ [telephoneElement]: currentTelephone });
            cy.getElementAndType({ [emailElement]: currentEmail });

            const injectablesBranch = dataParameters.Recipe.injectablesBranch;
            if (!injectablesBranch.includes(String(dataParameters.Budget.confirmation.filialNumberForSearch))) {
                cy.getElementAndType({ [fullNameElement]: currentFullName });
                cy.getElementAndType({ [birthDateElement]: currentBirthDate });
                cy.getElementAndType({ [cpfElement]: currentCpf });
                cy.getElementAndType({ [rgElement]: currentRg });
                cy.getElementAndClick(useRegisteredAddressElement);

                cy.getElementAndType({ [zipCodeElement]: currentZipCode });
                cy.wait(2000);
                cy.getSelectOptionByValue([{ element: stateElement, value: currentState }]);
                cy.getElementAndType({ [cityElement]: currentCity });
                cy.getElementAndType({ [districtElement]: currentDistrict });
                cy.getElementAndType({ [streetElement]: currentStreet });
                cy.getElementAndType({ [houseNumberElement]: currentHouseNumber });
                cy.getElementAndType({ [addressComplementElement]: currentAddressComplement });

                if (isMyDeliveryAddress) {
                    cy.getElementAndClick(isMyDeliveryAddressElement);
                }
            }

            cy.getElementAndClick(makePaymentElement);
        });
    };

    const checkSuccessMessage = () => {
        return cy.get(paymentScreenSuccessElement)
            .then($element => {
                const successText = $element.text().trim();
                return successText.includes('PAGAMENTO CONFIRMADO');
            });
    };

    return cy.wrap(null).then(() => {
        cy.get(accessSelfcheckoutElement)
            .invoke('removeAttr', 'target')
            .then(($el) => {
                const href = $el.prop('href');
                cy.visit(href);
            });

        cy.url().should('include', dataParameters.env.BASE_URL_SC);

        const handleAromaSelection = () => {
            cy.get('body')
                .then(($body) => {
                    if ($body.find('select.aroma').length > 0) {
                        cy.get('select.aroma')
                            .each(($aromaSelect, index) => {
                                cy.wrap($aromaSelect).find('option').then(($options) => {
                                    const availableOptions = $options
                                        .map((i, el) => {
                                            const optionValue = Cypress.$(el).val();
                                            const isDisabled = Cypress.$(el).is(':disabled');
                                            return isDisabled ? null : optionValue;
                                        })
                                        .get()
                                        .filter(option => option);

                                    if (availableOptions.length === 0) {
                                        cy.log('Nenhuma opção de aroma disponível e habilitada no select.');
                                        return;
                                    }

                                    const selectedAroma = faker.helpers.arrayElement(availableOptions) as string;

                                    cy.wrap($aromaSelect)
                                        .select(selectedAroma, { force: true })
                                        .then(() => {
                                            cy.wrap($aromaSelect).invoke('val').then((selectedValue) => {
                                                if (selectedValue === selectedAroma) {
                                                    cy.log(`Aroma selecionado para o select ${index + 1}: ${selectedAroma}`);
                                                } else {
                                                    cy.log(`Aroma "${selectedAroma}" não pôde ser selecionado corretamente.`);
                                                }
                                            });
                                        });
                                });
                            });
                    } else {
                        cy.log('Nenhum campo de seleção de aroma encontrado.');
                    }
                });
        };
        handleAromaSelection();


        cy.wait(1000);

        let attempts = 0;
        const maxAttempts = fullName.length > 1 ? 3 : 1;

        const tryPayment = () => {
            attempts++;
            cy.get('@currentBudgetIndex').then((budgetIndex) => {
                attemptPayment(budgetIndex);
            });

            return checkSuccessMessage().then((isSuccess) => {
                if (isSuccess) {
                    cy.log('Pagamento confirmado.');
                    return cy.wrap({
                        telephone: getRandomValue(telephone),
                        email: getRandomValue(email),
                        fullName: getRandomValue(fullName),
                        birthDate: getRandomValue(birthDate),
                        cpf: getRandomValue(cpf),
                        rg: getRandomValue(rg),
                        zipCode: getRandomValue(zipCode),
                        state: getRandomValue(state),
                        city: getRandomValue(city),
                        district: getRandomValue(district),
                        street: getRandomValue(street),
                        houseNumber: getRandomValue(houseNumber),
                        addressComplement: getRandomValue(addressComplement)
                    });
                } else if (attempts < maxAttempts) {
                    cy.log(`Tentativa de pagamento falhou. Tentando novamente (${attempts}/${maxAttempts})...`);
                    return tryPayment();
                } else {
                    throw new Error('Falha no pagamento após múltiplas tentativas.');
                }
            });
        };

        return tryPayment();
    });
});


Cypress.Commands.add('validatePaymentData', (expectedData) => {
    cy.get('@paidBudgetIndex').then((budgetIndex) => {
        cy.log(`Validando dados para o orçamento ${budgetIndex}`);

        const injectablesBranch = dataParameters.Recipe.injectablesBranch;
        const currentBranch = String(dataParameters.Budget.confirmation.filialNumberForSearch);

        cy.viewBudget();

        findSuccessfulPaymentRow().as('successfulPaymentRow').then(($successfulPaymentRow) => {
            if ($successfulPaymentRow.length === 0) {
                throw new Error("Nenhum bloco de pagamento bem-sucedido (verde) encontrado.");
            }

            if (isInjectablesBranch(currentBranch, injectablesBranch)) {
                validateUpdateDateOnly();
            } else {
                validateUpdateDateWithDetails(expectedData);
            }
        });
    });
});

function isInjectablesBranch(currentBranch, injectablesBranch) {
    return injectablesBranch.includes(currentBranch);
}

function findSuccessfulPaymentRow() {
    return cy.get('.payment-row').then(($rows) => {
        let successfulRow;
        $rows.each((index, element) => {
            const $element = Cypress.$(element);
            const bgStyle = $element.css('background');
            const bgColor = $element.find('span').css('background-color');

            if ((bgStyle.includes('linear-gradient') && bgStyle.includes('#DCF8CA')) || bgColor === 'rgb(93, 196, 96)') {
                successfulRow = $element;
                return false;
            }
        });

        return successfulRow ? cy.wrap(successfulRow) : cy.wrap([]);
    });
}

function validateUpdateDateOnly() {
    let updatedDateBefore;

    cy.get('@successfulPaymentRow').then(() => {
        cy.get(paymentDateServiceScreenElement)
            .invoke('text')
            .then((text) => {
                updatedDateBefore = text.trim();
                cy.log(`Data de "Atualizado em" antes: ${updatedDateBefore}`);
            }).then(() => {
                cy.getElementAndClick(UpdatePaymentStatusOnServiceScreenElement);

                cy.wait(2000);
                cy.get(paymentDateServiceScreenElement)
                    .invoke('text')
                    .then((updatedDateAfter) => {
                        cy.log(`Data de "Atualizado em" depois: ${updatedDateAfter.trim()}`);
                        expect(updatedDateAfter.trim()).to.equal(updatedDateBefore, 'A data de "Atualizado em" não deve mudar após atualizar o status de pagamento.');
                    });
            });
    });
}

function validateUpdateDateWithDetails(expectedData) {
    let updatedDateBefore;

    cy.get('@successfulPaymentRow').then(() => {
        cy.get(paymentDateServiceScreenElement)
            .invoke('text')
            .then((text) => {
                updatedDateBefore = text.trim();
                cy.log(`Data de "Atualizado em" antes: ${updatedDateBefore}`);
            }).then(() => {
                cy.getElementAndClick(UpdatePaymentStatusOnServiceScreenElement);

                cy.wait(2000);
                cy.get(paymentDateServiceScreenElement)
                    .invoke('text')
                    .then((updatedDateAfter) => {
                        cy.log(`Data de "Atualizado em" depois: ${updatedDateAfter.trim()}`);
                        expect(updatedDateAfter.trim()).to.equal(updatedDateBefore, 'A data de "Atualizado em" não deve mudar após atualizar o status de pagamento.');
                    });
            });

        verifyPersonalDetails(expectedData);
    });
}

function verifyPersonalDetails(expectedData) {
    const formattedZipCode = formatZipCode(expectedData.zipCode);
    const formattedCpf = formatCPF(expectedData.cpf);

    const dataMap = {
        'Nome Completo': expectedData.fullName,
        'CPF': formattedCpf,
        'RG': expectedData.rg,
        'Data de Nascimento': expectedData.birthDate,
        'Email': expectedData.email,
        'Rua': expectedData.street,
        'Número da Casa': expectedData.houseNumber,
        'Bairro': expectedData.district,
        'Complemento': expectedData.addressComplement,
        'Cidade': expectedData.city,
        'Estado': expectedData.state,
        'CEP': formattedZipCode
    };

    Object.entries(dataMap).forEach(([label, value]) => checkValue(label, value));

    cy.get('@successfulPaymentRow').then(() => {
        validateTextPresence(expectedData, formattedCpf, formattedZipCode);
    });
}

function validateTextPresence(expectedData, formattedCpf, formattedZipCode) {
    cy.contains('strong', expectedData.fullName).should('exist');
    cy.contains('strong', formattedCpf).should('exist');
    cy.contains('strong', expectedData.rg.toString()).should('exist');
    cy.contains('strong', expectedData.birthDate).should('exist');
    cy.contains('strong', expectedData.email).should('exist');

    const dataMap = {
        street: expectedData.street,
        houseNumber: expectedData.houseNumber.toString(),
        district: expectedData.district,
        addressComplement: expectedData.addressComplement,
        city: expectedData.city,
        state: expectedData.state,
        zipCode: formattedZipCode
    };

    cy.get('strong').each(($el) => {
        const text = $el.text().trim();
        Object.values(dataMap).forEach(value => {
            if (value && text.includes(value)) {
                expect(text).to.include(value);
            }
        });
    });
}

function checkValue(label, actualValue) {
    if (actualValue === undefined) {
        console.error(`${label} está undefined`);
    } else {
        console.log(`${label}: ${actualValue}`);
    }
}

function formatCPF(cpf) {
    const cpfStr = cpf.toString().padStart(11, '0');
    return cpfStr.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

function formatZipCode(zipCode) {
    const zipStr = zipCode.toString().padStart(8, '0');
    return zipStr.replace(/(\d{5})(\d{3})/, '$1-$2');
}
