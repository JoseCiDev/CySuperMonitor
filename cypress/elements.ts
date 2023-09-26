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
    };

    Receitas: {
        menuReceitas: T;
        prescritor: T;
        menuImportarReceitas: T;
        abrirModalRegistrarReceita: T;
        importarPdf: T;
        importarImagem: T;
        removerImagem: T;
        modalSugestaoRelacaoPrescritor: T;
        parametroBuscaPaciente: T;
        paciente: T;
        canalRecebimento: T;
        cluster: T;
        orcamentista: T;
        atendenteResponsavel: T;
        dataRecebimento: T;
        juntocomReceita: T;
        autocompleteJuntocomReceita: T;
        observacaoInternaReceita: T
        textoObservacaoInternaReceita: T
        medicamentocontrolado: T;
        urgente: T;
        clienteAlerta: T;
        varejo: T;
        tipoReceita: T;
        modalMensagens: T;
        salvarReceita: T;
        okSucessoReceitaImportadaModal: T;
        ModalBuscaReceita: T;
        filtroDataInicialBuscaReceita: T;
        filtroDataFinalBuscaReceita: T;
        filtroPendenciasBuscaReceita: T;
        filtroPendenciasTodos: T;
        filtroPendenciasPendentes: T;
        filtroPendenciasVinculados: T;
        procurarReceita: T;
        labelProcurarReceita: T;
        numeroReceita: T;
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
        //RECEITAS
        // Menu lateral(principal)
        menuReceitas: '#side-menu > li:nth-child(6) > a > span.nav-label',
        //IMPORTAR RECEITAS
        // subMenuImportacaoReceita
        menuImportarReceitas: '#side-menu > li.active > ul > li:nth-child(1) > a',
        // acessarTelaRegistroReceita
        abrirModalRegistrarReceita: '#receita_register',
        // inserirImagem
        importarPdf: '#btnImportPdfRec',
        importarImagem: 'input.tui-image-editor-load-btn[type="file"][accept="image/*"]',
        removerImagem: '.btn btn-danger btn-del-img m-sm',
        // informacoes da receita
        prescritor: '#modalMedicoRec',
        modalSugestaoRelacaoPrescritor: 'button[data-bb-handler="confirm"].btn.btn-primary',
        parametroBuscaPaciente: '#t2_154c',
        paciente: '#modalPacienteRec',
        canalRecebimento: '#modalCanalContato',
        cluster: '#modalCluster',
        orcamentista: '#modalOrcamentistaRec',
        atendenteResponsavel: '#modalAtendenteRec',
        dataRecebimento: '#modalDataRec',
        juntocomReceita: '#groupMainEntitiesModal > div:nth-child(2) > div:nth-child(4) > div > span',
        autocompleteJuntocomReceita: 'ul.select2-results__options',
        observacaoInternaReceita: '.panel-body > .note-editor > .note-toolbar',
        textoObservacaoInternaReceita: '.panel-body > .note-editor > .note-editable',
        medicamentocontrolado: '#medicamentoControlado',
        urgente: '#modalUrgente',
        clienteAlerta: '#clienteAlerta',
        varejo: '#checkboxVarejo',
        // possui receita/nao possui receita/repeticao
        tipoReceita: '#groupMainEntitiesModal > div:nth-child(3) > div > label:nth-child(1) > input[type=radio]',
        // mensagem informando que já existe receita com mesmo paciente e prescritor
        modalMensagens: '.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn',
        // salvar receita
        salvarReceita: '#save_receita',
        // mensagem sucesso importacao receita
        okSucessoReceitaImportadaModal: 'body > div.bootbox.modal.fade.bootbox-alert.in > div.modal-dialog > div > div.modal-footer > button',
        // buscar receitas importadas
        ModalBuscaReceita: '#centerHeadFilter',
        filtroDataInicialBuscaReceita: '#filterReceitas > div:nth-child(1) > div:nth-child(1) > div > input',
        filtroDataFinalBuscaReceita: '#filterReceitas > div:nth-child(1) > div:nth-child(2) > div > input',
        filtroPendenciasBuscaReceita: '#filterReceitas > div:nth-child(3) > div:nth-child(4) > div > select',
        filtroPendenciasTodos: '#filterReceitas > div:nth-child(3) > div:nth-child(4) > div > select > option:nth-child(1)',
        filtroPendenciasPendentes: '#filterReceitas > div:nth-child(3) > div:nth-child(4) > div > select > option:nth-child(2)',
        filtroPendenciasVinculados: '#filterReceitas > div:nth-child(3) > div:nth-child(4) > div > select > option:nth-child(3)',
        procurarReceita: '#filterReceitas > div:nth-child(4) > div > button',
        labelProcurarReceita: '[button type="submit"]' && 'Procurar',
        numeroReceita: '#mainTableReceitas > tbody > tr > td.idReceitaCol',
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
