


interface Elements<S = string> {

    Shared: {
        suggestionAutocomplete: S;
        suggestionsAutocompleteElement: S;
        containerMessage: S;
        okModalMessage: S;
        btnSuccessModalElement: S;
        btnModalFailureElement: S;
        modalMessage: S;
        btnModalMessage: S;
        btnModalChangelog: S;
        modalElement: S;
    };

    Login: {
        user: S;
        password: S;
        acess: S;
        logout: S;
        messageErrorLogin: S;
    };

    Recipes: {
        menuRecipesElement: S;
        prescriberRecipes: S;
        menuImportRecipesElement: S;
        menuManageRecipes: S;
        openModalRegisterRecipes: S;
        importPDFRecipes: S;
        importImageRecipes: S;
        removeImageRecipes: S;
        modalSuggestionRelationshipPrescriber: S;
        parameterSearchPatient: S;
        patientRecipeElement: S;
        channelReceiptImportElement: S;
        clusterRecipes: S;
        budgetistRecipes: S;
        responsibleForRecipeElement: S;
        dateReceiptRecipes: S;
        juntocomRecipes: S;
        autocompleteJuntocomRecipes: S;
        internalObservationRecipes: S;
        textInternalObservationRecipes: S;
        controlledmedicationRecipeElement: S;
        urgentRecipeElement: S;
        clientAlertRecipeElement: S;
        retailRecipeElement: S;
        saveRecipes: S;
        closeRegisterRecipes: S;
        editRecipe: S;
        recipeSearchModal: S;
        filterDateStartSearchRecipesElement: S;
        filterEndDateSearchRecipesElement: S;
        clusterSearchElement: S;
        recipeSearchElement: S;
        patientSearchElement: S;
        prescriberSearchElement: S;
        searchBudgetScreenRecipesElement: S;
        lastModifierSearchElement: S;
        budgetistSearchElement: S;
        attendantResponsibleSearchElement: S;
        channelReceiptSearchElement: S;
        filterPendenciasSearchElement: S;
        filterPendenciasAll: S;
        pendingFilter: S;
        pendingFilterLinked: S;
        buttonSearchRecipesElement: S;
        labelSearchRecipes: S;
        numberRecipeElement: S;
        dateReceiptGrid: S;
        checkboxMarkUse: S;
        containerInsertUser: S;
        select: S;
        selectedUser: S;
        passwordRecipe: S;
        applyUncheckUse: S;
        viewRecipes: S;
        actions: S;
        tabPdfViewRecipes: S;
        tabOriginalViewRecipes: S;
        internalObservationsTabViewRecipes: S;
        tabInformationFcertaViewRecipes: S;
        rulerViewRecipes: S;
        closeViewRecipes: S;
        cloneRecipes: S;
        modalObservationsClone: S;
        clonePharmaceuticalNotes: S;
        deleteRecipes: S;
        accessPharmaceuticalObservations: S;
        tabAddPharmaceuticalObservations: S;
        passwordPharmaceuticalObservations: S;
        textPharmaceuticalObservations: S;
        closeModalPharmaceuticalObservations: S;
        tabDeletePharmaceuticalObservations: S;
        deletePharmaceuticalObservations: S;
        accessDoubtsTechnical: S;
        containerCategoryTechnicalQuestions: S;
        textDoubtsTechnical: S;
        containerCollaborators: S;
        responsibleAnswers: S;
        sendQuestionsTechnical: S;
        closeModalDoubtsTechnical: S;
        updateModalTechnicalQuestions: S;
        containerResponsibleResponseQuestionsTechnical: S;
        ResponsibleResponseQuestionsTechnical: S;
        responsibleCurrentResponseQuestionsTechnical: S;
        markDoubtsTechnicalResolved: S;
        deleteDoubtsTechnical: S;
        statusResponseQuestionsTechniques: S;
        textResponseQuestionsTechniques: S;
        sendReplyQuestionsTechnical: S;
        barProgressSaveRecipe: S;
        noMainContact: S;
        patientContactModal: S;
        contactPhone: S;
        applySelectedContact: S;
        recipeStatusInput: (recipeStatus: S) => S;
        deleteRecipeElement: S;
        reloadPageButtonElement: S;
        cloneRecipeElement: S;
        modalCloneRecipeElement: S;
        recipeCodeColumnElement: S;
        lastModifiedColumn: S;
        viewRecipeScreenImportRecipesElement: S;
        customerPhoneToViewRecipesElement: S;
        recipeReceiptChannelViewRecipesElement: S;
        clusterScreenViewRecipesElement:S;
    };

    Services: {
        menuServices: S;
        servicesInProgress: S;
        accessWorkFlowService: S;
        parameterSearchBudgetElement: S;
        cardBudget: S;
        buttonLinkRecipeScreenServiceProgressElement: S;
        buttonUnlinkRecipeScreenServiceProgress: S;
        fieldLinkRecipeElement: S;
        budgetInProgressElement: S;
        buttonView: S;
        fieldSearchBudgetElement: S;
        searchBranch: S;
        sendSearch: S;
        brazilian: S;
        stranger: S;
        useFcertaOriginatingTelephoneNumber: S;
        phoneCustomer: S;
        dontSendCustomerMessage: S;
        languageCustomer: S;
        cancelChatguruIntegration: S;
        saveNumberChatguru: S;
        budgetist: S;
        modalTreatmentTime: S;
        treatmentTimeModalHeader: S;
        insertTreatmentTime: S;
        standardTreatmentTime: S;
        cancelTimeTreatment: S;
        reimportFormulas: S;
        saveTimeTreatment: S;
        budgetMessageModalElement: S;
        modalConfirmationBudgetElement: S;
        paymentMethodElement: S;
        chosenBudgetForConfirmation: S;
        insertRepeatTime: S;
        monitoringService: S;
        channelConfirmationBudget: S;
        sendEmailTracking: S;
        releaseBudgetForInclusionElement: S;
        releaseBudgetCashierElement: S;
        noShowBudgetCaixa: S;
        observationFromCashierToCounter: S;
        detailedNote: S;
        fieldStatusPayment: S;
        shippingAddress: S;
        addressShippingSelected: S;
        shipmentObservation: S;
        fieldFormShipping: S;
        juntocomBudgetConfirmation: S;
        juntocomClinicaHigashi: S;
        promisedFieldFor: S;
        fieldAromasSachet: S;
        aromaCapsuleField: S;
        generalObservation: S;
        budgetHasRecipeElement: S;
        urgentBudgetElement: S;
        cancelBudgetConfirmation: S;
        sendChatguruMessage: S;
        PreViewBudget: S;
        closePreViewBudget: S;
        sendconfirmBudget: S;
        showAll: S;
        hasSpecialFormula: S;
        generateLinkPayment: S;
        relateRecipeBudget: S;
        showBudgetsClosed: S;
        viewBudgetElement: S;
        reopenBudget: S;
        confirmReopenBudget: S;
        userOptions: S;
        openModalImportBudget: S;
        importBudget: S;
        importBranch: S;
        importHowNewService: S;
        syncBudget: S;
        hopscotchConfirmedInformationBoard: S;
        budgetHopscotchInformationBoardConfirmed: S;
        budgetistFrameInformationAmarelinhaConfirmed: S;
        inclusionFrameInformationAmarelinhaConfirmed: S;
        attendantHopscotchInformationBoardConfirmed: S;
        textFrameInformationHopscotchConfirmed: S;
        budgetBudgetist: S;
        BudgetAttendant: S;
        containerBudgets: S;
        homeMenuElement: S;
        searchBudgetByBranchElement: S;
        searchAllBudgetsElement: S;
        searchButtonElement: S;
        paymentSelectorInput: (index: number) => S;
        updateSelectorStatusInput: (index: number) => S;
        UpdatePaymentStatusOnServiceScreenElement: S;
        viewSelectorInput: (index: number) => S;
        saveDataConfirmationBudget: S;
        cashierObservationElement: S;
        detailedSaleElement: S;
        expeditionObservationElement: S;
        shippingMethodElement: S;
        promisedToElement: S;
        aromaSachetElement: S;
        capsuleAromaElement: S;
        generalObservationElement: S;
        sendAutomaticBudgetConfirmationMessageElement: S;
        recipeElementAvailableForLinkingElement: S;
        modalToLinkRecipeElement: S;
        linkedRecipeProgressBarElement: S;
        successfullyLinkedRecipesProgressBarElement: S;
        closeModalLinkRecipeElement: S;
        feedbackMessageElement: S;
        expandSideMenuElement: S;
        modalLinkRecipeElement: S;
        modalClientNotFoundElement: S;
        setUpPhoneContactElement: S;
        telephoneContactConfigurationModalElement: S;
        insertCustomerContactPhoneNumberElement: S;
        savePhoneContactNumberElement: S;
        confirmInsertionCustomerTelephoneContactElement: S;
        serviceBudgeterElement: S;
        customerServiceAttendantElement: S;

        accessSelfcheckoutElement: S;
        selectAromaOfPharmaceuticalFormulaElement: S;
        goToPaymentElement: S;
        makePaymentUsingTheSelectedPaymentMethodElement: S;
        telephoneElement: S;
        emailElement: S;
        fullNameElement: S;
        birthDateElement: S;
        cpfElement: S;
        rgElement: S;
        useRegisteredAddressElement: S;
        zipCodeElement: S;
        stateElement: S;
        cityElement: S;
        districtElement: S;
        streetElement: S;
        houseNumberElement: S;
        addressComplementElement: S;
        isMyDeliveryAddressElement: S;
        cardholderNameElement: S;
        cpfCnpjElement: S;
        cardNumberElement: S;
        expirationMonthElement: S;
        expirationYearElement: S;
        securityCodeElement: S;
        installmentsElement: S;
        makePaymentElement: S;
        paymentScreenSuccessElement: S;
        paymentDateServiceScreenElement: S;
        paymentDataOnServiceScreenElement: S;
    };

    Settings: {
        settingsMenu: S;
        subMenuClustersGroups: S;
        relations: S;
        containerFilters: S;
        containerProfile: S;
        searchFilters: S;
        search: S;
        manageRelationship: S;
        selectCluster: S;
        containerSelectPrescriber: S;
        selectPrescriber: S;
        addAttendantClusterPrescriberRelationship: S;
        containerMessageRelationship: S;
        createdRelationshipAttendant: S;
        prescriberRelationshipCreated: S;
        removeSelectedRelationship: S;
        SearchPrescriberManageRelationship: S;
        searchPrescriberRelationshipManage: S;
        selectPrescriberFound: S;
    };
}

export const elements: Elements = {

    Shared: {
        suggestionAutocomplete: '.autocomplete-suggestion',
        suggestionsAutocompleteElement: '.autocomplete-suggestions',
        containerMessage: '.bootbox-body',
        okModalMessage: 'body > div.bootbox.modal.fade.bootbox-alert.in > div.modal-dialog > div > div.modal-footer > button',
        modalMessage: 'body > div.bootbox.modal.fade.bootbox-alert.in > div.modal-dialog > div > div.modal-body > div',
        btnSuccessModalElement: '.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary',
        btnModalFailureElement: 'div.modal-dialog > div > div.modal-footer > button.btn.btn-secondary.pull-left',
        btnModalMessage: '.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn',
        btnModalChangelog: '#changelogs > .modal-dialog > .modal-content > .modal-footer > .btn',
        modalElement: '.modal-footer > .btn',
    },

    Login: {
        user: ':nth-child(1) > .form-control',
        password: ':nth-child(2) > .form-control',
        acess: '.btn-primary',
        logout: '.navbar > .nav > :nth-child(5) > a',
        messageErrorLogin: 'p',
    },


    Recipes: {
        menuRecipesElement: '#side-menu > li:nth-child(6) > a',
        menuImportRecipesElement: '.active > .nav > :nth-child(2) > a',
        menuManageRecipes: '#side-menu > li.active > ul > li.active > a',
        openModalRegisterRecipes: '#receita_register',
        importPDFRecipes: '#btnImportPdfRec',
        importImageRecipes: '.tui-image-editor-header-buttons > div > .tui-image-editor-load-btn',
        removeImageRecipes: '.btn btn-danger btn-del-img m-sm',
        prescriberRecipes: '#modalMedicoRec',
        modalSuggestionRelationshipPrescriber: '.bootbox .modal-dialog .modal-content .modal-footer .btn-primary',
        parameterSearchPatient: '#t2_154c',
        patientRecipeElement: '#modalPacienteRec',
        channelReceiptImportElement: '#modalCanalContato',
        clusterRecipes: '#modalCluster',
        budgetistRecipes: '#modalOrcamentistaRec',
        responsibleForRecipeElement: '#modalAtendenteRec',
        dateReceiptRecipes: '#modalDataRec',
        juntocomRecipes: '#groupMainEntitiesModal > div:nth-child(2) > div:nth-child(4) > div > span',
        autocompleteJuntocomRecipes: 'ul.select2-results__options',
        internalObservationRecipes: '.panel-body > .note-editor > .note-toolbar',
        textInternalObservationRecipes: '.panel-body > .note-editor > .note-editable',
        controlledmedicationRecipeElement: '#medicamentoControlado',
        urgentRecipeElement: '#modalUrgente',
        clientAlertRecipeElement: '#clienteAlerta',
        retailRecipeElement: '#checkboxVarejo',

        saveRecipes: '#save_receita',
        closeRegisterRecipes: '#modal-receitas > div.modal-dialog > div > div.modal-footer > button.btn.btn-white',
        editRecipe: ':nth-child(1) > .actions-fa > .dropdown > .dropdown-menu > .list-group > .edit-recipe',

        recipeSearchModal: '#centerHeadFilter',
        filterDateStartSearchRecipesElement: '#filterReceitas > div:nth-child(1) > div:nth-child(1) > div > input',
        filterEndDateSearchRecipesElement: '#filterReceitas > div:nth-child(1) > div:nth-child(2) > div > input',
        clusterSearchElement: '#filterReceitas > div:nth-child(1) > div:nth-child(3) > div > span > span.selection > span',
        channelReceiptSearchElement: '#filterReceitas > div:nth-child(1) > div:nth-child(4) > div > select',
        recipeSearchElement: '#filterReceitas > div:nth-child(2) > div:nth-child(1) > div > input',
        patientSearchElement: '#pacienteRec',
        prescriberSearchElement: '#medicoRec',
        searchBudgetScreenRecipesElement: '#orcamentoRec',
        lastModifierSearchElement: '#modifyRec',
        budgetistSearchElement: '#orcamentistaRec',
        attendantResponsibleSearchElement: '#atendenteResponRec',
        filterPendenciasSearchElement: 'select[name="pendentes"]',
        filterPendenciasAll: '#filterReceitas > div:nth-child(3) > div:nth-child(4) > div > select > option:nth-child(1)',
        pendingFilter: '#filterReceitas > div:nth-child(3) > div:nth-child(4) > div > select > option:nth-child(2)',
        pendingFilterLinked: '#filterReceitas > div:nth-child(3) > div:nth-child(4) > div > select > option:nth-child(3)',
        buttonSearchRecipesElement: '#filterReceitas > div:nth-child(4) > div > button',
        labelSearchRecipes: '[button type="submit"]&& Procurar',
        numberRecipeElement: '#mainTableReceitas > tbody > tr > td.idReceitaCol',
        dateReceiptGrid: '#mainTableReceitas > thead > tr > th.sorting.sorting_asc',
        checkboxMarkUse: '#mainTableReceitas > tbody > tr > td.usedTrativa',
        containerInsertUser: '#select2-farma-to-auth-container',
        select: '.select2-dropdown > .select2-search > .select2-search__field',
        selectedUser: '.select2-results__option--highlighted',
        passwordRecipe: '#password-farma-auth',
        applyUncheckUse: '#farma-auth-send-btn',
        viewRecipes: ':nth-child(1) > .actions-fa > .dropdown > .dropdown-menu > .list-group > .show-recipe',
        actions: '#mainTableReceitas > tbody > tr:nth-child(1) > td.actions-fa.text-center > div > button',
        tabPdfViewRecipes: '#panel_look_pdf > ul.nav.nav-tabs > li.active > a',
        tabOriginalViewRecipes: '#originalClickVisRe',
        internalObservationsTabViewRecipes: '#panel_look_pdf > ul.nav.nav-tabs > :nth-child(3) > a',
        tabInformationFcertaViewRecipes: '#panel_look_pdf > ul.nav.nav-tabs > :nth-child(4) > a',
        rulerViewRecipes: '#btnReceitaRegua',
        closeViewRecipes: '#modal-recipe-view > .modal-dialog > .modal-content > .modal-header > .close > [aria-hidden="true"]',
        cloneRecipes: ':nth-child(1) > .actions-fa > .dropdown > .dropdown-menu > .list-group > .clone-recipe',
        modalObservationsClone: '#carousel-container',
        clonePharmaceuticalNotes: '#clonar-observacoes',
        deleteRecipes: ':nth-child(2) > .actions-fa > .dropdown > .dropdown-menu > .list-group > .delete-recipe',
        accessPharmaceuticalObservations: ':nth-child(1) > .actions-fa > .dropdown > .dropdown-menu > .list-group > .add-obs',
        tabAddPharmaceuticalObservations: '#tabs > .nav > :nth-child(1) > a',
        passwordPharmaceuticalObservations: '#passModalAddObsReceita',
        textPharmaceuticalObservations: '#textObsAddModalReceita',
        closeModalPharmaceuticalObservations: '#modal-recipe-add-obs > .modal-dialog > .modal-content > .modal-footer > .btn',
        tabDeletePharmaceuticalObservations: '#tab-list-observacoes-farmaceuticas > a',
        deletePharmaceuticalObservations: ':nth-child(1) > :nth-child(5) > .fa',
        accessDoubtsTechnical: ':nth-child(1) > .actions-fa > .dropdown > .dropdown-menu > .list-group > .doubt-farmaceutica',
        containerCategoryTechnicalQuestions: '#select2-selectCatDuvTec-container',
        textDoubtsTechnical: '#newDuvidaTecnica',
        containerCollaborators: '#select2-selectFarmaDuvTec-container',
        responsibleAnswers: '.select2-dropdown > .select2-search > .select2-search__field',
        sendQuestionsTechnical: '#duvidaTecnicaSend',
        closeModalDoubtsTechnical: '#modal-recipe-duv-tec > .modal-dialog > .modal-content > .modal-footer > .btn',
        updateModalTechnicalQuestions: '#updateRenderDuvTec',
        containerResponsibleResponseQuestionsTechnical: '#chatDuvTec > div.groupContainer > div.pendenteMsg > div:nth-child(6) > div > span > span.selection > span > span.select2-selection__arrow',
        ResponsibleResponseQuestionsTechnical: '.select2-dropdown > .select2-search > .select2-search__field',
        responsibleCurrentResponseQuestionsTechnical: 'span.select2-selection__rendered[title*="Atendente"]',
        markDoubtsTechnicalResolved: '#chatDuvTec > div:nth-child(1) > div.pendenteMsg > div:nth-child(7) > div.col.col-sm-12.text-right',
        deleteDoubtsTechnical: ':nth-child(1) > .resolvidoMsg > :nth-child(7) > .col > .fa-trash',
        statusResponseQuestionsTechniques: '#chatDuvTec .groupContainer .row:not(.m-b-sm) .col-sm-12 select.statusDuvidaTecnica',
        textResponseQuestionsTechniques: '#chatDuvTec .groupContainer .row:not(.m-b-sm) .col-sm-12 textarea.form-control',
        sendReplyQuestionsTechnical: '#chatDuvTec .groupContainer .row:not(.m-b-sm) div.col.col-sm-12 button.btn.btn-secondary.m-t-sm.m-b-sm.respDuvT',
        barProgressSaveRecipe: '#modal-receitas > div.modal-dialog > div > div.container-fluid > div > div',
        noMainContact: '.d-flex > .text-right > input',
        patientContactModal: '#modal-paciente-form > .modal-dialog > .modal-content > .modal-body',
        contactPhone: '#choices-from-numbers > .form-control',
        applySelectedContact: '#apply-cel-btn',
        recipeStatusInput: (recipeStatus: string): string => `input[name="receita_tipo"][value="${recipeStatus}"]`,
        deleteRecipeElement: ':nth-child(1) > .actions-fa > .dropdown > .dropdown-menu > .list-group > .delete-recipe',
        reloadPageButtonElement: ':nth-child(5) > .col > .btn',
        cloneRecipeElement: '#mainTableReceitas > tbody > tr:nth-child(1) > td.actions-fa.text-center > div > div > ul > li.list-group-item.clone-receita',
        modalCloneRecipeElement: '.bootbox > .modal-dialog > .modal-content > .modal-body',
        recipeCodeColumnElement: '#mainTableReceitas > tbody > tr:nth-child(1) > td.idReceitaCol',
        lastModifiedColumn: '#mainTableReceitas > thead > tr > th:nth-child(9)',
        viewRecipeScreenImportRecipesElement: '#mainTableReceitas > tbody > tr:nth-child(1) > td.actions-fa.text-center > div > div > ul > li.list-group-item.show-receita',
        customerPhoneToViewRecipesElement: '#despejoDetails > :nth-child(6) > :nth-child(3) > .form-group > div',
        recipeReceiptChannelViewRecipesElement: '#despejoDetails > :nth-child(6) > :nth-child(2) > .form-group > div',
        clusterScreenViewRecipesElement:'#despejoDetails > div:nth-child(5) > div:nth-child(1) > div > div'

    },

    Services: {
        menuServices: '#side-menu > :nth-child(8) > :nth-child(1)',
        servicesInProgress: '.active > .nav-second-level > :nth-child(2) > a',
        accessWorkFlowService: '.nav-second-level > .active > .nav > li > a',
        parameterSearchBudgetElement: '#select2-tipo-filtro-container',
        cardBudget: '#atendimentos-em-andamento > div.ibox-workflow > div.grid > div > div:nth-child(1) > div > div.container-coluna > ul > li:nth-child(8)',
        buttonLinkRecipeScreenServiceProgressElement: '.vinc-rec',
        buttonUnlinkRecipeScreenServiceProgress: '.r-vinc-rec',
        fieldLinkRecipeElement: '#receitaCod',
        relateRecipeBudget: '#modal-recipe-add-vinculo > div.modal-dialog > div > div.modal-footer > button.btn.btn-primary.register-vinculo',
        containerBudgets: '#page-wrapper > div.wrapper.wrapper-content.animated.fadeInRight > div > div > table > tbody > tr',
        budgetInProgressElement: '#side-menu > li.active > ul > li:nth-child(1) > a',
        buttonView: ':nth-child(2) > :nth-child(6) > a.visualizarFvc',
        fieldSearchBudgetElement: '#top-search',
        searchBranch: '#search-form > div:nth-child(1) > input:nth-child(2)',
        sendSearch: '#search-form > div.checkbox.m-l.m-r-xs > [type="submit"][value="buscar"]',
        showAll: '#search-form > div.form-group:nth-child(2) > label input[type="radio"][value="1"]',
        brazilian: '#isBr',
        stranger: '#isNotBr',
        useFcertaOriginatingTelephoneNumber: '#use_this',
        phoneCustomer: '#cli_number',
        dontSendCustomerMessage: '#msg-automatica-chatguru',
        languageCustomer: '#languageCli',
        cancelChatguruIntegration: '.btn btn-white',
        saveNumberChatguru: '#saveChatGuruNumber',
        budgetist: '#budgetist',
        modalTreatmentTime: '#customTimeModal',
        treatmentTimeModalHeader: '#customTimeModal > div.modal-dialog > div > div.modal-header',
        insertTreatmentTime: '#customTime',
        standardTreatmentTime: '#customFormByTime > div.closestContainer > div > div:nth-child(1) > input',
        cancelTimeTreatment: '#customTimeModal > div.modal-dialog > div > div.modal-footer > button.btn.btn-white',
        reimportFormulas: '#reimporter',
        saveTimeTreatment: '#saveByCustomTimeFormula',
        budgetMessageModalElement: '#toast-container > div > div.toast-message',
        modalConfirmationBudgetElement: '#bt-confirma-modal',
        paymentMethodElement: '#confirmar-modal-body select[name="id_registro"]',
        chosenBudgetForConfirmation: '#confirmar-modal-body > div.form-group > div.col-sm-7 > label > .small-right-space',
        insertRepeatTime: ':nth-child(4) > .col-sm-7 > .form-control',
        monitoringService: '#confirmar-modal-body > div:nth-child(5) > div > input[type=checkbox]',
        channelConfirmationBudget: '#confirmar-modal-body > div > div:nth-child(1) > div > select',
        sendEmailTracking: ':nth-child(2) > .col-sm-7 > .small-right-space',
        releaseBudgetForInclusionElement: ':nth-child(3) > .col-sm-7 > .small-right-space',
        releaseBudgetCashierElement: ':nth-child(4) > .col-sm-7 > .small-right-space',
        noShowBudgetCaixa: '#confirmar-modal-body > div > div:nth-child(4) > div > input.small-right-space',
        observationFromCashierToCounter: '#confirmar-modal-body > div > div:nth-child(1) > div > textarea',
        detailedNote: '#confirmar-modal-body > div > div:nth-child(2) > div > input.small-right-space',
        fieldStatusPayment: '`input[name="pago"][value="${opcao}"]`',
        shippingAddress: '#confirmar-modal-body > div > div:nth-child(4) > div > a:nth-child(1)',
        addressShippingSelected: '#endereco-cliente',
        shipmentObservation: '#confirmar-modal-body > div > div:nth-child(5) > div > textarea',
        fieldFormShipping: '#confirmar-modal-body > div > div:nth-child(6) > div > select',
        juntocomBudgetConfirmation: '#juntocom',
        juntocomClinicaHigashi: '#confirmar-modal-body > div > div:nth-child(13) > div > input.small-right-space',
        promisedFieldFor: '#confirmar-modal-body > div > div:nth-child(9) > div > input',
        fieldAromasSachet: '#confirmar-modal-body > div > div:nth-child(10) > div > select',
        aromaCapsuleField: '#confirmar-modal-body > div > div:nth-child(11) > div > select',
        generalObservation: '#confirmar-modal-body > div > div:nth-child(12) > div > textarea',
        budgetHasRecipeElement: 'input[name="possui_receita"]',
        hasSpecialFormula: '#confirmar-modal-body > div > div:nth-child(14) > div > input.small-right-space',
        urgentBudgetElement: ':nth-child(20) > .col-sm-7 > .small-right-space',
        cancelBudgetConfirmation: '#form-amarelinha > div.modal-footer > div > div:nth-child(2) > button.btn.btn-white',
        sendChatguruMessage: '#form-amarelinha > div.modal-footer > div > div:nth-child(1) > input[type=checkbox]:nth-child(3)',
        PreViewBudget: '#preview',
        closePreViewBudget: '#modal-preview-lg-content > div.modal-footer > button',
        sendconfirmBudget: '#submit',
        generateLinkPayment: '#bt-pagamento-modal',
        showBudgetsClosed: '#search-form > div.checkbox.m-l.m-r-xs > input[type=checkbox]:nth-child(1)',
        viewBudgetElement: `:nth-child(2) > :nth-child(8) > .visualizarFvc > .fa`,
        reopenBudget: '#reabrir',
        confirmReopenBudget: 'body > div.bootbox.modal.fade.bootbox-confirm.in > div.modal-dialog > div > div.modal-footer > button.btn.btn-danger.pull-right',
        userOptions: '#username-link',
        openModalImportBudget: '#page-wrapper > div.row.bbudget-bottom > nav > ul > li:nth-child(1) > div > ul > li:nth-child(3) > a',
        importBudget: '#page-wrapper > div.wrapper.wrapper-content.animated.fadeInRight > div > div.ibox-content > div > form > div:nth-child(1) > div > input',
        importBranch: '#page-wrapper > div.wrapper.wrapper-content.animated.fadeInRight > div > div.ibox-content > div > form > div:nth-child(3) > div > input',
        importHowNewService: '#page-wrapper > div.wrapper.wrapper-content.animated.fadeInRight > div > div.ibox-content > div > form > div:nth-child(5) > div > span > input',
        syncBudget: '#page-wrapper > div.wrapper.wrapper-content.animated.fadeInRight > div > div.ibox-content > div > form > div.row > div:nth-child(2) > div > button',
        hopscotchConfirmedInformationBoard: '.infosInclusao',
        budgetHopscotchInformationBoardConfirmed: '#page-wrapper > div:nth-child(11) > div.col-lg-6.ibox > div.ibox-content > div.infosInclusao > span:nth-child(1)',
        budgetistFrameInformationAmarelinhaConfirmed: '#page-wrapper > div:nth-child(11) > div.col-lg-6.ibox > div.ibox-content > div.infosInclusao > span:nth-child(2)',
        inclusionFrameInformationAmarelinhaConfirmed: '#page-wrapper > div:nth-child(11) > div.col-lg-6.ibox > div.ibox-content > div.infosInclusao > span:nth-child(3)',
        attendantHopscotchInformationBoardConfirmed: '#page-wrapper > div:nth-child(11) > div.col-lg-6.ibox > div.ibox-content > div.infosInclusao > span:nth-child(4)',
        textFrameInformationHopscotchConfirmed: '#page-wrapper > div:nth-child(11) > div.col-lg-6.ibox > div.ibox-content > div.infosInclusao',
        budgetBudgetist: '#budgetist',
        BudgetAttendant: '#attendant',
        homeMenuElement: '#side-menu > :nth-child(5) > a',
        searchBudgetByBranchElement: '[placeholder="Filial"]',
        searchAllBudgetsElement: '.busca-atendimentos > :nth-child(2) > input',
        searchButtonElement: '#search-form > .btn',
        paymentSelectorInput: (index: number) => `:nth-child(${index}) > .td-pagamentos > .label`,
        updateSelectorStatusInput: (index: number) => `:nth-child(${index}) > :nth-child(8) > .getLastStatusPaymentsGPE > .fa`,
        UpdatePaymentStatusOnServiceScreenElement: '.getLastStatusPaymentsGPE',
        viewSelectorInput: (index: number) => `:nth-child(${index}) > :nth-child(8) > .visualizarFvc > .fa`,
        saveDataConfirmationBudget: '#confirmacao-atendimento > .modal-footer > .btn-primary',
        cashierObservationElement: ':nth-child(5) > .col-sm-7 > .form-control',
        detailedSaleElement: ':nth-child(6) > .col-sm-7 > .small-right-space',
        expeditionObservationElement: ':nth-child(9) > .col-sm-7 > .form-control',
        shippingMethodElement: ':nth-child(10) > .col-sm-7 > .small-right-space',
        promisedToElement: ':nth-child(14) > .col-sm-7 > .form-control',
        aromaSachetElement: ':nth-child(15) > .col-sm-7 > .form-control',
        capsuleAromaElement: ':nth-child(16) > .col-sm-7 > .form-control',
        generalObservationElement: ':nth-child(17) > .col-sm-7 > .form-control',
        sendAutomaticBudgetConfirmationMessageElement: '#form-amarelinha > .modal-footer > .row > [style="margin-bottom:5px;"] > [type="checkbox"]',
        recipeElementAvailableForLinkingElement: 'i.fa-sign-in.usarReceitaVincRec',
        modalToLinkRecipeElement: '#modal-receita-add-vinculo > .modal-dialog > .modal-content > .modal-footer > .btn-primary',
        linkedRecipeProgressBarElement: ':nth-child(3) > .progress > .progress-bar',
        successfullyLinkedRecipesProgressBarElement: '.progress-bar.progress-bar-info',
        closeModalLinkRecipeElement: '.modal-footer .btn-white',
        feedbackMessageElement: '#toast-container .toast-close-button',
        expandSideMenuElement: '.navbar-header > .navbar-minimalize',
        modalLinkRecipeElement: '#modal-receita-add-vinculo > .modal-dialog',
        modalClientNotFoundElement: '.bootbox .modal-footer .btn',
        setUpPhoneContactElement: '#bt-chat-configurar-contatos-modal',
        telephoneContactConfigurationModalElement: '.modal-dialog',
        insertCustomerContactPhoneNumberElement: '#cli-number-cel',
        savePhoneContactNumberElement: '#saveChatConfig',
        confirmInsertionCustomerTelephoneContactElement: 'div.bootbox.modal.fade.bootbox-alert.in',
        serviceBudgeterElement: '#orcamentista',
        customerServiceAttendantElement: '#atendente',

        accessSelfcheckoutElement: '#editAtendimento > div:nth-child(2) > div.ibox-content.self-checkout > fieldset > div > div > div > a',
        selectAromaOfPharmaceuticalFormulaElement: 'body > div > main > form > div:nth-child(1) > div > div.container-itens > div > div.row.bloco-conteudo-atendimento > div > div > div > div.content-formula > select',
        goToPaymentElement: '.efetuar-pagamento-btn',
        makePaymentUsingTheSelectedPaymentMethodElement: '.btn-submit',
        telephoneElement: '#telefone',
        emailElement: '#email_cliente',
        fullNameElement: '#nome_paciente',
        birthDateElement: '#data_nascimento_paciente',
        cpfElement: '#cpf_paciente',
        rgElement: '#rg_paciente',
        useRegisteredAddressElement: '#set-campos-endereco',
        zipCodeElement: '#cep',
        stateElement: '#estado',
        cityElement: '#cidade',
        districtElement: '#bairro',
        streetElement: '#rua',
        houseNumberElement: '#numero',
        addressComplementElement: '#complemento',
        isMyDeliveryAddressElement: '#address-confirm',
        cardholderNameElement: '#nome_cartao',
        cpfCnpjElement: '#cpf_cnpj',
        cardNumberElement: '#numero_cartao',
        expirationMonthElement: '#validade_mes',
        expirationYearElement: '#validade_ano',
        securityCodeElement: '#cvc',
        installmentsElement: '#qtdeParcelas',
        makePaymentElement: '#btnProcessarPgto',
        paymentScreenSuccessElement: '.success-container-info .text-title',
        paymentDateServiceScreenElement: '.payment-row-item:contains("Atualizado em") strong',
        paymentDataOnServiceScreenElement: '.ibox-content .payment-row',

    },

    Settings: {
        settingsMenu: ':nth-child(19) > [href="javascript:void(0);"]',
        subMenuClustersGroups: '#side-menu > li.active > ul > li:nth-child(6) > a',
        relations: '#side-menu > li.active > ul > li.active > ul > li:nth-child(2) > a',
        containerFilters: ':nth-child(5) > .ibox > .ibox-title',
        containerProfile: 'select[name="profile"]',
        searchFilters: '.col-sm-12 > .btn',
        search: '#tableRelation_filter > label > input',
        manageRelationship: '#tableRelation > tbody > tr > td:nth-child(8) > a',
        selectCluster: '#clusterAdd',
        containerSelectPrescriber: '#tableRelationPorAtendente > tbody > tr:nth-child(1) > td:nth-child(4) > span > span.selection > span > span.select2-selection__arrow',
        selectPrescriber: '.select2-dropdown > .select2-search > .select2-search__field',
        addAttendantClusterPrescriberRelationship: '#adicionar_relacao',
        containerMessageRelationship: '.bootbox-body > .alert',
        createdRelationshipAttendant: 'body > div.bootbox.modal.fade.bootbox-alert.in > div.modal-dialog > div > div.modal-body > div > b:nth-child(4)',
        prescriberRelationshipCreated: 'body > div.bootbox.modal.fade.bootbox-alert.in > div.modal-dialog > div > div.modal-body > div > b:nth-child(3)',
        removeSelectedRelationship: ':nth-child(1) > .removerRelBtn',
        SearchPrescriberManageRelationship: 'form > .form-control',
        searchPrescriberRelationshipManage: '.text-right > form > .btn',
        selectPrescriberFound: '.edit-cb',
    }
}
