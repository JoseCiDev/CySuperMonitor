/// <reference path="../cypress.d.ts" />


import {
    elements as el,
    faker,
    dataParameters,
    SearchRecipe,
    mount,
    Messages
} from '../../import';


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
    standardTreatmentTime,
    cancelTimeTreatment,
    reimportFormulas,
    saveTimeTreatment,
    budgetMessageModalElement: budgetMessageModalElement,
    modalConfirmationBudgetElement: modalConfirmationBudgetElement,
    paymentMethodElement,
    chosenBudgetForConfirmation: chosenBudget,
    insertRepeatTime,
    saveDataConfirmationBudget: saveDataConfirmationBudget,
    monitoringService,
    channelConfirmationBudget: channelConfirmationBudget,
    sendEmailTracking,
    releaseBudgetForInclusionElement: noShowBudgetInclusion,
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
    budgetHasRecipeElement,
    urgentBudgetElement: urgentBudgetElement,
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

Cypress.Commands.add('configureRelationshipAtendenteClusterPrescriber', (fileName: string) => {
    cy.readFile(fileName).then((ClusterPrescriberAttendant: { attendants: { name: string; cluster: string; prescribers: { name: string }[] }[] }) => {

        function mapClusterValue(clusterName: string): string {
            switch (clusterName) {
                case 'Cluster1':
                    return dataParameters.relationshipsPrescriberAttendantAndCluster.Cluster1;
                case 'Cluster2':
                    return dataParameters.relationshipsPrescriberAttendantAndCluster.Cluster2;
                case 'Cluster3':
                    return dataParameters.relationshipsPrescriberAttendantAndCluster.Cluster3;
                case 'Cluster4':
                    return dataParameters.relationshipsPrescriberAttendantAndCluster.Cluster4;
                case 'Cluster5':
                    return dataParameters.relationshipsPrescriberAttendantAndCluster.Cluster5;
                default:
                    throw new Error(Messages.return.failure.CLUSTER_NOT_REGISTERED);
            }
        }

        let nameAttendantRelationship: string;
        let NamePrescriberRelationship: string;
        const attendants = ClusterPrescriberAttendant.attendants;

        for (const ClusterPrescriberAttendant of attendants) {
            const attendant: string = ClusterPrescriberAttendant.name;
            const cluster: string = mapClusterValue(ClusterPrescriberAttendant.cluster);
            const prescribers = ClusterPrescriberAttendant.prescribers;

            cy.getElementAndClick(settingsMenu, subMenuClustersGroups, relations, searchFilters);

            cy.getElementAndType({ [search]: attendant });

            cy.getElementAndClick(manageRelationship)
                ;

            for (const prescriberData of prescribers) {
                const prescriberName = prescriberData.name;
                const createRelationship = (): void => {
                    cy.getSelectOptionByValue([{ element: selectCluster, value: cluster }]);
                    cy.log(cluster)
                    cy.getElementAndClick(containerSelectPrescriber)
                        ;

                    cy.get(selectPrescriber)
                        .type(prescriberName)
                        .wait(2000)
                        .type('{downarrow}{enter}', { timeout: 5000 });
                    cy.log(prescriberName)

                    cy.get(addAttendantClusterPrescriberRelationship, { timeout: 5000 })
                        .click({ timeout: 5000 });
                    cy.get(containerMessageRelationship)
                        .should('be.visible')
                        .then(($modal) => {
                            const messages = [
                                'Adicionado com sucesso!',
                            ];
                            for (const successMessage of messages) {
                                if (cluster.length < 1 && $modal.text().includes(successMessage)) {
                                    throw new Error(Messages.return.failure.CLUSTER_OR_PRESCRIBER_NOT_SELECTED.replace('{successMessage}', successMessage));
                                }
                            }
                            if ($modal.text().includes('Não foi possível adicionar.')) {
                                cy.get(prescriberRelationshipCreated)
                                    .invoke('text')
                                    .then((textPrescritor) => {
                                        const regex = /^([^\d-]+)/;
                                        let matchArray = textPrescritor.match(regex);
                                        NamePrescriberRelationship = matchArray[1]

                                        cy.get(createdRelationshipAttendant)
                                            .invoke('text')
                                            .then((textAtendente) => {
                                                matchArray = textAtendente.match(regex);
                                                nameAttendantRelationship = matchArray[1];

                                                if (nameAttendantRelationship !== attendant) {
                                                    cy.getElementAndClick(okModalMessage)
                                                        , { timeout: 10000 };
                                                    deleteRelationship();
                                                    cy.getElementAndClick(relations, searchFilters);
                                                    cy.getElementAndType({ [search]: attendant });
                                                    cy.getElementAndClick(manageRelationship)
                                                        ;
                                                }
                                                else {
                                                    cy.getElementAndClick(okModalMessage)
                                                        , { timeout: 10000 };
                                                }
                                            })
                                    });
                            }
                            else {
                                cy.getElementAndClick(okModalMessage)
                                    , { timeout: 10000 };
                            }
                        })
                }
                createRelationship();

                const deleteRelationship = (): void => {
                    cy.getElementAndClick(relations)
                        ;

                    cy.get(search)
                        .type(nameAttendantRelationship);

                    cy.getElementAndClick(manageRelationship)
                        ;

                    cy.get(searchPrescriberRelationshipManage, { timeout: 1000 })
                        .type(NamePrescriberRelationship.trim(), { timeout: 1000 });

                    cy.get(searchPrescriberRelationshipManage, { timeout: 1000 })
                        .click({ timeout: 1000 });

                    cy.get(selectPrescriberFound, { timeout: 1000 })
                        .check({ timeout: 1000 });

                    cy.get(removeSelectedRelationship, { timeout: 1000 })
                        .click({ timeout: 1000 });

                    cy.get(btnSuccessModalElement, { timeout: 1000 })
                        .click({ timeout: 1000 });

                    cy.getElementAndClick(okModalMessage, relations, searchFilters), { timeout: 10000 };

                    cy.getElementAndType({ [search]: attendant });

                    cy.getElementAndClick(manageRelationship)
                        ;

                    createRelationship();
                }
            }
        }
    });
    return cy.wrap({ success: 'Configuração realizado com sucesso.' });
});
