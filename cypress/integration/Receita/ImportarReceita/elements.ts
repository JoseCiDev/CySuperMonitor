export const ELEMENTS = {
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
    //autocompletes
    sugestao_autocomplete:'.autocomplete-suggestion',
    autocomplete_paciente: 'body > div:nth-child(323) > div',
    prescritor: '#modalMedicoRec',
    //relacao prescritor com atendente e cluster
    relacao_prescritor_atendente_cluster_cancel:'body > div.bootbox.modal.fade.bootbox-confirm.in > div.modal-dialog > div > div.modal-footer > button.btn.btn-secondary.pull-left',
    relacao_prescritor_atendente_cluster_ok:'.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn',
    relacao_prescritor_atendente_cluster_fechar:'body > div.bootbox.modal.fade.bootbox-confirm.in > div.modast=1690116026821778l-dialog > div > div.modal-header > button',
    busca_paciente_cdcli:'#t2_154c',
    paciente: '#modalPacienteRec',
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
    // possui receita/nao possui receita/repeticao
    tipo_receita: 'input[name="receita_tipo"]',
    // mensagem informando que já existe receita com mesmo paciente e prescritor
    mensagem_receita_importada_paciente_prescritor_iguais:'body > div.bootbox.modal.fade.bootbox-alert.in > div.modal-dialog > div > div.modal-footer > button',
    botao_mensagem_receita_importada_paciente_prescritor_iguais:'btn btn-primary',
    // salvar receita
    salvar_receita:'#save_receita',
    // mensagem que informa sucesso na importação da receita
    mensagem_sucesso_importacao_receita:'body > div.bootbox.modal.fade.bootbox-alert.in > div.modal-dialog > div > div.modal-footer > button',
}