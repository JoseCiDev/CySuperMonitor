import { dataParameters } from './import';


interface Elements<S = string> {

    Shared: {
        suggestionAutocomplete: S;
        suggestionsAutocomplete: S;
        containerMessage: S;
        okModalMessage: S;
        btnSuccessModal: S;
        btnModalFailure: S;
        modalMessage: S;
        btnModalMessage: S;
        btnModalChangelog: S;
    };

    Login: {
        user: S;
        password: S;
        acess: S;
        logout: S;
        messageErrorLogin: S;
    };

    Recipes: {
        menuRecipes: S;
        menuRecipesReduced: S;
        prescriberRecipes: S;
        menuImportRecipes: S;
        menuManageRecipes: S;
        openModalRegisterRecipes: S;
        importPDFRecipes: S;
        importImageRecipes: S;
        removeImageRecipes: S;
        modalSuggestionRelationshipPrescriber: S;
        parameterSearchPatient: S;
        patientRecipes: S;
        channelReceiptImport: S;
        clusterRecipes: S;
        budgetistRecipes: S;
        responsibleForRecipe: S;
        autocompleteResponsibleAttendant: S;
        dateReceiptRecipes: S;
        juntocomRecipes: S;
        autocompleteJuntocomRecipes: S;
        internalObservationRecipes: S;
        textInternalObservationRecipes: S;
        controlledmedicationRecipes: S;
        urgentRecipes: S;
        clientAlertRecipes: S;
        retailRecipes: S;
        optionTypeRecipes: S;
        saveRecipes: S;
        closeRegisterRecipes: S;
        editRecipe: S;
        recipeSearchModal: S;
        filterDateStartSearchRecipes: S;
        filterEndDateSearchRecipes: S;
        clusterSearch: S;
        recipeSearch: S;
        patientSearch: S;
        prescriberSearch: S;
        budgetSearch: S;
        lastModifierSearch: S;
        budgetistSearch: S;
        attendantResponsibleSearch: S;
        channelReceiptSearch: S;
        filterPendenciasSearch: S;
        filterPendenciasAll: S;
        pendingFilter: S;
        pendingFilterLinked: S;
        buttonSearchRecipes: S;
        labelSearchRecipes: S;
        numberRecipe: S;
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

    };

    Services: {
        menuServices: S;
        servicesInProgress: S;
        accessWorkFlowService: S;
        parameterSearchCardOrder: S;
        cardBudget: S;
        buttonLinkRecipeScreenServiceProgress: S;
        buttonUnlinkRecipeScreenServiceProgress: S;
        fieldLinkRecipe: S;
        orderInProgress: S;
        buttonView: S;
        fieldSearchOrder: S;
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
        treatmentTimeModalHeader: S;
        buttonTimeTreatment: S;
        standardTreatmentTime: S;
        cancelTimeTreatment: S;
        reimportFormulas: S;
        saveTimeTreatment: S;
        orderMessageModal: S;
        modalConfirmationOrder: S;
        containerPaymentMethod: S;
        chosenBudget: S;
        insertRepeatTime: S;
        saveDataConfirmationOrder: S;
        monitoringService: S;
        channelConfirmationOrder: S;
        sendEmailTracking: S;
        noShowOrderInclusion: S;
        noShowOrderCaixa: S;
        observationFromCashierToCounter: S;
        detailedNote: S;
        fieldStatusPayment: S;
        shippingAddress: S;
        addressShippingSelected: S;
        shipmentObservation: S;
        fieldFormShipping: S;
        juntocomOrderConfirmation: S;
        juntocomClinicaHigashi: S;
        promisedFieldFor: S;
        fieldAromasSachet: S;
        aromaCapsuleField: S;
        generalObservation: S;
        hasRecipe: S;
        urgentOrder: S;
        cancelOrderConfirmation: S;
        sendChatguruMessage: S;
        PreViewOrder: S;
        closePreViewOrder: S;
        sendconfirmOrder: S;
        showAll: S;
        hasSpecialFormula: S;
        generateLinkPayment: S;
        relateRecipeOrder: S;
        showOrdersClosed: S;
        reopenOrder: S;
        confirmReopenOrder: S;
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
        orderBudgetist: S;
        OrderAttendant: S;
        containerOrders: S;

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
        // autocompletes
        suggestionAutocomplete: '.autocomplete-suggestion',
        suggestionsAutocomplete: '.autocomplete-suggestions',
        //modal
        containerMessage: '.bootbox-body',
        okModalMessage: 'body > div.bootbox.modal.fade.bootbox-alert.in > div.modal-dialog > div > div.modal-footer > button',
        modalMessage: 'body > div.bootbox.modal.fade.bootbox-alert.in > div.modal-dialog > div > div.modal-body > div',
        btnSuccessModal: '.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary',
        btnModalFailure: 'div.modal-dialog > div > div.modal-footer > button.btn.btn-secondary.pull-left',
        btnModalMessage: '.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn',
        btnModalChangelog: '#changelogs > .modal-dialog > .modal-content > .modal-footer > .btn',
    },

    Login: {
        //LOGIN
        user: ':nth-child(1) > .form-control',
        password: ':nth-child(2) > .form-control',
        acess: '.btn-primary',
        logout: '.navbar > .nav > :nth-child(5) > a',
        messageErrorLogin: 'p',
    },


    Recipes: {
        menuRecipes: '#side-menu > li:nth-child(6) > a',
        menuRecipesReduced: '#side-menu > li.active',
        //IMPORTAR RECEITAS
        // subMenuImportacaoReceita
        menuImportRecipes: '#side-menu > li.active > ul > li:nth-child(1) > a',
        // subMenuGerenciarReceita
        menuManageRecipes: '#side-menu > li.active > ul > li.active > a',
        // acessarTelaRegistroReceita
        openModalRegisterRecipes: '#receita_register',
        // inserirImagem
        importPDFRecipes: '#btnImportPdfRec',
        importImageRecipes: 'input.tui-image-editor-load-btn[type="file"][accept="image/*"]',
        removeImageRecipes: '.btn btn-danger btn-del-img m-sm',
        // informacoes da receita
        prescriberRecipes: '#modalMedicoRec',
        modalSuggestionRelationshipPrescriber: '.bootbox .modal-dialog .modal-content .modal-footer .btn-primary',
        parameterSearchPatient: '#t2_154c',
        patientRecipes: '#modalPacienteRec',
        channelReceiptImport: '#modalCanalContato',
        clusterRecipes: '#modalCluster',
        budgetistRecipes: '#modalOrcamentistaRec',
        responsibleForRecipe: '#modalAtendenteRec',
        autocompleteResponsibleAttendant: '.autocomplete-suggestion',
        dateReceiptRecipes: '#modalDataRec',
        juntocomRecipes: '#groupMainEntitiesModal > div:nth-child(2) > div:nth-child(4) > div > span',
        autocompleteJuntocomRecipes: 'ul.select2-results__options',
        internalObservationRecipes: '.panel-body > .note-editor > .note-toolbar',
        textInternalObservationRecipes: '.panel-body > .note-editor > .note-editable',
        controlledmedicationRecipes: '#medicamentoControlado',
        urgentRecipes: '#modalUrgente',
        clientAlertRecipes: '#clientAlert',
        retailRecipes: '#checkboxVarejo',
        optionTypeRecipes: `input[name="receita_tipo"][value="${dataParameters.recipeType}"]`,
        // mensagem informando que já existe recipe com mesmo patient e prescriber
        // salvar receita
        saveRecipes: '#save_receita',
        closeRegisterRecipes: '#modal-receitas > div.modal-dialog > div > div.modal-footer > button.btn.btn-white',
        editRecipe: ':nth-child(1) > .actions-fa > .dropdown > .dropdown-menu > .list-group > .edit-recipe',

        // buscar receitas importadas
        recipeSearchModal: '#centerHeadFilter',
        filterDateStartSearchRecipes: '#filterReceitas > div:nth-child(1) > div:nth-child(1) > div > input',
        filterEndDateSearchRecipes: '#filterReceitas > div:nth-child(1) > div:nth-child(2) > div > input',
        clusterSearch: '#filterReceitas > div:nth-child(1) > div:nth-child(3) > div > span > span.selection > span',
        channelReceiptSearch: '#filterReceitas > div:nth-child(1) > div:nth-child(4) > div > select',
        recipeSearch: '#filterReceitas > div:nth-child(2) > div:nth-child(1) > div > input',
        patientSearch: '#pacienteRec',
        prescriberSearch: '#medicoRec',
        budgetSearch: '#orcamentoRec',
        lastModifierSearch: '#modifyRec',
        budgetistSearch: '#orcamentistaRec',
        attendantResponsibleSearch: '#atendenteResponRec',
        filterPendenciasSearch: 'select[name="pendentes"]',
        filterPendenciasAll: '#filterReceitas > div:nth-child(3) > div:nth-child(4) > div > select > option:nth-child(1)',
        pendingFilter: '#filterReceitas > div:nth-child(3) > div:nth-child(4) > div > select > option:nth-child(2)',
        pendingFilterLinked: '#filterReceitas > div:nth-child(3) > div:nth-child(4) > div > select > option:nth-child(3)',
        buttonSearchRecipes: '#filterReceitas > div:nth-child(4) > div > button',
        labelSearchRecipes: '[button type="submit"]' && 'Procurar',
        numberRecipe: '#mainTableReceitas > tbody > tr > td.idReceitaCol',
        dateReceiptGrid: '#mainTableReceitas > thead > tr > th.sorting.sorting_asc',
        //marcar uso
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
        noMainContact:'.d-flex > .text-right > input'
    },

    Services: {

        menuServices: '#side-menu > li:nth-child(8)',
        servicesInProgress: '.active > .nav-second-level > :nth-child(1) > a',
        accessWorkFlowService: '.nav-second-level > .active > .nav > li > a',
        parameterSearchCardOrder: '#select2-tipo-filtro-container',
        cardBudget: '#atendimentos-em-andamento > div.ibox-workflow > div.grid > div > div:nth-child(1) > div > div.container-coluna > ul > li:nth-child(8)',
        buttonLinkRecipeScreenServiceProgress: '.vinc-rec',
        buttonUnlinkRecipeScreenServiceProgress: '.r-vinc-rec',
        fieldLinkRecipe: '#receitaCod',
        relateRecipeOrder: '#modal-recipe-add-vinculo > div.modal-dialog > div > div.modal-footer > button.btn.btn-primary.register-vinculo',
        // order em andamento em atendimento, elemento foi alterado, lista de orçamentos em andamento movido para Recipes -> Importar Atendimentos
        containerOrders: '#page-wrapper > div.wrapper.wrapper-content.animated.fadeInRight > div > div > table > tbody > tr',
        orderInProgress: '#side-menu > li.active > ul > li:nth-child(1) > a',
        buttonView: ':nth-child(2) > :nth-child(6) > a.visualizarFvc',
        fieldSearchOrder: '#top-search',
        searchBranch: '#search-form > div:nth-child(1) > input:nth-child(2)',
        sendSearch: '#search-form > div.checkbox.m-l.m-r-xs > [type="submit"][value="buscar"]',
        showAll: '#search-form > div.form-group:nth-child(2) > label input[type="radio"][value="1"]',
        // integracaoChatguru
        brazilian: '#isBr',
        stranger: '#isNotBr',
        useFcertaOriginatingTelephoneNumber: '#use_this',
        phoneCustomer: '#cli_number',
        dontSendCustomerMessage: '#msg-automatica-chatguru',
        languageCustomer: '#languageCli',
        cancelChatguruIntegration: '.btn btn-white',
        saveNumberChatguru: '#saveChatGuruNumber',
        budgetist: '#budgetist',
        // insertTimeTreatment
        treatmentTimeModalHeader: '#customTimeModal > div.modal-dialog > div > div.modal-header',
        buttonTimeTreatment: '#customTime',
        standardTreatmentTime: '#customFormByTime > div.closestContainer > div > div:nth-child(1) > input',
        cancelTimeTreatment: '#customTimeModal > div.modal-dialog > div > div.modal-footer > button.btn.btn-white',
        reimportFormulas: '#reimporter',
        saveTimeTreatment: '#saveByCustomTimeFormula',
        orderMessageModal: '#toast-container > div > div.toast-message',
        // confirmOrder primeira etapa
        modalConfirmationOrder: '#bt-confirma-modal',
        containerPaymentMethod: '#confirmar-modal-body > div.form-group > div.col-sm-7 > select.small-right-space',
        chosenBudget: '#confirmar-modal-body > div.form-group > div.col-sm-7 > label > .small-right-space',
        insertRepeatTime: '#confirmar-modal-body > div:nth-child(4) > div > input',
        saveDataConfirmationOrder: '#confirmacao-atendimento > div.modal-footer > input',
        monitoringService: '#confirmar-modal-body > div:nth-child(5) > div > input[type=checkbox]',
        // confirmOrder segunda etapa
        channelConfirmationOrder: '#confirmar-modal-body > div > div:nth-child(1) > div > select',
        sendEmailTracking: '#confirmar-modal-body > div > div:nth-child(2) > div > input.small-right-space',
        noShowOrderInclusion: '#confirmar-modal-body > div > div:nth-child(3) > div > input.small-right-space',
        noShowOrderCaixa: '#confirmar-modal-body > div > div:nth-child(4) > div > input.small-right-space',
        observationFromCashierToCounter: '#confirmar-modal-body > div > div:nth-child(1) > div > textarea',
        detailedNote: '#confirmar-modal-body > div > div:nth-child(2) > div > input.small-right-space',
        fieldStatusPayment: '`input[name="pago"][value="${opcao}"]`',
        shippingAddress: '#confirmar-modal-body > div > div:nth-child(4) > div > a:nth-child(1)',
        addressShippingSelected: '#endereco-cliente',
        shipmentObservation: '#confirmar-modal-body > div > div:nth-child(5) > div > textarea',
        fieldFormShipping: '#confirmar-modal-body > div > div:nth-child(6) > div > select',
        juntocomOrderConfirmation: '#juntocom',
        juntocomClinicaHigashi: '#confirmar-modal-body > div > div:nth-child(13) > div > input.small-right-space',
        promisedFieldFor: '#confirmar-modal-body > div > div:nth-child(9) > div > input',
        fieldAromasSachet: '#confirmar-modal-body > div > div:nth-child(10) > div > select',
        aromaCapsuleField: '#confirmar-modal-body > div > div:nth-child(11) > div > select',
        generalObservation: '#confirmar-modal-body > div > div:nth-child(12) > div > textarea',
        hasRecipe: '#confirmar-modal-body > div > div:nth-child(13) > div > label:nth-child(2) > input',
        hasSpecialFormula: '#confirmar-modal-body > div > div:nth-child(14) > div > input.small-right-space',
        urgentOrder: '#confirmar-modal-body > div > div:nth-child(20) > div > input.small-right-space',
        cancelOrderConfirmation: '#form-amarelinha > div.modal-footer > div > div:nth-child(2) > button.btn.btn-white',
        sendChatguruMessage: '#form-amarelinha > div.modal-footer > div > div:nth-child(1) > input[type=checkbox]:nth-child(3)',
        PreViewOrder: '#preview',
        closePreViewOrder: '#modal-preview-lg-content > div.modal-footer > button',
        sendconfirmOrder: '#submit',
        generateLinkPayment: '#bt-pagamento-modal',
        //order encerrado
        showOrdersClosed: '#search-form > div.checkbox.m-l.m-r-xs > input[type=checkbox]:nth-child(1)',
        reopenOrder: '#reabrir',
        confirmReopenOrder: 'body > div.bootbox.modal.fade.bootbox-confirm.in > div.modal-dialog > div > div.modal-footer > button.btn.btn-danger.pull-right',
        //importar orcamento manualmente
        userOptions: '#username-link',
        openModalImportBudget: '#page-wrapper > div.row.border-bottom > nav > ul > li:nth-child(1) > div > ul > li:nth-child(3) > a',
        importBudget: '#page-wrapper > div.wrapper.wrapper-content.animated.fadeInRight > div > div.ibox-content > div > form > div:nth-child(1) > div > input',
        importBranch: '#page-wrapper > div.wrapper.wrapper-content.animated.fadeInRight > div > div.ibox-content > div > form > div:nth-child(3) > div > input',
        importHowNewService: '#page-wrapper > div.wrapper.wrapper-content.animated.fadeInRight > div > div.ibox-content > div > form > div:nth-child(5) > div > span > input',
        syncBudget: '#page-wrapper > div.wrapper.wrapper-content.animated.fadeInRight > div > div.ibox-content > div > form > div.row > div:nth-child(2) > div > button',
        //quadro de informacoes da amarelinha confirmada
        hopscotchConfirmedInformationBoard: '.infosInclusao',
        budgetHopscotchInformationBoardConfirmed: '#page-wrapper > div:nth-child(11) > div.col-lg-6.ibox > div.ibox-content > div.infosInclusao > span:nth-child(1)',
        budgetistFrameInformationAmarelinhaConfirmed: '#page-wrapper > div:nth-child(11) > div.col-lg-6.ibox > div.ibox-content > div.infosInclusao > span:nth-child(2)',
        inclusionFrameInformationAmarelinhaConfirmed: '#page-wrapper > div:nth-child(11) > div.col-lg-6.ibox > div.ibox-content > div.infosInclusao > span:nth-child(3)',
        attendantHopscotchInformationBoardConfirmed: '#page-wrapper > div:nth-child(11) > div.col-lg-6.ibox > div.ibox-content > div.infosInclusao > span:nth-child(4)',
        textFrameInformationHopscotchConfirmed: '#page-wrapper > div:nth-child(11) > div.col-lg-6.ibox > div.ibox-content > div.infosInclusao',
        //Usuarios do atendimento
        orderBudgetist: '#budgetist',
        OrderAttendant: '#attendant',
        //toast toast-error
        //toast toast-sucess
    },

    Settings: {
        settingsMenu: ':nth-child(19) > [href="javascript:void(0);"]',
        //Clusters(grupos)
        subMenuClustersGroups: '#side-menu > li.active > ul > li:nth-child(6) > a',
        //Relações
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
