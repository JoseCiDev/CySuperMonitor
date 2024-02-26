/// <reference types="cypress" />
import { elements as el } from '../../../elements';
import { faker } from '@faker-js/faker';
import { dadosParametros } from '../../../DadosParametros'
import { BuscaReceita } from './../../../DadosParametros';





const ambiente = Cypress.env('AMBIENTE');
const dadosAmbiente = Cypress.env(ambiente);



export const {
    campoBuscarPedido,
    buscarFilial,
    enviarBusca,
    botaoVisualizar,
    brasileiro,
    salvarNumeroChatguru,
    botaoTempoTratamento,
    tempoTratamentoPadrao,
    cabecalhoModalTempoTratamento,
    salvarTempoTratamento,
    modalConfirmacaoPedido,
    modalMensagemPedido,
    orcamentista,
    containerFormaPagamento,
    inserirTempoRepeticao,
    orcamentoEscolhido,
    monitoramentoAtendimento,
    salvarDadosConfirmacaoPedido,
    canalConfirmacaoPedido,
    enviarEmailRastreamento,
    naoMostrarPedidoInclusao,
    naoMostrarPedidoCaixa,
    observacaoCaixaBalcao,
    notaDetalhada,
    campoStatusPagamento,
    enderecoEnvioSelecionado,
    enderecoEnvio,
    observacaoExpedicao,
    menuAtendimentos,
    atendimentosEmAndamento,
    botaoVincularReceitaTelaAtendimentoAndamento,
    botaoDesvincularReceitaTelaAtendimentoAndamento,

} = el.Atendimentos;



describe('Atendimentos em Andamento', function () {
    const ambiente = Cypress.env('AMBIENTE');
    // Get the specific environment object based on the selected AMBIENTE
    const dadosAmbiente = Cypress.env(ambiente);


    beforeEach(function () {
        cy.login(dadosAmbiente.USER_ADMIN, dadosAmbiente.PASSWORD, el.Login.mensagemErroLogin, dadosAmbiente.BASE_URL_HOMOLOG)
            .then((result) => {
                assert.exists(result.success, result.error)
            })
    });




    it('Deve confirmar pedido', function () {
        cy.getElementAndClick(menuAtendimentos,atendimentosEmAndamento);(atendimentosEmAndamento);
        cy.visualizarPedido(botaoVisualizar);
        cy.inserirTempoTratamento('30');


    });


    it('Deve vincular receita ao pedido', function () {
        cy.getElementAndClick(menuAtendimentos,atendimentosEmAndamento);(atendimentosEmAndamento);
        cy.visualizarPedido(botaoVisualizar);
        cy.vincularPedidoReceita(botaoVincularReceitaTelaAtendimentoAndamento, parseInt(dadosParametros.Receita.importacao.numeroReceita as string));
    });

    it('Deve desvincular receita ao pedido', function () {
        cy.getElementAndClick(menuAtendimentos,atendimentosEmAndamento);(atendimentosEmAndamento);
        cy.visualizarPedido(botaoVisualizar);
        cy.desvincularPedidoReceita(botaoDesvincularReceitaTelaAtendimentoAndamento)
    });


    it('Deve gerar link de pagamento pedido', function () {


    });


    it('Deve inserir arquivo na galeria do atendimento', function () {

    });


    it('Deve enviar orçamento via e-mail', function () {

    });

    it('Deve excluir pedido', function () {

    });



});