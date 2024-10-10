/// <reference path="../cypress.d.ts" />


import {
    elements as el,
    faker,
    dataParameters,
    SearchRecipe,
    PaymentMethod,
    AromaSachet,
    PaymentStatus,
    ShippingMethod,
    CapsuleAroma,
    BudgetClosingChannel,
    ElementTypeAndValueOpcional,
    ElementControl,
    ValidationResult,
    BudgetHasRecipe,

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
        timeTreatment = dataParameters.Budget.timeTreatment
    } = options;
    cy.getElementAndClick(insertTreatmentTime);

    cy.get('#customTimeModal')
        .should('be.visible')
        .then(() => {
            cy.getElementAndType({ [standardTreatmentTime]: timeTreatment.toString() });
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
    function checkPaymentStatus(index: number) {
        const paymentSelector = paymentSelectorInput(index);
        const updateSelectorStatus = updateSelectorStatusInput(index);
        const viewSelector = viewSelectorInput(index);

        cy.get(paymentSelector)
            .invoke('text')
            .then((paymentStatus) => {
                const trimmedStatus = paymentStatus.trim();

                if (trimmedStatus.includes('Inativo')) {
                    cy.log(`Orçamento ${index} está inativo, verificando o próximo...`);
                    checkPaymentStatus(index + 1);

                } else if (trimmedStatus.includes('Sem pagamento')) {
                    cy.log(`Orçamento ${index} sem pagamento. Visualizando...`);
                    cy.getElementAndClick(viewSelector);

                } else if (trimmedStatus.includes('Aguardando')) {
                    cy.get(updateSelectorStatus)
                        .then(($element) => {
                            if ($element.is(':visible')) {
                                cy.log(`Atualizando status do orçamento ${index}...`);
                                cy.getElementAndClick(updateSelectorStatus);
                                cy.get(paymentSelector)
                                    .invoke('text')
                                    .then((newStatus) => {
                                        if (newStatus.trim().includes('Pago')) {
                                            cy.log(`Orçamento ${index} foi pago com sucesso, verificando o próximo...`);
                                            checkPaymentStatus(index + 1);
                                        } else {
                                            cy.log(`Orçamento ${index} ainda não foi pago, visualizando...`);
                                            cy.getElementAndClick(viewSelector);
                                        }
                                    });
                            } else {
                                cy.log(`Botão de atualização não visível para o orçamento ${index}, visualizando...`);
                                cy.getElementAndClick(viewSelector);
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

    //buscando por um orçamento
    function searchBudgetByBranch() {
        cy.getElementAndClick(homeMenuElement);
        // cy.getElementAndType({ [fieldSearchBudgetElement]: dataParameters.Budget.searchBudgetByNumber });
        cy.getElementAndType({ [searchBudgetByBranchElement]: dataParameters.Budget.searchBudgetByBranch });
        cy.getElementAndClick(searchAllBudgetsElement, searchButtonElement);
        checkPaymentStatus(2);
    }
    searchBudgetByBranch();
});

// Lógica para vincular a primeira receita disponível
function linkFirstAvailableRecipe() {
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

// Função auxiliar para fechar a modal e iniciar a importação de nova receita
function closeModalAndImportNewRecipe(buttonLink: string) {

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

// Função para reabrir o modal e vincular a receita importada
function reopenLinkModalAndLinkRecipe(buttonLink: string, recipeNumber: number) {
    cy.getElementAndClick(expandSideMenuElement, menuServices, servicesInProgress);

    cy.viewBudget();

    cy.getElementAndClick(buttonLink, btnSuccessModalElement);

    const cleanedRecipeNumber = recipeNumber.toString().replace(/\D/g, '');
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

// Comando para vincular receitas no orçamento
Cypress.Commands.add('linkBudgetRecipe', (buttonLink: string, numberRecipe?: number) => {
    cy.get(buttonLinkRecipeScreenServiceProgressElement)
        .then(($button) => {
            if ($button.is(':disabled')) {
                cy.log('Receita já vinculada. Nenhuma nova receita será vinculada ou importada.');
            } else {
                cy.getElementAndClick(buttonLinkRecipeScreenServiceProgressElement);
                cy.getElementAndClick(btnSuccessModalElement);

                cy.get(modalLinkRecipeElement, { timeout: 20000 })
                    .should('be.visible')
                //abc
                if (dataParameters.Budget.recipeNumber !== undefined) {

                    // cy.getElementAutocompleteTypeAndClick(
                    //     { [fieldLinkRecipeElement]: dataParameters.Budget.recipeNumber.toString() },
                    //     suggestionAutocomplete
                    // );

                    cy.getElementAndType({ [fieldLinkRecipeElement]: dataParameters.Budget.recipeNumber })
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


function checkElement(selector: string, condition?: boolean, isSpecialCase?: boolean) {
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

function typeIfExists(selector: string, value?: string | number) {
    const stringValue = value?.toString();

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

function selectIfExists(selector: string, value?: string) {
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

Cypress.Commands.add('fillOrcamentistaAndAtendente', (options: {
    budgetist?: string,
    budgetAttendant?: string,
} = {}): ValidationResult => {

    const {
        budgetist = dataParameters.Budget.budgetist,
        budgetAttendant = dataParameters.Budget.budgetAttendant
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
        customerContactPhoneNumber = dataParameters.Budget.customerContactPhoneNumber,
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
    budgetist?: string,
    budgetAttendant?: string,
    paymentMethod?: PaymentMethod,
    chosenBudget?: string,
    timeRepetition?: number,
    budgetClosingChannel?: BudgetClosingChannel,
    sendTrackingEmail?: boolean,
    releaseBudgetForInclusion?: boolean,
    releaseBudgetCashier?: boolean,
    cashierObservation?: string,
    detailedSale?: boolean,
    paymentStatus?: PaymentStatus,
    address?: string,
    expeditionObservation?: string,
    shippingMethod?: ShippingMethod,
    juntocomBudget?: string,
    promisedTo?: Date,
    aromaSachet?: AromaSachet,
    capsuleAroma?: CapsuleAroma,
    generalObservation?: string,
    budgetHasRecipe?: BudgetHasRecipe,
    urgentBudget?: boolean,
    automaticMessageTriggering?: boolean,
} = {}): ValidationResult => {

    // Desestruturação com fallback para dataParameters
    const {
        budgetist = dataParameters.Budget.budgetist,
        budgetAttendant = dataParameters.Budget.budgetAttendant,
        paymentMethod = dataParameters.Budget.paymentMethod,
        chosenBudget = dataParameters.Budget.chosenBudget,
        timeRepetition = dataParameters.Budget.timeRepetition,
        budgetClosingChannel = dataParameters.Budget.budgetClosingChannel,
        sendTrackingEmail = dataParameters.Budget.sendTrackingEmail,
        releaseBudgetForInclusion = dataParameters.Budget.releaseBudgetForInclusion,
        releaseBudgetCashier = dataParameters.Budget.releaseBudgetCashier,
        cashierObservation = dataParameters.Budget.cashierObservation,
        detailedSale = dataParameters.Budget.detailedSale,
        paymentStatus = dataParameters.Budget.paymentStatus,
        address = dataParameters.Budget.address,
        expeditionObservation = dataParameters.Budget.expeditionObservation,
        shippingMethod = dataParameters.Budget.shippingMethod,
        juntocomBudget = dataParameters.Budget.juntocomBudget,
        promisedTo = dataParameters.Budget.promisedTo,
        aromaSachet = dataParameters.Budget.aromaSachet,
        capsuleAroma = dataParameters.Budget.capsuleAroma,
        generalObservation = dataParameters.Budget.generalObservation,
        budgetHasRecipe = dataParameters.Budget.budgetHasRecipeElement,
        urgentBudget = dataParameters.Budget.urgentBudget,
        automaticMessageTriggering = dataParameters.Budget.automaticMessageTriggering,

    } = options;


    // Abrir modal de confirmação do orçamento
    cy.getElementAndClick(modalConfirmationBudgetElement);

    // Selecionar método de pagamento
    if (paymentMethod !== undefined) {
        cy.wait(2000);
        cy.getSelectOptionByValue([{ element: paymentMethodElement, value: paymentMethod }]);
    };

    // Marcar checkbox para o orçamento escolhido
    if (chosenBudget !== undefined) {
        cy.getElementAndCheck([{ element: chosenBudget }]);
    };

    // Inserir tempo de repetição
    if (timeRepetition !== undefined) {
        cy.getElementAndType({ [insertRepeatTime]: timeRepetition });
    };

    //salvando dados informados
    cy.getElementAndClick(saveDataConfirmationBudget);

    // Selecionar canal de fechamento
    if (budgetClosingChannel !== undefined) {
        selectIfExists(channelConfirmationBudget, budgetClosingChannel);
    };

    //Enviar e-mail de rastreamento
    if (sendTrackingEmail !== undefined) {
        checkElement(sendEmailTracking, sendTrackingEmail);
    };

    //Liberar orçamento para inclusao
    if (releaseBudgetForInclusion !== undefined) {
        checkElement(releaseBudgetForInclusionElement, releaseBudgetForInclusion, true);
    };

    //Liberar orçamento para caixa
    if (releaseBudgetCashier !== undefined) {
        checkElement(releaseBudgetCashierElement, releaseBudgetCashier);
    };

    // Inserir observação do caixa
    if (cashierObservation !== undefined) {
        typeIfExists(cashierObservationElement, cashierObservation);
    };

    // Marcar se a venda é detalhada
    if (detailedSale !== undefined) {
        checkElement(detailedSaleElement, detailedSale);
    };

    // Marcar se a esta pago ou não pago
    if (paymentStatus !== undefined) {
        cy.getElementAndCheck([{ element: paymentStatus }]);
    };

    // Selecionar endereço
    if (address !== undefined) {
        cy.getElementAndClick(address);
    };

    // Observação da expedição
    if (expeditionObservation !== undefined) {
        typeIfExists(expeditionObservationElement, expeditionObservation);
    };

    // forma de envio
    if (shippingMethod !== undefined) {
        selectIfExists(shippingMethodElement, shippingMethod);
    };

    // Prometido para
    if (promisedTo) {
        cy.getElementAndClick(promisedToElement);
        cy.wait(500);
        cy.getElementAndClick(promisedToElement);
    };

    // Aroma do sache
    if (aromaSachet) {
        cy.getSelectOptionByValue([{ element: aromaSachetElement, value: aromaSachet }]);
    };

    // Aroma da cápsula
    if (capsuleAroma) {
        cy.getSelectOptionByValue([{ element: capsuleAromaElement, value: capsuleAroma }]);
    };

    // Observações gerais
    if (generalObservation !== undefined) {
        typeIfExists(generalObservationElement, generalObservation);
    };

    // Marcar se o orçamento possui receita, não possui receita ou é uma repetição
    if (budgetHasRecipe !== undefined) {
        cy.getElementAndCheck([{ element: budgetHasRecipeElement, value: budgetHasRecipe }]);
    };

    // Marcar orçamento urgente
    if (urgentBudget !== undefined) {
        checkElement(urgentBudgetElement, urgentBudget);
    };

    // Desmarcar checkbox envio mensagem automática
    if (automaticMessageTriggering !== undefined) {
        cy.get(sendAutomaticBudgetConfirmationMessageElement)
            .uncheck();
    };

    // Confirmar orçamento
    cy.getElementAndClick(PreViewBudget, closePreViewBudget, sendconfirmBudget);

    return cy.wrap({ success: 'Orçamento confirmado com sucesso!' });
});