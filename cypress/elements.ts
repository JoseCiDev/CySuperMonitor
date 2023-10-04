interface Elements<T = string> {

    Compartilhado: {
        sugestaoAutocomplete: T;
        sugestoesAutocomplete: T;
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
        menuReceitasReduzido: T;
        prescritorReceitas: T;
        menuImportarReceitas: T;
        menuGerenciarReceitas: T;
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
        opcaoTipoReceitas: T;
        salvarReceitas: T;
        editarReceita: T;
        okSucessoReceitaImportadaModal: T;
        ModalBuscaReceitas: T;
        filtroDataInicialBuscaReceitas: T;
        filtroDataFinalBuscaReceitas: T;
        clusterBusca: T;
        receitaBusca: T;
        pacienteBusca: T;
        prescritorBusca: T;
        orcamentoBusca: T;
        ultimoModificadorBusca: T;
        orcamentistaBusca: T;
        atendenteResponsavelBusca: T;
        canalRecebimentoBusca: T;
        filtroPendenciasBusca: T;
        filtroPendenciasTodos: T;
        filtroPendenciasPendentes: T;
        filtroPendenciasVinculados: T;
        botaoBuscarReceitas: T;
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
        atendimentosEmAndamento: T;
        acessarFluxoDeTrabalhoAtendimento: T;
        parametroBuscaCardOrcamento: T;
        opcaopParametroBuscaCardOrcamento: T;
        cardOrcamento: T;
        botaoVincularReceitaTelaAtendimentoAndamento: T;
        botaoDesvincularReceitaTelaAtendimentoAndamento: T
        campoVincularReceita: T;
        pedidoEmAndamento: T;
        botaoVisualizar: T;
        campoBuscarPedido: T;
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
        orcamentista: T;
        cabecalhoModalTempoTratamento: T;
        botaoTempoTratamento: T;
        tempoTratamentoPadrao: T;
        cancelarTempoTratamento: T;
        reimportarFormulas: T;
        salvarTempoTratamento: T;
        modalMensagemPedido: T;
        modalConfirmacaoPedido: T;
        containerFormaPagamento: T;
        orcamentoEscolhido: T;
        inserirTempoRepeticao: T;
        salvarDadosConfirmacaoPedido: T;
        monitoramentoAtendimento: T;
        canalConfirmacaoPedido: T;
        enviarEmailRastreamento: T;
        naoMostrarPedidoInclusao: T;
        naoMostrarPedidoCaixa: T;
        observacaoCaixaBalcao: T;
        notaDetalhada: T;
        statusPagamento: T;
        enderecoEnvio: T;
        enderecoEnvioSelecionado: T;
        observacaoExpedicao: T;
        campoFormaEnvio: T;
        juntocom: T;
        juntocomClinicaHigashi: T;
        campoprometidoPara: T;
        campoAromaSache: T;
        campoAromaCapsula: T;
        observacaoGeral: T;
        PossuiReceita: T;
        pedidoUrgente: T;
        cancelarConfirmacaoPedido: T;
        dispararMensagemChatguru: T;
        preVisualizarPedido: T;
        fecharPreVisualizarPedido: T;
        confirmarPedido: T;
        mostrarTodos: T;
        possuiFormulaEspecial: T;
        gerarLinkPagamento: T;
        relacionarReceitaPedido: T;

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
        menuReceitasReduzido: '#side-menu > li.active',
        //IMPORTAR RECEITAS
        // subMenuImportacaoReceita
        menuImportarReceitas: '#side-menu > li.active > ul > li:nth-child(1) > a',
        // subMenuGerenciarReceita
        menuGerenciarReceitas: '#side-menu > li.active > ul > li.active > a',
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
        opcaoTipoReceitas: '#groupMainEntitiesModal > div:nth-child(3) > div.col-md-12.text-right',
        // mensagem informando que já existe receita com mesmo paciente e prescritor
        // salvar receita
        salvarReceitas: '#save_receita',
        editarReceita: ':nth-child(1) > .actions-fa > .dropdown > .dropdown-menu > .list-group > .edit-receita',
        okSucessoReceitaImportadaModal: 'body > div.bootbox.modal.fade.bootbox-alert.in > div.modal-dialog > div > div.modal-footer > button',
        // buscar receitas importadas
        ModalBuscaReceitas: '#centerHeadFilter',
        filtroDataInicialBuscaReceitas: '#filterReceitas > div:nth-child(1) > div:nth-child(1) > div > input',
        filtroDataFinalBuscaReceitas: '#filterReceitas > div:nth-child(1) > div:nth-child(2) > div > input',
        clusterBusca: '#filterReceitas > div:nth-child(1) > div:nth-child(3) > div > span > span.selection > span',
        canalRecebimentoBusca: '#filterReceitas > div:nth-child(1) > div:nth-child(4) > div > select',
        receitaBusca: '#filterReceitas > div:nth-child(2) > div:nth-child(1) > div > input',
        pacienteBusca: '#pacienteRec',
        prescritorBusca: '#medicoRec',
        orcamentoBusca: '#orcamentoRec',
        ultimoModificadorBusca: '#modifyRec',
        orcamentistaBusca: '#orcamentistaRec',
        atendenteResponsavelBusca: '#atendenteResponRec',
        filtroPendenciasBusca: '#filterReceitas > div:nth-child(3) > div:nth-child(4) > div > select',
        filtroPendenciasTodos: '#filterReceitas > div:nth-child(3) > div:nth-child(4) > div > select > option:nth-child(1)',
        filtroPendenciasPendentes: '#filterReceitas > div:nth-child(3) > div:nth-child(4) > div > select > option:nth-child(2)',
        filtroPendenciasVinculados: '#filterReceitas > div:nth-child(3) > div:nth-child(4) > div > select > option:nth-child(3)',
        botaoBuscarReceitas: '#filterReceitas > div:nth-child(4) > div > button',
        labelProcurarReceitas: '[button type="submit"]' && 'Procurar',
        numeroReceitas: '#mainTableReceitas > tbody > tr > td.idReceitaCol',
        //marcar uso
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

        menuAtendimentos: '#side-menu > li:nth-child(8)',
        atendimentosEmAndamento: '.active > .nav-second-level > :nth-child(1) > a',
        acessarFluxoDeTrabalhoAtendimento: '.nav-second-level > .active > .nav > li > a',
        parametroBuscaCardOrcamento: '#select2-tipo-filtro-container',
        opcaopParametroBuscaCardOrcamento: '.select2-results__option',
        cardOrcamento: '#atendimentos-em-andamento > div.ibox-workflow > div.grid > div > div:nth-child(1) > div > div.container-coluna > ul > li:nth-child(8)',
        botaoVincularReceitaTelaAtendimentoAndamento: '.vinc-rec',
        botaoDesvincularReceitaTelaAtendimentoAndamento: '.r-vinc-rec',
        campoVincularReceita: '#receitaCod',
        relacionarReceitaPedido: '#modal-receita-add-vinculo > div.modal-dialog > div > div.modal-footer > button.btn.btn-primary.register-vinculo',
        // pedido em andamento em atendimento, elemento foi alterado, lista de pedidos em andamento movido para Receitas -> Importar Atendimentos
        pedidoEmAndamento: '#side-menu > li.active > ul > li:nth-child(1) > a',
        botaoVisualizar: ':nth-child(2) > :nth-child(6) > .visualizarFvc > .fa',
        campoBuscarPedido: '#top-search',
        buscarFilial: '#search-form > div:nth-child(1) > input:nth-child(2)',
        enviarBusca: '#search-form > div.checkbox.m-l.m-r-xs > [type="submit"][value="buscar"]',
        mostrarTodos: '#search-form > div.form-group:nth-child(2) > label input[type="radio"][value="1"]',
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
        orcamentista: '#orcamentista',
        // inserirTempoTratamento
        cabecalhoModalTempoTratamento: '#customTimeModal > div.modal-dialog > div > div.modal-header',
        botaoTempoTratamento: '#customTime',
        tempoTratamentoPadrao: '#customFormByTime > div.closestContainer > div > div:nth-child(1) > input',
        cancelarTempoTratamento: '#customTimeModal > div.modal-dialog > div > div.modal-footer > button.btn.btn-white',
        reimportarFormulas: '#reimporter',
        salvarTempoTratamento: '#saveByCustomTimeFormula',
        modalMensagemPedido: '#toast-container > div > div.toast-message',
        // confirmarPedido primeira etapa
        modalConfirmacaoPedido: '#bt-confirma-modal',
        containerFormaPagamento: '#confirmar-modal-body > div.form-group > div.col-sm-7 > select.small-right-space',
        orcamentoEscolhido: '#confirmar-modal-body > div.form-group > div.col-sm-7 > label > .small-right-space',
        inserirTempoRepeticao: '#confirmar-modal-body > div:nth-child(4) > div > input',
        salvarDadosConfirmacaoPedido: '#confirmacao-atendimento > div.modal-footer > input',
        monitoramentoAtendimento: '#confirmar-modal-body > div:nth-child(5) > div > input[type=checkbox]',
        // confirmarPedido segunda etapa
        canalConfirmacaoPedido: '#confirmar-modal-body > div > div:nth-child(1) > div > select',
        enviarEmailRastreamento: '#confirmar-modal-body > div > div:nth-child(2) > div > input.small-right-space',
        naoMostrarPedidoInclusao: '#confirmar-modal-body > div > div:nth-child(3) > div > input.small-right-space',
        naoMostrarPedidoCaixa: '#confirmar-modal-body > div > div:nth-child(4) > div > input.small-right-space',
        observacaoCaixaBalcao: '#confirmar-modal-body > div > div:nth-child(1) > div > textarea',
        notaDetalhada: '#confirmar-modal-body > div > div:nth-child(2) > div > input.small-right-space',
        statusPagamento: '`input[name="pago"][value="${opcao}"]`',
        enderecoEnvio: '#confirmar-modal-body > div > div:nth-child(4) > div > a:nth-child(1)',
        enderecoEnvioSelecionado: '#endereco-cliente',
        observacaoExpedicao: '#confirmar-modal-body > div > div:nth-child(5) > div > textarea',
        campoFormaEnvio: '#confirmar-modal-body > div > div:nth-child(6) > div > select',
        juntocom: '#juntocom',
        juntocomClinicaHigashi: '#confirmar-modal-body > div > div:nth-child(13) > div > input.small-right-space',
        campoprometidoPara: '#confirmar-modal-body > div > div:nth-child(9) > div > input',
        campoAromaSache: '#confirmar-modal-body > div > div:nth-child(10) > div > select',
        campoAromaCapsula: '#confirmar-modal-body > div > div:nth-child(11) > div > select',
        observacaoGeral: '#confirmar-modal-body > div > div:nth-child(12) > div > textarea',
        PossuiReceita: '#confirmar-modal-body > div > div:nth-child(13) > div > label:nth-child(2) > input',
        possuiFormulaEspecial: '#confirmar-modal-body > div > div:nth-child(14) > div > input.small-right-space',
        pedidoUrgente: '#confirmar-modal-body > div > div:nth-child(20) > div > input.small-right-space',
        cancelarConfirmacaoPedido: '#form-amarelinha > div.modal-footer > div > div:nth-child(2) > button.btn.btn-white',
        dispararMensagemChatguru: '#form-amarelinha > div.modal-footer > div > div:nth-child(1) > input[type=checkbox]:nth-child(3)',
        preVisualizarPedido: '#preview',
        fecharPreVisualizarPedido: '#modal-preview-lg-content > div.modal-footer > button',
        confirmarPedido: '#submit',
        gerarLinkPagamento: '#bt-pagamento-modal',
    }
}
