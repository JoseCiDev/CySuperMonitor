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
    searchBudgetScreenRecipesElement,
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
    parameterSearchBudgetElement: parameterSearchCardBudget,
    cardBudget,
    buttonLinkRecipeScreenServiceProgressElement,
    buttonUnlinkRecipeScreenServiceProgress,
    fieldLinkRecipeElement,
    budgetInProgressElement: budgetInProgressElement,
    buttonView,
    fieldSearchBudgetElement: fieldSearchBudgetElement,
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
    homeMenuElement,
    searchBudgetByBranchElement,
    searchAllBudgetsElement,
    searchButtonElement,
    paymentSelectorInput,
    updateSelectorStatusInput,
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

    cy.get('#customTimeModal')
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
                    cy.getElementAndClick(viewSelectorElement);

                    //clicar na modal que informa cliente nao cadastrado ao acessar atendimentos em andamento
                    cy.wait(3000);//essa espera é necessária porque o backend dispara o evento quando nao tem cliente cadastrado, fiz alguns testes tentando um tempo maior ou menor e quebra. Analisamos o codigo da aplicação e existe uma validação que verifica se o cliente do orçamento está no SM, se não esta ele sincroniza, nessa parte do código tem um timeout de 2 segundos.
                    cy.get('body').then(($body) => {
                        if ($body.find('.bootbox .modal-footer .btn').length > 0) {
                            cy.getElementAndClick('.bootbox .modal-footer .btn');
                        }
                    })

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
                                            cy.getElementAndClick(viewSelectorElement);
                                        }
                                    });
                            } else {
                                cy.log(`Botão de atualização não visível para o orçamento ${index}, visualizando...`);
                                cy.getElementAndClick(viewSelectorElement);
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

        // Se um número de orçamento específico foi fornecido, apenas visualize diretamente
        if (orcamentoNumber) {
            cy.getElementAndType({ [fieldSearchBudgetElement]: orcamentoNumber });
            cy.getElementAndClick(searchAllBudgetsElement, searchButtonElement);
            // Visualiza diretamente o orçamento específico sem verificar o status
            cy.getElementAndClick(`:nth-child(2) > :nth-child(8) > .visualizarFvc > .fa`);
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

    cy.getElementAndClick(setUpPhoneContactElement);

    return cy.get('body')
        .then($body => {
            if ($body.find(telephoneContactConfigurationModalElement).length > 0) {
                cy.log('Modal de configuração de contatos foi apresentada.');

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


Cypress.Commands.add('payBudget', (options: {
    paymentMethod?: PayBudgetPaymentMethod,
    telephone?: number;
    email?: string;
    fullName?: string;
    birthDate?: string;
    cpf?: number;
    rg?: number;
    useRegisteredAddress?: boolean;
    zipCode?: number;
    state?: PayBudgetState,
    city?: string;
    district?: string;
    street?: string;
    houseNumber?: number;
    addressComplement?: string;
    isMyDeliveryAddress?: boolean;
    cardholderName?: string;
    cpfCnpj?: number;
    cardNumber?: number;
    expirationMonth?: PayBudgetCreditCardExpirationMonth;
    expirationYear?: PayBudgetCreditCardExpirationYear;
    securityCode?: number;
    installments?: BudgetInstallments;
} = {}): ValidationResult => {

    const {
        paymentMethod = dataParameters.Budget.payment.paymentMethod,
        telephone = dataParameters.Budget.payment.telephone,
        email = dataParameters.Budget.payment.email,
        fullName = dataParameters.Budget.payment.fullName,
        birthDate = dataParameters.Budget.payment.birthDate,
        cpf = dataParameters.Budget.payment.cpf,
        rg = dataParameters.Budget.payment.rg,
        useRegisteredAddress = dataParameters.Budget.payment.useRegisteredAddress,
        zipCode = dataParameters.Budget.payment.zipCode,
        state = dataParameters.Budget.payment.state,
        city = dataParameters.Budget.payment.city,
        district = dataParameters.Budget.payment.district,
        street = dataParameters.Budget.payment.street,
        houseNumber = dataParameters.Budget.payment.houseNumber,
        addressComplement = dataParameters.Budget.payment.addressComplement,
        isMyDeliveryAddress = dataParameters.Budget.payment.isMyDeliveryAddress,
        cardholderName = dataParameters.Budget.payment.cardholderName,
        cpfCnpj = dataParameters.Budget.payment.cpfCnpj,
        cardNumber = dataParameters.Budget.payment.cardNumber,
        expirationMonth = dataParameters.Budget.payment.expirationMonth,
        expirationYear = dataParameters.Budget.payment.expirationYear,
        securityCode = dataParameters.Budget.payment.securityCode,
        installments = dataParameters.Budget.payment.installments,
    } = options;

    const selectOption = (element: string, value: string | number) => {
        if (value) {
            cy.get(element).select(value.toString());
        }
    };
    const handleAromaSelection = () => {
        cy.get('body').then(($body) => {
            if ($body.find('select.aroma').length > 0) {
                cy.get('select.aroma').each(($aromaSelect, index) => {
                    const aromasDisponiveis = [
                        PayBudgetSelectAroma.Abacaxi,
                        PayBudgetSelectAroma.Cacau,
                        PayBudgetSelectAroma.Laranja,
                        PayBudgetSelectAroma.Limao,
                        PayBudgetSelectAroma.Morango,
                        PayBudgetSelectAroma.SemAroma,
                        PayBudgetSelectAroma.Uva
                    ];
                    const aromaSelecionado = faker.helpers.arrayElement(aromasDisponiveis);
                    cy.wrap($aromaSelect).select(aromaSelecionado);
                    cy.log(`Aroma selecionado para o select ${index + 1}: ${aromaSelecionado}`);
                });
            } else {
                cy.log('Nenhum campo de seleção de aroma encontrado.');
            }
        });
    };
    const handleCreditCardPayment = () => {
        cy.getElementAndType({ [cardholderNameElement]: cardholderName });
        cy.getElementAndType({ [cpfCnpjElement]: cpfCnpj });
        cy.getElementAndType({ [cardNumberElement]: cardNumber });
        selectOption(expirationMonthElement, expirationMonth);
        selectOption(expirationYearElement, expirationYear);
        cy.getElementAndType({ [securityCodeElement]: securityCode });
        selectOption(installmentsElement, installments);
    };

    cy.get(accessSelfcheckoutElement)
        .invoke('removeAttr', 'target')
        .then(($el) => {
            const href = $el.prop('href');
            cy.visit(href);
        });
    cy.url().should('include', dataParameters.env.BASE_URL_SC);
    
    handleAromaSelection();

    cy.getElementAndClick(goToPaymentElement);
    

    cy.getElementAndClick(paymentMethod);
    cy.getElementAndClick(makePaymentUsingTheSelectedPaymentMethodElement);

    cy.getElementAndType({ [telephoneElement]: telephone });
    cy.getElementAndType({ [emailElement]: email });
    cy.getElementAndType({ [fullNameElement]: fullName });
    cy.getElementAndType({ [birthDateElement]: birthDate });
    cy.getElementAndType({ [cpfElement]: cpf });
    cy.getElementAndType({ [rgElement]: rg });
    cy.getElementAndClick(useRegisteredAddressElement);

    cy.getElementAndType({ [zipCodeElement]: zipCode });
    selectOption(stateElement, state);
    cy.getElementAndType({ [cityElement]: city });
    cy.getElementAndType({ [districtElement]: district });
    cy.getElementAndType({ [streetElement]: street });
    cy.getElementAndType({ [houseNumberElement]: houseNumber });
    cy.getElementAndType({ [addressComplementElement]: addressComplement });
    if (isMyDeliveryAddress) {
        cy.getElementAndClick(isMyDeliveryAddressElement);
    }

    if (paymentMethod !== PayBudgetPaymentMethod.Pix) {
        handleCreditCardPayment();
    }

    cy.getElementAndClick(makePaymentElement);

    if (paymentMethod === PayBudgetPaymentMethod.CreditCard) {
        cy.getElementAndClick('.success-container-info');
    }

    return cy.wrap({ success: 'Para cartão de crédito o pedido é pago. Para pix é gerado qrcode.' });
});
