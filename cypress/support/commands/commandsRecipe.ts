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
    patientContactModal,
    contactPhone,
    applySelectedContact,
    recipeTypeInput,
    deleteRecipeElement,
    reloadPageButtonElement,
    modalCloneRecipesElement,

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
    recipeCodeColumnElement,
    accessServiceMenuThroughPrescriptionImportScreenElement,

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


Cypress.Commands.add('captureRecipeNumber', (RecipeNumberElement: string) => {
    const extractRecipeNumber = ($element: JQuery<HTMLElement>): number => {
        const text = $element.text().trim();
        const numeroReceitaMatch = text.match(/\d+/);

        if (!numeroReceitaMatch) {
            throw new Error(`Valor capturado não contém números válidos: ${text}`);
        }

        return parseInt(numeroReceitaMatch[0], 10);
    };

    cy.getElementAndClick(reloadPageButtonElement);
    cy.wait(1000);
    cy.getElementAndClick(accessServiceMenuThroughPrescriptionImportScreenElement)
    cy.wait(1000);
    cy.getElementAndClick(accessServiceMenuThroughPrescriptionImportScreenElement)

    return cy.get(RecipeNumberElement, { timeout: 20000 })
        .should('exist')
        .then(($element) => {
            const numberRecipe = extractRecipeNumber($element);

            dataParameters.Recipe.import.numberRecipe = numberRecipe;
            dataParameters.Recipe.search.numberRecipe = numberRecipe;

            cy.log(`Número da receita capturado: ${numberRecipe}`);

            return cy.wrap(numberRecipe);
        });
});


Cypress.Commands.add('searchRecipe', (options: {
    initialDate?: string,
    finalDate?: string,
    cluster?: RecipeCluster,
    channelReceipt?: RecipeReceiptChannel,
    numberRecipe?: number,
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
        numberRecipe = dataParameters.Recipe.search.numberRecipe,
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

    if (numberRecipe) {
        cy.getElementAndType({ [recipeSearchElement]: numberRecipe });
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

    cy.captureRecipeNumber(recipeCodeColumnElement);

    return cy.wrap({ success: `Busca de receita realizada com sucesso.` });
});


Cypress.Commands.add('viewRecipe', (openModalviewRecipe: string,): void => {
    cy.getElementAndClick(
        openModalviewRecipe,
        tabPdfViewRecipes,
        tabOriginalViewRecipes,
        internalObservationsTabViewRecipes,
        tabInformationFcertaViewRecipes,
        rulerViewRecipes,
        rulerViewRecipes,
        closeViewRecipes
    )
});

Cypress.Commands.add('cloneRecipe', (cloneRecipeElement: string, options: {
    cloneRecipeWithPharmaceuticalObservation?: boolean,
} = {}): ValidationResult => {
    const {
        cloneRecipeWithPharmaceuticalObservation = dataParameters.Recipe.clone.cloneRecipeWithPharmaceuticalObservation,
    } = options;

    cy.getElementAndClick(cloneRecipeElement);

    cy.get(modalCloneRecipesElement, { timeout: 20000 })
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

    cy.captureRecipeNumber(recipeCodeColumnElement).then((clonedRecipeNumber) => {
        cy.searchRecipe({ numberRecipe: clonedRecipeNumber });
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
    cy.getElementAndType({ [passwordPharmaceuticalObservations]: passwordRecipe });
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




Cypress.Commands.add('searchBudget', (budget: number, branch: number) => {

    cy.get(fieldSearchBudgetElement, { timeout: 20000 })
        .clear()
        .type(String(budget))
        .should('have.value', budget);

    cy.get(searchBranch, { timeout: 5000 })
        .clear()
        .type(String(branch))
        .should('have.value', branch);

    cy.getElementAndClick(showAll);

});

Cypress.Commands.add('reopenBudget', (budget: number, branch: number) => {
    cy.searchBudget(budget, branch);

    cy.getElementAndClick(showBudgetsClosed, sendSearch, buttonView, reopenBudget, confirmReopenBudget, budgetMessageModalElement);
})

Cypress.Commands.add('viewBudget', (): void => {

    cy.readFile('budgetAndBranch.json')
        .then((budgetAndBranch) => {

            let allBudgetsUsed = true;
            let budgetViewed = false;

            for (const budgetItem of budgetAndBranch) {
                const budget = budgetItem.budgetNumber;
                const branch = budgetItem.branchNumber;

                cy.searchBudget(budget, branch);
                cy.getElementAndClick(sendSearch);

                cy.get(containerBudgets)
                    .then($element => {
                        if ($element.length < 2) {
                            cy.reopenBudget(budget, branch)
                        }
                        else {
                            allBudgetsUsed = false;
                            cy.getElementAndClick(buttonView);
                            budgetViewed;
                        }

                        if (budgetViewed = true) {
                            return false;
                        };
                    });

                if (budgetViewed = true) {
                    break;
                };

            }

            if (allBudgetsUsed) {
                throw new Error('Todos os números de orçamentos já foram usados.')
            };

        });
});


Cypress.Commands.add('importRecipe', (options: {
    file?: string;
    prescriber?: string | number;
    parameterSearchPatient?: string;
    patient?: string | number;
    channelReceipt?: string;
    attendantResponsibleRecipes?: string;
    receivingDate?: string;
    recipeType?: string;
    internalObservation?: string;
    urgentRecipe?: boolean;
    clientAlert?: boolean;
    medicineControlled?: boolean;
    customerPhone?: string | number
} = {}): Cypress.Chainable<ValidationResult> => {

    const {
        file = dataParameters.Recipe.import.file,
        prescriber = dataParameters.Recipe.import.prescriber,
        parameterSearchPatient = dataParameters.Recipe.import.parameterSearchPatient,
        patient = dataParameters.Recipe.import.patient,
        channelReceipt = dataParameters.Recipe.import.channelReceiptRecipe,
        attendantResponsibleRecipes = typeof dataParameters.Recipe.import.attendantResponsibleRecipes === 'boolean'
            ? undefined
            : dataParameters.Recipe.import.attendantResponsibleRecipes,
        receivingDate = dataParameters.Recipe.import.receivingDate,
        recipeType = dataParameters.Recipe.import.recipeType,
        internalObservation = dataParameters.Recipe.import.textNoteRecipe,
        urgentRecipe = false,
        clientAlert = false,
        medicineControlled = false
    } = options;

    function processRecipeAttributes() {
        if (file) {
            cy.insertFile(importImageRecipes, file);
        }

        if (prescriber) {
            cy.getElementAutocompleteTypeAndClick(
                { [prescriberRecipes]: String(prescriber) },
                suggestionAutocomplete
            );
            cy.waitModalAndClick(btnSuccessModalElement, btnSuccessModalElement, 'each');
        }

        if (parameterSearchPatient) {
            cy.getElementAndCheck([{ element: parameterSearchPatient }]);
        }

        if (patient) {
            cy.getElementAutocompleteTypeAndClick(
                { [patientRecipes]: String(patient) },
                suggestionAutocomplete
            );

            cy.getElementAndClick(btnSuccessModalElement, patientContactModal);

            selectPatientPhone(dataParameters.Recipe.import.customerPhone);

        }

        if (channelReceipt) {
            cy.getSelectOptionByValue([{ element: channelReceiptImport, value: channelReceipt }]);
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
                            { [attendantTrimmed]: attendantResponsibleRecipes },
                            el.Recipes.autocompleteResponsibleAttendant
                        );
                    }
                });
        }

        if (receivingDate) {
            cy.getElementAndType({ [dateReceiptRecipes]: receivingDate });
            cy.get(clusterRecipes)
                .invoke('val')
                .then((cluster) => {
                    const clusterTrimmed = String(cluster).trim();
                    if (!clusterTrimmed && dataParameters.Recipe.import.cluster) {
                        cy.getSelectOptionByValue([{ element: clusterRecipes, value: String(dataParameters.Recipe.import.cluster) }]);
                    } else {
                        cy.log('Cluster já designado.');
                    }
                });

        }

        if (recipeType) {
            const recipeTypeSelector = recipeTypeInput(recipeType);

            cy.document().then((doc) => {
                const $input = Cypress.$(recipeTypeSelector, doc);

                if (!$input.is(':checked')) {
                    cy.log(`O campo ${recipeType} não está marcado, tentando marcar.`);
                    cy.wrap($input)
                        .check({ force: true });
                } else {
                    cy.log(`O campo ${recipeType} já está marcado.`);
                }
            });
            clickModalButton(btnModalMessage);
            cy.wait(1000);
            clickModalButton(btnModalMessage);
        }



        if (internalObservation) {
            cy.getElementAndType({ [textInternalObservationRecipes]: internalObservation });
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
        checkOptionalField(controlledmedicationRecipeElement, medicineControlled);
    };

    function clickModalButton(btnSelector: string): void {
        cy.document().then((doc) => {
            const $btn = doc.querySelector(btnSelector) as HTMLElement;
            if ($btn) {
                cy.getElementAndClick(btnSelector);
            } else {
                cy.log('Modal não foi apresentada e, portanto, o teste prosseguirá.');
            }
        });
    };

    function selectPatientPhone(expectedNumber: string | number) {
        const possibleNumbers = [
            String(expectedNumber),
            typeof expectedNumber === 'string'
                ? expectedNumber.replace(/(\d{2})(9)(\d+)/, '$1$3')
                : String(expectedNumber).replace(/(\d{2})(9)(\d+)/, '$1$3')
        ];

        cy.wait(1000);
        cy.getElementAndClick(btnSuccessModalElement);

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
                            cy.get(contactPhone)
                                .select(val, { force: true });
                        });
                } else if ($options.length) {
                    cy.wrap($options.first())
                        .invoke('val')
                        .then(firstVal => {
                            cy.get(contactPhone)
                                .select(firstVal, { force: true });
                            cy.log('Número esperado não encontrado. Primeiro número disponível foi selecionado.');
                        });
                } else {
                    cy.log('Nenhum número de telefone disponível.');
                }
            });

        cy.getElementAndClick(applySelectedContact);
    }

    cy.getElementAndClick(openModalRegisterRecipes);

    processRecipeAttributes();

    clickModalButton(btnModalMessage);
    cy.wait(1000);
    clickModalButton(btnModalMessage);

    setOptionalFields();

    cy.getElementAndClick(saveRecipes);

    return cy.get(barProgressSaveRecipe, { timeout: 120000 })
        .should('not.be.visible')
        .then(() => {
            cy.get(modalMessage, { timeout: 120000 })
                .should('be.visible')
                .then(($modal) => {
                    const modalText = $modal.text();
                    cy.log(modalText);
                    cy.getElementAndClick(btnModalMessage);

                    return cy.captureRecipeNumber(recipeCodeColumnElement);
                })
                .then((numberRecipe) => {
                    return cy.wrap({ success: `O processo de importação foi concluído com êxito. Receita importada: ${numberRecipe}` });
                });
        });
});
