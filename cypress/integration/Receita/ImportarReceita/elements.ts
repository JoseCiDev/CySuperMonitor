export const ELEMENTS = {
    // Menu lateral(principal)
    receitas: '#side-menu > li:nth-child(6) > a > span.nav-label',
    // Subopcoes Receitas
    importar_receitas: '#side-menu > li.active > ul > li:nth-child(1) > a',
    // Modal Registro de receita
    abrir_modal_registrar_receita: '#receita_register',
    // arquivos
    importar_pdf: '#btnImportPdfRec',
    importar_imagem: 'input.tui-image-editor-load-btn[type="file"][accept="image/*"]',
    remover_imagem: '',
    // autocompletes
    sugestao_autocomplete:'.autocomplete-suggestion',
    sugestoes_autocomplete:'.autocomplete-suggestions',
    autocomplete_paciente: 'body > div:nth-child(323) > div',
    prescritor: '#modalMedicoRec',
    // relacao prescritor com atendente e cluster
    cancel_relacao_prescritor_atendente:'body > div.bootbox.modal.fade.bootbox-confirm.in > div.modal-dialog > div > div.modal-footer > button.btn.btn-secondary.pull-left',
    ok_relacao_prescritor_atendente:'.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn',
    relacao_prescritor_atendente_cluster_fechar:'body > div.bootbox.modal.fade.bootbox-confirm.in > div.modast=1690116026821778l-dialog > div > div.modal-header > button',
    parametro_busca_paciente:'#t2_154c',
    paciente: '#modalPacienteRec',
    canal_recebimento: '#modalCanalContato',
    cluster: '#modalCluster',
    orcamentista: '',
    atendente_responsavel: '#modalAtendenteRec',
    data_recebimento: '#modalDataRec',
    calendario_data_recebimento:'div[pseudo="-webkit-calendar-picker-indicator"]#picker',
    juntocom: '#groupMainEntitiesModal > div:nth-child(2) > div:nth-child(4) > div > span',
    autocomplete_juntocom:'ul.select2-results__options',
    observacao: '',
    medicamento_controlado: '#medicamentoControlado',
    urgente: '#modalUrgente',
    cliente_alerta: '#clienteAlerta',
    varejo: '',
    // possui receita/nao possui receita/repeticao
    tipo_receita: '#groupMainEntitiesModal > div:nth-child(3) > div > label:nth-child(1) > input[type=radio]',
    // mensagem informando que já existe receita com mesmo paciente e prescritor
    popup_mensagens:'body > div.bootbox.modal.fade.bootbox-alert.in > div.modal-dialog > div > div.modal-footer > button',
    // salvar receita
    salvar_receita:'#save_receita',
    
}