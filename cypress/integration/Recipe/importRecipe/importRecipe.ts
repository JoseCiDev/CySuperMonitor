/// <reference types="cypress" />

import {
    elements as el,
    faker,
// dataParameters,
} from '../../../import';

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




export const insertInternalObservation = (areaText: string, content: string, useLoremIpsum?: boolean): void => {
    if (useLoremIpsum) {
        content = faker.lorem.paragraph();
    }
    cy.get(areaText)
        .should('exist')
        .clear()
        .type(content)
        .should('not.be.empty');
};

export const markUrgent = (urgent: string): void => {
    cy.getElementAndClick(urgent);
};

export const markCustomerAlert = (clientAlert: string): void => {
    cy.getElementAndClick(clientAlert)
};

export const markMedicineControlled = (medicineControlled: string): void => {
    cy.getElementAndClick(medicineControlled)
};

// export const saveRecipe = (saveImport): void => {
//     cy.get(saveImport, { timeout: 20000 })
//         .click({ force: true });

//     if (Cypress.$(okModalMessage).length > 0 && Cypress.$(okModalMessage).is(':visible')) {
//         cy.get(okModalMessage, { timeout: 20000 })
//             .click();
//     } else {
//         cy.log('O teste será prosseguido, uma vez que a modal não foi exibida na tela.')
//     }
//     cy.get(saveImport, { timeout: 20000 }).then(($element) => {
//         cy.wrap($element)
//             .click();
//     });


//     cy.url().should('contain', dataParameters.Url.importRecipes)
// };


// describe('Tela importação de receitas.', function () {

//     beforeEach(function () {

//     })


//     it('Deve acessar importar receitas logado com perfil atendente', function () {
//         cy.login(dataEnvironment.USER_ATENDENTE1, dataEnvironment.PASSWORD, el.Login.messageErrorLogin, dataEnvironment.BASE_URL_HOMOLOG)
//             .then((result) => {
//                 assert.exists(result.success, result.error)
//             })
//         cy.getElementAndClick(menuRecipesElement, menuImportRecipesElement, menuRecipesReduced)
;
//     });

//     it('Deve acessar importar receitas logado com perfil inclusão', function () {
        
//         cy.login(dataEnvironment.USER_INCLUSAO, dataEnvironment.PASSWORD, el.Login.messageErrorLogin, dataEnvironment.BASE_URL_HOMOLOG).then((result) => {
//             assert.exists(result.success, result.error)
//         });
//         cy.getElementAndClick(menuRecipesElement, menuImportRecipesElement, menuRecipesReduced)
;
//     })

//     it('Deve acessar importar receitas logado com perfil conferência de entrada', function () {
        
//         cy.login(dataEnvironment.USER_CONFENTRADA, dataEnvironment.PASSWORD, el.Login.messageErrorLogin, dataEnvironment.BASE_URL_HOMOLOG).then((result) => {
//             assert.exists(result.success, result.error)
//         });
//         cy.getElementAndClick(menuRecipesElement, menuImportRecipesElement, menuRecipesReduced)
;
//     })

//     it('Deve acessar importar receitas logado com perfil conferência de saída', function () {
        
//         cy.login(dataEnvironment.USER_CONFSAIDA, dataEnvironment.PASSWORD, el.Login.messageErrorLogin, dataEnvironment.BASE_URL_HOMOLOG).then((result) => {
//             assert.exists(result.success, result.error)
//         });
//         cy.getElementAndClick(menuRecipesElement, menuImportRecipesElement, menuRecipesReduced)
;
//     })

//     it('Deve acessar importar receitas logado com perfil expedição', function () {
    
//         cy.login(dataEnvironment.USER_EXPEDICAO, dataEnvironment.PASSWORD, el.Login.messageErrorLogin, dataEnvironment.BASE_URL_HOMOLOG).then((result) => {
//             assert.exists(result.success, result.error)
//         });
//         cy.getElementAndClick(menuRecipesElement, menuImportRecipesElement, menuRecipesReduced)
;
//     })



//     it('Deve realizar search de Recipes filtrando por data', function () {
//         // cy.login(dataEnvironment.USER_ORCAMENTISTA, dataEnvironment.PASSWORD);
//         cy.login(dataEnvironment.USER_ORCAMENTISTA, dataEnvironment.PASSWORD, el.Login.messageErrorLogin, dataEnvironment.BASE_URL_HOMOLOG).then((result) => {
//             assert.exists(result.success, result.error)
//         });
//         cy.getElementAndClick(menuRecipesElement, menuImportRecipesElement)
;

//         cy.searchRecipe({
//             initialDate: dataParameters.Recipe.search.initialDate,
//             finalDate: dataParameters.Recipe.search.finalDate,
//             prescriber: dataParameters.Prescriber.crmPrescriber,
//         });
//     });



//     it('Deve realizar search de Recipes filtrando por patient', function () {
//         cy.login(dataEnvironment.USER_ATENDENTE1, dataEnvironment.PASSWORD, el.Login.messageErrorLogin, dataEnvironment.BASE_URL_HOMOLOG)
//             .then((result) => {
//                 assert.exists(result.success, result.error)
//             })
//         cy.getElementAndClick(menuRecipesElement, menuImportRecipesElement)
;

//         cy.searchRecipe({
//             initialDate: dataParameters.Recipe.search.initialDate,
//             finalDate: dataParameters.Recipe.search.finalDate,
//             patient: dataParameters.Patient.codePatient,
//         });
//     });



//     it('Deve realizar search de Recipes filtrando por prescriber', function () {
//         cy.login(dataEnvironment.USER_ATENDENTE1, dataEnvironment.PASSWORD, el.Login.messageErrorLogin, dataEnvironment.BASE_URL_HOMOLOG)
//             .then((result) => {
//                 assert.exists(result.success, result.error)
//             })
//         cy.getElementAndClick(menuRecipesElement, menuImportRecipesElement)
;


//         cy.searchRecipe({
//             initialDate: dataParameters.Recipe.search.initialDate,
//             finalDate: dataParameters.Recipe.search.finalDate,
//             prescriber: dataParameters.Prescriber.crmPrescriber,
//         });
//     });

//     it('Deve realizar search de Recipes filtrando por cluster', function () {
//         cy.login(dataEnvironment.USER_ATENDENTE1, dataEnvironment.PASSWORD, el.Login.messageErrorLogin, dataEnvironment.BASE_URL_HOMOLOG)
//             .then((result) => {
//                 assert.exists(result.success, result.error)
//             })
//         cy.getElementAndClick(menuRecipesElement, menuImportRecipesElement)
;
//         cy.searchRecipe({
//             initialDate: dataParameters.Recipe.search.initialDate,
//             finalDate: dataParameters.Recipe.search.finalDate,
//             cluster: dataParameters.Recipe.search.cluster,
//         });
//     });

//     it('Deve realizar search de Recipes filtrando por budget', function () {
//         cy.login(dataEnvironment.USER_ATENDENTE1, dataEnvironment.PASSWORD, el.Login.messageErrorLogin, dataEnvironment.BASE_URL_HOMOLOG)
//             .then((result) => {
//                 assert.exists(result.success, result.error)
//             })
//         cy.getElementAndClick(menuRecipesElement, menuImportRecipesElement)
;
//         cy.searchRecipe({
//             initialDate: dataParameters.Recipe.search.initialDate,
//             finalDate: dataParameters.Recipe.search.finalDate,
//             budget: dataParameters.BudgetAndBranch.budget,
//             pendency: dataParameters.pendency.All
//         });
//     });

//     it('Deve realizar search de Recipes filtrando por canal de recebimento', function () {
//         cy.login(dataEnvironment.USER_ATENDENTE1, dataEnvironment.PASSWORD, el.Login.messageErrorLogin, dataEnvironment.BASE_URL_HOMOLOG)
//             .then((result) => {
//                 assert.exists(result.success, result.error)
//             })
//         cy.getElementAndClick(menuRecipesElement, menuImportRecipesElement)
;
//         cy.searchRecipe({
//             initialDate: dataParameters.Recipe.search.initialDate,
//             finalDate: dataParameters.Recipe.search.finalDate,
//             channelReceipt: dataParameters.Recipe.search.receivingDate
//         });
//     });

//     it('Deve realizar search de Recipes filtrando por atendente responsável', function () {
//         cy.login(dataEnvironment.USER_ATENDENTE1, dataEnvironment.PASSWORD, el.Login.messageErrorLogin, dataEnvironment.BASE_URL_HOMOLOG)
//             .then((result) => {
//                 assert.exists(result.success, result.error)
//             })
//         cy.getElementAndClick(menuRecipesElement, menuImportRecipesElement)
;
//         cy.searchRecipe({
//             initialDate: dataParameters.Recipe.search.initialDate,
//             finalDate: dataParameters.Recipe.search.finalDate,
//             attendantResponsibleRecipes: dataParameters.Recipe.search.attendantResponsibleRecipes
//         });
//     });

//     it('Deve realizar search de Recipes filtrando por pendências', function () {
//         cy.login(dataEnvironment.USER_ATENDENTE1, dataEnvironment.PASSWORD, el.Login.messageErrorLogin, dataEnvironment.BASE_URL_HOMOLOG)
//             .then((result) => {
//                 assert.exists(result.success, result.error)
//             })
//         cy.getElementAndClick(menuRecipesElement, menuImportRecipesElement)
;
//         cy.searchRecipe({
//             initialDate: dataParameters.Recipe.search.initialDate,
//             finalDate: dataParameters.Recipe.search.finalDate,
//             pendency: dataParameters.pendingsFilter.Pending
//         });
//     });



   


//     it('Deve realizar marcação de uso nas receitas.', function () {
//         cy.getElementAndClick(menuRecipesElement, menuImportRecipesElement)
;

//         cy.markUsage(checkboxMarkUse, dataParameters.Recipe.search.markUserUsage);
//     });



//     it('Deve visualizar receitas', function () {
//         cy.getElementAndClick(menuRecipesElement, menuImportRecipesElement, actions)
;

//         cy.viewRecipe(viewRecipes);
//     });



//     it('Deve clonar receitas.', function () {
//         cy.get(menuRecipesElement,).click();
//         cy.get(menuImportRecipesElement).click()
//         cy.get(actions).click();

//         cy.cloneRecipe(cloneRecipes);
//     });



//     it('Deve excluir receitas.', function () {

//         cy.getElementAndClick(menuRecipesElement, menuImportRecipesElement, actions)
;

//         cy.deleteRecipe(deleteRecipes);

//         cy.getElementAndClick(btnModalMessage)
;
//     });



    // it('Deve inserir observação farmacêutica.', function () {
    //     cy.getElementAndClick(menuRecipesElement, menuImportRecipesElement,actions);
    //     cy.insertPharmaceuticalObservation(accessPharmaceuticalObservations, dataParameters.Recipe.senhaObservacaoFarmaceutica, dataParameters.Recipe.textoObservacaoFarmaceutica);
    // });



    // it('Deve excluir observação farmacêutica', function () {
    //     cy.acessarMenuReceitas(menuRecipesElement,);

    //     cy.acessarImportarReceitas(menuImportRecipesElement);
    //     

    //     cy.getElementAndClick(actions);
    //     cy.deletePharmaceuticalObservation(accessPharmaceuticalObservations);

    // });



    // it('Deve criar dúvida técnica.', function () {
    //     cy.acessarMenuReceitas(menuRecipesElement,);

    //     cy.acessarImportarReceitas(menuImportRecipesElement);
    //     

    //     cy.getElementAndClick(actions);
    //     cy.CreateTechnicalDoubt(accessingDoubtsTechnical, dataParameters.categoriaDuvidaTecnica.DuvidaInterna, dataParameters.Recipe.textoDuvidaTecnica, dataParameters.Usuario.usuarioAtribuido);

    // });



    // it('Deve update modal de dúvida técnica.', function () {
    //     cy.acessarMenuReceitas(menuRecipesElement,);

    //     cy.acessarImportarReceitas(menuImportRecipesElement);
    //     

    //     cy.getElementAndClick(actions);
    //     cy.updateModalTechnicalQuestion(atualizarModalDuvidasTecnicas);
    // });



    // it('Deve alterar o responsável pela resposta da dúvida técnica ', function () {
    //     cy.acessarMenuReceitas(menuRecipesElement,);

    //     cy.acessarImportarReceitas(menuImportRecipesElement);
    //     

    //     cy.getElementAndClick(actions);
    //     cy.changeResponsibleDoubtTechinical(accessingDoubtsTechnical, dataParameters.Usuario.usuarioAtribuido);
    // });



    // it('Deve marcar dúvida técnica como resolved.', function () {
    //     cy.acessarMenuReceitas(menuRecipesElement,);

    //     cy.acessarImportarReceitas(menuImportRecipesElement);
    //     

    //     cy.getElementAndClick(actions);
    //     cy.markDoubtTechnicalSolved(accessingDoubtsTechnical);
    // });



    // it('Deve excluir dúvida técnica.', function () {
    //     cy.acessarMenuReceitas(menuRecipesElement,);

    //     cy.acessarImportarReceitas(menuImportRecipesElement);
    //     

    //     cy.getElementAndClick(actions);
    //     cy.deleteTechnicalQuestion(accessingDoubtsTechnical);
    // });



    // it('Deve responder dúvida técnica.', function () {
    //     cy.acessarMenuReceitas(menuRecipesElement,);

    //     cy.acessarImportarReceitas(menuImportRecipesElement);
    //     

    //     cy.getElementAndClick(actions);
    //     cy.answerDoubtTechnical(accessingDoubtsTechnical, dataParameters.statusDuvidaTecnica.AguardandoPrescritor, dataParameters.Recipe.textoRespostaDuvidaTecnica);
    // });



    // it('Deve editar receita', function () {
    //     cy.acessarMenuReceitas(menuRecipesElement,);

    //     cy.acessarImportarReceitas(menuImportRecipesElement);
    //     

    //     cy.getElementAndClick(actions);

    //     cy.getElementAndClick(editRecipe);
    //     cy.wait(2000)



    //     // cy.inserirTipoReceita();
    //     // cy.editRecipe('img/ReceitaJpeg(1).jpeg', importImageRecipes, dataParameters.Prescriber.crmPrescriber.toString(), dataParameters.parameterSearchPatient.Cdcli, dataParameters.Patient.codePatient.toString(), dataParameters.cluster.clusterInjetaveis.toString(), attendantResponsibleRecipes, dataParameters.Usuario.usuarioAtribuido,attendantResponsibleRecipes, dataParameters.Usuario.usuarioAtribuido,dateReceiptRecipes);


    // })

// })