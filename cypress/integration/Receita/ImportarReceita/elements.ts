export const ELEMENTS = {
    // Utils
    relacao_prescritor_atendente_cluster_cancel:'body > div.bootbox.modal.fade.bootbox-confirm.in > div.modal-dialog > div > div.modal-footer > button.btn.btn-secondary.pull-left',
    relacao_prescritor_atendente_cluster_ok:'.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn',
    relacao_prescritor_atendente_cluster_fechar:'body > div.bootbox.modal.fade.bootbox-confirm.in > div.modal-dialog > div > div.modal-header > button',
    // Menu lateral(principal)
    receitas: '#side-menu > li:nth-child(6) > a > span.nav-label',
    // Subopcoes Receitas
    importar_receitas: '#side-menu > li.active > ul > li:nth-child(1) > a',
    // Tela Importação de receitas
    abrir_modal_registrar_receita: '#receita_register',
    importar_pdf: '<input type="button" value="Escolher arquivo" pseudo="-webkit-file-upload-button" id="file-upload-button" aria-hidden="true">',
    importar_imagem: 'input.tui-image-editor-load-btn[type="file"][accept="image/*"]',
    remover_imagem: '',
    // Modal Registro de receita
    sugestao_autocomplete:'.autocomplete-suggestion',
    prescritor: '#modalMedicoRec',
    busca_paciente_cdcli:'#t2_154c',
    paciente: '#modalPacienteRec',
    autocomplete_paciente: 'body > div:nth-child(323) > div',
    canal_recebimento: '#modalCanalContato',
    cluster: '#modalCluster',
    orcamentista: '',
    atendente_responsavel: '#modalAtendenteRec',
    data_recebimento: '#modalDataRec',
    calendario_data_recebimento:'div[pseudo="-webkit-calendar-picker-indicator"]#picker',
    junto_com: '',
    observacao: '',
    medicamento_controlado: '#medicamentoControlado',
    urgente: '#modalUrgente',
    cliente_alerta: '#clienteAlerta',
    varejo: '',
    possui_receita: '#groupMainEntitiesModal > div:nth-child(3) > div > label:nth-child(1) > input[type=radio]',
    nao_possui_receita: '',
    repeticao: '',
    util:'.tui-image-editor-main',
    salvar_receita:'#save_receita'
}