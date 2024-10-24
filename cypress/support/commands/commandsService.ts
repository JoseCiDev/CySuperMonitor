/// <reference path="../cypress.d.ts" />

import {
    elements as el,
    faker,
    dataParameters,
    SearchRecipe,
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

} from '../../import';

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
    accessServiceMenuThroughPrescriptionImportScreenElement,
    recipeCodeColumnElement,
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

Cypress.Commands.add('insertTimeTreatment', (options: {
    timeTreatment?: string | number,
} = {}): ValidationResult => {

    const {
        timeTreatment = dataParameters.Budget.confirmation.timeTreatment
    } = options;

    cy.getElementAndClick(insertTreatmentTime);

    cy.get(modalTreatmentTime)
        .should('be.visible')
        .then(() => {
            cy.getElementAndType({ [standardTreatmentTime]: timeTreatment });
            cy.getElementAndClick(treatmentTimeModalHeader, saveTimeTreatment)
        });
    return cy.wrap({ success: 'Tempo de tratamento inserido com sucesso.' });
});

Cypress.Commands.add('unlinkBudgetRecipe', (buttonUnlink: string) => {
    cy.getElementAndClick(buttonUnlink, btnSuccessModalElement);
    cy.wait(2000);
    cy.getElementAndClick(modalMessage);;
});

Cypress.Commands.add('changeUsersBudget', (budgetist: string, attendant: string) => {

});

Cypress.Commands.add('viewBudget', () => {
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
        const orcamentoNumber = dataParameters.Budget.confirmation.orcamentoNumberForSearch;
        const filialNumber = dataParameters.Budget.confirmation.filialNumberForSearch;

        cy.getElementAndClick(homeMenuElement);

        if (orcamentoNumber) {
            cy.getElementAndType({ [fieldSearchBudgetElement]: orcamentoNumber });
            cy.getElementAndClick(searchAllBudgetsElement, searchButtonElement);

            cy.getElementAndClick(viewBudgetElement)
                .then(() => {
                    cy.wrap(2)
                        .as('currentBudgetIndex');
                });

        } else {

            if (filialNumber) {
                cy.getElementAndType({ [searchBudgetByBranchElement]: filialNumber });
            }

            cy.getElementAndClick(searchAllBudgetsElement, searchButtonElement);

            checkPaymentStatus(2);
        }
    };

    searchBudgetByBranch();
});



Cypress.Commands.add('linkBudgetRecipe', (buttonLink: string, numberRecipe?: number) => {

    const linkFirstAvailableRecipe = () => {
        cy.get(recipeElementAvailableForLinkingElement)
            .first()
            .click()

        cy.document().then((doc) => {
            const $element = Cypress.$(modalToLinkRecipeElement);

            if ($element.length) {
                cy.log(`Elemento da modal de vincular receita encontrado: ${modalToLinkRecipeElement}`);
                cy.wrap($element)
                    .click({ force: true });
            } else {
                cy.log(`Elemento da modal de vincular receita não encontrado: ${modalToLinkRecipeElement}`);
            }
        });

        cy.document().then((doc) => {
            const $element = Cypress.$(btnSuccessModalElement)
                .filter((index, el) => Cypress.$(el).text().trim() === 'OK');

            if ($element.length) {
                cy.log('OK encontrado, clicando.');
                cy.wrap($element)
                    .click({ force: true });
            } else {
                cy.log('OK não encontrado.');
            }
        });

        cy.wait(1000)

        cy.get(linkedRecipeProgressBarElement, { timeout: 120000 })
            .should('not.be.visible')
            .then(() => {
                cy.document().then((doc) => {
                    const $element = Cypress.$(btnSuccessModalElement)
                        .filter((index, el) => Cypress.$(el).text().trim() === 'OK');
                    cy.wrap($element)
                        .click({ force: true });
                });
            });
    };
    const closeModalAndImportNewRecipe = (buttonLink: string) => {

        cy.document().then((doc) => {
            const btnCloseModal = doc.querySelector(closeModalLinkRecipeElement) as HTMLElement;
            if (btnCloseModal) {
                cy.wrap(btnCloseModal)
                    .click({ force: true });
            } else {
                cy.log('Botão de fechamento da modal de vincular receitas não encontrado.');
            }
        });

        cy.document().then((doc) => {
            const feedbackButton = doc.querySelector(feedbackMessageElement) as HTMLElement;
            if (feedbackButton) {
                cy.wrap(feedbackButton)
                    .click({ force: true });
            } else {
                cy.log('Botão de fechamento do aviso não encontrado.');
            }
        });

        cy.getElementAndClick(homeMenuElement);

        cy.document().then((doc) => {
            const menuRecipe = doc.querySelector(menuRecipesElement) as HTMLElement;
            if (menuRecipe) {
                cy.wrap(menuRecipe)
                    .click({ force: true });
            } else {
                cy.log('Botão de fechamento do toast não encontrado.');
            }
        });

        cy.document().then((doc) => {
            const menuImportRecipes = doc.querySelector(menuImportRecipesElement) as HTMLElement;
            if (menuImportRecipes) {
                cy.wrap(menuImportRecipes)
                    .click({ force: true });
            } else {
                cy.log('Botão de fechamento do toast não encontrado.');
            }
        });

        cy.wait(1000);

        cy.importRecipe().then(() => {
            cy.getElementAndClick(accessServiceMenuThroughPrescriptionImportScreenElement);

            cy.wait(500)
            cy.getElementAndClick(accessServiceMenuThroughPrescriptionImportScreenElement);

            cy.get(recipeCodeColumnElement, { timeout: 10000 })
                .should('be.visible')
                .then(($td) => {
                    const recipeNumber = $td.text().trim().replace(/\D/g, '');
                    cy.log(`Número da receita importada: ${recipeNumber}`);
                    reopenLinkModalAndLinkRecipe(buttonLink, recipeNumber);
                });
        });
    }
    const reopenLinkModalAndLinkRecipe = (buttonLink: string, recipeNumber: number) => {
        cy.getElementAndClick(expandSideMenuElement, menuServices, servicesInProgress);

        cy.viewBudget();

        cy.getElementAndClick(buttonLink, btnSuccessModalElement);

        const cleanedRecipeNumber = String(recipeNumber).replace(/\D/g, '');
        cy.getElementAndType({ [fieldLinkRecipeElement]: cleanedRecipeNumber })
            .then(() => {
                cy.get(suggestionsAutocompleteElement, { timeout: 20000 })
                    .should('be.visible')
                    .then(() => {
                        cy.get(fieldLinkRecipeElement)
                            .type('{downarrow}')
                            .type('{enter}');
                    });
            });

        cy.document().then((doc) => {
            const $element = Cypress.$(modalToLinkRecipeElement);

            if ($element.length) {
                cy.log(`Elemento encontrado: ${modalToLinkRecipeElement}`);
                cy.wrap($element)
                    .click({ force: true });
            } else {
                cy.log(`Elemento não encontrado: ${modalToLinkRecipeElement}`);
            }
        });

        cy.wait(1000);

        cy.document().then((doc) => {
            const $element = Cypress.$(btnSuccessModalElement)
                .filter((index, el) => Cypress.$(el).text().trim() === 'OK');

            if ($element.length) {
                cy.log('Botão encontrado, clicando.');
                cy.wrap($element)
                    .click({ force: true });
            } else {
                cy.log('Botão não encontrado.');
            }
        });

        cy.get(successfullyLinkedRecipesProgressBarElement, { timeout: 120000 })
            .should('not.be.visible')
            .then(() => {
                cy.document().then((doc) => {
                    const modalContent = doc.querySelector('.modal-content');

                    if (modalContent) {
                        cy.log('Modal encontrada.');

                        const $okButton = Cypress.$(modalContent).find('button.btn.btn-primary')
                            .filter((index, el) => Cypress.$(el).text().trim() === 'OK');

                        if ($okButton.length) {
                            cy.log('Botão encontrado, fechando a modal.');
                            cy.wrap($okButton)
                                .click({ force: true });
                        } else {
                            cy.log('Botão não encontrado.');
                        }
                    } else {
                        cy.log('Modal não encontrada.');
                    }
                });
            });

        cy.wait(1000);

        cy.get(successfullyLinkedRecipesProgressBarElement, { timeout: 120000 })
            .should('not.be.visible')
            .then(() => {
                cy.document().then((doc) => {
                    const $element = Cypress.$(btnModalMessage)
                        .filter((index, el) => Cypress.$(el).text().trim() === 'OK');

                    if ($element.length) {
                        cy.log('Botão encontrado, clicando.');
                        cy.wrap($element)
                            .click({ force: true });
                    } else {
                        cy.log('Botão não encontrado.');
                    }
                });
            })

        cy.log(`Receita vinculada com sucesso!`);
    }

    cy.get(buttonLinkRecipeScreenServiceProgressElement)
        .then(($button) => {
            if ($button.is(':disabled')) {
                cy.log('Receita já vinculada. Nenhuma nova receita será vinculada ou importada.');
            } else {
                cy.getElementAndClick(buttonLinkRecipeScreenServiceProgressElement);
                cy.getElementAndClick(btnSuccessModalElement);

                cy.get(modalLinkRecipeElement, { timeout: 20000 })
                    .should('be.visible')
                if (dataParameters.Budget.confirmation.recipeNumber !== undefined) {


                    cy.getElementAndType({ [fieldLinkRecipeElement]: dataParameters.Budget.confirmation.recipeNumber })
                        .then(() => {
                            cy.get(suggestionsAutocompleteElement, { timeout: 20000 })
                                .should('be.visible')
                                .then(() => {
                                    cy.get(fieldLinkRecipeElement)
                                        .type('{downarrow}')
                                        .type('{enter}');
                                });
                        });

                    cy.document().then((doc) => {
                        const $element = Cypress.$(modalToLinkRecipeElement);

                        if ($element.length) {
                            cy.log(`Elemento encontrado: ${modalToLinkRecipeElement}`);
                            cy.wrap($element)
                                .click({ force: true });
                        } else {
                            cy.log(`Elemento não encontrado: ${modalToLinkRecipeElement}`);
                        }
                    });

                    cy.wait(1000);

                    cy.document().then((doc) => {
                        const $element = Cypress.$(btnSuccessModalElement)
                            .filter((index, el) => Cypress.$(el).text().trim() === 'OK');

                        if ($element.length) {
                            cy.log('Botão encontrado, clicando.');
                            cy.wrap($element)
                                .click({ force: true });
                        } else {
                            cy.log('Botão não encontrado.');
                        }
                    });

                    cy.get(successfullyLinkedRecipesProgressBarElement, { timeout: 120000 })
                        .should('not.be.visible')
                        .then(() => {
                            cy.document().then((doc) => {
                                const modalContent = doc.querySelector('.modal-content');

                                if (modalContent) {
                                    cy.log('Modal encontrada.');

                                    const $okButton = Cypress.$(modalContent).find('button.btn.btn-primary')
                                        .filter((index, el) => Cypress.$(el).text().trim() === 'OK');

                                    if ($okButton.length) {
                                        cy.log('Botão encontrado, fechando a modal.');
                                        cy.wrap($okButton)
                                            .click({ force: true });
                                    } else {
                                        cy.log('Botão não encontrado.');
                                    }
                                } else {
                                    cy.log('Modal não encontrada.');
                                }
                            });
                        });

                    cy.wait(1000);

                    cy.get(successfullyLinkedRecipesProgressBarElement, { timeout: 120000 })
                        .should('not.be.visible')
                        .then(() => {
                            cy.document().then((doc) => {
                                const $element = Cypress.$(btnModalMessage)
                                    .filter((index, el) => Cypress.$(el).text().trim() === 'OK');

                                if ($element.length) {
                                    cy.log('Botão encontrado, clicando.');
                                    cy.wrap($element)
                                        .click({ force: true });
                                } else {
                                    cy.log('Botão não encontrado.');
                                }
                            });
                        })

                    cy.log(`Receita vinculada com sucesso!`);
                } else {
                    cy.get(modalLinkRecipeElement, { timeout: 20000 })
                        .should('be.visible')
                        .then(() => {
                            const $vincularButtons = Cypress.$(recipeElementAvailableForLinkingElement);
                            if ($vincularButtons.length > 0) {
                                cy.log('Receita encontrada, irá vincular com a primeira receita.');
                                linkFirstAvailableRecipe();
                            } else {
                                cy.log('Receita não encontrada, irá fechar a modal e importar uma receita.');
                                closeModalAndImportNewRecipe(buttonLink);
                            }
                        });
                }
            }
        });
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
    address?: string,
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
        addressSelector: address,
        expeditionObservationSelector: expeditionObservationElement,
        shippingMethodSelector: shippingMethodElement,
        promisedToSelector: promisedToElement,
        aromaSachetSelector: aromaSachetElement,
        capsuleAromaSelector: capsuleAromaElement,
        generalObservationSelector: generalObservationElement,
        urgentBudgetSelector: urgentBudgetElement
    };

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
    const typeIfExists = (selector: string, value?: string | number) => {
        const stringValue = String(value);

        if (stringValue) {
            cy.get(selector, { timeout: 20000 })
                .then($input => {
                    if ($input.length > 0) {
                        cy.wrap($input.first())
                            .type(stringValue, { force: true });
                    } else {
                        cy.log(`Elemento ${selector} não encontrado, portanto, não será possível inserir o valor.`);
                    }
                });
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
            typeIfExists(selectors.cashierObservationSelector, cashierObservation);
        };

        if (detailedSale !== undefined) {
            checkElement(selectors.detailedSaleSelector, detailedSale);
        };

        if (paymentStatus !== undefined) {
            cy.getElementAndCheck([{ element: paymentStatus }]);
        };

        if (address !== undefined) {
            cy.get(selectors.addressSelector, { timeout: 10000 })
                .then(($addressElement) => {
                    if ($addressElement.length > 0) {
                        cy.getElementAndClick(selectors.addressSelector);
                    } else {
                        throw new Error('Não há endereço disponível para confirmação do orçamento.');
                    }
                });
        }

        if (expeditionObservation !== undefined) {
            typeIfExists(selectors.expeditionObservationSelector, expeditionObservation);
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
            typeIfExists(selectors.generalObservationSelector, generalObservation);
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

    return cy.wrap({ success: 'Orçamento confirmado com sucesso!' });
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
        selectOption(expirationMonthElement, getRandomValue(expirationMonth));
        selectOption(expirationYearElement, getRandomValue(expirationYear));
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
