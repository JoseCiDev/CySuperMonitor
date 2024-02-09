import { dadosParametros } from './DadosParametros';


interface Elements<S = string> {

    Compartilhado: {
        sugestaoAutocomplete: S;
        sugestoesAutocomplete: S;
        containerMensagem: S;
        okModalMensagem: S;
        btnSucessoModal: S;
        btnFalhaModal: S;
        mensagemModal: S;
        btnmensagemModal: S;
        btnModalChangelog: S;
    };

    Login: {
        usuario: S;
        senha: S;
        entrar: S;
        logout: S;
        mensagemErroLogin: S;
    };

    Receitas: {
        menuReceitas: S;
        menuReceitasReduzido: S;
        prescritorReceitas: S;
        menuImportarReceitas: S;
        menuGerenciarReceitas: S;
        abrirModalRegistrarReceitas: S;
        importarPdfReceitas: S;
        importarImagemReceitas: S;
        removerImagemReceitas: S;
        modalSugestaoRelacaoPrescritor: S;
        parametroBuscaPaciente: S;
        pacienteReceitas: S;
        canalRecebimentoImportacao: S;
        clusterReceitas: S;
        orcamentistaReceitas: S;
        atendenteResponsavelReceitas: S;
        autocompleteAtendenteResponsavel: S;
        dataRecebimentoReceitas: S;
        juntocomReceitas: S;
        autocompleteJuntocomReceitas: S;
        observacaoInternaReceitas: S;
        textoObservacaoInternaReceitas: S;
        medicamentocontroladoReceitas: S;
        urgenteReceitas: S;
        clienteAlertaReceitas: S;
        varejoReceitas: S;
        opcaoTipoReceitas: S;
        salvarReceitas: S;
        fecharRegistrarReceitas: S;
        editarReceita: S;

        ModalBuscaReceitas: S;
        filtroDataInicialBuscaReceitas: S;
        filtroDataFinalBuscaReceitas: S;
        clusterBusca: S;
        receitaBusca: S;
        pacienteBusca: S;
        prescritorBusca: S;
        orcamentoBusca: S;
        ultimoModificadorBusca: S;
        orcamentistaBusca: S;
        atendenteResponsavelBusca: S;
        canalRecebimentoBusca: S;
        filtroPendenciasBusca: S;
        filtroPendenciasTodos: S;
        filtroPendenciasPendentes: S;
        filtroPendenciasVinculados: S;
        botaoProcurarReceitas: S;
        labelProcurarReceitas: S;
        numeroReceita: S;
        dataRecebimentoGrid: S;
        checkboxMarcarUso: S;

        containerInserirUsuario: S;
        select: S;
        usuarioSelecionado: S;
        senhaReceita: S;
        aplicaDesmarcarUso: S;
        visualizarReceitas: S;
        acoes: S;
        abaPdfVisualizarReceitas: S;
        abaOriginalVisualizarReceitas: S;
        abaObservacoesInternasVisualizarReceitas: S;
        abaInformacoesFcertaVisualizarReceitas: S;
        reguaVisualizarReceitas: S;
        fecharVisualizarReceitas: S;
        clonarReceitas: S;
        modalObservacoesClonar: S;
        clonarObservacoesFarmaceuticas: S;
        excluirReceitas: S;
        acessarObservacoesFarmaceuticas: S;
        abaAdicionarObservacoesFarmaceuticas: S;
        senhaObservacoesFarmaceuticas: S;
        textoObservacoesFarmaceuticas: S;
        fecharModalObservacoesFarmaceuticas: S;
        abaExcluirObservacoesFarmaceuticas: S;
        excluirObservacoesFarmaceuticas: S;
        acessarDuvidasTecnicas: S;
        containerCategoriaDuvidaTecnicas: S;
        textoDuvidasTecnicas: S;
        containerColaboradores: S;
        responsavelRespostas: S;
        enviarDuvidasTecnicas: S;
        fecharModalDuvidasTecnicas: S;
        atualizarModalDuvidasTecnicas: S;
        containerResponsavelRespostaDuvidasTecnicas: S;
        ResponsavelRespostaDuvidasTecnicas: S;
        responsavelAtualRespostaDuvidasTecnicas: S;
        marcarDuvidasTecnicaResolvidas: S;
        excluirDuvidasTecnicas: S;
        statusRespostaDuvidasTecnicas: S;
        textoRespostaDuvidasTecnicas: S;
        enviarRespostaDuvidasTecnicas: S;
        barraProgressoSalvarReceita: S;

    };

    Atendimentos: {
        menuAtendimentos: S;
        atendimentosEmAndamento: S;
        acessarFluxoDeTrabalhoAtendimento: S;
        parametroBuscaCardOrcamento: S;
        opcaopParametroBuscaCardOrcamento: S;
        cardOrcamento: S;
        botaoVincularReceitaTelaAtendimentoAndamento: S;
        botaoDesvincularReceitaTelaAtendimentoAndamento: S;
        campoVincularReceita: S;
        pedidoEmAndamento: S;
        botaoVisualizar: S;
        campoBuscarPedido: S;
        buscarFilial: S;
        enviarBusca: S;
        brasileiro: S;
        estrangeiro: S;
        usarNumeroTelefoneProvenienteFcerta: S;
        telefoneCliente: S;
        naoEnviarMensagemCliente: S;
        idiomaCliente: S;
        cancelarIntegracaoChatguru: S;
        salvarNumeroChatguru: S;
        orcamentista: S;
        cabecalhoModalTempoTratamento: S;
        botaoTempoTratamento: S;
        tempoTratamentoPadrao: S;
        cancelarTempoTratamento: S;
        reimportarFormulas: S;
        salvarTempoTratamento: S;
        modalMensagemPedido: S;
        modalConfirmacaoPedido: S;
        containerFormaPagamento: S;
        orcamentoEscolhido: S;
        inserirTempoRepeticao: S;
        salvarDadosConfirmacaoPedido: S;
        monitoramentoAtendimento: S;
        canalConfirmacaoPedido: S;
        enviarEmailRastreamento: S;
        naoMostrarPedidoInclusao: S;
        naoMostrarPedidoCaixa: S;
        observacaoCaixaBalcao: S;
        notaDetalhada: S;
        campoStatusPagamento: S;
        enderecoEnvio: S;
        enderecoEnvioSelecionado: S;
        observacaoExpedicao: S;
        campoFormaEnvio: S;
        juntocomconfirmacaoPedido: S;
        juntocomClinicaHigashi: S;
        campoprometidoPara: S;
        campoAromaSache: S;
        campoAromaCapsula: S;
        observacaoGeral: S;
        PossuiReceita: S;
        pedidoUrgente: S;
        cancelarConfirmacaoPedido: S;
        dispararMensagemChatguru: S;
        preVisualizarPedido: S;
        fecharPreVisualizarPedido: S;
        enviarconfirmarPedido: S;
        mostrarTodos: S;
        possuiFormulaEspecial: S;
        gerarLinkPagamento: S;
        relacionarReceitaPedido: S;
        mostrarPedidosEncerrados: S;
        reabrirPedido: S;
        confirmaReabrirPedido: S;
        opcoesUsuario: S;
        abrirModalImportarOrcamento: S;
        importarOrcamento: S;
        importarFilial: S;
        importarComoNovoAtendimento: S;
        sincronizarOrcamento: S;
        quadroInformacoesAmarelinhaConfirmada: S;
        orcamentoQuadroInformacoesAmarelinhaConfirmada: S;
        orcamentistaQuadroInformacoesAmarelinhaConfirmada: S;
        inclusaoQuadroInformacoesAmarelinhaConfirmada: S;
        atendenteQuadroInformacoesAmarelinhaConfirmada: S;
        textoQuadroInformacoesAmarelinhaConfirmada: S;
        orcamentistaPedido: S;
        atendentePedido: S;
        containerPedidos: S;

    };

    Configuracoes: {
        menuConfiguracoes: S;
        subMenuClustersGrupos: S;
        relacoes: S;
        containerFiltros: S;
        containerPerfil: S;
        buscarFiltros: S;
        pesquisa: S;
        gerenciarRelacao: S;
        selecionarCluster: S;
        containerSelecionarPrescritor: S;
        selecionarPrescritor: S;
        adicionarRelacaoAtendenteClusterPrescritor: S;
        containerMensagemRelacao: S;

        atendenteRelacaoCriada: S;
        PrescritorRelacaoCriada: S;
        removerRelacaoSelecionada: S;
        pesquisaPrescritorGerenciarRelacao: S;
        buscaPrescritorGerenciarRelacao: S;
        selecionarPrescritorEncontrado: S;
    };
}



export const elements: Elements = {

    Compartilhado: {
        // autocompletes
        sugestaoAutocomplete: '.autocomplete-suggestion',
        sugestoesAutocomplete: '.autocomplete-suggestions',
        //modal
        containerMensagem: '.bootbox-body',
        okModalMensagem: 'body > div.bootbox.modal.fade.bootbox-alert.in > div.modal-dialog > div > div.modal-footer > button',
        mensagemModal: 'body > div.bootbox.modal.fade.bootbox-alert.in > div.modal-dialog > div > div.modal-body > div',
        btnSucessoModal: '.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary',
        btnFalhaModal: 'div.modal-dialog > div > div.modal-footer > button.btn.btn-secondary.pull-left',
        btnmensagemModal: '.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn',
        btnModalChangelog: '#changelogs > .modal-dialog > .modal-content > .modal-footer > .btn',
    },

    Login: {
        //LOGIN
        usuario: ':nth-child(1) > .form-control',
        senha: ':nth-child(2) > .form-control',
        entrar: '.btn-primary',
        logout: '.navbar > .nav > :nth-child(5) > a',
        mensagemErroLogin: 'p',
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
        modalSugestaoRelacaoPrescritor: '.bootbox .modal-dialog .modal-content .modal-footer .btn-primary',
        parametroBuscaPaciente: '#t2_154c',
        pacienteReceitas: '#modalPacienteRec',
        canalRecebimentoImportacao: '#modalCanalContato',
        clusterReceitas: '#modalCluster',
        orcamentistaReceitas: '#modalOrcamentistaRec',
        atendenteResponsavelReceitas: '#modalAtendenteRec',
        autocompleteAtendenteResponsavel: '.autocomplete-suggestion',
        dataRecebimentoReceitas: '#modalDataRec',
        juntocomReceitas: '#groupMainEntitiesModal > div:nth-child(2) > div:nth-child(4) > div > span',
        autocompleteJuntocomReceitas: 'ul.select2-results__options',
        observacaoInternaReceitas: '.panel-body > .note-editor > .note-toolbar',
        textoObservacaoInternaReceitas: '.panel-body > .note-editor > .note-editable',
        medicamentocontroladoReceitas: '#medicamentoControlado',
        urgenteReceitas: '#modalUrgente',
        clienteAlertaReceitas: '#clienteAlerta',
        varejoReceitas: '#checkboxVarejo',
        opcaoTipoReceitas: `input[name="receita_tipo"][value="${dadosParametros.tipoReceita}"]`,
        // mensagem informando que já existe receita com mesmo paciente e prescritor
        // salvar receita
        salvarReceitas: '#save_receita',
        fecharRegistrarReceitas: '#modal-receitas > div.modal-dialog > div > div.modal-footer > button.btn.btn-white',
        editarReceita: ':nth-child(1) > .actions-fa > .dropdown > .dropdown-menu > .list-group > .edit-receita',

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
        filtroPendenciasBusca: 'select[name="pendentes"]',
        filtroPendenciasTodos: '#filterReceitas > div:nth-child(3) > div:nth-child(4) > div > select > option:nth-child(1)',
        filtroPendenciasPendentes: '#filterReceitas > div:nth-child(3) > div:nth-child(4) > div > select > option:nth-child(2)',
        filtroPendenciasVinculados: '#filterReceitas > div:nth-child(3) > div:nth-child(4) > div > select > option:nth-child(3)',
        botaoProcurarReceitas: '#filterReceitas > div:nth-child(4) > div > button',
        labelProcurarReceitas: '[button type="submit"]' && 'Procurar',
        numeroReceita: '#mainTableReceitas > tbody > tr > td.idReceitaCol',
        dataRecebimentoGrid: '#mainTableReceitas > thead > tr > th.sorting.sorting_asc',
        //marcar uso
        checkboxMarcarUso: '#mainTableReceitas > tbody > tr > td.usedTrativa',
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
        reguaVisualizarReceitas: '#btnReceitaRegua',
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
        barraProgressoSalvarReceita: '#modal-receitas > div.modal-dialog > div > div.container-fluid > div > div',

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
        containerPedidos: '#page-wrapper > div.wrapper.wrapper-content.animated.fadeInRight > div > div > table > tbody > tr',
        pedidoEmAndamento: '#side-menu > li.active > ul > li:nth-child(1) > a',
        botaoVisualizar: ':nth-child(2) > :nth-child(6) > a.visualizarFvc',
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
        campoStatusPagamento: '`input[name="pago"][value="${opcao}"]`',
        enderecoEnvio: '#confirmar-modal-body > div > div:nth-child(4) > div > a:nth-child(1)',
        enderecoEnvioSelecionado: '#endereco-cliente',
        observacaoExpedicao: '#confirmar-modal-body > div > div:nth-child(5) > div > textarea',
        campoFormaEnvio: '#confirmar-modal-body > div > div:nth-child(6) > div > select',
        juntocomconfirmacaoPedido: '#juntocom',
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
        enviarconfirmarPedido: '#submit',
        gerarLinkPagamento: '#bt-pagamento-modal',
        //pedido encerrado
        mostrarPedidosEncerrados: '#search-form > div.checkbox.m-l.m-r-xs > input[type=checkbox]:nth-child(1)',
        reabrirPedido: '#reabrir',
        confirmaReabrirPedido: 'body > div.bootbox.modal.fade.bootbox-confirm.in > div.modal-dialog > div > div.modal-footer > button.btn.btn-danger.pull-right',
        //importar orcamento manualmente
        opcoesUsuario: '#username-link',
        abrirModalImportarOrcamento: '#page-wrapper > div.row.border-bottom > nav > ul > li:nth-child(1) > div > ul > li:nth-child(3) > a',
        importarOrcamento: '#page-wrapper > div.wrapper.wrapper-content.animated.fadeInRight > div > div.ibox-content > div > form > div:nth-child(1) > div > input',
        importarFilial: '#page-wrapper > div.wrapper.wrapper-content.animated.fadeInRight > div > div.ibox-content > div > form > div:nth-child(3) > div > input',
        importarComoNovoAtendimento: '#page-wrapper > div.wrapper.wrapper-content.animated.fadeInRight > div > div.ibox-content > div > form > div:nth-child(5) > div > span > input',
        sincronizarOrcamento: '#page-wrapper > div.wrapper.wrapper-content.animated.fadeInRight > div > div.ibox-content > div > form > div.row > div:nth-child(2) > div > button',
        //quadro de informacoes da amarelinha confirmada
        quadroInformacoesAmarelinhaConfirmada: '.infosInclusao',
        orcamentoQuadroInformacoesAmarelinhaConfirmada: '#page-wrapper > div:nth-child(11) > div.col-lg-6.ibox > div.ibox-content > div.infosInclusao > span:nth-child(1)',
        orcamentistaQuadroInformacoesAmarelinhaConfirmada: '#page-wrapper > div:nth-child(11) > div.col-lg-6.ibox > div.ibox-content > div.infosInclusao > span:nth-child(2)',
        inclusaoQuadroInformacoesAmarelinhaConfirmada: '#page-wrapper > div:nth-child(11) > div.col-lg-6.ibox > div.ibox-content > div.infosInclusao > span:nth-child(3)',
        atendenteQuadroInformacoesAmarelinhaConfirmada: '#page-wrapper > div:nth-child(11) > div.col-lg-6.ibox > div.ibox-content > div.infosInclusao > span:nth-child(4)',
        textoQuadroInformacoesAmarelinhaConfirmada: '#page-wrapper > div:nth-child(11) > div.col-lg-6.ibox > div.ibox-content > div.infosInclusao',
        //Usuarios do atendimento
        orcamentistaPedido: '#orcamentista',
        atendentePedido: '#atendente',
        //toast toast-error
        //toast toast-sucess
    },

    Configuracoes: {
        menuConfiguracoes: ':nth-child(19) > [href="javascript:void(0);"]',
        //Clusters(grupos)
        subMenuClustersGrupos: '#side-menu > li.active > ul > li:nth-child(6) > a',
        //Relações
        relacoes: '#side-menu > li.active > ul > li.active > ul > li:nth-child(2) > a',
        containerFiltros: ':nth-child(5) > .ibox > .ibox-title',
        containerPerfil: 'select[name="profile"]',
        buscarFiltros: '.col-sm-12 > .btn',
        pesquisa: '#tableRelation_filter > label > input',
        gerenciarRelacao: '#tableRelation > tbody > tr > td:nth-child(8) > a',
        selecionarCluster: '#clusterAdd',
        containerSelecionarPrescritor: '#tableRelationPorAtendente > tbody > tr:nth-child(1) > td:nth-child(4) > span > span.selection > span > span.select2-selection__arrow',
        selecionarPrescritor: '.select2-dropdown > .select2-search > .select2-search__field',
        adicionarRelacaoAtendenteClusterPrescritor: '#adicionar_relacao',
        containerMensagemRelacao: '.bootbox-body > .alert',
        atendenteRelacaoCriada: 'body > div.bootbox.modal.fade.bootbox-alert.in > div.modal-dialog > div > div.modal-body > div > b:nth-child(4)',
        PrescritorRelacaoCriada: 'body > div.bootbox.modal.fade.bootbox-alert.in > div.modal-dialog > div > div.modal-body > div > b:nth-child(3)',
        removerRelacaoSelecionada: ':nth-child(1) > .removerRelBtn',
        pesquisaPrescritorGerenciarRelacao: 'form > .form-control',
        buscaPrescritorGerenciarRelacao: '.text-right > form > .btn',
        selecionarPrescritorEncontrado: '.edit-cb',
    }
}
