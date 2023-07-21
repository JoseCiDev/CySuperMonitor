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
    remover_imagem: '.btn btn-danger btn-del-img m-sm',
    // autocompletes
    sugestao_autocomplete:'.autocomplete-suggestion',
    sugestoes_autocomplete:'.autocomplete-suggestions',
    autocomplete_paciente: 'body > div:nth-child(323) > div',
    // informacoes da receita
    prescritor: '#modalMedicoRec',
    parametro_busca_paciente:'#t2_154c',
    paciente: '#modalPacienteRec',
    canal_recebimento: '#modalCanalContato',
    cluster: '#modalCluster',
    orcamentista: '#modalOrcamentistaRec',
    atendente_responsavel: '#modalAtendenteRec',
    data_recebimento: '#modalDataRec',
    juntocom: '#groupMainEntitiesModal > div:nth-child(2) > div:nth-child(4) > div > span',
    autocomplete_juntocom:'ul.select2-results__options',
    observacao_interna: '#modal-receitas > div.modal-dialog > div > div.modal-body > div:nth-child(9) > div > div > div > div > div.note-editable',
    texto_observacao_interna:'.panel-body > .note-editor > .note-editable',
    medicamento_controlado: '#medicamentoControlado',
    urgente: '#modalUrgente',
    cliente_alerta: '#clienteAlerta',
    varejo: '#checkboxVarejo',
    // possui receita/nao possui receita/repeticao
    tipo_receita: '#groupMainEntitiesModal > div:nth-child(3) > div > label:nth-child(1) > input[type=radio]',
    // mensagem informando que já existe receita com mesmo paciente e prescritor
    modal_mensagens:'.bootbox > .modal-dialog > .modal-content > .modal-body',
    ok_modal_mensagens:'.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn',
    cancel_modal_mensagens:'body > div.bootbox.modal.fade.bootbox-confirm.in > div.modal-dialog > div > div.modal-footer > button.btn.btn-secondary.pull-left',
    // salvar receita
    salvar_receita:'#save_receita',
    
}