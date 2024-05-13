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
import { RecipeImport, CheckAndThrowError, dataParameters } from '../../DataParameters/dataParameters'
import { PriorityRecipe } from 'DataParameters/Enums/priorityRecipe';

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
    responsibleForRecipe,
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


Cypress.Commands.add('captureRecipeNumber', (RecipeNumberElement: string) => {
    const tentativas: number = 10
    if (tentativas === 0) {
        throw new Error(`Número de tentativas excedido. Não foi possível capturar o número da recipe.`);
    }

    return cy.wrap(null).then(() => {
        const $element = Cypress.$(RecipeNumberElement);

        if ($element.length > 0) {
            const text = $element.text();
            const numeroReceitaMatch = text.match(/\d+/);

            if (!numeroReceitaMatch) {
                throw new Error(`Valor capturado não contém números válidos: ${text}`);
            }
            const numberRecipe = parseInt(numeroReceitaMatch[0], 10);

            dataParameters.Recipe.import.numberRecipe = numberRecipe;
            dataParameters.Recipe.search.numberRecipe = numberRecipe;

            cy.log(`Número da Recipe Capturado para search: ${dataParameters.Recipe.search.numberRecipe}
            Número da Recipe Capturado para importação: ${dataParameters.Recipe.import.numberRecipe}`);
        }
    });

})


Cypress.Commands.add('searchRecipe', (
    params?: {
        initialDate?: string,
        finalDate?: string,
        pendency?: string,
        cluster?: string,
        channelReceipt?: string,
        recipe?: number,
        patient?: string,
        prescriber?: string,
        order?: number,
        lastModifier?: string,
        budgetist?: string,
        attendantResponsibleRecipes?: string
    }): void => {

    cy.captureRecipeNumber(numberRecipe);

    const searchRecipeWithParameters = (params?: {
        initialDate?: string,
        finalDate?: string,
        pendency?: string,
        cluster?: string,
        channelReceipt?: string,
        recipe?: number,
        patient?: string,
        prescriber?: string,
        order?: number,
        lastModifier?: string,
        budgetist?: string,
        attendantResponsibleRecipes?: string
    }) => {
        cy.getElementAndClick(buttonSearchRecipes);

        cy.captureRecipeNumber(numberRecipe);
    };

    cy.get(recipeSearchModal, { timeout: 20000 })
        .as('recipeSearchModal')
    cy.get('@recipeSearchModal')
        .click();
    cy.getElementAndType(filterDateStartSearchRecipes, params.initialDate);
    cy.getElementAndType(filterEndDateSearchRecipes, params.finalDate);

    if (params.cluster) {
        cy.get(clusterSearch)
            .type(params.cluster)
            .type('{downarrow}')
            .type('{enter}');
    }

    if (params.pendency) {
        cy.getSelectOptionByValue(filterPendenciasSearch, params.pendency);
    }

    if (params.channelReceipt) {
        cy.getSelectOptionByValue(channelReceiptSearch, params.channelReceipt);
    }

    if (params.recipe) {
        cy.getElementAndType(recipeSearch, params.recipe.toString());
    }

    if (params.patient) {
        cy.get(patientSearch, { timeout: 20000 })
            .type(params.patient.toString(), { timeout: 20000 })
            .wait(3000)
            .type('{downarrow}')
            .type('{enter}');
    }

    if (params.prescriber) {
        cy.getElementAndType(prescriberSearch, params.prescriber.toString())
            .wait(3000)
            .type('{downarrow}')
            .type('{enter}');
    }

    if (params.order) {
        cy.getElementAndType(budgetSearch, params.order.toString())
            .wait(3000)
            .type('{downarrow}')
            .type('{enter}');
    }

    if (params.lastModifier) {
        cy.getElementAndType(lastModifierSearch, params.lastModifier.toString())
            .type('{downarrow}')
            .type('{enter}');
    }

    if (params.budgetist) {
        cy.getElementAndType(budgetistSearch, params.budgetist.toString())
            .type('{downarrow}')
            .type('{enter}');
    }

    if (params.attendantResponsibleRecipes) {
        cy.getElementAndType(attendantResponsibleSearch, params.attendantResponsibleRecipes.toString())
            .wait(3000)
            .type('{downarrow}')
            .type('{enter}');
    }

    cy.getElementAndClick(buttonSearchRecipes);

    cy.captureRecipeNumber(numberRecipe);

    searchRecipeWithParameters(params)
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



Cypress.Commands.add('cloneRecipe', (cloneRecipe: string): void => {
    cy.get(cloneRecipe)
        .click();
    cy.wait(1000);
    cy.then(() => {
        cy.get(modalObservationsClone, { timeout: 20000 }).then(($element) => {

            if (!$element.is(':visible')) {
                cy.getElementAndClick(btnModalMessage);
            }
            else {
                if (dataParameters.Recipe.search.clonePharmaceuticalObservation) {
                    cy.getElementAndClick(btnModalMessage);
                }
                if (!dataParameters.Recipe.search.clonePharmaceuticalObservation) {
                    cy.get(clonePharmaceuticalNotes, { timeout: 20000 })
                        .uncheck();
                    cy.getElementAndClick(btnModalMessage);
                }
            }
            cy.getElementAndClick(btnModalMessage);
        });
    });
});



Cypress.Commands.add('deleteRecipe', (excluir: string): void => {
    cy.get(':nth-child(1) > .actions-fa > .dropdown > .dropdown-menu > .list-group > .delete-recipe', { timeout: 50000 })
        .eq(0)
        .click({ force: true });
    cy.get(btnModalMessage, { timeout: 50000 })
        .click();
    cy.get(modalMessage, { timeout: 50000 })
        .click();
});



Cypress.Commands.add('insertPharmaceuticalObservation', (accessPharmaceuticalObservations: string, passwordRecipe: string, textNote: string): void => {
    cy.getElementAndClick(accessPharmaceuticalObservations);
    cy.getElementAndClick(tabAddPharmaceuticalObservations);
    cy.getElementAndType(passwordPharmaceuticalObservations, passwordRecipe);
    cy.getElementAndType(textPharmaceuticalObservations, textNote);
    cy.getElementAndClick('#modal_receita_add_obs');
    cy.getElementAndClick(btnModalMessage);
    cy.wait(1000);
    cy.get(modalMessage, { timeout: 60000 })
        .click();
    cy.getElementAndClick(closeModalPharmaceuticalObservations);
});



Cypress.Commands.add('deletePharmaceuticalObservation', (accessPharmaceuticalObservations: string): void => {
    cy.getElementAndClick(accessPharmaceuticalObservations);
    cy.getElementAndClick(tabDeletePharmaceuticalObservations);
    cy.getElementAndClick(deletePharmaceuticalObservations);
    cy.getElementAndClick(btnModalMessage);
    cy.wait(1000);
    cy.get(modalMessage, { timeout: 60000 })
        .click();
    cy.getElementAndClick(closeModalPharmaceuticalObservations);
});



Cypress.Commands.add('CreateTechnicalDoubt', (accessingDoubtsTechnical: string, category: string, text: string, responsibleResponseDoubtTechnical: string): void => {
    cy.getElementAndClick(accessingDoubtsTechnical);
    cy.getElementAndClick(containerCategoryTechnicalQuestions);
    cy.get(select, { timeout: 20000 })
        .type(`${category}{enter}`);
    cy.getElementAndType(textDoubtsTechnical, text);
    cy.getElementAndClick(containerCollaborators);
    cy.get(responsibleAnswers, { timeout: 20000 })
        .type(`${responsibleResponseDoubtTechnical}{enter}`);
    cy.getElementAndClick(sendQuestionsTechnical);
    cy.getElementAndClick(btnModalMessage);
    cy.getElementAndClick(modalMessage);
    cy.getElementAndClick(closeModalDoubtsTechnical);
    cy.getElementAndClick(modalMessage);
});



// Cypress.Commands.add('updateModalTechnicalQuestion', (update: string): void => {
//     cy.getElementAndClick(accessingDoubtsTechnical);
//     cy.getElementAndClick(update)
//         .should('have.attr', 'disabled');
//     cy.get(update, { timeout: 20000 }).then(($element) => {

//         if (!$element.is(':disabled')) {
//             cy.log('Já pode update a modal.')
//         }
//         cy.wait(8000);
//         cy.getElementAndClick(closeModalDoubtsTechnical);
//     });
// });

Cypress.Commands.add('updateModalTechnicalQuestion', (update: string): void => {
    cy.getElementAndClick(accessDoubtsTechnical);

    cy.get(update)
        .should('not.be.disabled')
        .as('buttonUpdate')
        .click();

    cy.getElementAndClick('@buttonUpdate', closeModalDoubtsTechnical);
});




// Cypress.Commands.add('changeResponsibleDoubtTechinical', (accessingDoubtsTechnical: string, responsibleResponseDoubtTechnical: string): void => {
//   cy.getElementAndClick(accessingDoubtsTechnical);

//   let name;
//   cy.get(responsibleCurrentResponseQuestionsTechnical, { timeout: 20000 })
//     .should('exist')
//     .invoke('attr', 'title')
//     .then((title) => {
//       const matches = title.match(/\d+ - (.+?) \(.+?\)/);

//       if (matches && matches.length > 1) {
//         name = matches[1];
//         cy.log(name);
//         if (name !== dataParameters.Recipe.responsavelAtualRespostaDuvidaTecnica) {
//           dataParameters.Recipe.responsavelAtualRespostaDuvidaTecnica = name;
//         } else {
//           cy.log('O novo responsável é o mesmo que o atual.');
//         }
//       } else {
//         cy.log('Nome não encontrado');
//       }
//     });

//   if (responsibleResponseDoubtTechnical === dataParameters.Recipe.responsavelAtualRespostaDuvidaTecnica) {
//     cy.log('O novo responsável é o mesmo que o atual');
//     
//   } 
//    cy.get(containerResponsibleResponseQuestionsTechnical, { timeout: 20000 })
//       .click();
//     cy.get(responsibleAnswers, { timeout: 20000 })
//       .type(`${responsibleResponseDoubtTechnical}{enter}`);
//     cy.wait(1000);
//     cy.getElementAndClick(modalMessage);
//     cy.getElementAndClick(closeModalDoubtsTechnical);
//   
// });



Cypress.Commands.add('changeResponsibleDoubtTechinical', (accessingDoubtsTechnical: string, responsibleResponseDoubtTechnical: string): void => {
    cy.getElementAndClick(accessingDoubtsTechnical);

    let allSolved = true;

    // Verifica se todas as dúvidas técnicas estão resolvidas
    cy.get('#chatDuvTec .groupContainer').each(($doubt) => {
        const resolved = $doubt.find('i.fa.fa-check').length > 0;

        if (!resolved) {
            allSolved = false;
            return false; // Saímos do loop, pois encontramos uma dúvida não resolvida
        }
    });

    if (allSolved) {
        cy.log('Excelente! Todas as questões técnicas foram solucionadas. Não há necessidade de alterar o responsável pela resposta.');
        return; // Saímos da função se todas estiverem resolvidas
    }

    let name;
    cy.get(responsibleCurrentResponseQuestionsTechnical, { timeout: 20000 })
        .should('exist')
        .invoke('attr', 'title')
        .then((title) => {
            const matches = title.match(/\d+ - (.+?) \(.+?\)/);

            if (matches && matches.length > 1) {
                name = matches[1];
                cy.log(name);
                if (name !== dataParameters.Recipe.search.responsibleCurrentAnswerTechnicalQuestion) {
                    dataParameters.Recipe.search.responsibleCurrentAnswerTechnicalQuestion = name;
                } else {
                    cy.log('O novo responsável é o mesmo que o atual');
                }
            } else {
                cy.log('Nome não encontrado');
            }
        });

    if (responsibleResponseDoubtTechnical === dataParameters.Recipe.search.responsibleCurrentAnswerTechnicalQuestion) {
        cy.log('O novo responsável é o mesmo que o atual');

    }
    cy.get(containerResponsibleResponseQuestionsTechnical, { timeout: 20000 })
        .click();
    cy.get(responsibleAnswers, { timeout: 20000 })
        .type(`${responsibleResponseDoubtTechnical}{enter}`);
    cy.getElementAndClick(modalMessage);
    cy.getElementAndClick(closeModalDoubtsTechnical);
});




Cypress.Commands.add('markDoubtTechnicalSolved', (accessingDoubtsTechnical: string): void => {
    cy.getElementAndClick(accessingDoubtsTechnical);

    let doubtResolved = false;
    cy.get('#chatDuvTec', { timeout: 20000 }).then(() => {
        cy.get('.groupContainer').each(($doubt, index) => {

            if (doubtResolved) {
                return false;
            }
            const resolved = $doubt.find('i.fa.fa-check').length > 0;

            if (resolved) {
                cy.log(`Dúvida técnica ${index + 1} está resolvida.`);
                return;
            }

            $doubt.find('button.resolveDuvT').first().click();
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
    cy.getElementAndClick(accessingDoubtsTechnical);
    cy.get(deleteDoubtsTechnical)
        .click()
    cy.getElementAndClick(btnModalMessage);
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

    cy.getElementAndType(textResponseQuestionsTechniques, text);
    cy.get(sendReplyQuestionsTechnical, { timeout: 20000 })
        .first()
        .click();

    cy.getElementAndClick(btnModalMessage);
    cy.getElementAndClick(modalMessage);
    cy.getElementAndClick(closeModalDoubtsTechnical);
    cy.getElementAndClick(modalMessage);
})




Cypress.Commands.add('searchOrder', (order: number, branch: number) => {

    cy.get(fieldSearchOrder, { timeout: 20000 })
        .clear()
        .type(order.toString())
        .should('have.value', order);

    cy.get(searchBranch, { timeout: 5000 })
        .clear()
        .type(branch.toString())
        .should('have.value', branch);

    cy.getElementAndClick(showAll);

});

Cypress.Commands.add('reopenOrder', (order: number, branch: number) => {
    cy.searchOrder(order, branch);

    cy.getElementAndClick(showOrdersClosed);
    cy.getElementAndClick(sendSearch);
    cy.getElementAndClick(buttonView);

    cy.getElementAndClick(reopenOrder);
    cy.getElementAndClick(confirmReopenOrder);
    cy.getElementAndClick(orderMessageModal);
})

Cypress.Commands.add('viewOrder', (buttonView): void => {

    cy.readFile('orderAndBranch.json').then((orderAndBranch) => {

        // Assuming orderAndBranch is an array of objects with properties budgetNumber and branchNumber
        let allOrdersUsed = true;
        let orderViewed = false;

        for (const budget of orderAndBranch) {
            const order = budget.budgetNumber;
            const branch = budget.branchNumber;

            cy.searchOrder(order, branch);
            cy.getElementAndClick(sendSearch);

            cy.get(containerOrders).then($element => {
                if ($element.length < 2) {
                    // Execute o código dentro desta condição somente se o elemento não for visível
                    cy.reopenOrder(order, branch)
                }
                else {
                    allOrdersUsed = false;
                    cy.getElementAndClick(buttonView);
                    orderViewed;
                }

                if (orderViewed = true) {
                    return false;
                };
            });

            if (orderViewed = true) {
                break;
            };

        }

        if (allOrdersUsed) {
            throw new Error('Todos os números de pedidos já foram usados.')
        };

    });
});

Cypress.Commands.add('importRecipe', (
    file?: Object,
    prescriber?: string | number,
    parameterSearchPatient?: string,
    patient?: string | number,
    channelReceipt?: string,
    attendantResponsibleRecipes?: string,
    receivingDate?: Date,
    recipeType?: string,
    textInternalObservation?: string,
    urgentRecipes?: string,
    clientAlert?: string,
    medicineControlled?: string) => {

    cy.getElementAndClick(openModalRegisterRecipes);

    cy.insertFile(dataParameters.Recipe.import.file, importImageRecipes);

    cy.getElementAndClick(noMainContact);

    cy.getElementAutocompleteTypeAndClick(
        prescriberRecipes,
        dataParameters.Recipe.import.prescriber,
        el.Shared.suggestionAutocomplete
    );

    cy.waitModalAndClick(btnSuccessModal, btnSuccessModal, 'each');

    cy.getElementAndCheck(dataParameters.Recipe.import.parameterSearchPatient);
    
    cy.getElementAutocompleteTypeAndClick(
        patientRecipes,
        dataParameters.Recipe.import.patient,
        el.Shared.suggestionAutocomplete
    );

    cy.getSelectOptionByValue(channelReceiptImport, dataParameters.Recipe.import.channelReceiptRecipe);
    
    cy.wrap(null).then(() => {
        const $aliasResponsibleAttendant = cy.get(responsibleForRecipe);
        $aliasResponsibleAttendant.invoke('val').then((responsibleForRecipe) => {
            const atendenteResponsavelString = String(responsibleForRecipe).trim();
            if (dataParameters.Recipe.import.attendantResponsibleRecipes === false) {
                cy.log('O teste será prosseguido, pois um atendente responsável já foi designado.');
            }
            if (dataParameters.Recipe.import.attendantResponsibleRecipes) {
                cy.getElementAutocompleteTypeAndClick(
                    String(responsibleForRecipe),
                    dataParameters.Recipe.import.attendantResponsibleRecipes,
                    el.Recipes.autocompleteResponsibleAttendant
                );
            }
        });
    });

    cy.getElementAndType(dateReceiptRecipes, dataParameters.Recipe.import.receivingDate)

    cy.wrap(null).then(() => {
        const $aliasCluster = cy.get(clusterRecipes);
        $aliasCluster.invoke('val').then((cluster) => {
            const clusterString = String(cluster).trim();
            if (clusterString !== '' && dataParameters.Recipe.import.cluster === false) {
                cy.log('O teste será prosseguido, pois um cluster já foi designado.');
            }
            if (dataParameters.Recipe.import.cluster) {
                cy.getSelectOptionByValue(clusterRecipes, dataParameters.Recipe.import.cluster);
            }
        });
    });
cy.pause();
    cy.getElementAndCheck(`input[name="receita_tipo"][value="${dataParameters.Recipe.import.recipeType}"]`)


    function clickModalButton(btnSelector: string) {
        cy.document().then((doc) => {
            const $btn = doc.querySelector(btnSelector) as HTMLElement;
            if ($btn) {
                cy.getElementAndClick(btnSelector);
            } else {
                cy.log('Informativo de Changelog não foi apresentado e, portanto, o teste prosseguirá.');
            }
        });
    }

    // Chame a função para cada modal
    clickModalButton(btnModalMessage);
    cy.wait(1000);
    clickModalButton(btnModalMessage);



    // cy.wrap(null).then(() => {
    //     const $aliasModal = Cypress.$(btnModalMessage, { timeout: 240000 });
    //     if ($aliasModal.is(':visible')) {

    //         cy.log('O teste será prosseguido, uma vez que o elemento esperado não foi exibido na tela.');
    //     } else {
    //         cy.get(el.Shared.btnModalMessage, { timeout: 240000 })
    //             .as('modalMessage')
    //             .then(($modals) => {
    //                 $modals.each((index, $modal) => {
    //                     cy.wrap($modal)
    //                         .then(($modal) => {
    //                             const modalMessage = $modal.text();
    //                             if (modalMessage.includes('Ocorreu um erro ao processar a solicitação. Por favor, tente novamente mais tarde.')) {
    //                                 throw new Error('Lamentamos informar que ocorreu uma falha de comunicação com o servidor em nuvem responsável pelo armazenamento das receitas. Por favor, verifique a aplicação para obter mais informações.');
    //                             }
    //                             else {
    //                                 cy.waitUntil(() => Cypress.$('.modal-footer > .btn.btn-primary').length > 0, { timeout: 240000 })
    //                                     .then(() => {
    //                                         cy.get('.modal-footer > .btn.btn-primary')
    //                                             .click({ multiple: true, force: true, timeout: 5000 });
    //                                     });
    //                                 cy.waitUntil(() => Cypress.$('.modal-footer > .btn.btn-primary').length > 0, { timeout: 240000 })
    //                                     .then(() => {
    //                                         cy.get('.modal-footer > .btn.btn-primary')
    //                                             .click({ multiple: true, force: true, timeout: 5000 });
    //                                     });
    //                             }
    //                         });
    //                 });
    //             });
    //     }
    // });




    cy.getElementAndType(textInternalObservationRecipes, dataParameters.Recipe.import.textNoteRecipe)

    const checkPriorityRecipe = (importData: any): void => {
        const prioritys: PriorityRecipe[] = [];
        for (const [prop, value] of Object.entries(importData)) {
            if (value && PriorityRecipe[prop]) {
                prioritys.push(PriorityRecipe[prop]);
            }
        }
        for (const priority of prioritys) {
            cy.getElementAndCheck(priority);
        }
    };
    checkPriorityRecipe(dataParameters.Recipe.import);

    const message: CheckAndThrowError[] = [
        {
            condition: Cypress.$(importImageRecipes).val() !== null && Cypress.$(importImageRecipes).val() !== '',
            errorMessage: 'Por favor, faça a importação de uma imagem de recipe.',
        },
        {
            condition: Cypress.$(prescriberRecipes).val() !== null && Cypress.$(prescriberRecipes).val() !== '',
            errorMessage: 'Por favor, relacione um médico a esta recipe.',
        },
        {
            condition: Cypress.$(patientRecipes).val() !== null && Cypress.$(patientRecipes).val() !== '',
            errorMessage: 'Por favor, relacione um patient a esta recipe.',
        },
        {
            condition: Cypress.$(attendantResponsibleRecipes).val() !== null && Cypress.$(attendantResponsibleRecipes).val() !== '',
            errorMessage: 'Por favor, relacione um atendente responsável a esta recipe.',
        },
        {
            condition: Cypress.$(channelReceiptImport).val() !== null && Cypress.$(channelReceiptImport).val() !== '',
            errorMessage: 'Por favor, escolha um canal de contato.',
        },
        {
            condition: Cypress.$(dateReceiptRecipes).val() !== null && Cypress.$(dateReceiptRecipes).val() !== '',
            errorMessage: 'Por favor, defina uma data de recebimento da recipe.',
        },
        {
            condition: Cypress.$(`input[name="receita_tipo"][value="${dataParameters.Recipe.import.numberRecipe}"]`).val() !== null && Cypress.$(`input[name="receita_tipo"][value="${dataParameters.Recipe.import.numberRecipe}"]`).val() !== '',
            errorMessage: 'Por favor, defina qual o tipo da recipe.',
        },
        {
            condition: Cypress.$(clusterRecipes).val() !== null && Cypress.$(clusterRecipes).val() !== '',
            errorMessage: 'Por favor, escolha um cluster.',
        },
    ]
    const checkAndThrowError = (params: CheckAndThrowError[], defaultMessage: string) => {
        const successMessage = 'Sucesso! Uma nova recipe foi gerada...'
        for (const { condition, errorMessage } of params) {
            if (condition && errorMessage === defaultMessage || !condition && successMessage === defaultMessage) {
                throw new Error(`${errorMessage}`);
            } else {
                return cy.wrap({ success: 'Não foi identificado nenhum erro de condição ou requisito.' })
            }
        }
    }

    cy.getElementAndClick(saveRecipes)

    const $progressBar = cy.get(barProgressSaveRecipe).as('barProgressSaveRecipe')
        .then(() => {
            if (!Cypress.$($progressBar).is(':visible')) {
                cy.get(modalMessage, { timeout: 60000 })
                    .should('be.visible')
                    .as('messageModalAlias')
                    .then(($modal) => {
                        const modalMessage = $modal.text();
                        checkAndThrowError(message, modalMessage);
                        cy.getElementAndClick(okModalMessage);
                    })
                if (cy.get(openModalRegisterRecipes).should('be.visible')) {
                    cy.wrap(null).then(() => {
                        cy.wait(3000);
                        cy.getElementAndClick(dateReceiptRecipes, dateReceiptRecipes);
                        cy.captureRecipeNumber(numberRecipe);
                        cy.wrap({ success: 'A importação da recipe foi concluída com êxito e o número da recipe foi registrado.' });
                    })
                }
            } else {
                cy.get('@barProgressSaveRecipe', { timeout: 60000 })
                throw new Error('Solicitamos a gentileza de verificar o status da importação de receitas, uma vez que o processo ainda não foi concluído após 60 segundos. Agradecemos sua atenção.')
            }
        })
    cy.wrap({ success: 'O processo de importação foi concluído com êxito.' });

})