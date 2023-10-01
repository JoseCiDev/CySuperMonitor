interface Elements<T = string> {

    Compartilhado: {
        sugestaoAutocomplete
        sugestoesAutocomplete
    };

    Login: {
        usuario: T;
        senha: T;
        entrar: T;
    };

    CustomCommands: {
        login: T;
        senha: T;
        entrar: T;
    },

    Receitas: {
        menuReceitas: T;
        prescritorReceitas: T;
        menuImportarReceitas: T;
        abrirModalRegistrarReceitas: T;
        importarPdfReceitas: T;
        importarImagemReceitas: T;
        removerImagemReceitas: T;
        modalSugestaoRelacaoPrescritor: T;
        parametroBuscaPaciente: T;
        pacienteReceitas: T;
        canalRecebimentoReceitas: T;
        clusterReceitas: T;
        orcamentistaReceitas: T;
        atendenteResponsavelReceitas: T;
        dataRecebimentoReceitas: T;
        juntocomReceitas: T;
        autocompleteJuntocomReceitas: T;
        observacaoInternaReceitas: T
        textoObservacaoInternaReceitas: T
        medicamentocontroladoReceitas: T;
        urgenteReceitas: T;
        clienteAlertaReceitas: T;
        varejoReceitas: T;
        tipoReceitas: T;
        salvarReceitas: T;
        okSucessoReceitaImportadaModal: T;
        ModalBuscaReceitas: T;
        filtroDataInicialBuscaReceitas: T;
        filtroDataFinalBuscaReceitas: T;
        filtroPendenciasBuscaReceitas: T;
        filtroPendenciasTodos: T;
        filtroPendenciasPendentes: T;
        filtroPendenciasVinculados: T;
        botaoProcurar: T;
        labelProcurarReceitas: T;
        numeroReceitas: T;
        checkboxMarcarUso: T;
        mensagemConfirmacaoModal: T;
        mensagemSucessoModal: T;
        containerInserirUsuario: T;
        select: T;
        usuarioSelecionado: T;
        senhaReceita: T;
        aplicaDesmarcarUso: T;
        visualizarReceitas: T;
        acoes: T;
        abaPdfVisualizarReceitas: T;
        abaOriginalVisualizarReceitas: T;
        abaObservacoesInternasVisualizarReceitas: T;
        abaInformacoesFcertaVisualizarReceitas: T;
        exibirReguaVisualizarReceitas: T;
        fecharVisualizarReceitas: T;
        clonarReceitas: T;
        modalObservacoesClonar: T;
        clonarObservacoesFarmaceuticas: T;
        excluirReceitas: T;
        acessarObservacoesFarmaceuticas: T;
        abaAdicionarObservacoesFarmaceuticas: T;
        senhaObservacoesFarmaceuticas: T;
        textoObservacoesFarmaceuticas: T;
        fecharModalObservacoesFarmaceuticas: T;
        abaExcluirObservacoesFarmaceuticas: T;
        excluirObservacoesFarmaceuticas: T;
        acessarDuvidasTecnicas: T;
        containerCategoriaDuvidaTecnicas: T;
        textoDuvidasTecnicas: T;
        containerColaboradores: T;
        responsavelRespostas: T;
        enviarDuvidasTecnicas: T;
        fecharModalDuvidasTecnicas: T;
        atualizarModalDuvidasTecnicas: T;
        containerResponsavelRespostaDuvidasTecnicas: T;
        ResponsavelRespostaDuvidasTecnicas: T;
        responsavelAtualRespostaDuvidasTecnicas: T;
        marcarDuvidasTecnicaResolvidas: T;
        excluirDuvidasTecnicas: T;
        statusRespostaDuvidasTecnicas: T;
        textoRespostaDuvidasTecnicas: T;
        enviarRespostaDuvidasTecnicas: T;

    };

    Atendimentos: {
        menuAtendimentos: T;
        acessarAtendimentosEmAndamento: T;
        acessarFluxoDeTrabalhoAtendimento: T;
        parametroBuscaCardOrcamento: T;
        opcaopParametroBuscaCardOrcamento: T;
        cardOrcamento: T;
        vincularReceitaCardOrcamento: T;
        pedidoEmAndamento: T;
        visualizar: T;
        buscarPedido: T;
        buscarFilial: T;
        enviarBusca: T;
        brasileiro: T;
        estrangeiro: T;
        usarNumeroTelefoneProvenienteFcerta: T;
        telefoneCliente: T;
        naoEnviarMensagemCliente: T;
        idiomaCliente: T;
        cancelarIntegracaoChatguru: T;
        salvarNumeroChatguru: T;
        modalMensagemChatguru: T;
        orcamentistaPedido: T;
        cabecalhoModalTempoTratamento: T;
        tempoTratamento: T;
        tempoTratamentoPadrao: T;
        cancelarTempoTratamento: T;
        reimportarFormulas: T;
        salvarTempoTratamento: T;
        modalMensagemPedido: T;
        abrirModalConfirmacaoPedido: T;
        formaPagamentoPedido: T;
        orcamentoEscolhido: T;
        tempoRepeticaoPaciente: T;
        salvarConfirmacaoPedidoPrimeiraEtapa: T;
        naoRealizarMonitoramentoAtendimento: T;
        canalConfirmacaoPedido: T;
        enviarEmailRastreamentoPedido: T;
        liberarPedidoInclusao: T;
        liberarPedidoCaixa: T;
        observacaoCaixaBalcaoPedido: T;
        notaDetalhada: T;
        situacaoPagamento: T;
        enderecoEnvioPedido: T;
        enderecoSelecionadoEnvioPedido: T;
        observacaoExpedicao: T;
        formaEnvio: T;
        juntocomPedido: T;
        juntocomClinicaHigashi: T;
        prometidoPara: T;
        aromaShake: T;
        aromaCapsulaSublingual: T;
        observacaoGeral: T;
        situacaoPossuiReceita: T;
        pedidoUrgente: T;
        cancelarConfirmacaoPedido: T;
        dispararMensagemChatguru: T;
        preVisualizarPedido: T;
        fecharPreVisualizarPedido: T;
        confirmarPedido: T;

    };
}



export const elements: Elements = {

    Compartilhado: {
        // autocompletes
        sugestaoAutocomplete: '.autocomplete-suggestion',
        sugestoesAutocomplete: '.autocomplete-suggestions',
    },

    Login: {
        //LOGIN
        usuario: ':nth-child(1) > .form-control',
        senha: ':nth-child(2) > .form-control',
        entrar: '.btn-primary',
    },

    CustomCommands: {
        login: ':nth-child(1) > .form-control',
        senha: ':nth-child(2) > .form-control',
        entrar: '.btn-primary',
    },

    Receitas: {
        menuReceitas: '#side-menu > li:nth-child(6) > a > span.nav-label',
        //IMPORTAR RECEITAS
        // subMenuImportacaoReceita
        menuImportarReceitas: '#side-menu > li.active > ul > li:nth-child(1) > a',
        // acessarTelaRegistroReceita
        abrirModalRegistrarReceitas: '#receita_register',
        // inserirImagem
        importarPdfReceitas: '#btnImportPdfRec',
        importarImagemReceitas: 'input.tui-image-editor-load-btn[type="file"][accept="image/*"]',
        removerImagemReceitas: '.btn btn-danger btn-del-img m-sm',
        // informacoes da receita
        prescritorReceitas: '#modalMedicoRec',
        modalSugestaoRelacaoPrescritor: 'button[data-bb-handler="confirm"].btn.btn-primary',
        parametroBuscaPaciente: '#t2_154c',
        pacienteReceitas: '#modalPacienteRec',
        canalRecebimentoReceitas: '#modalCanalContato',
        clusterReceitas: '#modalCluster',
        orcamentistaReceitas: '#modalOrcamentistaRec',
        atendenteResponsavelReceitas: '#modalAtendenteRec',
        dataRecebimentoReceitas: '#modalDataRec',
        juntocomReceitas: '#groupMainEntitiesModal > div:nth-child(2) > div:nth-child(4) > div > span',
        autocompleteJuntocomReceitas: 'ul.select2-results__options',
        observacaoInternaReceitas: '.panel-body > .note-editor > .note-toolbar',
        textoObservacaoInternaReceitas: '.panel-body > .note-editor > .note-editable',
        medicamentocontroladoReceitas: '#medicamentoControlado',
        urgenteReceitas: '#modalUrgente',
        clienteAlertaReceitas: '#clienteAlerta',
        varejoReceitas: '#checkboxVarejo',
        // possui receita/nao possui receita/repeticao
        tipoReceitas: '#groupMainEntitiesModal > div:nth-child(3) > div > label:nth-child(1) > input[type=radio]',
        // mensagem informando que já existe receita com mesmo paciente e prescritor
        // salvar receita
        salvarReceitas: '#save_receita',
        // mensagem sucesso importacao receita
        okSucessoReceitaImportadaModal: 'body > div.bootbox.modal.fade.bootbox-alert.in > div.modal-dialog > div > div.modal-footer > button',
        // buscar receitas importadas
        ModalBuscaReceitas: '#centerHeadFilter',
        filtroDataInicialBuscaReceitas: '#filterReceitas > div:nth-child(1) > div:nth-child(1) > div > input',
        filtroDataFinalBuscaReceitas: '#filterReceitas > div:nth-child(1) > div:nth-child(2) > div > input',
        filtroPendenciasBuscaReceitas: '#filterReceitas > div:nth-child(3) > div:nth-child(4) > div > select',
        filtroPendenciasTodos: '#filterReceitas > div:nth-child(3) > div:nth-child(4) > div > select > option:nth-child(1)',
        filtroPendenciasPendentes: '#filterReceitas > div:nth-child(3) > div:nth-child(4) > div > select > option:nth-child(2)',
        filtroPendenciasVinculados: '#filterReceitas > div:nth-child(3) > div:nth-child(4) > div > select > option:nth-child(3)',
        botaoProcurar: '#filterReceitas > div:nth-child(4) > div > button',
        labelProcurarReceitas: '[button type="submit"]' && 'Procurar',
        numeroReceitas: '#mainTableReceitas > tbody > tr > td.idReceitaCol',
        checkboxMarcarUso: '#mainTableReceitas > tbody > tr > td.usedTrativa',
        mensagemConfirmacaoModal: '.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary',
        mensagemSucessoModal: '.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn',
        containerInserirUsuario: '#select2-farma-to-auth-container',
        select: '.select2-dropdown > .select2-search > .select2-search__field',
        usuarioSelecionado: '.select2-results__option--highlighted',
        senhaReceita: '#password-farma-auth',
        aplicaDesmarcarUso: '#farma-auth-send-btn',
        visualizarReceitas: ':nth-child(1) > .actions-fa > .dropdown > .dropdown-menu > .list-group > .show-receita',
        acoes: '#mainTableReceitas > tbody > tr:nth-child(1) > td.actions-fa.text-center > div > button',
        abaPdfVisualizarReceitas: '#panel_look_pdf > ul.nav.nav-tabs > li.active > a',
        abaOriginalVisualizarReceitas: '#originalClickVisRe',
        abaObservacoesInternasVisualizarReceitas: '#panel_look_pdf > ul.nav.nav-tabs > :nth-child(3) > a',
        abaInformacoesFcertaVisualizarReceitas: '#panel_look_pdf > ul.nav.nav-tabs > :nth-child(4) > a',
        exibirReguaVisualizarReceitas: '#btnReceitaRegua',
        fecharVisualizarReceitas: '#modal-receita-view > .modal-dialog > .modal-content > .modal-header > .close > [aria-hidden="true"]',
        clonarReceitas: ':nth-child(1) > .actions-fa > .dropdown > .dropdown-menu > .list-group > .clone-receita',
        modalObservacoesClonar: '#carousel-container',
        clonarObservacoesFarmaceuticas: '#clonar-observacoes',
        excluirReceitas: ':nth-child(2) > .actions-fa > .dropdown > .dropdown-menu > .list-group > .delete-receita',
        acessarObservacoesFarmaceuticas: ':nth-child(1) > .actions-fa > .dropdown > .dropdown-menu > .list-group > .add-obs',
        abaAdicionarObservacoesFarmaceuticas: '#tabs > .nav > :nth-child(1) > a',
        senhaObservacoesFarmaceuticas: '#passModalAddObsReceita',
        textoObservacoesFarmaceuticas: '#textObsAddModalReceita',
        fecharModalObservacoesFarmaceuticas: '#modal-receita-add-obs > .modal-dialog > .modal-content > .modal-footer > .btn',
        abaExcluirObservacoesFarmaceuticas: '#tab-list-observacoes-farmaceuticas > a',
        excluirObservacoesFarmaceuticas: ':nth-child(1) > :nth-child(5) > .fa',
        acessarDuvidasTecnicas: ':nth-child(1) > .actions-fa > .dropdown > .dropdown-menu > .list-group > .duvida-farmaceutica',
        containerCategoriaDuvidaTecnicas: '#select2-selectCatDuvTec-container',
        textoDuvidasTecnicas: '#newDuvidaTecnica',
        containerColaboradores: '#select2-selectFarmaDuvTec-container',
        responsavelRespostas: '.select2-dropdown > .select2-search > .select2-search__field',
        enviarDuvidasTecnicas: '#duvidaTecnicaSend',
        fecharModalDuvidasTecnicas: '#modal-receita-duv-tec > .modal-dialog > .modal-content > .modal-footer > .btn',
        atualizarModalDuvidasTecnicas: '#updateRenderDuvTec',
        containerResponsavelRespostaDuvidasTecnicas: '#chatDuvTec > div.groupContainer > div.pendenteMsg > div:nth-child(6) > div > span > span.selection > span > span.select2-selection__arrow',
        ResponsavelRespostaDuvidasTecnicas: '.select2-dropdown > .select2-search > .select2-search__field',
        responsavelAtualRespostaDuvidasTecnicas: 'span.select2-selection__rendered[title*="Atendente"]',
        marcarDuvidasTecnicaResolvidas: '#chatDuvTec > div:nth-child(1) > div.pendenteMsg > div:nth-child(7) > div.col.col-sm-12.text-right',
        excluirDuvidasTecnicas: ':nth-child(1) > .resolvidoMsg > :nth-child(7) > .col > .fa-trash',
        statusRespostaDuvidasTecnicas: '#chatDuvTec .groupContainer .row:not(.m-b-sm) .col-sm-12 select.statusDuvidaTecnica',
        textoRespostaDuvidasTecnicas: '#chatDuvTec .groupContainer .row:not(.m-b-sm) .col-sm-12 textarea.form-control',
        enviarRespostaDuvidasTecnicas: '#chatDuvTec .groupContainer .row:not(.m-b-sm) div.col.col-sm-12 button.btn.btn-secondary.m-t-sm.m-b-sm.respDuvT',

    },

    Atendimentos: {
        //ATENDIMENTOS
        // Menu lateral(principal)
        menuAtendimentos: '#side-menu > li:nth-child(8)',
        //EM ANDAMENTO
        // fluxoDeTrabalho
        acessarAtendimentosEmAndamento: '#side-menu > li.active > ul > li.active > a',
        acessarFluxoDeTrabalhoAtendimento: '.nav-second-level > .active > .nav > li > a',
        parametroBuscaCardOrcamento: '#select2-tipo-filtro-container',
        opcaopParametroBuscaCardOrcamento: '.select2-results__option',
        cardOrcamento: '#atendimentos-em-andamento > div.ibox-workflow > div.grid > div > div:nth-child(1) > div > div.container-coluna > ul > li:nth-child(8)',
        vincularReceitaCardOrcamento: '#receitaCod',
        // pedido em andamento em atendimento, elemento foi alterado, lista de pedidos em andamento movido para Receitas -> Importar Atendimentos
        pedidoEmAndamento: '#side-menu > li.active > ul > li:nth-child(1) > a',
        // visualizarpedido
        visualizar: '#page-wrapper > div.wrapper.wrapper-content.animated.fadeInRight > div > div > table > tbody > tr:nth-child(2) > td:nth-child(6) > a.visualizarFvc > i',
        // buscarPedido
        buscarPedido: '#top-search',
        buscarFilial: '#search-form > div:nth-child(1) > input:nth-child(2)',
        enviarBusca: '#search-form > input',
        // integracaoChatguru
        brasileiro: '#isBr',
        estrangeiro: '#isNotBr',
        usarNumeroTelefoneProvenienteFcerta: '#use_this',
        telefoneCliente: '#cli_number',
        naoEnviarMensagemCliente: '#msg-automatica-chatguru',
        idiomaCliente: '#languageCli',
        cancelarIntegracaoChatguru: '.btn btn-white',
        salvarNumeroChatguru: '#saveChatGuruNumber',
        modalMensagemChatguru: 'body > div.bootbox.modal.fade.bootbox-alert.in > div.modal-dialog > div > div.modal-footer > button',
        // orcamentista
        orcamentistaPedido: '#orcamentista',
        // inserirTempoTratamento
        cabecalhoModalTempoTratamento: '#customTimeModal > div.modal-dialog > div > div.modal-header',
        tempoTratamento: '#customTime',
        tempoTratamentoPadrao: '#customFormByTime > div.closestContainer > div > div:nth-child(1) > input',
        cancelarTempoTratamento: '#customTimeModal > div.modal-dialog > div > div.modal-footer > button.btn.btn-white',
        reimportarFormulas: '#reimporter',
        salvarTempoTratamento: '#saveByCustomTimeFormula',
        modalMensagemPedido: '#toast-container > div > div.toast-message',
        // confirmarPedido primeira etapa
        abrirModalConfirmacaoPedido: '#bt-confirma-modal',
        formaPagamentoPedido: '#confirmar-modal-body > div:nth-child(1) > div > select',
        orcamentoEscolhido: '#confirmar-modal-body > div:nth-child(2) > div > label > input',
        tempoRepeticaoPaciente: '#confirmar-modal-body > div:nth-child(4) > div > input',
        salvarConfirmacaoPedidoPrimeiraEtapa: '#confirmacao-atendimento > div.modal-footer > input',
        naoRealizarMonitoramentoAtendimento: '#confirmar-modal-body > div:nth-child(5) > div > input[type=checkbox]',
        // confirmarPedido segunda etapa
        canalConfirmacaoPedido: '#confirmar-modal-body > div > div:nth-child(1) > div > select',
        enviarEmailRastreamentoPedido: '#confirmar-modal-body > div > div:nth-child(2) > div > input.small-right-space',
        liberarPedidoInclusao: '#confirmar-modal-body > div > div:nth-child(3) > div > input.small-right-space',
        liberarPedidoCaixa: '#confirmar-modal-body > div > div:nth-child(4) > div > input.small-right-space',
        observacaoCaixaBalcaoPedido: '#confirmar-modal-body > div > div:nth-child(5) > div > textarea',
        notaDetalhada: '#confirmar-modal-body > div > div:nth-child(6) > div > input.small-right-space',
        situacaoPagamento: '`input[name="pago"][value="${opcao}"]`',
        enderecoEnvioPedido: '#confirmar-modal-body > div > div:nth-child(8) > div > a',
        enderecoSelecionadoEnvioPedido: '#endereco-cliente',
        observacaoExpedicao: '#confirmar-modal-body > div > div:nth-child(9) > div > textarea',
        formaEnvio: '#confirmar-modal-body > div > div:nth-child(10) > div > select',
        juntocomPedido: '#juntocom',
        juntocomClinicaHigashi: '#confirmar-modal-body > div > div:nth-child(13) > div > input.small-right-space',
        prometidoPara: '#confirmar-modal-body > div > div:nth-child(14) > div > input',
        aromaShake: '#confirmar-modal-body > div > div:nth-child(15) > div > select',
        aromaCapsulaSublingual: '#confirmar-modal-body > div > div:nth-child(16) > div > select',
        observacaoGeral: '#confirmar-modal-body > div > div:nth-child(17) > div > textarea',
        situacaoPossuiReceita: '`input[name="possui_receita"][value="${opcao}"]`',
        pedidoUrgente: '#confirmar-modal-body > div > div:nth-child(20) > div > input.small-right-space',
        cancelarConfirmacaoPedido: '#form-amarelinha > div.modal-footer > div > div:nth-child(2) > button.btn.btn-white',
        dispararMensagemChatguru: '#form-amarelinha > div.modal-footer > div > div:nth-child(1) > input[type=checkbox]:nth-child(3)',
        preVisualizarPedido: '#preview',
        fecharPreVisualizarPedido: '#modal-preview-lg-content > div.modal-footer > button',
        confirmarPedido: '#submit'
    }
}
