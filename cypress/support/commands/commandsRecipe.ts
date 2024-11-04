/// <reference types="cypress" />
/// <reference path="../cypress.d.ts" />

import {
    elements as el,
    faker,
    dataParameters,
    SearchRecipe,
    mount,
    ImportRecipe,
    CheckAndThrowError,
    RecipePendingFilter,
    Messages,
    ValidationResult,
    validationMessages,
    RecipeCluster,
    RecipeReceiptChannel,
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
    patientContactModal,
    contactPhone,
    applySelectedContact,
    recipeStatusInput,
    deleteRecipeElement,
    reloadPageButtonElement,
    modalCloneRecipeElement,
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
    treatmentTimeModalHeader,
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

Cypress.Commands.add('searchRecipe', (options: {
    initialDate?: string,
    finalDate?: string,
    cluster?: RecipeCluster,
    channelReceipt?: RecipeReceiptChannel,
    recipeNumber?: number,
    patient?: string,
    prescriber?: string,
    budget?: number,
    branch?: string,
    lastModifier?: string,
    budgetist?: string,
    attendantResponsibleRecipes?: string,
    pendency?: string,
} = {}): ValidationResult => {

    const {
        initialDate = dataParameters.Recipe.search.initialDate,
        finalDate = dataParameters.Recipe.search.finalDate,
        cluster = dataParameters.Recipe.search.cluster,
        channelReceipt = dataParameters.Recipe.search.channelReceipt,
        recipeNumber = dataParameters.Recipe.search.recipeNumber,
        patient = dataParameters.Recipe.search.patient,
        prescriber = dataParameters.Recipe.search.prescriber,
        budget = dataParameters.Recipe.search.budget,
        branch = dataParameters.Recipe.search.branch,
        lastModifier = dataParameters.Recipe.search.lastModifier,
        budgetist = dataParameters.Recipe.search.budgetist,
        attendantResponsibleRecipes = dataParameters.Recipe.search.attendantResponsibleRecipes,
        pendency = dataParameters.Recipe.search.pendency,
    } = options;

    cy.getElementAndClick(recipeSearchModal);
    cy.wait(2000);

    if (initialDate) {
        cy.getElementAndType({ [filterDateStartSearchRecipesElement]: initialDate });
    }

    if (finalDate) {
        cy.getElementAndType({ [filterEndDateSearchRecipesElement]: finalDate });
    }

    if (cluster) {
        cy.get(clusterSearchElement)
            .type(cluster)
            .type('{downarrow}')
            .type('{enter}');
    }

    if (pendency) {
        cy.getSelectOptionByValue([{ element: filterPendenciasSearchElement, value: pendency }]);
    }

    if (channelReceipt) {
        cy.getSelectOptionByValue([{ element: channelReceiptSearchElement, value: channelReceipt }]);
    }

    if (recipeNumber) {
        cy.getElementAndType({ [recipeSearchElement]: recipeNumber });
    }

    if (patient) {
        cy.getElementAutocompleteTypeAndClick(
            { [patientSearchElement]: patient },
            suggestionAutocomplete
        )
    }

    if (prescriber) {
        cy.getElementAutocompleteTypeAndClick(
            { [prescriberSearchElement]: prescriber },
            suggestionAutocomplete
        )
    }

    if (budget) {
        cy.getElementAndType({ [searchBudgetScreenRecipesElement]: `${budget} ${branch}` })
            .type('{downarrow}')
            .type('{enter}');
    }

    if (lastModifier) {
        cy.getElementAutocompleteTypeAndClick(
            { [lastModifierSearchElement]: lastModifier },
            suggestionAutocomplete
        )
    }

    if (budgetist) {
        cy.getElementAutocompleteTypeAndClick(
            { [budgetistSearchElement]: budgetist },
            suggestionAutocomplete
        )
    }

    if (attendantResponsibleRecipes) {
        cy.getElementAutocompleteTypeAndClick(
            { [attendantResponsibleSearchElement]: attendantResponsibleRecipes },
            suggestionAutocomplete
        )
    }

    cy.getElementAndClick(buttonSearchRecipesElement);

    cy.captureRecipeDetails(recipeCodeColumnElement);

    return cy.wrap({ success: `Busca de receita realizada com sucesso.` });
});

Cypress.Commands.add('viewRecipe', (
    openModalviewRecipe,
    tabs = {}
) => {

    const {
        tabPdfViewRecipes,
        tabOriginalViewRecipes,
        internalObservationsTabViewRecipes,
        tabInformationFcertaViewRecipes,
        rulerViewRecipes,
        closeViewRecipes
    } = tabs;

    cy.getElementAndClick(openModalviewRecipe);

    if (tabPdfViewRecipes) cy.getElementAndClick(tabPdfViewRecipes);
    if (tabOriginalViewRecipes) cy.getElementAndClick(tabOriginalViewRecipes);
    if (internalObservationsTabViewRecipes) cy.getElementAndClick(internalObservationsTabViewRecipes);
    if (tabInformationFcertaViewRecipes) cy.getElementAndClick(tabInformationFcertaViewRecipes);
    if (rulerViewRecipes) cy.getElementAndClick(rulerViewRecipes);

    if (closeViewRecipes) cy.getElementAndClick(closeViewRecipes);
});

Cypress.Commands.add('cloneRecipe', (cloneRecipeElement: string, options: {
    cloneRecipeWithPharmaceuticalObservation?: boolean,
} = {}): ValidationResult => {
    const {
        cloneRecipeWithPharmaceuticalObservation = dataParameters.Recipe.clone.cloneRecipeWithPharmaceuticalObservation,
    } = options;

    cy.getElementAndClick(cloneRecipeElement);

    cy.get(modalCloneRecipeElement, { timeout: 20000 })
        .should('be.visible')
        .then(() => {
            cy.get(clonePharmaceuticalNotes, { timeout: 20000 }).then(($checkbox) => {
                if (cloneRecipeWithPharmaceuticalObservation) {

                    if (!$checkbox.is(':checked')) {
                        cy.wrap($checkbox).check({ force: true });
                    }
                } else {
                    cy.wrap($checkbox).uncheck({ force: true });
                }
            });

            cy.getElementAndClick(btnSuccessModalElement);
        });

    cy.wait(1000);
    cy.getElementAndClick(btnModalMessage);

    cy.captureRecipeDetails(recipeCodeColumnElement).then((clonedRecipeNumber) => {
        cy.searchRecipe({ recipeNumber: clonedRecipeNumber });
    });

    return cy.wrap({ success: `Receita clonada com sucesso.` });
});

Cypress.Commands.add('deleteRecipe', (excluir: string): void => {
    cy.get(deleteRecipeElement, { timeout: 50000 })
        .eq(0)
        .click({ force: true });

    cy.getElementAndClick(btnModalMessage, modalMessage)
});

Cypress.Commands.add('insertPharmaceuticalObservation', (accessPharmaceuticalObservations: string, passwordRecipe: string, textNote: string): void => {
    cy.getElementAndClick(accessPharmaceuticalObservations, tabAddPharmaceuticalObservations);
    cy.getElementAndType({ [passwordPharmaceuticalObservations]: passwordRecipe },);
    cy.getElementAndType({ [textPharmaceuticalObservations]: textNote });
    cy.getElementAndClick('#modal_receita_add_obs', btnModalMessage);
    cy.wait(1000);
    cy.getElementAndClick(modalMessage, closeModalPharmaceuticalObservations)
});

Cypress.Commands.add('deletePharmaceuticalObservation', (accessPharmaceuticalObservations: string): void => {
    cy.getElementAndClick(accessPharmaceuticalObservations, tabDeletePharmaceuticalObservations, deletePharmaceuticalObservations, btnModalMessage);
    cy.wait(1000);
    cy.getElementAndClick(modalMessage, closeModalPharmaceuticalObservations)
});



Cypress.Commands.add('CreateTechnicalDoubt', (accessingDoubtsTechnical: string, category: string, text: string, responsibleResponseDoubtTechnical: string): void => {
    cy.getElementAndClick(accessingDoubtsTechnical, containerCategoryTechnicalQuestions);

    cy.get(select, { timeout: 20000 })
        .type(`${category}{enter}`);

    cy.getElementAndType({ [textDoubtsTechnical]: text });
    cy.getElementAndClick(containerCollaborators);

    cy.get(responsibleAnswers, { timeout: 20000 })
        .type(`${responsibleResponseDoubtTechnical}{enter}`);

    cy.getElementAndClick(sendQuestionsTechnical, btnModalMessage, modalMessage, closeModalDoubtsTechnical, modalMessage);
});

Cypress.Commands.add('updateModalTechnicalQuestion', (update: string): void => {
    cy.getElementAndClick(accessDoubtsTechnical);

    cy.get(update)
        .should('not.be.disabled')
        .as('buttonUpdate')
        .click();

    cy.getElementAndClick('@buttonUpdate', closeModalDoubtsTechnical);
});


// Cypress.Commands.add('changeResponsibleDoubtTechinical', (accessingDoubtsTechnical: string, responsibleResponseDoubtTechnical: string): void => {
//     cy.getElementAndClick(accessingDoubtsTechnical);

//     let allSolved = true;

//     cy.get('#chatDuvTec .groupContainer')
//         .each(($doubt) => {
//             const resolved = $doubt.find('i.fa.fa-check').length > 0;

//             if (!resolved) {
//                 allSolved = false;
//                 return false;
//             }
//         });

//     if (allSolved) {
//         cy.log('Excelente! Todas as questões técnicas foram solucionadas. Não há necessidade de alterar o responsável pela resposta.');
//         return;
//     }

//     let name;
//     cy.get(responsibleCurrentResponseQuestionsTechnical, { timeout: 20000 })
//         .should('exist')
//         .invoke('attr', 'title')
//         .then((title) => {
//             const matches = title.match(/\d+ - (.+?) \(.+?\)/);

//             if (matches && matches.length > 1) {
//                 name = matches[1];
//                 cy.log(name);
//                 if (name !== dataParameters.Recipe.responsibleCurrentAnswerTechnicalQuestion) {
//                     dataParameters.Recipe.search.responsibleCurrentAnswerTechnicalQuestion = name;
//                 } else {
//                     cy.log('O novo responsável é o mesmo que o atual');
//                 }
//             } else {
//                 cy.log('Nome não encontrado');
//             }
//         });

//     if (responsibleResponseDoubtTechnical === dataParameters.Recipe.search.responsibleCurrentAnswerTechnicalQuestion) {
//         cy.log('O novo responsável é o mesmo que o atual');

//     }
//     cy.getElementAndClick(containerResponsibleResponseQuestionsTechnical)
//     cy.get(responsibleAnswers, { timeout: 20000 })
//         .type(`${responsibleResponseDoubtTechnical}{enter}`);
//     cy.getElementAndClick(modalMessage, closeModalDoubtsTechnical);
// });

Cypress.Commands.add('markDoubtTechnicalSolved', (accessingDoubtsTechnical: string): void => {
    cy.getElementAndClick(accessingDoubtsTechnical);

    let doubtResolved = false;
    cy.get('#chatDuvTec', { timeout: 20000 })
        .then(() => {
            cy.get('.groupContainer')
                .each(($doubt, index) => {

                    if (doubtResolved) {
                        return false;
                    }
                    const resolved = $doubt.find('i.fa.fa-check').length > 0;

                    if (resolved) {
                        cy.log(`Dúvida técnica ${index + 1} está resolvida.`);
                        return;
                    }

                    $doubt.find('button.resolveDuvT')
                        .first()
                        .click();

                    cy.wait(1000);
                    cy.getElementAndClick(btnModalMessage);

                    cy.wait(1000);
                    cy.getElementAndClick(modalMessage);

                    cy.wait(1000);
                    cy.log(`Dúvida técnica ${index + 1} marcada como resolvida.`);
                    cy.getElementAndClick(closeModalDoubtsTechnical);

                    doubtResolved = true;
                });
        });
});

Cypress.Commands.add('deleteTechnicalQuestion', (accessingDoubtsTechnical: string) => {
    cy.getElementAndClick(accessingDoubtsTechnical, deleteDoubtsTechnical, btnModalMessage);

    cy.wait(1000);
    cy.getElementAndClick(modalMessage);

    cy.wait(1000);
    cy.log(`Dúvida técnica excluída com sucesso.`);
    cy.getElementAndClick(closeModalDoubtsTechnical);
});

Cypress.Commands.add('answerDoubtTechnical', (accessingDoubtsTechnical: string, status: string, text: string) => {
    cy.getElementAndClick(accessingDoubtsTechnical);

    cy.get(statusResponseQuestionsTechniques, { timeout: 20000 })
        .first()
        .select(status);

    cy.getElementAndType({ [textResponseQuestionsTechniques]: text });

    cy.get(sendReplyQuestionsTechnical, { timeout: 20000 })
        .first()
        .click();

    cy.getElementAndClick(btnModalMessage, modalMessage, closeModalDoubtsTechnical, modalMessage);
})

Cypress.Commands.add('captureRecipeDetails', (tableSelector: string) => {
    const extractFieldText = ($row, selector) => {
        return $row.find(selector).first().text().trim();
    };

    const extractRecipeNumber = ($element) => {
        const text = $element.text().trim();
        const numeroReceitaMatch = text.match(/\d+/);

        if (!numeroReceitaMatch) {
            throw new Error(`Valor capturado não contém números válidos: ${text}`);
        }

        return parseInt(numeroReceitaMatch[0], 10);
    };

    const formatDate = (dateTime) => {
        const match = dateTime.match(/(\d{4}-\d{2}-\d{2} \d{2}:\d{2})/);
        return match ? match[0] : dateTime;
    };

    cy.getElementAndClick(reloadPageButtonElement);
    cy.wait(1000);
    cy.getElementAndClick(lastModifiedColumn);
    cy.wait(1000);
    cy.getElementAndClick(lastModifiedColumn);

    return cy.get(`#mainTableReceitas tbody tr`)
        .first()
        .should('exist')
        .then(($row) => {
            const recipeData = {
                recipeNumber: extractRecipeNumber($row.find('td.idReceitaCol')),
                prescriber: extractFieldText($row, 'td:nth-child(7)'),
                patient: extractFieldText($row, 'td:nth-child(6)'),
                attendantResponsible: extractFieldText($row, 'td:nth-child(13)'),
                cluster: extractFieldText($row, 'td:nth-child(11)'),
                receivingDate: formatDate(extractFieldText($row, 'td:nth-child(8)')),
                urgentRecipe: extractFieldText($row, 'td.sorting_1') === '' ? 'Desmarcado' : 'Marcado',
                clientAlert: extractFieldText($row, 'td.sorting_2') === '' ? 'Desmarcado' : 'Marcado',
                potential: extractFieldText($row, 'td:nth-child(4)').replace('Z', '').trim(),
                lastUpdate: formatDate(extractFieldText($row, 'td:nth-child(9)')),
                budgeist: extractFieldText($row, 'td:nth-child(12)') || 'Indefinido',
            };

            const formattedLog = `
Dados da Receita Capturados:
----------------------------
- Código da Receita        : ${recipeData.recipeNumber}
- Prescritor               : ${recipeData.prescriber}
- Paciente                 : ${recipeData.patient}
- Atendente Responsável    : ${recipeData.attendantResponsible}
- Cluster                  : ${recipeData.cluster}
- Data de Recebimento      : ${recipeData.receivingDate}
- Urgente                  : ${recipeData.urgentRecipe}
- Cliente Alerta           : ${recipeData.clientAlert}
- Potencial                : ${recipeData.potential}
- Última Alteração         : ${recipeData.lastUpdate}
- Orçamentista             : ${recipeData.budgeist}

----------------------------
`;

            cy.log(formattedLog);
            return cy.wrap(recipeData);
        });
});

Cypress.Commands.add('importRecipe', (options: {
    file?: string;
    prescriber?: string;
    parameterSearchPatient?: string;
    patient?: string;
    channelReceiptRecipe?: string;
    attendantResponsibleRecipes?: string;
    cluster?: boolean | RecipeCluster | string;
    receivingDate?: string;
    recipeStatus?: string;
    urgentRecipe?: boolean;
    textNoteRecipe?: string;
    clientAlert?: boolean;
    controlledMedication?: boolean;
    noMainContact?: boolean;
    isTheMainContact?: boolean;
    mainContactRecipe?: string;
    customerPhone?: number
} = {}): Cypress.Chainable<ValidationResult> => {

    const {
        file = dataParameters.Recipe.import.file,
        prescriber = dataParameters.Recipe.import.prescriber,
        parameterSearchPatient = dataParameters.Recipe.import.parameterSearchPatient,
        patient = dataParameters.Recipe.import.patient,
        channelReceiptRecipe = dataParameters.Recipe.import.channelReceiptRecipe,
        attendantResponsibleRecipes = typeof dataParameters.Recipe.import.attendantResponsibleRecipes === 'boolean'
            ? undefined
            : dataParameters.Recipe.import.attendantResponsibleRecipes,
        cluster = dataParameters.Recipe.import.cluster,
        receivingDate = dataParameters.Recipe.import.receivingDate,
        recipeStatus = dataParameters.Recipe.import.recipeStatus,
        textNoteRecipe = dataParameters.Recipe.import.textNoteRecipe,
        urgentRecipe = dataParameters.Recipe.import.urgentRecipe,
        clientAlert = dataParameters.Recipe.import.clientAlert,
        controlledMedication = dataParameters.Recipe.import.controlledMedication,
        noMainContact = dataParameters.Recipe.import.noMainContact,
        isTheMainContact = dataParameters.Recipe.import.isTheMainContact,
        mainContactRecipe = dataParameters.Recipe.import.mainContactRecipe,
        customerPhone = dataParameters.Recipe.import.customerPhone,
    } = options;

    function tryInsertPrescriber(prescriberName: string) {
        cy.waitUntil(() =>
            cy.getElementAutocompleteTypeAndClick(
                { [prescriberRecipes]: prescriberName },
                suggestionAutocomplete
            )
            , {
                timeout: 60000,
                interval: 500,
                errorMsg: 'O elemento não ficou visível a tempo.',
            }).then((found) => {
                if (!found) {
                    const newPrescriber = prescriber;
                    cy.log(`Prescritor '${prescriberName}' não encontrado. Tentando com '${newPrescriber}'`);
                    tryInsertPrescriber(newPrescriber);
                } else {
                    cy.log(`Prescritor '${prescriberName}' selecionado com sucesso.`);
                    cy.waitModalAndClick(btnSuccessModalElement, btnSuccessModalElement, 'each');
                }
            });
        cy.waitUntil(() =>
            cy.waitModalAndClick(btnSuccessModalElement, btnSuccessModalElement, 'each')
        ), {
            timeout: 60000,
            interval: 500,
            errorMsg: 'O elemento não ficou visível a tempo.',
        };
    }
    function processRecipeAttributes() {
        if (file.endsWith('.jpg')) {
            cy.log('jpg');
            cy.log(file);
            cy.waitUntil(() =>
                cy.insertFile(importImageRecipes, file)
            ), {
                timeout: 60000,
                interval: 500,
                errorMsg: 'O elemento não ficou visível a tempo.',
            };
        } else if (file.endsWith('.pdf')) {
            cy.log('pdf');
            cy.log(file);
            cy.waitUntil(() =>
                cy.insertFile(importPDFRecipes, file)
            ), {
                timeout: 60000,
                interval: 500,
                errorMsg: 'O elemento não ficou visível a tempo.',
            };
        } else {
            cy.log('Formato de arquivo não suportado');
            cy.log(file);
            throw new Error('Formato de arquivo não suportado');
        }


        if (prescriber) {
            tryInsertPrescriber(String(prescriber));
        }

        if (parameterSearchPatient) {
            cy.getElementAndCheck([{ element: parameterSearchPatient }]);
        }

        if (patient) {
            cy.get(patientRecipeElement)
                .type(patient, { delay: 50 })
                .then(() => {

                    cy.waitUntil(() => Cypress.$('.autocomplete-suggestion[data-index="0"]').is(':visible'), {
                        timeout: 60000,
                        interval: 500,
                        errorMsg: 'O autocomplete não apareceu a tempo.',
                    }).then(() => {
                        cy.get('.autocomplete-suggestion[data-index="0"]')
                            .eq(1)
                            .click({ force: true })
                    });
                });
        }

        insertMainContactPhone();

        if (channelReceiptRecipe) {
            cy.getSelectOptionByValue([{ element: channelReceiptImportElement, value: channelReceiptRecipe }]);
        }

        if (attendantResponsibleRecipes) {
            cy.get(responsibleForRecipeElement)
                .invoke('val')
                .then((responsibleForRecipeElement) => {
                    const attendantTrimmed = String(responsibleForRecipeElement).trim();
                    if (!attendantResponsibleRecipes) {
                        cy.log('O teste será prosseguido, pois um atendente responsável já foi designado.');
                    } else {

                        cy.getElementAutocompleteTypeAndClick(
                            { ['#modalAtendenteRec']: 'rafaela moro' },
                            suggestionAutocomplete
                        );
                    }
                });
        }

        if (receivingDate) {
            cy.getElementAndType({ [dateReceiptRecipes]: receivingDate });
        }

        if (cluster) {
            cy.get(clusterRecipes)
                .invoke('val')
                .then((selectedCluster) => {
                    const selectedClusterTrimmed = String(selectedCluster).trim();

                    if (!selectedClusterTrimmed && cluster) {
                        cy.get(clusterRecipes)
                            .select(String(cluster), { force: true })
                            .should('have.value', cluster)
                            .then(() => {
                                cy.log(`Cluster '${RecipeCluster[String(cluster)]}' selecionado com sucesso.`);
                            });
                    } else {
                        cy.log('Cluster já designado.');
                    }
                });
        }


        if (recipeStatus) {
            const recipeStatusSelector = recipeStatusInput(recipeStatus);

            cy.document().then((doc) => {
                const $input = Cypress.$(recipeStatusSelector, doc);

                if (!$input.is(':checked')) {
                    cy.log(`O campo ${recipeStatus} não está marcado, tentando marcar.`);
                    cy.getElementAndCheck([{ element: recipeStatusSelector }]);
                } else {
                    cy.log(`O campo ${recipeStatus} já está marcado.`);
                }
            });

            cy.document().then((doc) => {
                const $element = Cypress.$(btnModalMessage);
                if ($element.length) {
                    cy.getElementAndClick(btnModalMessage);
                } else {
                    cy.log(`Elemento não encontrado, teste irá continuar`);
                }
            })

            cy.wait(1000);

            cy.document().then((doc) => {
                const $element = Cypress.$(btnModalMessage);
                if ($element.length) {
                    cy.getElementAndClick(btnModalMessage);
                } else {
                    cy.log(`Elemento não encontrado, teste irá continuar`);
                }
            })
        }

        if (textNoteRecipe) {
            cy.getElementAndType({ [textInternalObservationRecipes]: textNoteRecipe });
        }
    };
    function checkOptionalField(selector: string, condition?: boolean): void {
        if (condition) {
            cy.getElementAndCheck([{ element: selector }]);
        } else {
            cy.get(selector)
                .uncheck({ force: true });
        }
    };
    function setOptionalFields() {
        checkOptionalField(urgentRecipeElement, urgentRecipe);
        checkOptionalField(clientAlertRecipeElement, clientAlert);
        checkOptionalField(controlledmedicationRecipeElement, controlledMedication);
    };
    function insertMainContactPhone() {
        if (noMainContact) {
            cy.log('Não há contato principal');

            cy.waitUntil(() =>
                cy.getElementAndClick('div.modal-dialog > div > div.modal-footer > button.btn.btn-secondary.pull-left'),
                { timeout: 60000, interval: 500, errorMsg: 'O elemento não ficou visível a tempo.' }
            );

            cy.get('#groupMainEntitiesModal > div:nth-child(2) > div:nth-child(1) > div > div.d-flex.justify-content-between > label.text-right > input[type=checkbox]')
                .click();

        } else if (!isTheMainContact) {
            cy.log('Outro contato principal, inserindo o nome do contato principal e o telefone');

            cy.waitUntil(() =>
                cy.getElementAndClick('div.modal-dialog > div > div.modal-footer > button.btn.btn-secondary.pull-left'),
                { timeout: 60000, interval: 500, errorMsg: 'O elemento não ficou visível a tempo.' }
            );

            cy.get('#modalContatoCliRec')
                .type(mainContactRecipe, { delay: 50 })
                .then(() => {
                    cy.waitUntil(() => Cypress.$('.autocomplete-suggestion[data-index="0"]').is(':visible'), {
                        timeout: 60000, interval: 500, errorMsg: 'O autocomplete não apareceu a tempo.'
                    }).then(() => {
                        cy.get('.autocomplete-suggestion[data-index="0"]')
                            .eq(1)
                            .click({ force: true });
                    });

                    selectPatientPhone(customerPhone);
                });

        } else {
            cy.log('Paciente é o contato principal, inserindo o telefone');

            cy.waitUntil(() =>
                cy.getElementAndClick(btnSuccessModalElement),
                { timeout: 60000, interval: 500, errorMsg: 'O elemento não ficou visível a tempo.' }
            );

            selectPatientPhone(customerPhone);
        }

        function selectPatientPhone(expectedNumber) {
            const possibleNumbers = [
                String(expectedNumber),
                typeof expectedNumber === 'string'
                    ? expectedNumber.replace(/(\d{2})(9)(\d+)/, '$1$3')
                    : String(expectedNumber).replace(/(\d{2})(9)(\d+)/, '$1$3')
            ];

            cy.document().then((doc) => {
                const $element = Cypress.$(btnModalMessage);

                if ($element.is(':visible')) {
                    cy.get(contactPhone, { timeout: 20000 })
                        .should('be.visible')
                        .find('option')
                        .then(($options) => {
                            const matchedOption = $options.filter((_, option) => {
                                const cleanValue = option.value.replace(/\s+/g, '');
                                return possibleNumbers.includes(cleanValue);
                            });

                            if (matchedOption.length) {
                                cy.wrap(matchedOption)
                                    .invoke('val')
                                    .then(val => {
                                        cy.get(contactPhone).select(val, { force: true });
                                    });
                            } else if ($options.length) {
                                cy.wrap($options.first())
                                    .invoke('val')
                                    .then(firstVal => {
                                        cy.get(contactPhone).select(firstVal, { force: true });
                                        cy.log('Número esperado não encontrado. Primeiro número disponível foi selecionado.');
                                    });
                            } else {
                                cy.log('Nenhum número de telefone disponível.');
                                cy.getElementAndType({ ['.col-md-8 > .form-control']: String(expectedNumber) });
                                cy.log(`Número de telefone ${expectedNumber} inserido diretamente.`);
                            }
                        });

                    cy.waitUntil(() =>
                        cy.get(applySelectedContact)
                            .should('be.visible')
                            .click(),
                        {
                            timeout: 60000,
                            interval: 500,
                            errorMsg: 'O botão de contato selecionado não ficou visível a tempo.'
                        }
                    );

                } else {
                    cy.log('Elemento de número de telefone não encontrado ou invisível. Teste prosseguirá.');

                    cy.waitUntil(() =>
                        cy.get(applySelectedContact)
                            .should('be.visible')
                            .click(),
                        {
                            timeout: 60000,
                            interval: 500,
                            errorMsg: 'O botão de contato selecionado não ficou visível a tempo.'
                        }
                    );

                    cy.getElementAndType({ ['.col-md-8 > .form-control']: String(expectedNumber) });
                }
            });
        }
    }


    cy.getElementAndClick(openModalRegisterRecipes);

    processRecipeAttributes();

    setOptionalFields();

    cy.getElementAndClick(saveRecipes);

    return cy.get(barProgressSaveRecipe, { timeout: 120000 })
        .should('not.be.visible')
        .then(() => {
            return cy.get(modalMessage, { timeout: 120000 })
                .should('be.visible')
                .then(($modal) => {
                    cy.log($modal.text());
                    cy.getElementAndClick(btnModalMessage);

                    return cy.captureRecipeDetails(recipeCodeColumnElement)
                        .then((result) => {
                            return {
                                success: 'O processo de importação foi concluído com êxito.',
                                file: file,
                                recipeNumber: result.recipeNumber,
                                prescriber: result.prescriber,
                                potential:result.potential,
                                patient: result.patient,
                                attendantResponsibleRecipes: result.attendantResponsibleRecipes,
                                channelReceiptRecipe: channelReceiptRecipe,
                                cluster: result.cluster,
                                receivingDate: result.receivingDate,
                                recipeStatus: recipeStatus,
                                textNoteRecipe: textNoteRecipe,
                                urgentRecipe: result.urgentRecipe,
                                clientAlert: result.clientAlert,
                                controlledMedication: controlledMedication,
                                noMainContact:noMainContact,
                                isTheMainContact:isTheMainContact,
                                mainContactRecipe:mainContactRecipe,
                                customerPhone: customerPhone,
                                
                            };
                        });
                });
        });
});