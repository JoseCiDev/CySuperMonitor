export const ELEMENTS = {
    //LOGIN
    usuario:':nth-child(1) > .form-control',
    senha:':nth-child(2) > .form-control',
    entrar:'.btn-primary', 
    


    //RECEITAS
    // Menu lateral(principal)
    receitas: '#side-menu > li:nth-child(6) > a > span.nav-label',

    //IMPORTAR RECEITAS
    // subMenuImportacaoReceita
    importarReceitas: '#side-menu > li.active > ul > li:nth-child(1) > a',
    // acessarTelaRegistroReceita
    abrirModalRegistrarReceita: '#receita_register',
    // inserirImagem
    importarPdf: '#btnImportPdfRec',
    importarImagem: 'input.tui-image-editor-load-btn[type="file"][accept="image/*"]',
    removerImagem: '.btn btn-danger btn-del-img m-sm',
    // autocompletes
    sugestaoAutocomplete: '.autocomplete-suggestion',
    sugestoesAutocomplete: '.autocomplete-suggestions',
    // informacoes da receita
    prescritor: '#modalMedicoRec',
    modalSugestaoRelacaoPrescritor:'button[data-bb-handler="confirm"].btn.btn-primary',
    parametroBuscaPaciente: '#t2_154c',
    paciente: '#modalPacienteRec',
    canalRecebimento: '#modalCanalContato',
    cluster: '#modalCluster',
    orcamentista: '#modalOrcamentistaRec',
    atendenteResponsavel: '#modalAtendenteRec',
    dataRecebimento: '#modalDataRec',
    juntocom: '#groupMainEntitiesModal > div:nth-child(2) > div:nth-child(4) > div > span',
    autocompleteJuntocom: 'ul.select2-results__options',
    observacaoInterna: '.panel-body > .note-editor > .note-toolbar',
    textoObservacaoInterna: '.panel-body > .note-editor > .note-editable',
    medicamentocontrolado: '#medicamentoControlado',
    urgente: '#modalUrgente',
    clienteAlerta: '#clienteAlerta',
    varejo: '#checkboxVarejo',
    // possui receita/nao possui receita/repeticao
    tipoReceita: '#groupMainEntitiesModal > div:nth-child(3) > div > label:nth-child(1) > input[type=radio]',
    // mensagem informando que já existe receita com mesmo paciente e prescritor
    modalMensagens: '.bootbox > .modal-dialog > .modal-content > .modal-body',
    OkModalMensages: 'body > div.bootbox.modal.fade.bootbox-alert.in > div.modal-dialog > div > div.modal-footer > button',
    cancelModalMensagens: 'body > div.bootbox.modal.fade.bootbox-confirm.in > div.modal-dialog > div > div.modal-footer > button.btn.btn-secondary.pull-left',
    // salvar receita
    salvarReceita: '#save_receita',
    // mensagem sucesso importacao receita
    okSucessoReceitaImportadaModal:'body > div.bootbox.modal.fade.bootbox-alert.in > div.modal-dialog > div > div.modal-footer > button',



    //ATENDIMENTOS
    // Menu lateral(principal)
    atendimentos: '#side-menu > li:nth-child(6) > a > span.nav-label',

    //EM ANDAMENTO
    // subMenuImportacaoReceita
    pedidoEmAndamento:'',
    

}