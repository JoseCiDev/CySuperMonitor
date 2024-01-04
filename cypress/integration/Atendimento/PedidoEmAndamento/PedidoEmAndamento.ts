/// <reference types="cypress" />
import { elements as el } from '../../../Elements';
import { faker } from '@faker-js/faker';
import { dadosParametros } from '../../../DadosParametros'





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
    modalMensagemChatguru,
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



describe('Atendimentos em Andamento', () => {
    const ambiente = Cypress.env('AMBIENTE');
    // Get the specific environment object based on the selected AMBIENTE
    const dadosAmbiente = Cypress.env(ambiente);


    beforeEach(function () {
        cy.login(el.Login.entrar, dadosAmbiente.USERADMIN, dadosAmbiente.PASSWORD, dadosParametros.Url.inicio);
    });




    it('Deve confirmar pedido', () => {
        cy.acessarAtendimentosEmAndamento(atendimentosEmAndamento);
        cy.visualizarPedido(botaoVisualizar);
        cy.inserirTempoTratamento('30');


    });


    it('Deve vincular receita ao pedido', () => {
        cy.acessarAtendimentosEmAndamento(atendimentosEmAndamento);
        cy.visualizarPedido(botaoVisualizar);
        cy.vincularPedidoReceita(botaoVincularReceitaTelaAtendimentoAndamento, dadosParametros.Receita.numeroReceita)
    });

    it('Deve desvincular receita ao pedido', () => {
        cy.acessarAtendimentosEmAndamento(atendimentosEmAndamento);
        cy.visualizarPedido(botaoVisualizar);
        cy.desvincularPedidoReceita(botaoDesvincularReceitaTelaAtendimentoAndamento)
    });


    it('Deve gerar link de pagamento pedido', () => {


    });


    it('Deve inserir arquivo na galeria do atendimento', () => {

    });


    it('Deve enviar orçamento via e-mail', () => {

    });

    it('Deve excluir pedido', () => {

    });










});