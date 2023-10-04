/// <reference types="cypress" />
import { elements as el } from '../../../elements';
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
    statusPagamento,
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
        cy.login(el.Login.entrar, dadosAmbiente.USERADMIN, dadosAmbiente.PASSWORD, dadosParametros.Url.inicio)
    });




    it.only('Deve confirmar pedido', () => {
        cy.acessarAtendimentosEmAndamento(atendimentosEmAndamento);
        cy.visualizarPedido(botaoVisualizar);
        cy.inserirTempoTratamento(30);
        cy.confirmarPedido(
            dadosParametros.formaPagamento.Boleto,
            dadosParametros.Pedido.tempoRepeticao,
            dadosParametros.Pedido.textoObservacaoCaixaBalcao,
            dadosParametros.statusPagamento.Pago,
            dadosParametros.Pedido.textoObservacaoExpedicao,
            dadosParametros.formaEnvio.SedexHoje,
            dadosParametros.dataFormatada,
            dadosParametros.aromaSache.AromaDaBasePadrao,
            dadosParametros.aromaCapsula.laranjaComHortelaMenta,
            dadosParametros.Pedido.textoObservacaoGeral
        );
    });


    it('Deve vincular receita ao pedido', () => {
        cy.acessarAtendimentosEmAndamento(atendimentosEmAndamento);
        cy.visualizarPedido(botaoVisualizar);
        cy.vincularReceitaPedido(botaoVincularReceitaTelaAtendimentoAndamento,dadosParametros.Receita.numeroReceita)
    });

    it.only('Deve desvincular receita ao pedido', () => {
        cy.acessarAtendimentosEmAndamento(atendimentosEmAndamento);
        cy.visualizarPedido(botaoVisualizar);
        cy.desvincularReceitaPedido(botaoDesvincularReceitaTelaAtendimentoAndamento)
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